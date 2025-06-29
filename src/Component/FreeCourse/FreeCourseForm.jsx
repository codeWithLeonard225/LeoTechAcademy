import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase'; // Your Firebase config
import { doc, setDoc, collection, getDocs, deleteDoc } from 'firebase/firestore'; // Import necessary Firestore functions
import { v4 as uuidv4 } from 'uuid';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import your new Cloudinary Uploader components
import CloudinaryImageUploader from './CloudinaryImageUploader';
import CloudinaryVideoUploader from './CloudinaryVideoUploader';
import CloudinaryAssignmentUploader from './CloudinaryAssignmentUploader';

const PaidCourseForm = () => {
    const [course, setCourse] = useState({
        id: '',
        title: '',
        description: '',
        instructor: '',
        level: '',
        duration: '',
        price: '',
        category: '',
        image: '', // This will hold the Cloudinary URL
        weeklyContent: []
    });

    const [loading, setLoading] = useState(false);
    const [allPaidCourses, setAllPaidCourses] = useState([]); // New state for listing all courses
    const [expandedWeekIndex, setExpandedWeekIndex] = useState(null); // State for accordion
    const [isEditing, setIsEditing] = useState(false); // New state to indicate if we are editing an existing course

    // Function to fetch all paid courses from Firestore
    const fetchPaidCourses = async () => {
        try {
            const coursesCollectionRef = collection(db, 'freeCourse');
            const querySnapshot = await getDocs(coursesCollectionRef);
            const coursesList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setAllPaidCourses(coursesList);
        } catch (error) {
            console.error("Error fetching free Course: ", error);
            toast.error("Failed to load courses.");
        }
    };

    // Fetch courses on initial component mount
    useEffect(() => {
        fetchPaidCourses();
    }, []);

    const handleCourseChange = (e) => {
        const { name, value } = e.target;
        setCourse(prevCourse => ({ ...prevCourse, [name]: value }));
    };

    // --- PDF Upload Success Handler (Assignments) ---
    const handleAssignmentUploadSuccess = (weekIndex, assignmentIndex, url) => {
        setCourse(prevCourse => {
            const newWeeklyContent = [...prevCourse.weeklyContent];
            // Ensure the assignment object and its URL property exist
            if (newWeeklyContent[weekIndex] && newWeeklyContent[weekIndex].assignments && newWeeklyContent[weekIndex].assignments[assignmentIndex]) {
                newWeeklyContent[weekIndex].assignments[assignmentIndex] = {
                    ...newWeeklyContent[weekIndex].assignments[assignmentIndex],
                    url: url
                };
            }
            return { ...prevCourse, weeklyContent: newWeeklyContent };
        });
    };

    // --- Image Upload Success Handler (Course Image) ---
    const handleImageUploadSuccess = (url) => {
        setCourse(prevCourse => ({ ...prevCourse, image: url }));
    };

    // --- Video Upload Success Handler ---
    const handleVideoUploadSuccess = (weekIndex, videoIndex, url) => {
        setCourse(prevCourse => {
            const newWeeklyContent = [...prevCourse.weeklyContent];
            // Ensure the video object and its URL property exist
            if (newWeeklyContent[weekIndex] && newWeeklyContent[weekIndex].videos && newWeeklyContent[weekIndex].videos[videoIndex]) {
                newWeeklyContent[weekIndex].videos[videoIndex] = {
                    ...newWeeklyContent[weekIndex].videos[videoIndex],
                    url: url
                };
            }
            return { ...prevCourse, weeklyContent: newWeeklyContent };
        });
    };

    // --- Handlers for weeklyContent (add/remove week) ---
    const addWeek = () => {
        setCourse(prevCourse => {
            const newWeekNumber = prevCourse.weeklyContent.length + 1;
            const updatedWeeklyContent = [
                ...prevCourse.weeklyContent,
                {
                    week: newWeekNumber,
                    title: '',
                    lessons: [],
                    videos: [],
                    readings: [], // Readings should be objects with title and url for consistency with CoursePage.jsx
                    assignments: []
                }
            ];
            // Automatically expand the newly added week
            setExpandedWeekIndex(updatedWeeklyContent.length - 1);
            return { ...prevCourse, weeklyContent: updatedWeeklyContent };
        });
    };

    const removeWeek = (weekIndexToRemove) => {
        setCourse(prevCourse => {
            const updatedWeeklyContent = prevCourse.weeklyContent
                .filter((_, i) => i !== weekIndexToRemove)
                .map((week, i) => ({ ...week, week: i + 1 })); // Re-index weeks

            // Adjust expandedWeekIndex if the removed week was before it or if it was the last one
            if (expandedWeekIndex === weekIndexToRemove) {
                setExpandedWeekIndex(null); // Close the expanded week if it was removed
            } else if (expandedWeekIndex > weekIndexToRemove) {
                setExpandedWeekIndex(prevIndex => prevIndex - 1); // Adjust index if a preceding week was removed
            }
            return { ...prevCourse, weeklyContent: updatedWeeklyContent };
        });
    };

    // Toggle the visibility of a week's detailed content
    const toggleWeekDetails = (index) => {
        setExpandedWeekIndex(expandedWeekIndex === index ? null : index);
    };

    // --- Handlers for nested content (lessons, videos, etc.) ---
    const handleWeeklyContentChange = (weekIndex, field, value) => {
        setCourse(prevCourse => {
            const newWeeklyContent = [...prevCourse.weeklyContent];
            newWeeklyContent[weekIndex] = {
                ...newWeeklyContent[weekIndex],
                [field]: value
            };
            return { ...prevCourse, weeklyContent: newWeeklyContent };
        });
    };

    const addNestedItem = (weekIndex, fieldName) => {
        setCourse(prevCourse => {
            const newWeeklyContent = [...prevCourse.weeklyContent];
            const currentWeek = { ...newWeeklyContent[weekIndex] };

            let newItem;
            if (fieldName === 'videos' || fieldName === 'assignments' || fieldName === 'readings') {
                // For videos, assignments, and readings (which can have URLs)
                newItem = { title: '', url: '' };
            } else {
                newItem = ''; // Default for lessons (string array)
            }

            currentWeek[fieldName] = [...(currentWeek[fieldName] || []), newItem]; // Ensure array exists
            newWeeklyContent[weekIndex] = currentWeek;
            return { ...prevCourse, weeklyContent: newWeeklyContent };
        });
    };

    const removeNestedItem = (weekIndex, fieldName, itemIndex) => {
        setCourse(prevCourse => {
            const newWeeklyContent = [...prevCourse.weeklyContent];
            const currentWeek = { ...newWeeklyContent[weekIndex] };
            currentWeek[fieldName] = (currentWeek[fieldName] || []).filter((_, i) => i !== itemIndex);
            newWeeklyContent[weekIndex] = currentWeek;
            return { ...prevCourse, weeklyContent: newWeeklyContent };
        });
    };

    const handleNestedItemChange = (weekIndex, fieldName, itemIndex, value, nestedField = null) => {
        setCourse(prevCourse => {
            const newWeeklyContent = [...prevCourse.weeklyContent];
            const currentWeek = { ...newWeeklyContent[weekIndex] };

            if (fieldName === 'videos' || fieldName === 'assignments' || fieldName === 'readings') {
                // For objects with title and url (videos, assignments, readings)
                // Ensure the item at itemIndex exists and is an object before spreading
                currentWeek[fieldName][itemIndex] = {
                    ...(currentWeek[fieldName][itemIndex] || {}), // Spread existing object properties or an empty object
                    [nestedField]: value // Update the specific nested field (e.g., 'title' or 'url')
                };
            } else {
                // Handle string array updates (lessons)
                currentWeek[fieldName][itemIndex] = value;
            }

            newWeeklyContent[weekIndex] = currentWeek;
            return { ...prevCourse, weeklyContent: newWeeklyContent };
        });
    };


    // --- Edit Course Handler ---
    const handleEditCourse = (selectedCourse) => {
        setCourse(selectedCourse); // Load selected course data into the form
        setIsEditing(true); // Set editing mode to true
        setExpandedWeekIndex(null); // Collapse any expanded week when loading a new course
        toast.info(`Editing course: "${selectedCourse.title}"`);
    };

    // --- Delete Course Handler ---
    const handleDeleteCourse = async (courseId, courseTitle) => {
        if (window.confirm(`Are you sure you want to delete the course "${courseTitle}"? This action cannot be undone.`)) {
            setLoading(true);
            try {
                const docRef = doc(db, 'freeCourse', courseId);
                await deleteDoc(docRef);
                toast.success(`Course "${courseTitle}" deleted successfully!`);
                await fetchPaidCourses(); // Refresh the list of courses
                // If the deleted course was being edited, clear the form
                if (course.id === courseId) {
                    setCourse({
                        id: '', title: '', description: '', instructor: '', level: '',
                        duration: '', price: '', category: '', image: '', weeklyContent: []
                    });
                    setIsEditing(false);
                }
            } catch (error) {
                console.error("Error deleting course: ", error);
                toast.error(`Error deleting course: ${error.message}`);
            } finally {
                setLoading(false);
            }
        }
    };


    // --- Submit Handler (Create/Update) ---
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        let courseId = course.id.trim();

        if (!courseId) {
            courseId = uuidv4();
        }

        try {
            const docRef = doc(db, 'freeCourse', courseId);
            await setDoc(docRef, {
                ...course,
                id: courseId
            });
            toast.success(`Course "${course.title}" ${isEditing ? 'updated' : 'added'} successfully!`);
            console.log("Course saved with ID: ", courseId);

            // Clear the form after successful submission
            setCourse({
                id: '', title: '', description: '', instructor: '', level: '',
                duration: '', price: '', category: '', image: '', weeklyContent: []
            });
            setExpandedWeekIndex(null); // Reset expanded week
            setIsEditing(false); // Exit editing mode
            await fetchPaidCourses(); // Refresh the list of courses
        } catch (error) {
            console.error("Error adding/updating document: ", error);
            toast.error(`Error saving course: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-10 mb-20 font-sans">
            <h2 className="text-4xl font-extrabold text-center text-indigo-800 mb-8">Course Management (Paid)</h2>

            {/* Form for Creating/Editing a Course */}
            <div className="mb-12 p-8 border border-indigo-200 rounded-2xl shadow-xl bg-gradient-to-br from-indigo-50 to-purple-50">
                <h3 className="text-3xl font-bold text-indigo-700 mb-6 border-b pb-4">
                    {isEditing ? `Edit Course: ${course.title || 'Untitled'}` : 'Create New Course'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Course Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="id" className="block text-sm font-medium text-gray-700">Course ID (Optional, auto-generated if empty):</label>
                            <input
                                type="text"
                                id="id"
                                name="id"
                                value={course.id}
                                onChange={handleCourseChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="e.g., solar-installation-fundamentals"
                                disabled={isEditing} // Disable ID input when editing
                            />
                            {isEditing && <p className="text-xs text-gray-500 mt-1">Course ID cannot be changed when editing.</p>}
                        </div>
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={course.title}
                                onChange={handleCourseChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                            <textarea
                                id="description"
                                name="description"
                                value={course.description}
                                onChange={handleCourseChange}
                                rows="3"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="instructor" className="block text-sm font-medium text-gray-700">Instructor:</label>
                            <input
                                type="text"
                                id="instructor"
                                name="instructor"
                                value={course.instructor}
                                onChange={handleCourseChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="level" className="block text-sm font-medium text-gray-700">Level:</label>
                            <select
                                id="level"
                                name="level"
                                value={course.level}
                                onChange={handleCourseChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            >
                                <option value="">Select Level</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration:</label>
                            <input
                                type="text"
                                id="duration"
                                name="duration"
                                value={course.duration}
                                onChange={handleCourseChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="e.g., 4 Weeks / 20 Lessons"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
                            <input
                                type="text"
                                id="price"
                                name="price"
                                value={course.price}
                                onChange={handleCourseChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="e.g., $50 USD / SLL 1,250,000"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
                            <input
                                type="text"
                                id="category"
                                name="category"
                                value={course.category}
                                onChange={handleCourseChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Course Image (from Cloudinary):</label>
                            <CloudinaryImageUploader onUploadSuccess={handleImageUploadSuccess} currentUrl={course.image} />
                            {course.image && (
                                <div className="mt-2 text-sm text-gray-600">
                                    Uploaded Image URL: <a href={course.image} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-all">{course.image}</a>
                                </div>
                            )}
                            {course.image && (
                                <img src={course.image} alt="Course Preview" className="mt-4 max-h-40 object-contain mx-auto rounded-lg shadow-md" />
                            )}
                        </div>
                    </div>

                    {/* Weekly Content Section (Accordion for details) */}
                    <hr className="my-8 border-gray-300" />
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Weekly Content Management</h3>

                        {/* Table for Weekly Content Summary */}
                        {course.weeklyContent.length > 0 && (
                            <div className="overflow-x-auto mb-6 shadow-md rounded-lg border border-gray-200">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Week
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Title
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Lessons
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Videos
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Readings
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Assignments
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {course.weeklyContent.map((week, weekIndex) => (
                                            <tr key={weekIndex}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {week.week}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    {week.title || 'Untitled Week'}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    {(week.lessons || []).length}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    {(week.videos || []).length}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    {(week.readings || []).length}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    {(week.assignments || []).length}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button
                                                        type="button"
                                                        onClick={() => toggleWeekDetails(weekIndex)}
                                                        className="text-indigo-600 hover:text-indigo-900 mr-3 transition duration-150 ease-in-out"
                                                        title={expandedWeekIndex === weekIndex ? "Collapse Details" : "Expand Details"}
                                                    >
                                                        {expandedWeekIndex === weekIndex ? 'Collapse' : 'Edit Details'}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeWeek(weekIndex)}
                                                        className="text-red-600 hover:text-red-900 transition duration-150 ease-in-out"
                                                        title="Remove Week"
                                                    >
                                                        Remove Week
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Button to Add New Week */}
                        <button type="button" onClick={addWeek} className="mb-6 px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-200 ease-in-out font-semibold">
                            + Add New Week
                        </button>

                        {/* Detailed input fields for the currently expanded week */}
                        {course.weeklyContent.map((week, weekIndex) => (
                            <div key={weekIndex} className={`border border-gray-200 p-6 rounded-xl bg-gray-50 shadow-inner mb-6 ${expandedWeekIndex === weekIndex ? 'block' : 'hidden'}`}>
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="text-xl font-bold text-gray-800">Week {week.week} Details: {week.title || 'Untitled'}</h4>
                                    <button type="button" onClick={() => toggleWeekDetails(weekIndex)} className="text-gray-500 hover:text-gray-700 font-medium px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 transition duration-150 ease-in-out">
                                        Collapse Week
                                    </button>
                                </div>

                                <label className="block mb-2 text-sm font-medium text-gray-700">Week Title:</label>
                                <input
                                    type="text"
                                    value={week.title}
                                    onChange={(e) => handleWeeklyContentChange(weekIndex, 'title', e.target.value)}
                                    className="border border-gray-300 p-2 rounded-md w-full mb-4 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Enter week title"
                                />

                                {/* Lessons */}
                                <div className="mb-6 p-4 border border-gray-200 rounded-md bg-white shadow-sm">
                                    <label className="block text-lg font-semibold text-gray-700 mb-3">Lessons:</label>
                                    {(week.lessons || []).map((lesson, lessonIndex) => (
                                        <div key={lessonIndex} className="flex items-center mb-3">
                                            <input
                                                type="text"
                                                value={lesson}
                                                onChange={(e) =>
                                                    handleNestedItemChange(weekIndex, 'lessons', lessonIndex, e.target.value)
                                                }
                                                className="flex-grow border border-gray-300 rounded-md p-2 mr-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                placeholder="e.g., Introduction to HTML"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeNestedItem(weekIndex, 'lessons', lessonIndex)}
                                                className="text-red-500 hover:text-red-700 text-2xl transition duration-150 ease-in-out"
                                                title="Remove Lesson"
                                            >
                                                &times;
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => addNestedItem(weekIndex, 'lessons')}
                                        className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 rounded-md border border-blue-600 hover:bg-blue-50 transition duration-150 ease-in-out"
                                    >
                                        + Add Lesson
                                    </button>
                                </div>

                                {/* Videos Section */}
                                <div className="mb-6 p-4 border border-gray-200 rounded-md bg-white shadow-sm">
                                    <label className="block text-lg font-semibold text-gray-700 mb-3">Videos:</label>
                                    {(week.videos || []).map((video, videoIndex) => (
                                        <div key={videoIndex} className="mb-4 p-3 border border-gray-200 rounded-md bg-gray-50 shadow-inner">
                                            <input
                                                type="text"
                                                placeholder="Video Title"
                                                value={video.title}
                                                onChange={(e) => handleNestedItemChange(weekIndex, 'videos', videoIndex, e.target.value, 'title')}
                                                className="border border-gray-300 p-2 rounded-md w-full mb-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                            <CloudinaryVideoUploader
                                                onUploadSuccess={(url) => handleVideoUploadSuccess(weekIndex, videoIndex, url)}
                                                currentUrl={video.url}
                                            />
                                            {video.url && (
                                                <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm block mt-2 break-all">
                                                    View Uploaded Video
                                                </a>
                                            )}
                                            <button
                                                type="button"
                                                onClick={() => removeNestedItem(weekIndex, 'videos', videoIndex)}
                                                className="text-red-500 hover:text-red-700 text-sm mt-3 px-3 py-1 rounded-md border border-red-500 hover:bg-red-50 transition duration-150 ease-in-out"
                                            >
                                                Remove Video
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => addNestedItem(weekIndex, 'videos')}
                                        className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 rounded-md border border-blue-600 hover:bg-blue-50 transition duration-150 ease-in-out"
                                    >
                                        + Add Video
                                    </button>
                                </div>

                                {/* Readings Section */}
                                <div className="mb-6 p-4 border border-gray-200 rounded-md bg-white shadow-sm">
                                    <label className="block text-lg font-semibold text-gray-700 mb-3">Readings:</label>
                                    {(week.readings || []).map((reading, readingIndex) => (
                                        <div key={readingIndex} className="mb-4 p-3 border border-gray-200 rounded-md bg-gray-50 shadow-inner">
                                            <input
                                                type="text"
                                                placeholder="Reading Title"
                                                value={reading.title}
                                                onChange={(e) => handleNestedItemChange(weekIndex, 'readings', readingIndex, e.target.value, 'title')}
                                                className="border border-gray-300 p-2 rounded-md w-full mb-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                            <input
                                                type="url"
                                                placeholder="Reading URL (Optional)"
                                                value={reading.url}
                                                onChange={(e) => handleNestedItemChange(weekIndex, 'readings', readingIndex, e.target.value, 'url')}
                                                className="border border-gray-300 p-2 rounded-md w-full mb-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                            {reading.url && (
                                                <a href={reading.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm block mt-2 break-all">
                                                    View Reading
                                                </a>
                                            )}
                                            <button
                                                type="button"
                                                onClick={() => removeNestedItem(weekIndex, 'readings', readingIndex)}
                                                className="text-red-500 hover:text-red-700 text-sm mt-3 px-3 py-1 rounded-md border border-red-500 hover:bg-red-50 transition duration-150 ease-in-out"
                                            >
                                                Remove Reading
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => addNestedItem(weekIndex, 'readings')}
                                        className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 rounded-md border border-blue-600 hover:bg-blue-50 transition duration-150 ease-in-out"
                                    >
                                        + Add Reading
                                    </button>
                                </div>

                                {/* Assignments Section */}
                                <div className="mb-6 p-4 border border-gray-200 rounded-md bg-white shadow-sm">
                                    <label className="block text-lg font-semibold text-gray-700 mb-3">Assignments:</label>
                                    {(week.assignments || []).map((assignment, assignmentIndex) => (
                                        <div key={assignmentIndex} className="mb-4 p-3 border border-gray-200 rounded-md bg-gray-50 shadow-inner">
                                            <input
                                                type="text"
                                                placeholder="Assignment Title"
                                                value={assignment.title}
                                                onChange={(e) => handleNestedItemChange(weekIndex, 'assignments', assignmentIndex, e.target.value, 'title')}
                                                className="border border-gray-300 p-2 rounded-md w-full mb-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                            <CloudinaryAssignmentUploader
                                                onUploadSuccess={(url) => handleAssignmentUploadSuccess(weekIndex, assignmentIndex, url)}
                                                currentUrl={assignment.url}
                                            />
                                            {assignment.url && (
                                                <a href={assignment.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm block mt-2 break-all">
                                                    View Uploaded Assignment
                                                </a>
                                            )}
                                            <button
                                                type="button"
                                                onClick={() => removeNestedItem(weekIndex, 'assignments', assignmentIndex)}
                                                className="text-red-500 hover:text-red-700 text-sm mt-3 px-3 py-1 rounded-md border border-red-500 hover:bg-red-50 transition duration-150 ease-in-out"
                                            >
                                                Remove Assignment
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => addNestedItem(weekIndex, 'assignments')}
                                        className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 rounded-md border border-blue-600 hover:bg-blue-50 transition duration-150 ease-in-out"
                                    >
                                        + Add Assignment
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700
                           disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg
                           transition-colors duration-200 shadow-md"
                        >
                            {loading ? (isEditing ? 'Updating Course...' : 'Saving Course...') : (isEditing ? 'Update Course' : 'Save New Course')}
                        </button>
                        {isEditing && (
                            <button
                                type="button"
                                onClick={() => {
                                    setIsEditing(false);
                                    setCourse({
                                        id: '', title: '', description: '', instructor: '', level: '',
                                        duration: '', price: '', category: '', image: '', weeklyContent: []
                                    });
                                    setExpandedWeekIndex(null);
                                    toast.info("Form cleared for new course creation.");
                                }}
                                className="w-full mt-4 bg-gray-400 text-white py-3 px-6 rounded-md hover:bg-gray-500 transition-colors duration-200 shadow-md font-semibold"
                            >
                                Cancel Edit / Create New
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* Table for Existing Courses */}
            <hr className="my-12 border-gray-300" />
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-3xl font-bold text-indigo-700 mb-6 border-b pb-4">Existing Paid Courses</h3>
                {allPaidCourses.length === 0 && !loading ? (
                    <p className="text-gray-600 text-center py-4">No paid courses found. Add a new course using the form above!</p>
                ) : (
                    <div className="overflow-x-auto shadow-md rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ID
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Instructor
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Weeks
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {allPaidCourses.map((c) => (
                                    <tr key={c.id} className={isEditing && course.id === c.id ? 'bg-indigo-50 border-indigo-400' : ''}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {c.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {c.title}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {c.instructor}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {c.category}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {c.price}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {(c.weeklyContent || []).length}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                            <button
                                                type="button"
                                                onClick={() => handleEditCourse(c)}
                                                className="text-blue-600 hover:text-blue-900 mr-4 transition duration-150 ease-in-out font-semibold"
                                                disabled={loading}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteCourse(c.id, c.title)}
                                                className="text-red-600 hover:text-red-900 transition duration-150 ease-in-out font-semibold"
                                                disabled={loading}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
};

export default PaidCourseForm;

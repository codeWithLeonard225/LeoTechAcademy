import React, { useState, useEffect } from 'react';
import { db } from '../../../../firebase'; // Your Firebase config
import { doc, setDoc, collection, getDocs, deleteDoc } from 'firebase/firestore'; // Import necessary Firestore functions
import { v4 as uuidv4 } from 'uuid';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

// Import your Cloudinary Uploader components (Video Uploader removed)
import CloudinaryImageUploader from './CloudinaryImageUploader';
import CloudinaryAssignmentUploader from './CloudinaryAssignmentUploader';

const InPersonCourseForm = () => {
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
            // Using 'InPersonCourses' as the collection name, consistent with InPersonDashboard
            const coursesCollectionRef = collection(db, 'InPersonCourses');
            const querySnapshot = await getDocs(coursesCollectionRef);
            const coursesList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setAllPaidCourses(coursesList);
        } catch (error) {
            console.error("Error fetching paid courses: ", error);
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
                    // videos: [], // <--- REMOVED
                    readings: [], // Readings should be objects with title and url for consistency with CoursePage.jsx
                    assignments: [],
                    quiz: '' // Add the new quiz field here, initialized as an empty string
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
            // Removed 'videos' from this condition
            if (fieldName === 'assignments' || fieldName === 'readings') {
                // For assignments, and readings (which can have URLs)
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

            // Removed 'videos' from this condition
            if (fieldName === 'assignments' || fieldName === 'readings') {
                // For objects with title and url (assignments, readings)
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
// --- Delete Course Handler with Password ---
const handleDeleteCourse = async (courseId, courseTitle) => {
    const password = prompt(`To delete "${courseTitle}", please enter the admin password:`);

    if (password !== 'admin123') {
        toast.error('Incorrect password. Course not deleted.');
        return;
    }

    if (window.confirm(`Are you absolutely sure you want to delete the course "${courseTitle}"? This action cannot be undone.`)) {
        setLoading(true);
        try {
            const docRef = doc(db, 'InPersonCourses', courseId);
            await deleteDoc(docRef);
            toast.success(`Course "${courseTitle}" deleted successfully!`);
            await fetchPaidCourses(); // Refresh the list of courses

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
            // Corrected collection name to 'InPersonCourses'
            const docRef = doc(db, 'InPersonCourses', courseId);
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
            <ToastContainer position="bottom-right" autoClose={5000} />

            <h2 className="text-4xl font-extrabold text-center text-indigo-800 mb-8">Course Management (Paid)</h2>

            {/* Form for Creating/Editing a Course */}
            <div className="mb-12 p-8 border border-indigo-200 rounded-2xl shadow-xl bg-gradient-to-br from-indigo-50 to-purple-50">
                <h3 className="text-3xl font-bold text-indigo-700 mb-6 border-b pb-4">
                    {isEditing ? `Edit Course: ${course.title || 'Untitled'}` : 'Create New Course'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Course Details */}

                    <div>
                        <label htmlFor="id" className="block text-sm font-medium text-gray-700">Course ID</label>
                        <input
                            type="text"
                            name="id"
                            id="id"
                            value={course.id}
                            onChange={handleCourseChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="e.g., html-fundamentals" // Updated placeholder for clarity
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Course Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={course.title}
                            onChange={handleCourseChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="e.g., Advanced React Development"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            value={course.description}
                            onChange={handleCourseChange}
                            rows="4"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Provide a detailed description of the course content."
                            required
                        ></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="instructor" className="block text-sm font-medium text-gray-700">Instructor</label>
                            <input
                                type="text"
                                name="instructor"
                                id="instructor"
                                value={course.instructor}
                                onChange={handleCourseChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="e.g., Jane Doe"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="level" className="block text-sm font-medium text-gray-700">Level</label>
                            <select
                                name="level"
                                id="level"
                                value={course.level}
                                onChange={handleCourseChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            >
                                <option value="">Select Level</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (e.g., 8 Weeks)</label>
                            <input
                                type="text"
                                name="duration"
                                id="duration"
                                value={course.duration}
                                onChange={handleCourseChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="e.g., 8 Weeks"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price (e.g., $99.99)</label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                value={course.price}
                                onChange={handleCourseChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="e.g., 99.99"
                                step="0.01"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                        <input
                            type="text"
                            name="category"
                            id="category"
                            value={course.category}
                            onChange={handleCourseChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="e.g., Web Development, Data Science"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Course Image</label>
                        <CloudinaryImageUploader
                            onUploadSuccess={handleImageUploadSuccess}
                            currentUrl={course.image}
                        />
                        {course.image && (
                            <div className="mt-2 text-sm text-gray-600">
                                Current Image: <a href={course.image} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">{course.image}</a>
                            </div>
                        )}
                    </div>

                    {/* Weekly Content Section (Accordion for details) */}
                    <hr className="my-8 border-gray-300" />
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Weekly Content Management</h3>

                        {/* Add Week Button */}
                        <button
                            type="button"
                            onClick={addWeek}
                            className="mb-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200 ease-in-out flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                            Add New Week
                        </button>

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
                                            {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Videos // <--- REMOVED
                                            </th> */}
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Readings
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Assignments
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Quiz
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {course.weeklyContent.map((week, weekIndex) => (
                                            <React.Fragment key={weekIndex}>
                                                <tr>
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
                                                        {(week.readings || []).length}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                        {(week.assignments || []).length}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                        {week.quiz ? 'Yes' : 'No'} {/* Display if a quiz URL exists */}
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
                                                {/* Expanded Week Details (Accordion Content) */}
                                                {expandedWeekIndex === weekIndex && (
                                                    <tr>
                                                        <td colSpan="8" className="p-6 bg-indigo-50 border-t border-indigo-200">
                                                            <div className="space-y-6">
                                                                {/* Week Title */}
                                                                <div>
                                                                    <label htmlFor={`weekTitle-${weekIndex}`} className="block text-sm font-medium text-gray-700">Week Title</label>
                                                                    <input
                                                                        type="text"
                                                                        id={`weekTitle-${weekIndex}`}
                                                                        value={week.title}
                                                                        onChange={(e) => handleWeeklyContentChange(weekIndex, 'title', e.target.value)}
                                                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                        placeholder={`Title for Week ${week.week}`}
                                                                    />
                                                                </div>

                                                                {/* Lessons */}
                                                                <div className="border p-4 rounded-md bg-white shadow-sm">
                                                                    <h5 className="text-lg font-semibold text-gray-800 mb-3">Lessons</h5>
                                                                    {week.lessons.map((lesson, lessonIndex) => (
                                                                        <div key={lessonIndex} className="flex items-center space-x-2 mb-2">
                                                                            <input
                                                                                type="text"
                                                                                value={lesson}
                                                                                onChange={(e) => handleNestedItemChange(weekIndex, 'lessons', lessonIndex, e.target.value)}
                                                                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                                placeholder="Lesson title or description"
                                                                            />
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => removeNestedItem(weekIndex, 'lessons', lessonIndex)}
                                                                                className="text-red-500 hover:text-red-700"
                                                                                title="Remove Lesson"
                                                                            >
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    ))}
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => addNestedItem(weekIndex, 'lessons')}
                                                                        className="mt-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                                                                    >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                                                        </svg>
                                                                        Add Lesson
                                                                    </button>
                                                                </div>

                                                                {/* Readings */}
                                                                <div className="border p-4 rounded-md bg-white shadow-sm">
                                                                    <h5 className="text-lg font-semibold text-gray-800 mb-3">Readings</h5>
                                                                    {week.readings.map((reading, readingIndex) => (
                                                                        <div key={readingIndex} className="space-y-2 mb-4 p-2 border-b last:border-b-0">
                                                                            <div>
                                                                                <label className="block text-xs font-medium text-gray-600">Reading Title</label>
                                                                                <input
                                                                                    type="text"
                                                                                    value={reading.title}
                                                                                    onChange={(e) => handleNestedItemChange(weekIndex, 'readings', readingIndex, e.target.value, 'title')}
                                                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                                    placeholder="Reading title"
                                                                                />
                                                                            </div>
                                                                            <div>
                                                                                <label className="block text-xs font-medium text-gray-600">Reading URL</label>
                                                                                <input
                                                                                    type="text"
                                                                                    value={reading.url}
                                                                                    onChange={(e) => handleNestedItemChange(weekIndex, 'readings', readingIndex, e.target.value, 'url')}
                                                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                                    placeholder="Enter reading URL"
                                                                                />
                                                                            </div>
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => removeNestedItem(weekIndex, 'readings', readingIndex)}
                                                                                className="mt-2 text-red-500 hover:text-red-700 text-sm flex items-center"
                                                                            >
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                                                                                </svg>
                                                                                Remove Reading
                                                                            </button>
                                                                        </div>
                                                                    ))}
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => addNestedItem(weekIndex, 'readings')}
                                                                        className="mt-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                                                                    >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                                                        </svg>
                                                                        Add Reading
                                                                    </button>
                                                                </div>

                                                                {/* Assignments */}
                                                                <div className="border p-4 rounded-md bg-white shadow-sm">
                                                                    <h5 className="text-lg font-semibold text-gray-800 mb-3">Assignments (PDF Upload)</h5>
                                                                    {week.assignments.map((assignment, assignmentIndex) => (
                                                                        <div key={assignmentIndex} className="space-y-2 mb-4 p-2 border-b last:border-b-0">
                                                                            <div>
                                                                                <label className="block text-xs font-medium text-gray-600">Assignment Title</label>
                                                                                <input
                                                                                    type="text"
                                                                                    value={assignment.title}
                                                                                    onChange={(e) => handleNestedItemChange(weekIndex, 'assignments', assignmentIndex, e.target.value, 'title')}
                                                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                                    placeholder="Assignment title"
                                                                                />
                                                                            </div>
                                                                            <CloudinaryAssignmentUploader
                                                                                onUploadSuccess={(url) => handleAssignmentUploadSuccess(weekIndex, assignmentIndex, url)}
                                                                                currentUrl={assignment.url}
                                                                            />
                                                                            {assignment.url && (
                                                                                <div className="mt-2 text-sm text-gray-600">
                                                                                    Current File: <a href={assignment.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">{assignment.url}</a>
                                                                                </div>
                                                                            )}
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => removeNestedItem(weekIndex, 'assignments', assignmentIndex)}
                                                                                className="mt-2 text-red-500 hover:text-red-700 text-sm flex items-center"
                                                                            >
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                                                                                </svg>
                                                                                Remove Assignment
                                                                            </button>
                                                                        </div>
                                                                    ))}
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => addNestedItem(weekIndex, 'assignments')}
                                                                        className="mt-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                                                                    >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                                                        </svg>
                                                                        Add Assignment
                                                                    </button>
                                                                </div>

                                                                {/* --- NEW QUIZ INPUT FIELD --- */}
                                                                <div className="mb-6 p-4 border border-gray-200 rounded-md bg-white shadow-sm">
                                                                    <label htmlFor={`quiz-id-${weekIndex}`} className="block text-lg font-semibold text-gray-700 mb-3">Quiz ID:</label>
                                                                    <input
                                                                        type="text" // Changed to 'text' as it's an ID, not a full URL
                                                                        id={`quiz-id-${weekIndex}`}
                                                                        value={week.quizId || ''} // Changed to week.quizId to match CoursePage
                                                                        onChange={(e) => handleWeeklyContentChange(weekIndex, 'quizId', e.target.value)} // Changed field name to 'quizId'
                                                                        className="border border-gray-300 p-2 rounded-md w-full mb-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                                        placeholder="e.g., week_1, intro_quiz" // Updated placeholder
                                                                    />
                                                                    {week.quizId && ( // Changed to week.quizId
                                                                        <Link
                                                                            to={`/quiz/${week.quizId}`} // Construct the link here for preview
                                                                            rel="noopener noreferrer"
                                                                            className="text-blue-600 hover:underline text-sm block mt-2 break-all"
                                                                        >
                                                                            Preview Quiz: /quiz/{week.quizId}
                                                                        </Link>
                                                                    )}
                                                                    {week.quizId && ( // Changed to week.quizId
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => handleWeeklyContentChange(weekIndex, 'quizId', '')} // Changed field name to 'quizId'
                                                                            className="text-red-500 hover:text-red-700 text-sm mt-3 px-3 py-1 rounded-md border border-red-500 hover:bg-red-50 transition duration-150 ease-in-out"
                                                                        >
                                                                            Clear Quiz ID
                                                                        </button>
                                                                    )}
                                                                </div>
                                                                {/* --- END NEW QUIZ INPUT FIELD --- */}

                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    {/* Submit and Clear Buttons */}
                    <div className="flex justify-end space-x-4 mt-8">
                        {isEditing && (
                            <button
                                type="button"
                                onClick={() => {
                                    setCourse({
                                        id: '', title: '', description: '', instructor: '', level: '',
                                        duration: '', price: '', category: '', image: '', weeklyContent: []
                                    });
                                    setIsEditing(false);
                                    setExpandedWeekIndex(null);
                                    toast.info("Form cleared for new course entry.");
                                }}
                                className="px-6 py-3 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
                            >
                                Clear Form
                            </button>
                        )}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`px-8 py-3 rounded-md shadow-lg font-semibold text-white transition duration-200 ${loading ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`}
                        >
                            {loading ? 'Saving...' : (isEditing ? 'Update Course' : 'Add Course')}
                        </button>
                    </div>
                </form>
            </div>

            {/* List of Existing Courses */}
            <hr className="my-12 border-gray-300" />
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">Existing In-Person Courses</h3>
                {allPaidCourses.length === 0 ? (
                    <p className="text-gray-600 italic">No courses found. Add a new course above!</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allPaidCourses.map((courseItem) => (
                            <div key={courseItem.id} className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
                                <h4 className="text-xl font-bold text-indigo-700 mb-2 truncate" title={courseItem.title}>
                                    {courseItem.title}
                                </h4>
                                <p className="text-sm text-gray-600 mb-3 flex-grow line-clamp-3">{courseItem.description}</p>
                                <div className="text-xs text-gray-500 mb-2">
                                    <p><span className="font-semibold">ID:</span> {courseItem.id}</p>
                                    <p><span className="font-semibold">Instructor:</span> {courseItem.instructor}</p>
                                    <p><span className="font-semibold">Weeks:</span> {courseItem.weeklyContent?.length || 0}</p>
                                </div>
                                <div className="flex space-x-3 mt-4">
                                    <button
                                        onClick={() => handleEditCourse(courseItem)}
                                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md text-sm transition duration-200"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteCourse(courseItem.id, courseItem.title)}
                                        className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md text-sm transition duration-200"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InPersonCourseForm;
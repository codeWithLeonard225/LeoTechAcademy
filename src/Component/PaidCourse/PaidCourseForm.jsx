import React, { useState } from 'react';
import { db } from '../../../firebase'; // Your Firebase config
import { doc, setDoc } from 'firebase/firestore';
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

    const handleCourseChange = (e) => {
        const { name, value } = e.target;
        setCourse(prevCourse => ({ ...prevCourse, [name]: value }));
    };

    // --- PDF Upload Success Handler ---
    const handleAssignmentUploadSuccess = (weekIndex, assignmentIndex, url) => {
        setCourse(prevCourse => {
            const newWeeklyContent = [...prevCourse.weeklyContent];
            newWeeklyContent[weekIndex].assignments[assignmentIndex].url = url;
            return { ...prevCourse, weeklyContent: newWeeklyContent };
        });
    };


    // --- Image Upload Success Handler ---
    const handleImageUploadSuccess = (url) => {
        setCourse(prevCourse => ({ ...prevCourse, image: url }));
    };

    // --- Video Upload Success Handler ---
    const handleVideoUploadSuccess = (weekIndex, videoIndex, url) => {
        setCourse(prevCourse => {
            const newWeeklyContent = [...prevCourse.weeklyContent];
            const currentWeek = { ...newWeeklyContent[weekIndex] };

            currentWeek.videos[videoIndex] = {
                ...currentWeek.videos[videoIndex],
                url: url // Update the URL for the specific video
            };

            newWeeklyContent[weekIndex] = currentWeek;
            return { ...prevCourse, weeklyContent: newWeeklyContent };
        });
    };

    // --- Handlers for weeklyContent (add/remove week) ---
    const addWeek = () => {
        setCourse(prevCourse => ({
            ...prevCourse,
            weeklyContent: [
                ...prevCourse.weeklyContent,
                {
                    week: prevCourse.weeklyContent.length + 1,
                    title: '',
                    lessons: [],
                    videos: [],
                    readings: [],
                    assignments: []
                }
            ]
        }));
    };

    const removeWeek = (weekIndex) => {
        setCourse(prevCourse => ({
            ...prevCourse,
            weeklyContent: prevCourse.weeklyContent.filter((_, i) => i !== weekIndex)
        }));
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

            let newItem; // Declare without initial value
            if (fieldName === 'videos' || fieldName === 'assignments') { // Now includes assignments
                newItem = { title: '', url: '' }; // Specific structure for videos AND assignments
            } else {
                newItem = ''; // Default for lessons, readings
            }

            currentWeek[fieldName] = [...currentWeek[fieldName], newItem];
            newWeeklyContent[weekIndex] = currentWeek;
            return { ...prevCourse, weeklyContent: newWeeklyContent };
        });
    };


    const removeNestedItem = (weekIndex, fieldName, itemIndex) => {
        setCourse(prevCourse => {
            const newWeeklyContent = [...prevCourse.weeklyContent];
            const currentWeek = { ...newWeeklyContent[weekIndex] };
            currentWeek[fieldName] = currentWeek[fieldName].filter((_, i) => i !== itemIndex);
            newWeeklyContent[weekIndex] = currentWeek;
            return { ...prevCourse, weeklyContent: newWeeklyContent };
        });
    };

    const handleNestedItemChange = (weekIndex, fieldName, itemIndex, value, nestedField = null) => {
        setCourse(prevCourse => {
            const newWeeklyContent = [...prevCourse.weeklyContent];
            const currentWeek = { ...newWeeklyContent[weekIndex] };

            if (fieldName === 'videos' || fieldName === 'assignments') { // Now includes assignments
                currentWeek[fieldName][itemIndex] = {
                    ...currentWeek[fieldName][itemIndex], // Spread existing object properties
                    [nestedField]: value // Update the specific nested field (e.g., 'title')
                };
            } else {
                // Handle string array updates (lessons, readings)
                currentWeek[fieldName][itemIndex] = value;
            }

            newWeeklyContent[weekIndex] = currentWeek;
            return { ...prevCourse, weeklyContent: newWeeklyContent };
        });
    };



    // --- Submit Handler ---
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        let courseId = course.id.trim();

        if (!courseId) {
            courseId = uuidv4();
        }

        try {
            const docRef = doc(db, 'paidCourses', courseId);
            await setDoc(docRef, {
                ...course,
                id: courseId
            });
            toast.success(`Course "${course.title}" saved successfully!`);
            console.log("Course saved with ID: ", courseId);

            // Optional: Clear the form after successful submission
            setCourse({
                id: '',
                title: '',
                description: '',
                instructor: '',
                level: '',
                duration: '',
                price: '',
                category: '',
                image: '',
                weeklyContent: []
            });

        } catch (error) {
            console.error("Error adding/updating document: ", error);
            toast.error(`Error saving course: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-10 mb-20">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Paid Course</h2>
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
                        />
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
                        <CloudinaryImageUploader onUploadSuccess={handleImageUploadSuccess} />
                        {course.image && (
                            <div className="mt-2 text-sm text-gray-600">
                                Uploaded Image URL: <a href={course.image} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-all">{course.image}</a>
                            </div>
                        )}
                        {course.image && (
                            <img src={course.image} alt="Course Preview" className="mt-4 max-h-40 object-contain mx-auto" />
                        )}
                    </div>
                </div>

                {/* Weekly Content Section */}
                <hr className="my-8 border-gray-300" />
                <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Weekly Content</h3>
                    {course.weeklyContent.map((week, weekIndex) => (
                        <div key={weekIndex} className="border p-4 rounded-md mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold">Week {week.week}: {week.title}</h3>
                                <button type="button" onClick={() => removeWeek(weekIndex)} className="text-red-500">Remove Week</button>
                            </div>

                            <label className="block mb-2 font-medium">Week Title:</label>
                            <input
                                type="text"
                                value={week.title}
                                onChange={(e) => handleWeeklyContentChange(weekIndex, 'title', e.target.value)}
                                className="border p-2 rounded w-full mb-4"
                                placeholder="Enter week title"
                            />

                            {/* Lessons */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Lessons:</label>
                                {week.lessons.map((lesson, lessonIndex) => (
                                    <div key={lessonIndex} className="flex items-center mb-2">
                                        <input
                                            type="text"
                                            value={lesson}
                                            onChange={(e) =>
                                                handleNestedItemChange(weekIndex, 'lessons', lessonIndex, e.target.value)
                                            }
                                            className="flex-grow border border-gray-300 rounded-md p-2 mr-2"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeNestedItem(weekIndex, 'lessons', lessonIndex)}
                                            className="text-red-500 hover:text-red-700 text-lg"
                                            title="Remove Lesson"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => addNestedItem(weekIndex, 'lessons')}
                                    className="text-blue-600 hover:text-blue-800 text-sm"
                                >
                                    + Add Lesson
                                </button>
                            </div>

                            {/* Videos Section */}
                            <div>
                                <h4 className="font-semibold mb-2">Videos</h4>
                                {week.videos.map((video, videoIndex) => (
                                    <div key={videoIndex} className="mb-4 border p-3 rounded">
                                        <input
                                            type="text"
                                            placeholder="Video Title"
                                            value={video.title}
                                            onChange={(e) => handleNestedItemChange(weekIndex, 'videos', videoIndex, e.target.value, 'title')}
                                            className="border p-1 rounded w-full mb-2"
                                        />

                                        {/* Pass the current URL from the state */}
                                        <CloudinaryVideoUploader
                                            onUploadSuccess={(url) => handleVideoUploadSuccess(weekIndex, videoIndex, url)}
                                            currentUrl={video.url} // <--- Pass the current URL here
                                        />

                                        {/* This link is now redundant if the uploader shows the URL, but kept for clarity */}
                                        {video.url && (
                                            <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                                View Uploaded Video
                                            </a>
                                        )}

                                        <button
                                            type="button"
                                            onClick={() => removeNestedItem(weekIndex, 'videos', videoIndex)}
                                            className="text-red-500 mt-2"
                                        >
                                            Remove Video
                                        </button>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => addNestedItem(weekIndex, 'videos')}
                                    className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded"
                                >
                                    Add Video
                                </button>
                            </div>
                            {/* Assignments Section */}
                            <div className="mt-6">
                                <h4 className="font-semibold mb-2">Assignments</h4>
                                {week.assignments.map((assignment, assignmentIndex) => (
                                    <div key={assignmentIndex} className="mb-4 border p-3 rounded">
                                        <input
                                            type="text"
                                            placeholder="Assignment Title"
                                            value={assignment.title}
                                            onChange={(e) => handleNestedItemChange(weekIndex, 'assignments', assignmentIndex, e.target.value, 'title')}
                                            className="border p-1 rounded w-full mb-2"
                                        />

                                        <CloudinaryAssignmentUploader
                                            onUploadSuccess={(url) => handleAssignmentUploadSuccess(weekIndex, assignmentIndex, url)}
                                        />



                                        {assignment.url && (
                                            <a href={assignment.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                                View Uploaded Assignment
                                            </a>
                                        )}

                                        <button
                                            type="button"
                                            onClick={() => removeNestedItem(weekIndex, 'assignments', assignmentIndex)}
                                            className="text-red-500 mt-2"
                                        >
                                            Remove Assignment
                                        </button>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => addNestedItem(weekIndex, 'assignments')}
                                    className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded"
                                >
                                    Add Assignment
                                </button>
                            </div>
                            {/* Repeat similar blocks for lessons, readings if needed */}
                        </div>
                    ))}

                    <button type="button" onClick={addWeek} className="text-green-600 font-semibold">+ Add Week</button>
                </div>
                <div className="mt-8">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700
                       disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg
                       transition-colors duration-200"
                    >
                        {loading ? 'Saving Course...' : 'Save Course to Firebase'}
                    </button>
                </div>
            </form>
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
};

export default PaidCourseForm;
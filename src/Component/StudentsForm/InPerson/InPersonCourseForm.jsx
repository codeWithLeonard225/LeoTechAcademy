import React, { useState, useEffect, useCallback } from 'react';
import { db } from '../../../../firebase'; // Assuming your firebase.js is here
import { doc, getDoc, setDoc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// Reusing Cloudinary Uploader; assuming it's in a path relative to this component or globally available
import CloudinaryImageUserUploader from '../CloudinaryImageUserUploader'; 

const InPersonCourseForm = () => {
    const initialCourseState = {
        id: '',
        title: '',
        description: '',
        instructor: '',
        level: 'Beginner', // Default level
        duration: '',
        price: '',
        category: 'Technical Trades', // Default category
        image: '',
        weeklyContent: [],
    };

    const [course, setCourse] = useState(initialCourseState);
    const [existingCourses, setExistingCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [creatingCourse, setCreatingCourse] = useState(false);

    // --- Data Fetching ---
    const fetchExistingCourses = useCallback(async () => {
        setLoading(true);
        try {
            const coursesCollectionRef = collection(db, 'InPersonCourses');
            const querySnapshot = await getDocs(coursesCollectionRef);
            const courses = [];
            querySnapshot.forEach((doc) => {
                courses.push({ id: doc.id, ...doc.data() });
            });
            setExistingCourses(courses);
        } catch (error) {
            console.error('Error fetching existing courses:', error);
            toast.error('Failed to load existing courses.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchExistingCourses();
    }, [fetchExistingCourses]);

    // --- Form Handlers ---
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse(prev => ({ ...prev, [name]: value }));
    };

    const handleWeeklyContentChange = (weekIndex, field, value) => {
        const updatedContent = [...course.weeklyContent];
        updatedContent[weekIndex] = { ...updatedContent[weekIndex], [field]: value };
        setCourse(prev => ({ ...prev, weeklyContent: updatedContent }));
    };

    const handleLessonChange = (weekIndex, lessonIndex, value) => {
        const updatedContent = [...course.weeklyContent];
        const updatedLessons = [...(updatedContent[weekIndex].lessons || [])];
        updatedLessons[lessonIndex] = value;
        updatedContent[weekIndex] = { ...updatedContent[weekIndex], lessons: updatedLessons };
        setCourse(prev => ({ ...prev, weeklyContent: updatedContent }));
    };

    const handleAddWeek = () => {
        const newWeekNumber = course.weeklyContent.length + 1;
        setCourse(prev => ({
            ...prev,
            weeklyContent: [...prev.weeklyContent, {
                week: newWeekNumber,
                title: `Week ${newWeekNumber} - New Topic`,
                lessons: [],
                Link_Note_note: '',
                Link_to_Quiz: '',
            }]
        }));
    };

    const handleRemoveWeek = (weekIndex) => {
        setCourse(prev => ({
            ...prev,
            weeklyContent: prev.weeklyContent.filter((_, index) => index !== weekIndex)
        }));
    };

    const handleAddLesson = (weekIndex) => {
        const updatedContent = [...course.weeklyContent];
        updatedContent[weekIndex].lessons = [...(updatedContent[weekIndex].lessons || []), ''];
        setCourse(prev => ({ ...prev, weeklyContent: updatedContent }));
    };

    const handleRemoveLesson = (weekIndex, lessonIndex) => {
        const updatedContent = [...course.weeklyContent];
        updatedContent[weekIndex].lessons = updatedContent[weekIndex].lessons.filter((_, index) => index !== lessonIndex);
        setCourse(prev => ({ ...prev, weeklyContent: updatedContent }));
    };

    const handleImageUploadSuccess = (url) => {
        setCourse(prev => ({ ...prev, image: url }));
        toast.success('Course image uploaded successfully!');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            if (!course.id.trim()) {
                toast.error('Course ID is required.');
                return;
            }

            const courseDocRef = doc(db, 'InPersonCourses', course.id.trim());
            await setDoc(courseDocRef, course, { merge: true });
            toast.success('Course saved successfully!');

            setCourse(initialCourseState); // Clear form
            await fetchExistingCourses(); // Re-fetch list to update table

        } catch (err) {
            console.error('Error saving course:', err);
            toast.error('Failed to save course.');
        } finally {
            setSaving(false);
        }
    };

    const handleEditCourse = (courseToEdit) => {
        setCourse(courseToEdit);
        toast.info(`Editing course: ${courseToEdit.title}`);
    };

    const handleDeleteCourse = async (courseId) => {
        if (window.confirm(`Are you sure you want to delete course ID: ${courseId}? This cannot be undone.`)) {
            setLoading(true); // Indicate loading while deleting
            try {
                const courseDocRef = doc(db, 'InPersonCourses', courseId);
                await deleteDoc(courseDocRef);
                toast.success(`Course ${courseId} deleted successfully!`);
                await fetchExistingCourses(); // Re-fetch list to update table
                if (course.id === courseId) {
                    setCourse(initialCourseState); // Clear form if current course was deleted
                }
            } catch (error) {
                console.error('Error deleting course:', error);
                toast.error(`Failed to delete course ${courseId}.`);
            } finally {
                setLoading(false);
            }
        }
    };

    if (loading) {
        return <div className="text-center py-20 text-indigo-700 text-xl">Loading courses...</div>;
    }

    return (
        <div className="max-w-6xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-10 mb-20">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">In-Person Course Management</h2>

            {/* Course Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Create/Update Course</h3>

                {/* Basic Course Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="id" className="block text-sm font-medium text-gray-700">Course ID:</label>
                        <input type="text" id="id" name="id" value={course.id} onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="e.g., solar-fundamentals" required
                            disabled={existingCourses.some(c => c.id === course.id)} // Disable ID if editing existing
                        />
                        {existingCourses.some(c => c.id === course.id) && (
                            <p className="mt-1 text-sm text-gray-500">
                                (ID is disabled for editing existing courses. To create a new one, clear the form.)
                            </p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                        <input type="text" id="title" name="title" value={course.title} onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                        <textarea id="description" name="description" value={course.description} onChange={handleChange} rows="3"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>
                    <div>
                        <label htmlFor="instructor" className="block text-sm font-medium text-gray-700">Instructor:</label>
                        <input type="text" id="instructor" name="instructor" value={course.instructor} onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <label htmlFor="level" className="block text-sm font-medium text-gray-700">Level:</label>
                        <select id="level" name="level" value={course.level} onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500">
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (e.g., 4 Weeks / 20 Lessons):</label>
                        <input type="text" id="duration" name="duration" value={course.duration} onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price (e.g., $50 USD / SLL 1,250,000):</label>
                        <input type="text" id="price" name="price" value={course.price} onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
                        <input type="text" id="category" name="category" value={course.category} onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                </div>

                {/* Course Image Upload */}
                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Course Image:</label>
                    <CloudinaryImageUserUploader
                        onUploadSuccess={handleImageUploadSuccess}
                        currentImageUrl={course.image}
                    />
                    {course.image && (
                        <div className="mt-4 text-center">
                            <p className="text-sm text-gray-600 mb-2">Current Course Image:</p>
                            <img src={course.image} alt="Course Preview"
                                className="max-h-48 object-contain mx-auto shadow-md rounded-lg" />
                        </div>
                    )}
                </div>

                {/* Weekly Content Section */}
                <div className="mt-8 border border-gray-200 p-6 rounded-md bg-gray-50">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">Weekly Content Breakdown</h3>
                        <button type="button" onClick={handleAddWeek}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm font-medium">
                            Add New Week
                        </button>
                    </div>

                    {course.weeklyContent.length === 0 ? (
                        <p className="text-gray-600 italic text-center">No weekly content added yet. Click "Add New Week" to start.</p>
                    ) : (
                        <div className="space-y-6">
                            {course.weeklyContent.map((week, weekIndex) => (
                                <div key={weekIndex} className="p-4 border border-gray-300 rounded-md bg-white shadow-sm relative">
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveWeek(weekIndex)}
                                        className="absolute top-2 right-2 text-red-500 hover:text-red-700 focus:outline-none"
                                        title="Remove Week"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                    <h4 className="text-lg font-bold text-gray-700 mb-3">Week {week.week}</h4>

                                    <div className="mb-3">
                                        <label htmlFor={`weekTitle-${weekIndex}`} className="block text-sm font-medium text-gray-700">Week Title:</label>
                                        <input
                                            type="text"
                                            id={`weekTitle-${weekIndex}`}
                                            value={week.title}
                                            onChange={(e) => handleWeeklyContentChange(weekIndex, 'title', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder={`e.g., Week ${week.week} - Introduction`}
                                        />
                                    </div>

                                    {/* Lessons for the week */}
                                    <div className="mb-3">
                                        <label className="block text-sm font-medium text-gray-700">Lessons:</label>
                                        <ul className="space-y-2 mt-1">
                                            {week.lessons.map((lesson, lessonIndex) => (
                                                <li key={lessonIndex} className="flex items-center gap-2">
                                                    <input
                                                        type="text"
                                                        value={lesson}
                                                        onChange={(e) => handleLessonChange(weekIndex, lessonIndex, e.target.value)}
                                                        className="flex-1 border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:ring-indigo-500 focus:border-indigo-500"
                                                        placeholder={`Lesson ${lessonIndex + 1}`}
                                                    />
                                                    <button type="button" onClick={() => handleRemoveLesson(weekIndex, lessonIndex)}
                                                        className="text-red-500 hover:text-red-700 text-sm font-medium">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                        <button type="button" onClick={() => handleAddLesson(weekIndex)}
                                            className="mt-2 px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 text-xs font-medium">
                                            Add Lesson
                                        </button>
                                    </div>

                                    {/* Links for the week */}
                                    <div className="mb-3">
                                        <label htmlFor={`noteLink-${weekIndex}`} className="block text-sm font-medium text-gray-700">Link to Notes:</label>
                                        <input
                                            type="text"
                                            id={`noteLink-${weekIndex}`}
                                            name="Link_Note_note"
                                            value={week.Link_Note_note}
                                            onChange={(e) => handleWeeklyContentChange(weekIndex, 'Link_Note_note', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="e.g., https://example.com/week1-notes"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor={`quizLink-${weekIndex}`} className="block text-sm font-medium text-gray-700">Link to Quiz:</label>
                                        <input
                                            type="text"
                                            id={`quizLink-${weekIndex}`}
                                            name="Link_to_Quiz"
                                            value={week.Link_to_Quiz}
                                            onChange={(e) => handleWeeklyContentChange(weekIndex, 'Link_to_Quiz', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="e.g., https://example.com/week1-quiz"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Form Action Buttons */}
                <div className="mt-8 flex gap-4">
                    <button type="submit" disabled={saving}
                        className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700
                        disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg transition-colors duration-200">
                        {saving ? 'Saving Course...' : 'Save Course'}
                    </button>
                    <button type="button" onClick={() => setCourse(initialCourseState)}
                        className="flex-none bg-gray-500 text-white py-3 px-6 rounded-md hover:bg-gray-600
                        disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg transition-colors duration-200">
                        Clear Form
                    </button>
                </div>
            </form>

            <hr className="my-10 border-gray-300" />

            {/* Existing Courses Table */}
            <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Existing In-Person Courses</h3>
                {existingCourses.length === 0 ? (
                    <p className="text-gray-600 text-center">No in-person courses found. Create one above!</p>
                ) : (
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
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
                                        Weeks
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {existingCourses.map((course) => (
                                    <tr key={course.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {course.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {course.title}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {course.instructor || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {course.weeklyContent?.length || 0}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                            <button
                                                type="button"
                                                onClick={() => handleEditCourse(course)}
                                                className="text-indigo-600 hover:text-indigo-900 mr-3"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteCourse(course.id)}
                                                className="text-red-600 hover:text-red-900"
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

            <ToastContainer position="bottom-right" autoClose={5000} />
        </div>
    );
};

export default InPersonCourseForm;

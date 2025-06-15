import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from "../../../../firebase"; // adjust path if needed
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css";

// Fetch course specifically from the 'inPersonCourses' collection
const getCourseDetails = async (courseId) => {
    try {
        const inPersonCourseDocRef = doc(db, 'inPersonCourses', courseId);
        const inPersonCourseDocSnap = await getDoc(inPersonCourseDocRef);

        if (inPersonCourseDocSnap.exists()) {
            // Assuming in-person courses do not have a 'isFree' property or it's irrelevant here
            return { id: inPersonCourseDocSnap.id, ...inPersonCourseDocSnap.data() };
        }

        console.warn(`In-person Course with ID ${courseId} not found.`);
        return null;
    } catch (error) {
        console.error(`Error fetching in-person course with ID ${courseId}:`, error);
        return null;
    }
};

const InPersonCoursePage = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [activeWeek, setActiveWeek] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourseAndUser = async () => {
            setLoading(true);
            setError(null);

            // Get only the user ID from localStorage.
            // The full user profile will be fetched from Firestore.
            const storedUserString = localStorage.getItem('loggedInUser');
            if (!storedUserString) {
                // If no user data (even just an ID) in localStorage, redirect to login
                navigate('/login');
                return;
            }
            let userId = null;
            try {
                const tempUser = JSON.parse(storedUserString);
                userId = tempUser.id; // Extract just the ID
            } catch (parseError) {
                console.error("Error parsing user from localStorage:", parseError);
                navigate('/login'); // If localStorage is corrupted, redirect
                return;
            }

            if (!userId) {
                setError("User ID not found in local storage. Please log in again.");
                navigate('/login');
                setLoading(false);
                return;
            }

            try {
                // Fetch the full user profile from Firestore using the extracted ID
                const userDocRef = doc(db, 'Users', userId);
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists()) {
                    const userData = { id: userDocSnap.id, ...userDocSnap.data() };
                    setCurrentUser(userData); // Set currentUser state with data from Firestore

                    // Proceed to fetch course details from 'inPersonCourses'
                    let foundCourse = await getCourseDetails(courseId);

                    if (foundCourse) {
                        setCourse(foundCourse);
                        // Initialize activeWeek from userProgress fetched from Firestore
                        const userProgress = userData.userProgress?.[courseId];
                        if (userProgress && userProgress.lastAccessedWeek) {
                            setActiveWeek(userProgress.lastAccessedWeek);
                        } else {
                            setActiveWeek(1); // Default to week 1 if no progress
                        }
                    } else {
                        console.warn(`In-person course with ID: "${courseId}" not found in Firebase. Redirecting.`);
                        // You might want to redirect to an in-person courses list if you have one
                        navigate('/in-person-courses-list'); // Example: redirect to a list of in-person courses
                    }
                } else {
                    // User ID found in localStorage, but no matching profile in Firestore
                    setError(`User profile not found in database for ID: ${userId}. Please contact support or log in again.`);
                    navigate('/login'); // Force re-login or user creation flow
                }
            } catch (err) {
                console.error("Error fetching user or course data from Firebase:", err);
                setError("Failed to load user or course data. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchCourseAndUser();
    }, [courseId, navigate]); // Depend on courseId and navigate

    const toggleWeek = (weekNumber) => {
        setActiveWeek(activeWeek === weekNumber ? null : weekNumber);
    };

    /**
     * Marks a specific content item (lesson, video, reading, assignment) as complete.
     * Updates user progress in Firebase Firestore.
     * @param {number} weekNumber - The week number the content belongs to.
     * @param {string} contentType - The type of content ('lessons', 'videos', 'readings', 'assignments').
     * @param {string} itemIdentifier - A unique identifier for the content item (e.g., title or URL).
     */
    const markContentComplete = async (weekNumber, contentType, itemIdentifier) => {
        if (!currentUser || !course || !currentUser.id) {
            toast.error('Cannot mark content complete: User data missing or User ID not found.');
            console.warn('Cannot mark content complete: currentUser, course data, or currentUser.id is missing.');
            return;
        }

        // Create a deep copy of userProgress to avoid direct state mutation issues with nested objects
        const updatedUserProgress = JSON.parse(JSON.stringify(currentUser.userProgress || {}));

        // Ensure the course entry exists in userProgress
        if (!updatedUserProgress[courseId]) {
            updatedUserProgress[courseId] = { completedWeeks: [], lastAccessedWeek: 0, completedItems: {} };
        }

        const courseProgress = updatedUserProgress[courseId];

        // Ensure completedItems structure exists
        if (!courseProgress.completedItems) courseProgress.completedItems = {};
        if (!courseProgress.completedItems[weekNumber]) courseProgress.completedItems[weekNumber] = {};
        if (!courseProgress.completedItems[weekNumber][contentType]) courseProgress.completedItems[weekNumber][contentType] = [];

        // Add item to completed list if not already there
        if (!courseProgress.completedItems[weekNumber][contentType].includes(itemIdentifier)) {
            courseProgress.completedItems[weekNumber][contentType].push(itemIdentifier);
            // Sort to maintain order if desired, though not strictly necessary for functionality
            courseProgress.completedItems[weekNumber][contentType].sort();
        } else {
            // Item already marked complete, do nothing
            return;
        }

        // Find the current week's data from the course to calculate total items in the week
        const currentWeekData = course.weeklyContent?.find(w => w.week === weekNumber);

        let allItemsInWeekComplete = true;
        let totalItemsInWeek = 0;

        // Recalculate if all items in the current week are complete
        ['lessons', 'videos', 'readings', 'assignments'].forEach(type => {
            const itemsOfType = currentWeekData?.[type] || [];
            totalItemsInWeek += itemsOfType.length;

            itemsOfType.forEach(item => {
                const identifier = (typeof item === 'object' && item !== null && item.title) ? item.title : item;
                if (!courseProgress.completedItems[weekNumber]?.[type]?.includes(identifier)) {
                    allItemsInWeekComplete = false;
                }
            });
        });

        // Mark the entire week as complete if all its items are done and it's not already marked
        if (allItemsInWeekComplete && totalItemsInWeek > 0 && !courseProgress.completedWeeks.includes(weekNumber)) {
            courseProgress.completedWeeks.push(weekNumber);
            courseProgress.completedWeeks.sort((a, b) => a - b); // Keep completed weeks sorted
        }

        // Always update last accessed week
        courseProgress.lastAccessedWeek = weekNumber;

        // Update React state immediately for UI responsiveness
        setCurrentUser(prevUser => ({
            ...prevUser,
            userProgress: updatedUserProgress // Update only the userProgress part of currentUser
        }));

        // Persist updated userProgress to Firebase Firestore
        try {
            // Assuming 'Users' is your collection for user profiles, and document ID is currentUser.id
            const userDocRef = doc(db, 'Users', currentUser.id);
            await updateDoc(userDocRef, {
                userProgress: updatedUserProgress
            });
            console.log('User progress updated in Firestore successfully!');
            toast.success('Progress saved!');
        } catch (firebaseError) {
            console.error('Error updating user progress in Firestore:', firebaseError);
            toast.error('Failed to save progress. Please try again.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser'); // Remove the ID from localStorage
        navigate('/login'); // Redirect to your login page
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-gray-700 text-lg">Loading course data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <p className="text-red-600 text-lg mb-4">{error}</p>
                <button
                    onClick={() => navigate('/in-person-courses-list')} // Redirect to a specific in-person courses list
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                    Go to In-Person Courses
                </button>
            </div>
        );
    }

    if (!course || !currentUser) {
        // This case should ideally be caught by the loading state or redirect in useEffect
        return null;
    }

    const totalWeeks = course.weeklyContent?.length || 0;
    const completedWeeksCount = currentUser.userProgress?.[course.id]?.completedWeeks?.length || 0;
    const overallProgressPercentage = totalWeeks > 0 ? Math.round((completedWeeksCount / totalWeeks) * 100) : 0;

    // Ensure userCourseProgress is initialized correctly for display
    const userCourseProgress = currentUser.userProgress?.[course.id] || { completedWeeks: [], lastAccessedWeek: 0, completedItems: {} };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            <ToastContainer position="bottom-right" autoClose={5000} /> {/* ToastContainer for notifications */}

            {/* Header with Back to Dashboard, User ID, and Logout Button */}
            <header className="bg-white shadow-md p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-center mb-2 sm:mb-0">
                    <Link
                        to="/distanceDashboard" // You might want to change this to an in-person specific dashboard
                        className="text-blue-600 hover:text-blue-800 font-semibold text-base sm:text-lg mr-4"
                    >
                        ← Back to Dashboard
                    </Link>
                    {/* Display Current User ID */}
                    {currentUser.id && (
                        <span className="text-gray-700 text-sm sm:text-base font-medium bg-gray-100 px-3 py-1 rounded-full">
                            User ID: <span className="font-bold text-gray-800">{currentUser.id}</span>
                        </span>
                    )}
                </div>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base transition duration-200"
                >
                    Log Out
                </button>
            </header>

            {/* Main Content Area */}
            <div className="container mx-auto p-4 lg:p-10">
                {/* Course Header Section (Image, Title, Description, Details, Progress) */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6 sm:mb-8 flex flex-col lg:flex-row items-center border border-gray-100">
                    <img
                        src={course.image || 'https://placehold.co/128x128/cccccc/ffffff?text=Course+Image'} // Fallback image
                        alt={course.title}
                        className="w-full lg:w-1/3 h-48 sm:h-56 md:h-64 object-cover rounded-lg mb-6 lg:mb-0 lg:mr-8 shadow-lg"
                    />
                    <div className="flex-1">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-3">{course.title}</h1>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4">{course.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">
                            <p><span className="font-semibold">Instructor:</span> {course.instructor}</p>
                            <p><span className="font-semibold">Level:</span> {course.level}</p>
                            <p><span className="font-semibold">Duration:</span> {course.duration}</p>
                            <p><span className="font-semibold">Price:</span> {course.price}</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2">Your Overall Progress</h3>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div
                                    className="bg-purple-600 h-3 rounded-full text-xs text-white flex items-center justify-center font-semibold transition-all duration-500 ease-out"
                                    style={{ width: `${overallProgressPercentage}%` }}
                                >
                                    {overallProgressPercentage}%
                                </div>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-500 mt-2">
                                Completed {completedWeeksCount} of {totalWeeks} weeks
                            </p>
                        </div>

                        <button
                            onClick={() => {
                                const targetWeek = userCourseProgress.lastAccessedWeek || 1;
                                setActiveWeek(targetWeek);
                            }}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg text-sm sm:text-base transform hover:scale-105 transition duration-300"
                        >
                            {completedWeeksCount === 0 ? 'Start Course' : 'Continue Course'}
                        </button>
                    </div>
                </div>

                {/* Course Content - Weekly Breakdown (Accordion) */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 sm:mb-6 border-b pb-3 sm:pb-4">Course Curriculum</h2>

                    {course.weeklyContent && course.weeklyContent.length > 0 ? (
                        course.weeklyContent.map((weekData) => {
                            const isWeekComplete = userCourseProgress.completedWeeks.includes(weekData.week);
                            const isWeekActive = activeWeek === weekData.week;

                            // Calculate weekly progress
                            let totalItemsInThisWeek = 0;
                            let completedItemsInThisWeek = 0;

                            ['lessons', 'videos', 'readings', 'assignments'].forEach(type => {
                                const itemsOfType = weekData[type] || [];
                                totalItemsInThisWeek += itemsOfType.length;

                                itemsOfType.forEach(item => {
                                    const identifier = (typeof item === 'object' && item !== null && item.title) ? item.title : item;
                                    if (userCourseProgress.completedItems?.[weekData.week]?.[type]?.includes(identifier)) {
                                        completedItemsInThisWeek++;
                                    }
                                });
                            });

                            const weeklyProgressPercentage = totalItemsInThisWeek > 0
                                ? Math.round((completedItemsInThisWeek / totalItemsInThisWeek) * 100)
                                : 0;

                            return (
                                <div key={weekData.week} id={`week-${weekData.week}`} className="border-b border-gray-200 last:border-b-0">
                                    <button
                                        className="flex justify-between items-center w-full py-3 sm:py-4 text-left font-semibold text-lg sm:text-xl text-gray-800 hover:text-blue-600"
                                        onClick={() => toggleWeek(weekData.week)}
                                    >
                                        <span>Week {weekData.week}: {weekData.title}</span>
                                        <div className="flex items-center">
                                            {isWeekComplete && (
                                                <span className="text-green-500 text-xs sm:text-sm font-bold mr-2">COMPLETED</span>
                                            )}
                                            {/* Weekly Progress Bar */}
                                            <span className="text-sm font-medium text-gray-600 mr-2">{weeklyProgressPercentage}%</span>
                                            <div className="w-20 bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
                                                    style={{ width: `${weeklyProgressPercentage}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-xl sm:text-2xl ml-3">{isWeekActive ? '-' : '+'}</span>
                                        </div>
                                    </button>
                                    {isWeekActive && (
                                        <div className="p-3 sm:p-4 bg-gray-50 border-t border-gray-200">
                                            {/* Lessons Section */}
                                            {weekData.lessons && weekData.lessons.length > 0 && (
                                                <div className="mb-3 sm:mb-4">
                                                    <h4 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 text-gray-700">Lessons:</h4>
                                                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2">
                                                        {weekData.lessons.map((lesson, index) => {
                                                            const isLessonComplete = userCourseProgress.completedItems?.[weekData.week]?.lessons?.includes(lesson);
                                                            return (
                                                                <li key={index} className="flex items-center text-sm sm:text-base text-gray-600">
                                                                    <span className="mr-2">{isLessonComplete ? '✅' : '➡️'}</span>
                                                                    {lesson}
                                                                    {!isLessonComplete && (
                                                                        <button
                                                                            onClick={() => markContentComplete(weekData.week, 'lessons', lesson)}
                                                                            className="ml-2 sm:ml-4 text-blue-500 hover:underline text-xs sm:text-sm focus:outline-none"
                                                                        >
                                                                            Mark as Complete
                                                                        </button>
                                                                    )}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Videos Section - Mark video complete on ended */}
                                            {weekData.videos && weekData.videos.length > 0 && (
                                                <div className="mb-3 sm:mb-4">
                                                    <h4 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 text-gray-700">Video Lessons:</h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                                        {weekData.videos.map((video, index) => {
                                                            const isVideoComplete = userCourseProgress.completedItems?.[weekData.week]?.videos?.includes(video.title);
                                                            return (
                                                                <div key={index} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden relative">
                                                                    {/* Mark as complete badge/button */}
                                                                    <div className="absolute top-2 right-2 z-10">
                                                                        {isVideoComplete ? (
                                                                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Completed</span>
                                                                        ) : (
                                                                            <button
                                                                                onClick={() => markContentComplete(weekData.week, 'videos', video.title)}
                                                                                className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
                                                                            >
                                                                                Mark Complete
                                                                            </button>
                                                                        )}
                                                                    </div>
                                                                    <h5 className="text-white text-md font-semibold p-3 border-b border-gray-700">{video.title}</h5>
                                                                    <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                                                                        {video.url ? (
                                                                            <video
                                                                                controls
                                                                                className="absolute inset-0 w-full h-full object-contain"
                                                                                poster="https://placehold.co/1280x720/000000/FFFFFF?text=Video+Unavailable" // Placeholder image for video
                                                                                preload="metadata"
                                                                                onEnded={() => !isVideoComplete && markContentComplete(weekData.week, 'videos', video.title)}
                                                                            >
                                                                                <source src={video.url} type="video/mp4" />
                                                                                Your browser does not support the video tag.
                                                                            </video>
                                                                        ) : (
                                                                            <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
                                                                                Video not available.
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                    <p className="text-gray-700 text-xs sm:text-sm mt-3">
                                                        *If you have trouble playing a video, ensure your internet connection is stable or try a different browser.
                                                    </p>
                                                </div>
                                            )}

                                            {/* Readings Section */}
                                            {weekData.readings && weekData.readings.length > 0 && (
                                                <div className="mb-3 sm:mb-4">
                                                    <h4 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 text-gray-700">Readings:</h4>
                                                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2">
                                                        {weekData.readings.map((reading, index) => {
                                                            const readingTitle = (typeof reading === 'object' && reading !== null && reading.title) ? reading.title : reading;
                                                            const isReadingComplete = userCourseProgress.completedItems?.[weekData.week]?.readings?.includes(readingTitle);
                                                            return (
                                                                <li key={index} className="flex items-center text-sm sm:text-base text-gray-600">
                                                                    <span className="mr-2">{isReadingComplete ? '✅' : '📚'}</span>
                                                                    {readingTitle}
                                                                    {reading.url && (
                                                                        <a href={reading.url} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 hover:underline">
                                                                            (Read)
                                                                        </a>
                                                                    )}
                                                                    {!isReadingComplete && (
                                                                        <button
                                                                            onClick={() => markContentComplete(weekData.week, 'readings', readingTitle)}
                                                                            className="ml-2 sm:ml-4 text-blue-500 hover:underline text-xs sm:text-sm focus:outline-none"
                                                                        >
                                                                            Mark as Complete
                                                                        </button>
                                                                    )}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Assignments Section */}
                                            {weekData.assignments && weekData.assignments.length > 0 && (
                                                <div className="mb-3 sm:mb-4">
                                                    <h4 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 text-gray-700">Assignments:</h4>
                                                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2">
                                                        {weekData.assignments.map((assignment, index) => {
                                                            const isAssignmentComplete = userCourseProgress.completedItems?.[weekData.week]?.assignments?.includes(assignment.title);
                                                            return (
                                                                <li key={index} className="flex items-center text-sm sm:text-base text-gray-600">
                                                                    <span className="mr-2">{isAssignmentComplete ? '✅' : '📝'}</span>
                                                                    {assignment.title}
                                                                    {assignment.url && (
                                                                        <a href={assignment.url} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 hover:underline">
                                                                            (Download)
                                                                        </a>
                                                                    )}
                                                                    {!isAssignmentComplete && (
                                                                        <button
                                                                            onClick={() => markContentComplete(weekData.week, 'assignments', assignment.title)}
                                                                            className="ml-2 sm:ml-4 text-blue-500 hover:underline text-xs sm:text-sm focus:outline-none"
                                                                        >
                                                                            Mark as Complete
                                                                        </button>
                                                                    )}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-gray-600">No curriculum content available for this course yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InPersonCoursePage;

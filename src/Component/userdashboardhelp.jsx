import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from "../../../../firebase"; // Adjust path if needed
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// --- CORRECTED getCourseDetails function ---
// Fetch course from either 'InPersonCourses' or 'freeCourse' (matching InPersonDashboard)
const getCourseDetails = async (courseId) => {
    try {
        // Attempt to fetch from 'InPersonCourses' (Capital I, P, C - confirmed by InPersonDashboard)
        const inPersonCourseDocRef = doc(db, 'InPersonCourses', courseId);
        const inPersonCourseDocSnap = await getDoc(inPersonCourseDocRef);

        if (inPersonCourseDocSnap.exists()) {
            return { id: inPersonCourseDocSnap.id, ...inPersonCourseDocSnap.data(), isFree: false };
        }

        // Attempt to fetch from 'freeCourse' (lowercase f, Capital C - confirmed by InPersonDashboard)
        const freeCourseDocRef = doc(db, 'freeCourse', courseId);
        const freeCourseDocSnap = await getDoc(freeCourseDocRef);

        if (freeCourseDocSnap.exists()) {
            return { id: freeCourseDocSnap.id, ...freeCourseDocSnap.data(), isFree: true };
        }

        console.warn(`Course with ID ${courseId} not found in 'InPersonCourses' or 'freeCourse'.`);
        return null;
    } catch (error) {
        console.error(`Error fetching course with ID ${courseId}:`, error);
        return null;
    }
};
// --- End of corrected getCourseDetails function ---


const InPersonCoursePage = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    // activeWeek defaults to 1 since there's no "last accessed" progress to continue
    const [activeWeek, setActiveWeek] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourseAndUser = async () => {
            setLoading(true);
            setError(null);

            const storedUserString = localStorage.getItem('loggedInUser');
            if (!storedUserString) {
                navigate('/login');
                return;
            }
            let userId = null;
            try {
                const tempUser = JSON.parse(storedUserString);
                userId = tempUser.id;
            } catch (parseError) {
                console.error("Error parsing user from localStorage:", parseError);
                navigate('/login');
                return;
            }

            if (!userId) {
                setError("User ID not found in local storage. Please log in again.");
                navigate('/login');
                setLoading(false);
                return;
            }

            try {
                const userDocRef = doc(db, 'Users', userId);
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists()) {
                    const userData = { id: userDocSnap.id, ...userDocSnap.data() };
                    setCurrentUser(userData);

                    let foundCourse = await getCourseDetails(courseId);

                    if (foundCourse) {
                        setCourse(foundCourse);
                        // Progress removal: No longer setting activeWeek based on lastAccessedWeek
                        // activeWeek will default to 1 as initialized
                    } else {
                        console.warn(`Course with ID: "${courseId}" not found in Firebase. Redirecting to courses list.`);
                        toast.error(`Course "${courseId}" not found.`);
                        navigate('/in-person-courses-list'); // Redirect to a general courses list if not found
                    }
                } else {
                    setError(`User profile not found in database for ID: ${userId}. Please contact support or log in again.`);
                    navigate('/login');
                }
            } catch (err) {
                console.error("Error fetching user or course data from Firebase:", err);
                setError("Failed to load user or course data. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchCourseAndUser();
    }, [courseId, navigate]);

    // Toggles the visibility of a week's content
    const toggleWeek = (weekNumber) => {
        setActiveWeek(activeWeek === weekNumber ? null : weekNumber);
    };

    const markContentComplete = async (weekNumber, contentType, itemIdentifier) => {
        if (!currentUser || !course || !currentUser.id) {
            toast.error('Cannot mark content complete: User data missing or User ID not found.');
            console.warn('Cannot mark content complete: currentUser, course data, or currentUser.id is missing.');
            return;
        }

        const updatedUserProgress = JSON.parse(JSON.stringify(currentUser.userProgress || {}));

        if (!updatedUserProgress[courseId]) {
            updatedUserProgress[courseId] = { completedItems: {} }; // Removed completedWeeks and lastAccessedWeek
        }

        const courseProgress = updatedUserProgress[courseId];

        if (!courseProgress.completedItems) courseProgress.completedItems = {};
        if (!courseProgress.completedItems[weekNumber]) courseProgress.completedItems[weekNumber] = {};
        if (!courseProgress.completedItems[weekNumber][contentType]) courseProgress.completedItems[weekNumber][contentType] = [];

        // Add item to completed list if not already present
        if (!courseProgress.completedItems[weekNumber][contentType].includes(itemIdentifier)) {
            courseProgress.completedItems[weekNumber][contentType].push(itemIdentifier);
            courseProgress.completedItems[weekNumber][contentType].sort(); // Keep sorted for consistency
            toast.success(`'${itemIdentifier}' marked complete!`);
        } else {
            toast.info(`'${itemIdentifier}' is already complete.`);
            return; // Already marked complete
        }

        // Progress removal: Do not update completedWeeks or lastAccessedWeek
        // The check for allItemsInWeekComplete and updating completedWeeks has been removed.

        // Update local state first for immediate UI feedback
        setCurrentUser(prevUser => ({
            ...prevUser,
            userProgress: updatedUserProgress
        }));

        // Update Firestore
        try {
            const userDocRef = doc(db, 'Users', currentUser.id);
            await updateDoc(userDocRef, {
                userProgress: updatedUserProgress
            });
            console.log('User progress updated in Firestore successfully!');
        } catch (firebaseError) {
            console.error('Error updating user progress in Firestore:', firebaseError);
            toast.error('Failed to save progress to cloud. Please try again.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        navigate('/login');
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
                    onClick={() => navigate('/in-person-courses-list')} // Adjust this route if needed
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                    Go to In-Person Courses
                </button>
            </div>
        );
    }

    if (!course || !currentUser) {
        return null; // Or a more specific error/redirect if state is unexpected
    }

    // Progress removal: totalWeeks, completedWeeksCount, overallProgressPercentage no longer used for display
    // The `userCourseProgress` is now only used for `completedItems`
    const userCourseProgress = currentUser.userProgress?.[course.id] || { completedItems: {} };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            <ToastContainer position="bottom-right" autoClose={5000} />

            {/* Header with Back to Dashboard, User ID, and Logout Button */}
            <header className="bg-white shadow-md p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-center mb-2 sm:mb-0">
                    <Link
                        to="/inPersonDashboard" // Adjust as needed for your specific routing
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
                {/* Course Header Section (Image, Title, Description, Details) */}
                {/* Progress bar and related text removed from this section */}
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
                        {/* Overall progress display removed */}
                        {/* Start/Continue Course button removed */}
                    </div>
                </div>

                {/* --- */}
                {/* Weekly Course Content Section */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">Course Content</h2>
                    {course.weeklyContent?.length === 0 ? (
                        <p className="text-gray-600">No weekly content available for this course yet.</p>
                    ) : (
                        <div className="space-y-4">
                            {course.weeklyContent && course.weeklyContent.map((weekData) => {
                                const isWeekActive = activeWeek === weekData.week;
                                // Progress removal: isWeekCompleted removed
                                // No overall week completion checkmark

                                // Calculate weekly "video" (lesson) progress for quiz unlock
                                const completedVideoCount = userCourseProgress.completedItems[weekData.week]?.lessons?.length || 0;
                                const totalVideoCount = weekData.lessons?.length || 0;
                                const weeklyProgressPercentage = totalVideoCount > 0 ? Math.round((completedVideoCount / totalVideoCount) * 100) : 0;

                                return (
                                    <div key={weekData.week} id={`week-${weekData.week}`} className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div
                                            className="flex justify-between items-center p-4 sm:p-5 bg-gray-50 hover:bg-gray-100 cursor-pointer transition duration-150 ease-in-out"
                                            onClick={() => toggleWeek(weekData.week)}
                                        >
                                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                                                Week {weekData.week}: {weekData.title}
                                            </h3>
                                            <div className="flex items-center">
                                                {/* Progress removal: No checkmark for week completion here */}
                                                <svg
                                                    className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isWeekActive ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </div>
                                        </div>

                                        {isWeekActive && (
                                            <div className="p-4 sm:p-5 bg-white border-t border-gray-200">
                                                {/* Lessons (now implicitly "Videos" for quiz unlock) */}
                                                {weekData.lessons && weekData.lessons.length > 0 && (
                                                    <div className="mb-4">
                                                        <h4 className="text-md sm:text-lg font-bold text-gray-700 mb-2 flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                                            </svg>
                                                            Lessons
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {weekData.lessons && weekData.lessons.length > 0 && (
                                                                <div className="mb-3 sm:mb-4">
                                                                    <h4 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 text-gray-700">Lessons:</h4>
                                                                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2">
                                                                        {weekData.lessons.map((lesson, index) => {
                                                                            const identifier = lesson.id || lesson.title || `lesson-${weekData.week}-${index}`;
                                                                            const isComplete = userCourseProgress.completedItems[weekData.week]?.lessons?.includes(identifier);
                                                                            return (
                                                                                <li key={index} className="flex items-center text-sm sm:text-base text-gray-600">
                                                                                    <span className="mr-2 sm:pt-4 ">{isComplete ? '✅' : '➡️'}</span>
                                                                                    {lesson}
                                                                                    {!isComplete && (
                                                                                        <button
                                                                                            onClick={() => markContentComplete(weekData.week, 'lessons', identifier)}
                                                                                            className="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600 transition duration-150"
                                                                                        >
                                                                                            Mark Complete
                                                                                        </button>
                                                                                    )}
                                                                                </li>
                                                                            );
                                                                        })}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Readings & Quiz Section - MODIFIED TO INCLUDE QUIZ */}
                                                {(weekData.readings && weekData.readings.length > 0) || weekData.quizId ? (
                                                    <div className="mb-3 sm:mb-4">
                                                        <h4 className="font-semibold text-md sm:text-lg mb-1.5 sm:mb-2 text-gray-700 flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0113 3.414L16.586 7A2 2 0 0118 8.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1-3a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                                            </svg>
                                                            Notes & Quiz:
                                                        </h4>
                                                        <ul className="list-disc list-inside space-y-1.5 sm:space-y-2">

                                                            {weekData.readings && weekData.readings.length > 0 && weekData.readings.map((reading, index) => {
                                                                const identifier = reading.id || reading.title || `reading-${weekData.week}-${index}`; // Identifier for tracking completion
                                                                const readingTitle = typeof reading === 'object' ? reading.title : reading;
                                                                const readingUrl = typeof reading === 'object' && reading.url ? reading.url : '#';
                                                                const isComplete = userCourseProgress.completedItems[weekData.week]?.readings?.includes(identifier); // Check completion status

                                                                return (
                                                                    <li key={identifier} className={`flex justify-between items-center p-3 rounded-md transition-colors duration-150 bg-gray-50 hover:bg-gray-100`}>
                                                                        <span className="flex-1">
                                                                            <span className="mr-2">{isComplete ? '✅' : '➡️'}</span>
                                                                            {readingUrl !== '#' ? (
                                                                                <Link to={readingUrl} className="text-blue-600 hover:underline">
                                                                                    {readingTitle}
                                                                                </Link>
                                                                            ) : (
                                                                                <span>{readingTitle}</span>
                                                                            )}
                                                                        </span>
                                                                        {/* Mark Complete button for individual readings, consistent with lessons/assignments */}
                                                                        {!isComplete && (
                                                                            <button
                                                                                onClick={() => markContentComplete(weekData.week, 'readings', identifier)}
                                                                                className="bg-purple-600 text-white text-xs px-3 py-1 rounded hover:bg-purple-700 transition duration-150"
                                                                            >
                                                                                Mark Complete
                                                                            </button>
                                                                        )}
                                                                    </li>
                                                                );
                                                            })}
                                                            {/* Add the Quiz Link Here */}
                                                            {weekData.quizId && (
                                                                <li className={`flex items-center p-3 rounded-md transition-colors duration-150 bg-gray-50 ${weeklyProgressPercentage >= 80 ? 'hover:bg-gray-100' : ''}`}>
                                                                    <span className="mr-2 text-purple-600">💡</span> {/* Optional: Use an emoji for quizzes */}
                                                                    {weeklyProgressPercentage >= 80 ? (
                                                                        <Link
                                                                            to={`/quiz/${weekData.quizId}`}
                                                                            className="text-purple-600 hover:underline font-bold"
                                                                        >
                                                                            Take Quiz for Week {weekData.week}
                                                                        </Link>
                                                                    ) : (
                                                                        <span
                                                                            className="text-gray-400 cursor-not-allowed text-sm sm:text-base"
                                                                            title={`Complete at least 80% of lessons/videos for Week ${weekData.week} to unlock this quiz.`}
                                                                        >
                                                                            Take Quiz for Week {weekData.week} (Unlock at 80% lesson/video progress - Current: {weeklyProgressPercentage}%)
                                                                        </span>
                                                                    )}
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </div>
                                                ) : null}

                                                {/* Assignments */}
                                                {weekData.assignments && weekData.assignments.length > 0 && (
                                                    <div>
                                                        <h4 className="text-md sm:text-lg font-bold text-gray-700 mb-2 flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                                                            </svg>
                                                            Assignments
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {weekData.assignments.map((assignment, index) => {
                                                                const identifier = assignment.id || assignment.title || `assignment-${weekData.week}-${index}`;
                                                                const isComplete = userCourseProgress.completedItems[weekData.week]?.assignments?.includes(identifier);
                                                                return (
                                                                    <li key={identifier} className={`flex justify-between items-center p-3 rounded-md transition-colors duration-150 bg-gray-50 hover:bg-gray-100`}>
                                                                        <span className="flex-1">
                                                                            <span className="mr-2">{isComplete ? '✅' : '➡️'}</span>
                                                                            {assignment.title || `Assignment ${index + 1}`}
                                                                            {assignment.downloadLink && (
                                                                                <a href={assignment.downloadLink} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 hover:underline text-xs">
                                                                                    (Download)
                                                                                </a>
                                                                            )}
                                                                            {assignment.deadline && (
                                                                                <span className="ml-2 text-gray-500 text-xs">(Due: {assignment.deadline})</span>
                                                                            )}
                                                                        </span>
                                                                        {!isComplete && (
                                                                            <button
                                                                                onClick={() => markContentComplete(weekData.week, 'assignments', identifier)}
                                                                                className="bg-purple-600 text-white text-xs px-3 py-1 rounded hover:bg-purple-700 transition duration-150"
                                                                            >
                                                                                Mark Complete
                                                                            </button>
                                                                        )}
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* If a week has no content types defined */}
                                                {!weekData.lessons?.length && !weekData.readings?.length && !weekData.assignments?.length && !weekData.quizId && (
                                                    <p className="text-gray-500 italic">No content available for this week yet.</p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
                {/* --- */}

            </div>
        </div>
    );
};

export default InPersonCoursePage;
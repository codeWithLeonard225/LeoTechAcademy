import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from "../../../../firebase"; // adjust path if needed
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// --- Function to Fetch Course Details (remains unchanged) ---
const getCourseDetails = async (courseId) => {
    try {
        const paidCourseDocRef = doc(db, 'paidCourses', courseId);
        const paidCourseDocSnap = await getDoc(paidCourseDocRef);

        if (paidCourseDocSnap.exists()) {
            return { id: paidCourseDocSnap.id, ...paidCourseDocSnap.data(), isFree: false };
        }

        const freeCourseDocRef = doc(db, 'freeCourse', courseId);
        const freeCourseDocSnap = await getDoc(freeCourseDocRef);

        if (freeCourseDocSnap.exists()) {
            return { id: freeCourseDocSnap.id, ...freeCourseDocSnap.data(), isFree: true };
        }

        console.warn(`Course with ID ${courseId} not found.`);
        return null;
    } catch (error) {
        console.error(`Error fetching course with ID ${courseId}:`, error);
        return null;
    }
};

// --- CoursePage Component ---
const CoursePage = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [activeWeek, setActiveWeek] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Define the maximum view count for a video
    const MAX_VIDEO_VIEWS = 10;

    // --- useEffect for Initial Data Fetch ---
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
                        const userProgress = userData.userProgress?.[courseId];
                        if (userProgress && userProgress.lastAccessedWeek) {
                            setActiveWeek(userProgress.lastAccessedWeek);
                        } else {
                            setActiveWeek(1); // Default to week 1 if no progress
                        }
                    } else {
                        console.warn(`Course with ID: "${courseId}" not found in Firebase. Redirecting.`);
                        navigate('/courses');
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

    // --- Helper function to update userProgress in Firestore and local state ---
    const updateFirestoreUserProgress = async (newProgress) => {
        if (!currentUser || !currentUser.id) {
            console.error('Cannot update user progress: User ID is missing.');
            toast.error('Error: User not identified for progress update.');
            return;
        }

        try {
            const userDocRef = doc(db, 'Users', currentUser.id);
            await updateDoc(userDocRef, {
                userProgress: newProgress
            });
            // Update local currentUser state after successful Firestore update
            setCurrentUser(prevUser => ({
                ...prevUser,
                userProgress: newProgress
            }));
            // No toast.success here, as individual functions will toast specific messages
            console.log('User progress updated in Firestore successfully!');
        } catch (firebaseError) {
            console.error('Error updating user progress in Firestore:', firebaseError);
            toast.error('Failed to save progress. Please try again.');
        }
    };

    // --- Mark Content Complete (Adjusted for video completion by views) ---
    const markContentComplete = async (weekNumber, contentType, itemIdentifier) => {
        if (!currentUser || !course || !currentUser.id) {
            toast.error('Cannot mark content complete: User data missing or User ID not found.');
            console.warn('Cannot mark content complete: currentUser, course data, or currentUser.id is missing.');
            return;
        }

        const updatedUserProgress = JSON.parse(JSON.stringify(currentUser.userProgress || {}));
        if (!updatedUserProgress[courseId]) {
            updatedUserProgress[courseId] = { completedWeeks: [], lastAccessedWeek: 0, completedItems: {}, videoWatchCounts: {}, videosWatchedOnce: {} }; // Added videosWatchedOnce here
        }
        const courseProgress = updatedUserProgress[courseId];

        // Ensure completedItems structure exists
        if (!courseProgress.completedItems) courseProgress.completedItems = {};
        if (!courseProgress.completedItems[weekNumber]) courseProgress.completedItems[weekNumber] = {};
        if (!courseProgress.completedItems[weekNumber][contentType]) courseProgress.completedItems[weekNumber][contentType] = [];

        // If the item is already explicitly completed, do nothing
        if (courseProgress.completedItems[weekNumber][contentType].includes(itemIdentifier)) {
            console.log(`${itemIdentifier} in week ${weekNumber} already explicitly marked complete.`);
            // No return here, as we still want to save potential videoWatchCounts updates
        } else {
            // Add item to completed list if it's a new completion (e.g., video reaching MAX_VIDEO_VIEWS)
            courseProgress.completedItems[weekNumber][contentType].push(itemIdentifier);
            courseProgress.completedItems[weekNumber][contentType].sort(); // Keep completed items sorted
        }


        // Find the current week's data from the course to calculate total videos in the week
        const currentWeekData = course.weeklyContent?.find(w => w.week === weekNumber);

        let allVideosInWeekWatchedOnce = true; // Changed from allVideosInWeekComplete
        let totalVideosInWeek = 0;

        const videosInWeek = currentWeekData?.videos || [];
        totalVideosInWeek += videosInWeek.length;

        // Check completion status for all videos in the week (considering videosWatchedOnce)
        videosInWeek.forEach(video => {
            const identifier = video.title;
            // Check if the video has been marked as watched at least once
            if (!courseProgress.videosWatchedOnce?.[weekNumber]?.[identifier]) {
                allVideosInWeekWatchedOnce = false;
            }
        });

        // Mark the entire week as complete if all its videos are watched at least once and it's not already marked
        if (allVideosInWeekWatchedOnce && totalVideosInWeek > 0 && !courseProgress.completedWeeks.includes(weekNumber)) {
            courseProgress.completedWeeks.push(weekNumber);
            courseProgress.completedWeeks.sort((a, b) => a - b); // Keep completed weeks sorted
            toast.success(`Week ${weekNumber} completed!`);
        }

        // Always update last accessed week
        courseProgress.lastAccessedWeek = weekNumber;

        // Persist changes to Firestore
        await updateFirestoreUserProgress(updatedUserProgress);
    };

    // --- handleVideoEnded function ---
    const handleVideoEnded = async (weekNumber, videoTitle) => {
        if (!currentUser || !course || !currentUser.id) {
            console.error('Cannot track video end: User data missing.');
            toast.error('Error tracking video: User not identified.');
            return;
        }

        const updatedUserProgress = JSON.parse(JSON.stringify(currentUser.userProgress || {}));
        if (!updatedUserProgress[courseId]) {
            updatedUserProgress[courseId] = { completedWeeks: [], lastAccessedWeek: 0, completedItems: {}, videoWatchCounts: {}, videosWatchedOnce: {} };
        }
        const courseProgress = updatedUserProgress[courseId];

        // Ensure videoWatchCounts and videosWatchedOnce structures exist
        if (!courseProgress.videoWatchCounts) courseProgress.videoWatchCounts = {};
        if (!courseProgress.videoWatchCounts[weekNumber]) courseProgress.videoWatchCounts[weekNumber] = {};
        if (!courseProgress.videosWatchedOnce) courseProgress.videosWatchedOnce = {};
        if (!courseProgress.videosWatchedOnce[weekNumber]) courseProgress.videosWatchedOnce[weekNumber] = {};


        const currentCount = courseProgress.videoWatchCounts[weekNumber][videoTitle] || 0;
        const hasBeenWatchedOnce = courseProgress.videosWatchedOnce[weekNumber][videoTitle];
        const isVideoFullyRestricted = currentCount >= MAX_VIDEO_VIEWS; // Check if max views already reached

        // If the video has already reached MAX_VIDEO_VIEWS, do not increment count or show new toast
        if (isVideoFullyRestricted) {
            console.log(`Video "${videoTitle}" in week ${weekNumber} has already reached max views.`);
            return;
        }

        const newCount = currentCount + 1;
        courseProgress.videoWatchCounts[weekNumber][videoTitle] = newCount;

        // Mark as "watched for progress" on the first view to end
        if (!hasBeenWatchedOnce) {
            courseProgress.videosWatchedOnce[weekNumber][videoTitle] = true;
            // Call markContentComplete to trigger week completion check based on first watch
            await markContentComplete(weekNumber, 'videos', videoTitle); // Pass itemIdentifier for consistent call
            toast.success(`"${videoTitle}" watched for the first time!`);
        }

        // If the new count reaches MAX_VIDEO_VIEWS, also mark it as explicitly complete for control disabling
        if (newCount >= MAX_VIDEO_VIEWS) {
            // This is when the video controls should be disabled
            if (!courseProgress.completedItems?.[weekNumber]?.videos?.includes(videoTitle)) {
                await markContentComplete(weekNumber, 'videos', videoTitle); // This will add it to completedItems
                toast.success(`"${videoTitle}" completed all ${MAX_VIDEO_VIEWS} views.`);
            }
        } else {
            // Only show info toast if not the first watch AND not yet maxed out
            if (newCount > 0 && newCount < MAX_VIDEO_VIEWS && hasBeenWatchedOnce) { // Check hasBeenWatchedOnce to avoid double toast with first watch
                toast.info(`You have ${MAX_VIDEO_VIEWS - newCount} views remaining for "${videoTitle}".`);
            }
            await updateFirestoreUserProgress(updatedUserProgress); // Save the incremented count
        }
    };


    // --- Other functions (remains unchanged) ---
    const toggleWeek = (weekNumber) => {
        setActiveWeek(activeWeek === weekNumber ? null : weekNumber);
    };

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        navigate('/login');
    };

    // --- Loading and Error States (remains unchanged) ---
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
                    onClick={() => navigate('/courses')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                    Go to Courses
                </button>
            </div>
        );
    }

    if (!course || !currentUser) {
        return null;
    }

    // --- Progress Calculations (Adjusted for video count in weekly progress) ---
    const totalWeeks = course.weeklyContent?.length || 0;
    // Overall progress is based on weeks explicitly marked as complete (meaning all videos in them watched at least once)
    const completedWeeksCount = currentUser.userProgress?.[course.id]?.completedWeeks?.length || 0;
    const overallProgressPercentage = totalWeeks > 0 ? Math.round((completedWeeksCount / totalWeeks) * 100) : 0;

    // Ensure userCourseProgress is initialized correctly for display
    const userCourseProgress = currentUser.userProgress?.[course.id] || {
        completedWeeks: [],
        lastAccessedWeek: 0,
        completedItems: {},
        videoWatchCounts: {},
        videosWatchedOnce: {} // Initialize here
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            <ToastContainer position="bottom-right" autoClose={5000} />

            {/* Header (remains unchanged) */}
            <header className="bg-white shadow-md p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-center mb-2 sm:mb-0">
                    <Link
                        to="/distanceDashboard"
                        className="text-blue-600 hover:text-blue-800 font-semibold text-base sm:text-lg mr-4"
                    >
                        ← Back to Dashboard
                    </Link>
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

            {/* Main Content Area (remains unchanged, except for userCourseProgress passing) */}
            <div className="container mx-auto p-4 lg:p-10">
                {/* Course Header Section (Image, Title, Description, Details, Progress) - unchanged */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6 sm:mb-8 flex flex-col lg:flex-row items-center border border-gray-100">
                    <img
                        src={course.image}
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
                            const currentWeekUserProgress = userCourseProgress.completedItems?.[weekData.week];
                            const currentWeekVideoWatchCounts = userCourseProgress.videoWatchCounts?.[weekData.week] || {};
                            const currentWeekVideosWatchedOnce = userCourseProgress.videosWatchedOnce?.[weekData.week] || {};

                            let totalVideosInWeek = (weekData.videos || []).length;
                            let videosWatchedForProgress = 0; // Count videos watched at least once

                            (weekData.videos || []).forEach(video => {
                                const videoTitle = video.title;
                                // Check if the video has been marked as watched at least once for progress calculation
                                if (currentWeekVideosWatchedOnce[videoTitle]) {
                                    videosWatchedForProgress++;
                                }
                            });

                            // Week is complete if all videos have been watched at least once
                            const isWeekCompleteForProgress = totalVideosInWeek > 0 && videosWatchedForProgress === totalVideosInWeek;
                            const weeklyProgressPercentage = totalVideosInWeek > 0
                                ? Math.round((videosWatchedForProgress / totalVideosInWeek) * 100)
                                : 0;

                            const isWeekActive = activeWeek === weekData.week;

                            return (
                                <div key={weekData.week} id={`week-${weekData.week}`} className="border-b border-gray-200 last:border-b-0">
                                    <button
                                        className="flex justify-between items-center w-full py-3 sm:py-4 text-left font-semibold text-lg sm:text-xl text-gray-800 hover:text-blue-600"
                                        onClick={() => toggleWeek(weekData.week)}
                                    >
                                        <span>Week {weekData.week}: {weekData.title}</span>
                                        <div className="flex items-center">
                                            {/* Display COMPLETED badge based on videos watched at least once */}
                                            {isWeekCompleteForProgress && (
                                                <span className="text-green-500 text-xs sm:text-sm font-bold mr-2">COMPLETED</span>
                                            )}
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
                                            {/* Lessons Section - No changes here, still manual mark complete */}
                                            {weekData.lessons && weekData.lessons.length > 0 && (
                                                <div className="mb-3 sm:mb-4">
                                                    <h4 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 text-gray-700">Lessons:</h4>
                                                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2">
                                                        {weekData.lessons.map((lesson, index) => {
                                                            return (
                                                                <li key={index} className="flex items-center text-sm sm:text-base text-gray-600">
                                                                    <span className="mr-2">{'✅'}</span>
                                                                    {lesson}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Videos Section - UPDATED for watch count on ENDED */}
                                            {weekData.videos && weekData.videos.length > 0 && (
                                                <div className="mb-3 sm:mb-4">
                                                    <h4 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 text-gray-700">Video Lessons:</h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                                        {weekData.videos.map((video, index) => {
                                                            const videoTitle = video.title;
                                                            const currentVideoCount = userCourseProgress.videoWatchCounts?.[weekData.week]?.[videoTitle] || 0;
                                                            const isVideoComplete = userCourseProgress.completedItems?.[weekData.week]?.videos?.includes(videoTitle) || currentVideoCount >= MAX_VIDEO_VIEWS;

                                                            return (
                                                                <div key={index} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden relative">
                                                                    {/* Completion status badge/count display */}
                                                                    <div className="absolute top-2 right-2 z-10">
                                                                        {isVideoComplete ? (
                                                                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Completed</span>
                                                                        ) : (
                                                                            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                                                                Views: {currentVideoCount}/{MAX_VIDEO_VIEWS}
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                    <h5 className="text-white text-md font-semibold p-3 border-b border-gray-700">{video.title}</h5>
                                                                    <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                                                                        {video.url ? (
                                                                            <video
                                                                                controls={!isVideoComplete}
                                                                                className="absolute inset-0 w-full h-full object-contain"
                                                                                poster="/images/video-placeholder.jpg"
                                                                                preload="metadata"
                                                                                // *** CHANGED FROM onPlay TO onEnded ***
                                                                                onEnded={() => !isVideoComplete && handleVideoEnded(weekData.week, video.title)}
                                                                                controlsList={isVideoComplete ? "nodownload nofullscreen noremoteplayback" : "nodownload"}
                                                                                muted={isVideoComplete}
                                                                            >
                                                                                {!isVideoComplete ? (
                                                                                    <source src={video.url} type="video/mp4" />
                                                                                ) : (
                                                                                    <div className="absolute inset-0 flex items-center justify-center text-white text-center bg-black bg-opacity-75">
                                                                                        Video completed.
                                                                                    </div>
                                                                                )}
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

                                            {/* Readings & Quiz Section - MODIFIED TO INCLUDE QUIZ */}
                                            {(weekData.readings && weekData.readings.length > 0) || weekData.quizId ? (
                                                <div className="mb-3 sm:mb-4">
                                                    <h4 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 text-gray-700">Notes & Quiz:</h4>
                                                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2">
                                                        {weekData.readings && weekData.readings.length > 0 && weekData.readings.map((reading, index) => {
                                                            const readingTitle = typeof reading === 'object' ? reading.title : reading;
                                                            const readingUrl = typeof reading === 'object' && reading.url ? reading.url : '#';
                                                            return (
                                                                <li key={index} className="flex items-center text-sm sm:text-base text-gray-600">
                                                                    <span className="mr-2">➡️</span>
                                                                    {readingUrl !== '#' ? (
                                                                        <Link to={readingUrl} className="text-blue-600 hover:underline">
                                                                            {readingTitle}
                                                                        </Link>
                                                                    ) : (
                                                                        <span>{readingTitle}</span>
                                                                    )}
                                                                </li>
                                                            );
                                                        })}
                                                        {/* Add the Quiz Link Here */}
                                                        {weekData.quizId && (
                                                            <li className="flex items-center text-sm sm:text-base text-gray-600 font-bold">
                                                                <span className="mr-2">💡</span> {/* Optional: Use an emoji for quizzes */}
                                                                <Link
                                                                    // Construct the quiz URL dynamically
                                                                    to={`/quiz/${weekData.quizId}`}
                                                                    className="text-purple-600 hover:underline"
                                                                >
                                                                    Take Quiz for Week {weekData.week}
                                                                </Link>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </div>
                                            ) : null}


                                            {/* Assignments Section (remains unchanged) */}
                                            {weekData.assignments && weekData.assignments.length > 0 && (
                                                <div className="mb-3 sm:mb-4">
                                                    <h4 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 text-gray-700">Assignments:</h4>
                                                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2">
                                                        {weekData.assignments.map((assignment, index) => {
                                                            const assignmentTitle = typeof assignment === 'object' && assignment.title ? assignment.title : assignment;
                                                            const assignmentUrl = typeof assignment === 'object' && assignment.url ? assignment.url : '#';
                                                            return (
                                                                <li key={index} className="flex items-center text-sm sm:text-base text-gray-600">
                                                                    <span className="mr-2">⬇️</span>
                                                                    {assignmentUrl !== '#' ? (
                                                                        <Link to={assignmentUrl} className="text-blue-600 hover:underline">
                                                                            {assignmentTitle}
                                                                        </Link>
                                                                    ) : (
                                                                        <span>{assignmentTitle}</span>
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

export default CoursePage;
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
    const [activeWeek, setActiveWeek] = useState(null); // Still needed for logic, even if not rendered
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
                        const userProgress = userData.userProgress?.[courseId];
                        if (userProgress && userProgress.lastAccessedWeek) {
                            setActiveWeek(userProgress.lastAccessedWeek);
                        } else {
                            setActiveWeek(1); // Default to week 1 if no progress
                        }
                    } else {
                        console.warn(`Course with ID: "${courseId}" not found in Firebase. Redirecting to general courses list.`);
                        navigate('/courses'); // Redirect to a general courses list if not found
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

    // toggleWeek and markContentComplete are kept for future functionality,
    // even though the weekly content isn't rendered in this version.
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
            updatedUserProgress[courseId] = { completedWeeks: [], lastAccessedWeek: 0, completedItems: {} };
        }

        const courseProgress = updatedUserProgress[courseId];

        if (!courseProgress.completedItems) courseProgress.completedItems = {};
        if (!courseProgress.completedItems[weekNumber]) courseProgress.completedItems[weekNumber] = {};
        if (!courseProgress.completedItems[weekNumber][contentType]) courseProgress.completedItems[weekNumber][contentType] = [];

        if (!courseProgress.completedItems[weekNumber][contentType].includes(itemIdentifier)) {
            courseProgress.completedItems[weekNumber][contentType].push(itemIdentifier);
            courseProgress.completedItems[weekNumber][contentType].sort();
        } else {
            return; // Already marked complete
        }

        const currentWeekData = course.weeklyContent?.find(w => w.week === weekNumber);

        let allItemsInWeekComplete = true;
        let totalItemsInWeek = 0;

        ['lessons', 'readings', 'assignments'].forEach(type => {
            const itemsOfType = currentWeekData?.[type] || [];
            totalItemsInWeek += itemsOfType.length;

            itemsOfType.forEach(item => {
                const identifier = (typeof item === 'object' && item !== null && item.title) ? item.title : item;
                if (!courseProgress.completedItems[weekNumber]?.[type]?.includes(identifier)) {
                    allItemsInWeekComplete = false;
                }
            });
        });

        if (allItemsInWeekComplete && totalItemsInWeek > 0 && !courseProgress.completedWeeks.includes(weekNumber)) {
            courseProgress.completedWeeks.push(weekNumber);
            courseProgress.completedWeeks.sort((a, b) => a - b);
        }

        courseProgress.lastAccessedWeek = weekNumber;

        setCurrentUser(prevUser => ({
            ...prevUser,
            userProgress: updatedUserProgress
        }));

        try {
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

    const totalWeeks = course.weeklyContent?.length || 0;
    const completedWeeksCount = currentUser.userProgress?.[course.id]?.completedWeeks?.length || 0;
    const overallProgressPercentage = totalWeeks > 0 ? Math.round((completedWeeksCount / totalWeeks) * 100) : 0;

    const userCourseProgress = currentUser.userProgress?.[course.id] || { completedWeeks: [], lastAccessedWeek: 0, completedItems: {} };

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

                {/* This is where the weekly course content (accordion) would go in a future step */}
                {/* For now, it's an empty space as requested */}
            </div>
        </div>
    );
};

export default InPersonCoursePage;
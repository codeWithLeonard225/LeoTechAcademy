import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from "../../../../firebase";
import { doc, getDoc } from 'firebase/firestore';

// Fetch course from either 'InPersonCourses' or 'freeCourse'
const getCourseDetails = async (courseId) => {
    try {
        const inPersonCourseDocRef = doc(db, 'InPersonCourses', courseId);
        const inPersonCourseDocSnap = await getDoc(inPersonCourseDocRef);

        if (inPersonCourseDocSnap.exists()) {
            return { id: inPersonCourseDocSnap.id, ...inPersonCourseDocSnap.data(), isFree: false };
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

const InPersonDashboard = () => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(null);
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserDataAndCourses = async () => {
            setLoading(true);
            setError(null);
            try {
                const storedUser = localStorage.getItem('loggedInUser');
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    setCurrentUser(parsedUser);

                    if (parsedUser.enrolledCourseIds && parsedUser.enrolledCourseIds.length > 0) {
                        const coursePromises = parsedUser.enrolledCourseIds.map(async (courseId) => {
                            return getCourseDetails(courseId);
                        });

                        const courses = await Promise.all(coursePromises);
                        // Filter out any null courses (i.e., courses that weren't found in either collection)
                        setEnrolledCourses(courses.filter(Boolean));
                    } else {
                        setEnrolledCourses([]); // User has no enrolled courses
                    }
                } else {
                    navigate('/login'); // No logged-in user, redirect to login
                }
            } catch (err) {
                setError('Failed to load user data or enrolled courses. Please try again.');
                console.error('Error in fetchUserDataAndCourses:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserDataAndCourses();
    }, [navigate]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-gray-700 text-lg">Loading user data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <p className="text-red-700 text-lg mb-4">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                    Retry
                </button>
            </div>
        );
    }

    if (!currentUser) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-gray-700 text-lg">User not logged in. Redirecting...</p>
            </div>
        );
    }

   const enrolledCoursesWithProgress = enrolledCourses.map((course) => {
    // Ensure course.weeklyContent is an array
    const totalWeeks = Array.isArray(course.weeklyContent) ? course.weeklyContent.length : 0;

    // Safely get user progress data or set defaults
    const userCourseProgress = currentUser.userProgress?.[course.id] || {
        completedWeeks: [],
        lastAccessedWeek: 0,
    };

    // Safely get length of completedWeeks
    const completedWeeksCount = Array.isArray(userCourseProgress.completedWeeks)
        ? userCourseProgress.completedWeeks.length
        : 0;

    const progressPercentage = totalWeeks > 0
        ? Math.round((completedWeeksCount / totalWeeks) * 100)
        : 0;

    return {
        ...course,
        completedWeeksCount,
        totalWeeks,
        progressPercentage,
    };
});


    const freeCourses = enrolledCoursesWithProgress.filter((course) => course.isFree);
    const userPaidCourses = enrolledCoursesWithProgress.filter((course) => !course.isFree);

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        navigate('/login');
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen font-sans">
            {/* User Profile Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-2xl shadow-lg p-8 mb-10 border border-gray-100">
                <img
                    src={currentUser.profilePhoto}
                    alt={currentUser.username}
                    className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md mb-4 md:mb-0 md:mr-6 object-cover"
                />
                <div>
                    <h2 className="text-3xl font-extrabold text-blue-800 mb-2">{currentUser.username}'s Dashboard</h2>
                    <p className="text-gray-700 text-lg"><span className="font-semibold">ID:</span> {currentUser.id}</p>
                    <p className="text-gray-700 text-lg"><span className="font-semibold">Email:</span> {currentUser.email}</p>
                    <p className="text-gray-700 text-lg"><span className="font-semibold">Phone:</span> {currentUser.tel}</p>
                    <p className="text-gray-700 text-lg"><span className="font-semibold">Address:</span> {currentUser.address}</p>
                    <button
                        onClick={handleLogout}
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                    >
                        Log Out
                    </button>
                </div>
            </div>

            ---

            {/* Courses Section */}
            <h3 className="text-3xl font-bold text-blue-800 mb-8 text-center relative">
                <span className="relative z-10">My Enrolled Courses</span>
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-2 bg-green-500 rounded-full z-0"></span>
            </h3>

            {/* Free Courses */}
            <div className="mb-10">
                <h4 className="text-2xl font-bold text-green-600 mb-6 border-b-2 border-green-300 pb-2">Free Courses</h4>
                {freeCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {freeCourses.map((course) => (
                            <Link
                                key={course.id}
                                to={`/inPerson-courses/${course.id}`}
                                className="block bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 p-6 border-l-4 border-green-500"
                            >
                                <h5 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h5>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                                <p className="text-xs text-gray-500 mb-3">Duration: {course.duration}</p>
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div
                                        className="bg-blue-500 h-4 rounded-full text-xs text-white flex items-center justify-center font-semibold"
                                        style={{ width: `${course.progressPercentage}%` }}
                                    >
                                        {course.progressPercentage}%
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-2 text-center">
                                    Completed {course.completedWeeksCount} of {course.totalWeeks} weeks
                                </p>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="p-6 bg-white rounded-xl shadow text-gray-700 italic text-center">
                        You are not enrolled in any free courses.{' '}
                        <Link to="/courses" className="text-blue-600 hover:underline">Explore free offerings!</Link>
                    </div>
                )}
            </div>

            ---

            {/* Paid Courses */}
            <div>
                <h4 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-300 pb-2">Paid Courses</h4>
                {userPaidCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {userPaidCourses.map((course) => (
                            <Link
                                key={course.id}
                                to={`/inPerson-courses/${course.id}`}
                                className="block bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 p-6 border-l-4 border-blue-500"
                            >
                                <h5 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h5>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                                <p className="text-xs text-gray-500 mb-3">Duration: {course.duration}</p>
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div
                                        className="bg-green-600 h-4 rounded-full text-xs text-white flex items-center justify-center font-semibold"
                                        style={{ width: `${course.progressPercentage}%` }}
                                    >
                                        {course.progressPercentage}%
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-2 text-center">
                                    Completed {course.completedWeeksCount} of {course.totalWeeks} weeks
                                </p>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="p-6 bg-white rounded-xl shadow text-gray-700 italic text-center">
                        You are not enrolled in any paid courses.{' '}
                        <Link to="/courses" className="text-blue-600 hover:underline">Explore paid offerings!</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InPersonDashboard;
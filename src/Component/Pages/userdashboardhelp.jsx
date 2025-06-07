// src/pages/UserDashboard.jsx
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import { paidCourses } from './data/paidCourses'; // Import paid courses
import { allCourses } from './data/allCourses';   // Correct path if needed
import { users } from '../Pages/Userdb'; // Import multiple users
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate



// Helper function to get course details from either array
const getCourseDetails = (courseId) => {
  let course = paidCourses.find((c) => c.id === courseId);
  if (course) return { ...course, isFree: false };

  course = allCourses.find((c) => c.id === courseId);
  if (course) return { ...course, isFree: true };

  return null;
};

const UserDashboard = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null); // Use state to manage current user

  // Use useEffect to retrieve user data on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      // Optional: Verify the user ID against your mock database if needed
      // const foundInDb = users.find(user => user.id === parsedUser.id);
      // if (foundInDb) {
      //   setCurrentUser(foundInDb); // Use data from DB if you want to ensure consistency
      // } else {
      //   // Handle case where user ID in localStorage isn't found in mock DB
      //   localStorage.removeItem('loggedInUser');
      //   navigate('/login');
      // }
      setCurrentUser(parsedUser); // For simplicity, trust localStorage for mock
    } else {
      // If no user in localStorage, redirect to login page
      navigate('/login');
    }
  }, [navigate]); // Depend on navigate to prevent linting warnings

  // Render a loading state or redirect if currentUser is not yet set
  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700 text-lg">Loading user data...</p>
      </div>
    );
  }

  // --- Rest of your existing logic, now using `currentUser` ---
  const enrolledCoursesWithProgress = currentUser.enrolledCourseIds
    .map((courseId) => {
      const course = getCourseDetails(courseId);
      if (!course) {
        console.warn(`Course data for ID: ${courseId} not found in either paidCourses or allCourses.`);
        return { id: courseId, missing: true, isFree: false, title: `Unknown Course (${courseId})` }; // Add title for display
      }

      const totalWeeks = typeof course.totalWeeks === 'number' ? course.totalWeeks : 0;
      const userCourseProgress = currentUser.userProgress[courseId] || { completedWeeks: [], lastAccessedWeek: 0 };
      const completedWeeksCount = userCourseProgress.completedWeeks.length;

      const progressPercentage = totalWeeks > 0 ? Math.round((completedWeeksCount / totalWeeks) * 100) : 0;

      return {
        ...course,
        completedWeeksCount,
        totalWeeks,
        progressPercentage,
      };
    })
    .filter(Boolean); // Filter out any null returns if getCourseDetails returned null

  const freeCourses = enrolledCoursesWithProgress.filter((course) => course.isFree && !course.missing);
  const userPaidCourses = enrolledCoursesWithProgress.filter((course) => !course.isFree && !course.missing);
  const missingCourses = enrolledCoursesWithProgress.filter(course => course.missing);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); // Remove user from localStorage
    navigate('/login'); // Redirect to login page
  };


  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans">
      {/* User Info */}
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

      {/* --- My Enrolled Courses Section --- */}
      <h3 className="text-3xl font-bold text-blue-800 mb-8 text-center relative">
        <span className="relative z-10">My Enrolled Courses</span>
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-2 bg-green-500 rounded-full z-0"></span>
      </h3>

      {/* Display Missing Courses (if any) */}
      {missingCourses.length > 0 && (
        <div className="mb-10">
          <h4 className="text-2xl font-bold text-red-600 mb-6 border-b-2 border-red-300 pb-2">Missing Course Data for Enrolled IDs</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missingCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500 text-red-700 flex flex-col justify-between"
              >
                <p className="font-semibold text-lg">Course Not Found:</p>
                <p className="text-md italic">{course.id}</p>
                <p className="text-sm mt-2">
                  This course ID ({course.id}) is in the user's enrollment list but its data is not in `paidCourses.js` or `allCourses.js`.
                </p>
              </div>
            ))}
          </div>
        </div>
      )}


      {/* Free Courses */}
      <div className="mb-10">
        <h4 className="text-2xl font-bold text-green-600 mb-6 border-b-2 border-green-300 pb-2">Free Courses</h4>
        {freeCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeCourses.map((course) => (
              <Link
                key={course.id}
                to={`/my-courses/${course.id}`}
                className="block bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out p-6 border-l-4 border-green-500 flex flex-col justify-between"
              >
                <div>
                  <h5 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h5>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  <p className="text-xs text-gray-500 mb-3">Duration: {course.duration}</p>
                </div>
                <div className="mt-auto">
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
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-6 bg-white rounded-xl shadow border border-gray-100 text-gray-700 italic text-center">
            You are not currently enrolled in any free courses. <Link to="/courses" className="text-blue-600 hover:underline">Explore our free offerings!</Link>
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
                to={`/my-courses/${course.id}`}
                className="block bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out p-6 border-l-4 border-blue-500 flex flex-col justify-between"
              >
                <div>
                  <h5 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h5>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  <p className="text-xs text-gray-500 mb-3">Duration: {course.duration}</p>
                </div>
                <div className="mt-auto">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-green-500 h-4 rounded-full text-xs text-white flex items-center justify-center font-semibold"
                      style={{ width: `${course.progressPercentage}%` }}
                    >
                      {course.progressPercentage}%
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Completed {course.completedWeeksCount} of {course.totalWeeks} weeks
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-6 bg-white rounded-xl shadow border border-gray-100 text-gray-700 italic text-center">
            You are not currently enrolled in any paid courses. <Link to="/courses" className="text-blue-600 hover:underline">Browse our premium courses!</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
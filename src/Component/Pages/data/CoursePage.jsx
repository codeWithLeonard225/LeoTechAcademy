import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions
import { db } from "../../../../firebase"; // adjust path if needed

const CoursePage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeWeek, setActiveWeek] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null); // Add an error state

  useEffect(() => {
    const fetchCourseAndUser = async () => {
      setLoading(true); // Start loading
      setError(null); // Clear previous errors

      const storedUser = localStorage.getItem('loggedInUser');
      if (!storedUser) {
        navigate('/login');
        return;
      }

      const parsedUser = JSON.parse(storedUser);
      setCurrentUser(parsedUser);

      try {
        // First, try fetching from 'paidCourses' collection
        let courseDocRef = doc(db, 'paidCourses', courseId);
        let courseDocSnap = await getDoc(courseDocRef);

        let foundCourse = null;

        if (courseDocSnap.exists()) {
          foundCourse = { id: courseDocSnap.id, ...courseDocSnap.data() };
        } else {
          // If not found in paidCourses, try 'freeCourse' collection
          // NOTE: Your Firebase structure screenshot showed 'freeCourse' (singular)
          // Ensure consistency with your actual collection name.
          courseDocRef = doc(db, 'freeCourse', courseId);
          courseDocSnap = await getDoc(courseDocRef);
          if (courseDocSnap.exists()) {
            foundCourse = { id: courseDocSnap.id, ...courseDocSnap.data() };
          }
        }

        if (foundCourse) {
          setCourse(foundCourse);
          const userProgress = parsedUser.userProgress?.[courseId];
          if (userProgress && userProgress.lastAccessedWeek) {
            setActiveWeek(userProgress.lastAccessedWeek);
          } else {
            setActiveWeek(1);
          }
        } else {
          console.warn(`Course with ID: "${courseId}" not found in Firebase. Redirecting.`);
          navigate('/courses'); // Or a 'course not found' page
        }
      } catch (err) {
        console.error("Error fetching course from Firebase:", err);
        setError("Failed to load course. Please try again.");
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchCourseAndUser();
  }, [courseId, navigate]); // Depend on courseId and navigate

  const toggleWeek = (weekNumber) => {
    setActiveWeek(activeWeek === weekNumber ? null : weekNumber);
  };

  const markLessonComplete = (weekNumber, lessonTitle) => {
    if (!currentUser || !course) {
      console.warn('Cannot mark lesson complete: currentUser or course data is missing.');
      return;
    }

    const updatedUser = { ...currentUser };
    if (!updatedUser.userProgress) {
      updatedUser.userProgress = {};
    }
    if (!updatedUser.userProgress[courseId]) {
      updatedUser.userProgress[courseId] = { completedWeeks: [], lastAccessedWeek: 0, completedLessons: {} };
    }

    const courseProgress = updatedUser.userProgress[courseId];

    if (!courseProgress.completedLessons) {
      courseProgress.completedLessons = {};
    }
    if (!courseProgress.completedLessons[weekNumber]) {
      courseProgress.completedLessons[weekNumber] = [];
    }

    if (!courseProgress.completedLessons[weekNumber].includes(lessonTitle)) {
      courseProgress.completedLessons[weekNumber].push(lessonTitle);
    }

    // Ensure course.weeklyContent exists before trying to find
    const currentWeekData = course.weeklyContent?.find(w => w.week === weekNumber);

    const allLessonsInWeekCompleted =
      currentWeekData &&
      currentWeekData.lessons && // Check if lessons array exists
      currentWeekData.lessons.every(lesson =>
        courseProgress.completedLessons[weekNumber].includes(lesson)
      );

    if (allLessonsInWeekCompleted && !courseProgress.completedWeeks.includes(weekNumber)) {
      courseProgress.completedWeeks.push(weekNumber);
      courseProgress.completedWeeks.sort((a, b) => a - b);
    }

    courseProgress.lastAccessedWeek = weekNumber;

    localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
    setCurrentUser(updatedUser);
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
          onClick={() => navigate('/courses')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Go to Courses
        </button>
      </div>
    );
  }

  if (!course || !currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700 text-lg">Course data not available or user not logged in.</p>
      </div>
    );
  }

  const totalWeeks = course.weeklyContent?.length || 0;
  const completedWeeksCount = currentUser.userProgress?.[course.id]?.completedWeeks?.length || 0;
  const overallProgressPercentage = totalWeeks > 0 ? Math.round((completedWeeksCount / totalWeeks) * 100) : 0;

  const userCourseProgress = currentUser.userProgress?.[course.id] || { completedWeeks: [], lastAccessedWeek: 0, completedLessons: {} };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header with Back to Dashboard and Logout Button */}
      <header className="bg-white shadow-md p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center">
        <Link
          to="/dashboard"
          className="text-blue-600 hover:text-blue-800 font-semibold text-base sm:text-lg mb-2 sm:mb-0"
        >
          ← Back to Dashboard
        </Link>
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
              const isWeekComplete = userCourseProgress.completedWeeks.includes(weekData.week);
              const isWeekActive = activeWeek === weekData.week;

              return (
                <div key={weekData.week} id={`week-${weekData.week}`} className="border-b border-gray-200 last:border-b-0">
                  <button
                    className="flex justify-between items-center w-full py-3 sm:py-4 text-left font-semibold text-lg sm:text-xl text-gray-800 hover:text-blue-600"
                    onClick={() => toggleWeek(weekData.week)}
                  >
                    <span>Week {weekData.week}: {weekData.title}</span>
                    {isWeekComplete && (
                      <span className="text-green-500 text-xs sm:text-sm font-bold ml-2">COMPLETED</span>
                    )}
                    <span className="text-xl sm:text-2xl">{isWeekActive ? '-' : '+'}</span>
                  </button>
                  {isWeekActive && (
                    <div className="p-3 sm:p-4 bg-gray-50 border-t border-gray-200">
                      {/* Lessons Section */}
                      {weekData.lessons && weekData.lessons.length > 0 && (
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 text-gray-700">Lessons:</h4>
                          <ul className="list-disc list-inside space-y-1.5 sm:space-y-2">
                            {weekData.lessons.map((lesson, index) => {
                              const isLessonComplete = userCourseProgress.completedLessons?.[weekData.week]?.includes(lesson);
                              return (
                                <li key={index} className="flex items-center text-sm sm:text-base text-gray-600">
                                  <span className="mr-2">{isLessonComplete ? '✅' : '➡️'}</span>
                                  {lesson}
                                  {!isLessonComplete && (
                                    <button
                                      onClick={() => markLessonComplete(weekData.week, lesson)}
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

                      {/* Videos Section - UPDATED TO HANDLE EMPTY URL */}
                      {weekData.videos && weekData.videos.length > 0 && (
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 text-gray-700">Video Lessons:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                            {weekData.videos.map((video, index) => (
                              <div key={index} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
                                <h5 className="text-white text-md font-semibold p-3 border-b border-gray-700">{video.title}</h5>
                                <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                                  {video.url ? ( // <--- CONDITIONALLY RENDER VIDEO ONLY IF URL EXISTS
                                    <video
                                      controls
                                      className="absolute inset-0 w-full h-full object-contain"
                                      poster="/images/video-placeholder.jpg" // Optional: A placeholder image for videos
                                      preload="metadata" // Load video metadata
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
                            ))}
                          </div>
                          <p className="text-gray-700 text-xs sm:text-sm mt-3">
                            *If you have trouble playing a video, ensure your internet connection is stable or try a different browser.
                          </p>
                        </div>
                      )}

                      {/* Readings Section - UPDATED TO ACCESS 'title' */}
                      {weekData.readings && weekData.readings.length > 0 && (
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 text-gray-700">Readings:</h4>
                          <ul className="list-disc list-inside space-y-1.5 sm:space-y-2">
                            {weekData.readings.map((reading, index) => (
                              <li key={index} className="text-sm sm:text-base text-gray-600">
                                📚 {reading.title} {/* <--- ACCESS THE 'title' PROPERTY HERE */}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Assignments Section - UPDATED TO ACCESS 'title' and optionally 'url' */}
                      {weekData.assignments && weekData.assignments.length > 0 && (
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 text-gray-700">Assignments:</h4>
                          <ul className="list-disc list-inside space-y-1.5 sm:space-y-2">
                            {weekData.assignments.map((assignment, index) => (
                              <li key={index} className="text-sm sm:text-base text-gray-600">
                                📝 {assignment.title} {/* <--- ACCESS THE 'title' PROPERTY HERE */}
                                {assignment.url && ( // Optionally link to assignment if URL exists
                                  <a href={assignment.url} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 hover:underline">
                                    (Download)
                                  </a>
                                )}
                              </li>
                            ))}
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
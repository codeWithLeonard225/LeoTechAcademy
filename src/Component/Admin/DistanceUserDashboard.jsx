import { useState, useEffect } from "react";
import { db } from "../../../firebase"; // Adjust the path if necessary
import { Link, useNavigate } from "react-router-dom";
import { collection, onSnapshot, query } from "firebase/firestore";

export default function UserDashboard() {
  const [users, setUsers] = useState([]); // All fetched users
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State for username search
  const [selectedCourse, setSelectedCourse] = useState("all"); // State for course filter
  const [availableCourses, setAvailableCourses] = useState([]); // State to hold unique course IDs
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = () => {
      setLoading(true);
      const usersCollectionRef = collection(db, "Users");
      const usersQuery = query(usersCollectionRef);

      const unsubscribe = onSnapshot(usersQuery, (snapshot) => {
        const userList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);

        // Extract unique enrolledCourseIds from *all* users for the filter dropdown
        const courses = new Set();
        userList.forEach((user) => {
          if (user.enrolledCourseIds && Array.isArray(user.enrolledCourseIds)) {
            user.enrolledCourseIds.forEach((courseId) => {
              courses.add(courseId);
            });
          }
        });
        setAvailableCourses(Array.from(courses).sort());

        setLoading(false);
        console.log("Fetched and updated user data in real-time.");
      }, (err) => {
        console.error("Error fetching users:", err);
        setError("Failed to load user data. Please check your connection and Firestore rules.");
        setLoading(false);
      });

      return () => unsubscribe(); // Cleanup the listener
    };

    fetchUsers();
  }, []);

  // Filter users based on userType="distance", search term, and selected course
  const filteredUsers = users.filter((user) => {
    // 1. Only show users with userType "distance"
    if (user.userType !== "distance") {
      return false;
    }

    // 2. Filter by username search term
    const matchesSearchTerm = user.username
      ? user.username.toLowerCase().includes(searchTerm.toLowerCase())
      : false;

    // 3. Filter by enrolledCourseIds
    const matchesCourse =
      selectedCourse === "all" ||
      (user.enrolledCourseIds && user.enrolledCourseIds.includes(selectedCourse));

    return matchesSearchTerm && matchesCourse;
  });

  // Function to calculate user counts per course (for *filtered* users, which are only "distance")
  const getCourseCounts = () => {
    const counts = {};
    filteredUsers.forEach((user) => {
      if (user.enrolledCourseIds && Array.isArray(user.enrolledCourseIds)) {
        user.enrolledCourseIds.forEach((courseId) => {
          counts[courseId] = (counts[courseId] || 0) + 1;
        });
      }
    });
    return counts;
  };

  const courseCounts = getCourseCounts();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
        <p className="ml-4 text-xl text-gray-700">Loading user data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-red-100 text-red-700 p-4 rounded-lg shadow-md">
        <p className="text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 min-h-screen bg-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Distance Learning User Dashboard</h1>
        <Link
          to="/"
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-150 ease-in-out text-sm font-medium"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Column: Summary and Filters */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 sticky top-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview & Filters</h2>
            <div className="space-y-5">
              <div className="bg-indigo-50 p-4 rounded-lg shadow-inner">
                <p className="text-sm font-medium text-indigo-700">Total Distance Users (Filtered)</p>
                <p className="text-3xl font-bold text-indigo-900">{filteredUsers.length}</p>
              </div>

              {/* Username Search Filter */}
              <div>
                <label htmlFor="userSearch" className="block text-sm font-medium text-gray-700 mb-2">
                  Search by Username:
                </label>
                <input
                  type="text"
                  id="userSearch"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter username"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Course Filter */}
              <div>
                <label htmlFor="courseFilter" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Enrolled Course:
                </label>
                <select
                  id="courseFilter"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                >
                  <option value="all">All Enrolled Courses</option>
                  {availableCourses.map((courseId) => (
                    <option key={courseId} value={courseId}>
                      {courseId}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Users by Course (Filtered)</p>
                <div className="space-y-2">
                  {Object.keys(courseCounts).length > 0 ? (
                    Object.entries(courseCounts).map(([course, count]) => (
                      <div key={course} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <span className="text-sm font-medium text-gray-800">{course}</span>
                        <span className="text-lg font-semibold text-gray-900">{count}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm">No course enrollments found for this filter.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: User List */}
        <div className="md:col-span-3">
          {filteredUsers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredUsers.map((user) => (
                <Link key={user.id} to={`/students/${user.id}`} className="block">
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:border-indigo-400 transition-all duration-200 cursor-pointer h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-indigo-700 mb-2 truncate">
                        {user.username || "N/A"}
                      </h3>
                      <p className="text-gray-700 text-sm mb-1">
                        <span className="font-medium">Email:</span> {user.email || "N/A"}
                      </p>
                      <p className="text-gray-700 text-sm mb-1">
                        <span className="font-medium">Phone:</span> {user.tel || "N/A"}
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-medium">Type:</span> {user.userType || "N/A"}
                      </p>

                      {/* User Progress Details */}
                      {user.userProgress && Object.keys(user.userProgress).length > 0 && (
                        <div className="bg-gray-50 p-3 rounded-lg mt-3 border border-gray-100">
                          <h4 className="font-semibold text-gray-800 text-base mb-2">Course Progress:</h4>
                          {Object.entries(user.userProgress).map(([courseId, progress]) => (
                            <div key={courseId} className="mb-2 last:mb-0 border-b border-gray-100 pb-2 last:border-b-0">
                              <p className="text-sm font-semibold text-indigo-600 truncate">{courseId}</p>
                              <p className="text-xs text-gray-600 ml-2">
                                <span className="font-medium">Weeks Completed:</span>{" "}
                                {progress.completedWeeks && progress.completedWeeks.length > 0
                                  ? progress.completedWeeks.join(", ")
                                  : "None"}
                              </p>
                              <p className="text-xs text-gray-600 ml-2">
                                <span className="font-medium">Last Accessed Week:</span>{" "}
                                {progress.lastAccessedWeek || "N/A"}
                              </p>

                              {/* Video Watch Counts: Simple and Clear Display */}
                              {progress.videoWatchCounts && Object.keys(progress.videoWatchCounts).length > 0 && (
                                <div className="text-xs text-gray-600 ml-2 mt-1">
                                  <span className="font-medium">Video Views:</span>
                                  {Object.entries(progress.videoWatchCounts).map(([weekNum, videosInWeek]) => (
                                    <div key={weekNum} className="ml-2">
                                      <p className="font-semibold">Week {weekNum}:</p>
                                      {Object.entries(videosInWeek).map(([videoTitle, count]) => (
                                        <p key={videoTitle} className="ml-4">
                                          - {videoTitle}: {count} views
                                        </p>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-gray-500 text-xs mt-3">Click for more details</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <p className="text-center text-gray-600 text-lg">
                No distance learning users found matching the selected filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
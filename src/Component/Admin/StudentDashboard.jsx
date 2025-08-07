import { useState, useEffect } from "react";
// Assumes Firebase is initialized and exported from this path
import { db } from "../../../firebase"; 
import { Link, useNavigate } from "react-router-dom";
import { collection, onSnapshot, query } from "firebase/firestore";

export default function StudentDashboard() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // We use onSnapshot for real-time updates, which is more efficient for a dashboard.
    // It will automatically update whenever a student is added, removed, or changed.
    const fetchStudents = () => {
      setLoading(true);
      // The Firestore collection path matches your original code
      const studentsCollectionRef = collection(db, "Users");
      const studentsQuery = query(studentsCollectionRef);

      const unsubscribe = onSnapshot(studentsQuery, (snapshot) => {
        const studentList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStudents(studentList);
        setLoading(false);
        console.log("Fetched and updated student data in real-time.");
      }, (err) => {
        console.error("Error fetching students:", err);
        setError("Failed to load student data. Please check your connection and Firestore rules.");
        setLoading(false);
      });

      return () => unsubscribe(); // Cleanup the listener on component unmount
    };

    fetchStudents();
  }, []);

  // Function to calculate student counts per course
  const getCourseCounts = () => {
    const counts = {};
    if (students.length > 0) {
      students.forEach(student => {
        // We use inPersonClassIds to count enrollments, as per your data structure
        if (student.inPersonClassIds && Array.isArray(student.inPersonClassIds)) {
          student.inPersonClassIds.forEach(courseId => {
            counts[courseId] = (counts[courseId] || 0) + 1;
          });
        }
      });
    }
    return counts;
  };

  const courseCounts = getCourseCounts();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
        <p className="ml-4 text-xl text-gray-700">Loading student data...</p>
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
      <div className='flex items-center justify-between mb-4'>
        <h2 className="text-2xl font-semibold text-gray-800">Student Performance Dashboard</h2>
        <Link
          to="/"
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-150 ease-in-out text-sm font-medium"
        >
          ← Back to Home
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Column: Summary Dashboard */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard Overview</h2>
            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg shadow-inner">
                <p className="text-sm font-medium text-indigo-700">Total Students</p>
                <p className="text-3xl font-bold text-indigo-900">{students.length}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Students by Course</p>
                <div className="space-y-2">
                  {Object.keys(courseCounts).length > 0 ? (
                    Object.entries(courseCounts).map(([course, count]) => (
                      <div key={course} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <span className="text-sm font-medium text-gray-800">{course}</span>
                        <span className="text-lg font-semibold text-gray-900">{count}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm">No course enrollments found.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Student List */}
        <div className="md:col-span-3">
          {students.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {students.map(student => (
                <Link key={student.id} to={`/students/${student.id}`} className="block">
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:border-indigo-400 transition-all duration-200 cursor-pointer">
                    <h2 className="text-xl font-semibold text-indigo-700 mb-2">
                      {student.username || "N/A"}
                    </h2>
                    <p className="text-gray-700 text-sm mb-1">
                      <span className="font-medium">Email:</span> {student.email || "N/A"}
                    </p>
                    <p className="text-gray-700 text-sm">
                      <span className="font-medium">Phone:</span> {student.tel || "N/A"}
                    </p>
                    <p className="text-gray-500 text-xs mt-2">Click for more details</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <p className="text-center text-gray-600 text-lg">No student data found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// src/components/StudentDashboard.jsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase"; // Ensure this path is correct for your setup
import { Link } from "react-router-dom";

export default function StudentDashboard() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    async function fetchStudents() {
      try {
        setLoading(true); // Set loading true at the start of fetch
        const studentsCol = collection(db, "Users"); // Make sure "Users" matches your Firestore collection name
        const studentSnapshot = await getDocs(studentsCol);
        const studentList = studentSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStudents(studentList);
      } catch (err) {
        console.error("Error fetching students:", err);
        setError("Failed to load student data. Please check your connection.");
      } finally {
        setLoading(false); // Set loading false after fetch, regardless of success/failure
      }
    }
    fetchStudents();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Loading students...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-red-100 text-red-700 p-4">
        <p className="text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
        Student Performance Dashboard
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {students.length > 0 ? (
          students.map(student => (
            <Link key={student.id} to={`/students/${student.id}`} className="block">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-indigo-400 transition-all duration-200 ease-in-out cursor-pointer">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
                  {student.username || "N/A"}
                </h2>
                <p className="text-gray-700 text-sm mb-1">
                  <span className="font-medium">Email:</span> {student.email || "N/A"}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-medium">Phone:</span> {student.tel || "N/A"}
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  Click for more details
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg">No student data found.</p>
        )}
      </div>
    </div>
  );
}
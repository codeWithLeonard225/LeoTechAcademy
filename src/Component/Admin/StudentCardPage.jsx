// src/components/StudentCardPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase"; // Ensure this path is correct

export default function StudentCardPage() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStudent() {
      try {
        setLoading(true);
        const docRef = doc(db, "Users", id); // Make sure "Users" matches your Firestore collection name
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setStudent(docSnap.data());
        } else {
          setStudent(null);
          setError("Student not found.");
        }
      } catch (err) {
        console.error("Error fetching student:", err);
        setError("Failed to load student details. Please try again.");
      } finally {
        setLoading(false);
      }
    }
    fetchStudent();
  }, [id]); // Dependency array includes 'id' to refetch if the ID in the URL changes

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Loading student details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-red-100 text-red-700 p-4">
        <p className="text-xl">{error}</p>
        <Link to="/students" className="ml-4 text-blue-700 hover:underline">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="p-4 text-center text-gray-700">
        <p className="text-xl mb-4">Student not found.</p>
        <Link to="/students" className="text-blue-500 hover:underline">
          ← Back to Dashboard
        </Link>
      </div>
    );
  }

  // Destructure for easier access and provide defaults
  const {
    username,
    email,
    tel,
    address,
    userType,
    profilePhoto,
    enrolledCourseIds = [],
    inPersonClassIds = [],
    quizzesTaken = {},
    userProgress = {},
  } = student;

  // --- Calculations ---
  const allAttempts = [];
  let quizzesPassedCount = 0;
  let totalQuizzes = 0;

  Object.values(quizzesTaken).forEach((quizData) => {
    totalQuizzes++;
    if (quizData.attempts) {
      quizData.attempts.forEach((attempt) => {
        allAttempts.push(attempt.score);
      });
    }
    if (quizData.hasPassedQuiz) {
      quizzesPassedCount++;
    }
  });

  const averageQuizScore =
    allAttempts.length > 0
      ? (allAttempts.reduce((sum, score) => sum + score, 0) / allAttempts.length).toFixed(2)
      : "N/A";

  const quizPassRate =
    totalQuizzes > 0
      ? ((quizzesPassedCount / totalQuizzes) * 100).toFixed(0) + "%"
      : "N/A";

  // --- Helper Render Functions ---

  const renderQuizAttempts = (attempts) => {
    if (!attempts || attempts.length === 0) {
      return <p className="text-sm text-gray-600 italic">No attempts recorded.</p>;
    }
    return (
      <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
        {attempts.map((attempt, idx) => (
          <li key={idx}>
            Score: <span className="font-medium">{attempt.score}</span> on{" "}
            {new Date(attempt.date).toLocaleString()}
          </li>
        ))}
      </ul>
    );
  };

  const renderCourseProgress = (progressData) => {
    if (!progressData || Object.keys(progressData).length === 0) {
      return <p className="text-gray-600 italic">No course progress recorded.</p>;
    }
    return (
      <div className="space-y-4">
        {Object.entries(progressData).map(([courseName, courseContent]) => (
          <div key={courseName} className="bg-green-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-green-800 mb-2">{courseName}</h4>
            {courseContent.completedItems && Object.keys(courseContent.completedItems).length > 0 ? (
              Object.entries(courseContent.completedItems).map(([sectionKey, sectionData]) => (
                <div key={sectionKey} className="mb-3">
                  <p className="font-medium text-gray-700">Section {sectionKey}:</p>
                  {sectionData.lessons && sectionData.lessons.length > 0 && (
                    <p className="text-sm text-gray-600 ml-4">
                      Lessons Completed: <span className="font-normal">{sectionData.lessons.join(", ")}</span>
                    </p>
                  )}
                  {sectionData.quizzes && sectionData.quizzes.length > 0 && (
                    <p className="text-sm text-gray-600 ml-4">
                      Quizzes Completed: <span className="font-normal">{sectionData.quizzes.join(", ")}</span>
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-600 italic text-sm">No completed items in this course.</p>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 sm:p-8">
        <Link to="/students" className="text-blue-600 hover:underline mb-4 inline-block font-medium">
          ← Back to Dashboard
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 border-b pb-4">
          {username || "Student Details"}
          {profilePhoto && (
            <img
              src={profilePhoto}
              alt={`${username}'s profile`}
              className="w-24 h-24 rounded-full float-right object-cover border-4 border-indigo-200"
            />
          )}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg text-gray-700 mb-8">
          <p><strong className="text-gray-900">Email:</strong> {email || "N/A"}</p>
          <p><strong className="text-gray-900">Phone:</strong> {tel || "N/A"}</p>
          <p><strong className="text-gray-900">Address:</strong> {address || "N/A"}</p>
          <p><strong className="text-gray-900">User Type:</strong> {userType || "N/A"}</p>
        </div>

        <div className="mb-8 p-6 bg-indigo-50 rounded-lg border border-indigo-200">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Enrollment Information</h2>
          <p className="mb-2">
            <strong className="text-indigo-800">Enrolled Courses:</strong>{" "}
            {enrolledCourseIds.length > 0 ? enrolledCourseIds.join(", ") : "None"}
          </p>
          <p>
            <strong className="text-indigo-800">In-Person Classes:</strong>{" "}
            {inPersonClassIds.length > 0 ? inPersonClassIds.join(", ") : "None"}
          </p>
        </div>

        <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Quiz Performance</h2>
          <p className="mb-2 text-lg">
            <strong className="text-blue-800">Overall Average Score:</strong>{" "}
            <span className="font-bold">{averageQuizScore}</span>
          </p>
          <p className="mb-4 text-lg">
            <strong className="text-blue-800">Overall Quiz Pass Rate:</strong>{" "}
            <span className="font-bold">{quizPassRate}</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(quizzesTaken).length > 0 ? (
              Object.entries(quizzesTaken).map(([quizName, quizData]) => (
                <div key={quizName} className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                  <h3 className="font-semibold text-xl text-blue-700 mb-2">{quizName}</h3>
                  <p className="text-gray-700 mb-1">
                    Latest Score: <span className="font-medium">{quizData.latestAttemptScore || "N/A"}</span>
                  </p>
                  <p className="text-gray-700 mb-2">
                    Passed Quiz:{" "}
                    <span className={`font-bold ${quizData.hasPassedQuiz ? "text-green-600" : "text-red-600"}`}>
                      {quizData.hasPassedQuiz ? "Yes" : "No"}
                    </span>
                  </p>
                  <p className="font-medium text-gray-800 mb-1">Attempts:</p>
                  {renderQuizAttempts(quizData.attempts)}
                </div>
              ))
            ) : (
              <p className="col-span-full text-gray-600 italic">No quizzes taken yet.</p>
            )}
          </div>
        </div>

        <div className="p-6 bg-green-50 rounded-lg border border-green-200">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Course Progress</h2>
          {renderCourseProgress(userProgress)}
        </div>
      </div>
    </div>
  );
}
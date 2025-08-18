import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc, updateDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

export default function StudentCardPage() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allCoursesStructure, setAllCoursesStructure] = useState({});

  // States for editing quiz attempts
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentQuizName, setCurrentQuizName] = useState("");
  const [currentAttemptIndex, setCurrentAttemptIndex] = useState(null);
  const [editedScore, setEditedScore] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  
  // New state for the timer value
  const [timerValue, setTimerValue] = useState("");

  // State for selected course in Course Progress section
  const [selectedCourseProgress, setSelectedCourseProgress] = useState("");

  // --- Message Box / Error Handling ---
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [messageBoxContent, setMessageBoxContent] = useState({ title: '', body: '', type: '' });

  const showMessage = (title, body, type = 'info', onConfirm = null) => {
    setMessageBoxContent({ title, body, type, onConfirm });
    setShowMessageBox(true);
    if (type !== 'confirm') {
      setTimeout(() => {
        hideMessageBox();
      }, 2000);
    }
  };

  const hideMessageBox = () => {
    setShowMessageBox(false);
    setMessageBoxContent({ title: '', body: '', type: '', onConfirm: null });
  };

  const setTimedError = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError('');
    }, 2000);
  };
  // --- End Message Box / Error Handling ---

  // Function to fetch student data
  const fetchStudent = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, "Users", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const studentData = docSnap.data();
        setStudent(studentData);
        if (studentData.enrolledCourseIds && studentData.enrolledCourseIds.length > 0) {
          setSelectedCourseProgress(studentData.enrolledCourseIds[0]);
        }
        // Set the timer value from the fetched student data
        setTimerValue(studentData.timerValue || "");
      } else {
        setStudent(null);
        setTimedError("Student not found.");
      }
    } catch (err) {
      console.error("Error fetching student:", err);
      setTimedError("Failed to load student details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch all course structures
  const fetchCourseStructures = async () => {
    try {
      const coursesCollectionRef = collection(db, 'InPersonCourses');
      const querySnapshot = await getDocs(coursesCollectionRef);
      const coursesData = {};
      querySnapshot.docs.forEach(doc => {
        const course = doc.data();
        const courseId = course.id;
        const sections = {};
        course.weeklyContent.forEach(week => {
          sections[week.week.toString()] = {
            totalLessons: week.lessons?.length || 0,
            totalQuizzes: week.quizId ? 1 : 0,
            totalReadings: week.readings?.length || 0,
          };
        });
        coursesData[courseId] = { sections };
      });
      setAllCoursesStructure(coursesData);
    } catch (err) {
      console.error("Error fetching course structures:", err);
      setTimedError("Failed to load course structure data.");
    }
  };

  // Function to handle saving the timer value
  const handleSaveTimer = async () => {
    // Basic validation
    if (timerValue === "" || isNaN(timerValue) || Number(timerValue) < 0) {
        showMessage("Error", "Please enter a valid positive number for the timer.", "error");
        return;
    }

    setIsUpdating(true);

    try {
        const studentDocRef = doc(db, "Users", id);
        await updateDoc(studentDocRef, {
            timerValue: Number(timerValue), // Ensure the value is saved as a number
        });
        showMessage("Success", "Timer value saved successfully!", "success");
    } catch (error) {
        console.error("Error saving timer value:", error);
        showMessage("Error", "Failed to save timer value.", "error");
    } finally {
        setIsUpdating(false);
    }
  };

  useEffect(() => {
    fetchStudent();
    fetchCourseStructures();
  }, [id]);


  // --- Quiz Attempt Management Functions ---
  const recalculateQuizData = (quizData, quizName) => {
    const attempts = quizData.attempts || [];
    let latestAttemptScore = "N/A";
    let hasPassedQuiz = false;

    if (attempts.length > 0) {
      const sortedAttempts = [...attempts].sort((a, b) => new Date(b.date) - new Date(a.date));
      latestAttemptScore = sortedAttempts[0].score;

      if (quizName === "MSweek_1") {
        hasPassedQuiz = latestAttemptScore >= 7;
      } else if (quizName === "HTML_Week1") {
        hasPassedQuiz = latestAttemptScore >= 15;
      } else {
        hasPassedQuiz = latestAttemptScore >= 7;
      }
    }

    return {
      ...quizData,
      attempts, // This line is crucial for returning the updated array
      latestAttemptScore,
      hasPassedQuiz,
    };
  };

  const handleEditAttemptClick = (quizName, attemptIndex, score) => {
    setCurrentQuizName(quizName);
    setCurrentAttemptIndex(attemptIndex);
    setEditedScore(score);
    setShowEditModal(true);
  };

  const handleClearAttempt = async (quizName, attemptIndex) => {
    showMessage(
      "Confirm Clear",
      "Are you sure you want to clear this attempt? This action cannot be undone.",
      "confirm",
      async () => { // Callback for confirmation
        setIsUpdating(true);
        try {
          const studentDocRef = doc(db, "Users", id);
          const currentStudentSnap = await getDoc(studentDocRef);

          if (currentStudentSnap.exists()) {
            const currentStudentData = currentStudentSnap.data();
            const updatedQuizzesTaken = { ...currentStudentData.quizzesTaken };

            if (updatedQuizzesTaken[quizName] && updatedQuizzesTaken[quizName].attempts) {
              // Create a new array without the attempt to be removed
              const newAttempts = updatedQuizzesTaken[quizName].attempts.filter(
                (_, idx) => idx !== attemptIndex
              );

              // Update the quizzesTaken object with the new attempts array
              const updatedQuizData = {
                ...updatedQuizzesTaken[quizName],
                attempts: newAttempts,
              };

              // Recalculate the latest score and pass status based on the new attempts
              updatedQuizzesTaken[quizName] = recalculateQuizData(updatedQuizData, quizName);

              await updateDoc(studentDocRef, {
                quizzesTaken: updatedQuizzesTaken,
              });
              showMessage("Success", "Quiz attempt cleared successfully!", "success");
              fetchStudent(); // Re-fetch student data to update UI
            }
          }
        } catch (error) {
          console.error("Error clearing attempt:", error);
          setTimedError("Failed to clear attempt. Please try again.");
          showMessage("Error", "Failed to clear attempt.", "error");
        } finally {
          setIsUpdating(false);
        }
      }
    );
  };

  const handleSaveEditedScore = async () => {
    if (editedScore === "" || isNaN(editedScore) || editedScore < 0) {
      setTimedError("Please enter a valid score.");
      return;
    }

    setIsUpdating(true);
    setShowEditModal(false);

    try {
      const studentDocRef = doc(db, "Users", id);
      const currentStudentSnap = await getDoc(studentDocRef);

      if (currentStudentSnap.exists()) {
        const currentStudentData = currentStudentSnap.data();
        const updatedQuizzesTaken = JSON.parse(JSON.stringify(currentStudentData.quizzesTaken));

        if (updatedQuizzesTaken[currentQuizName] && updatedQuizzesTaken[currentQuizName].attempts) {
          updatedQuizzesTaken[currentQuizName].attempts[currentAttemptIndex].score = Number(editedScore);
          updatedQuizzesTaken[currentQuizName] = recalculateQuizData(updatedQuizzesTaken[currentQuizName], currentQuizName);

          await updateDoc(studentDocRef, {
            quizzesTaken: updatedQuizzesTaken,
          });
          showMessage("Success", "Quiz score updated successfully!", "success");
          fetchStudent();
        }
      }
    } catch (error) {
      console.error("Error updating score:", error);
      setTimedError("Failed to update score. Please try again.");
      showMessage("Error", "Failed to update score.", "error");
    } finally {
      setIsUpdating(false);
      setCurrentQuizName("");
      setCurrentAttemptIndex(null);
      setEditedScore("");
    }
  };

  // --- Render Logic ---
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
  let totalQuizzesTracked = 0;

  Object.entries(quizzesTaken).forEach(([quizName, quizData]) => {
    totalQuizzesTracked++;
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
    totalQuizzesTracked > 0
      ? ((quizzesPassedCount / totalQuizzesTracked) * 100).toFixed(0) + "%"
      : "N/A";

  // --- Helper Render Functions ---
  const renderQuizAttempts = (attempts, quizName) => {
    if (!attempts || attempts.length === 0) {
      return <p className="text-sm text-gray-600 italic">No attempts recorded.</p>;
    }
    return (
      <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
        {attempts.map((attempt, idx) => (
          <li key={idx} className="flex items-center justify-between py-1">
            <span>
              Score: <span className="font-medium">{attempt.score}</span> on{" "}
              {new Date(attempt.date).toLocaleString()}
            </span>
            <span className="space-x-2">
              <button
                onClick={() => handleEditAttemptClick(quizName, idx, attempt.score)}
                className="text-blue-500 hover:text-blue-700 focus:outline-none disabled:opacity-50"
                title="Edit Score"
                disabled={isUpdating}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <button
                onClick={() => handleClearAttempt(quizName, idx)}
                className="text-red-500 hover:text-red-700 focus:outline-none disabled:opacity-50"
                title="Clear Attempt"
                disabled={isUpdating}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </span>
          </li>
        ))}
      </ul>
    );
  };

  const renderCourseProgress = (progressData, courseStructureData, selectedCourse) => {
    if (!progressData || Object.keys(progressData).length === 0) {
      return <p className="text-gray-600 italic">No course progress recorded.</p>;
    }
    const coursesToRender = selectedCourse ? { [selectedCourse]: progressData[selectedCourse] } : progressData;

    return (
      <div className="space-y-6">
        {Object.entries(coursesToRender).map(([courseName, courseContent]) => {
          const currentCourseTotalStructure = courseStructureData[courseName];
          let totalSectionsWithData = 0;
          let overallCourseProgressPercentage = 0;

          return (
            <div key={courseName} className="bg-green-50 p-4 rounded-lg shadow-sm border border-green-200">
              <h4 className="font-semibold text-xl text-green-800 mb-4">{courseName}</h4>
              {!currentCourseTotalStructure && (
                <p className="text-gray-600 italic mb-4">Course structure not defined for {courseName}. Progress calculations may be inaccurate.</p>
              )}
              {currentCourseTotalStructure && Object.keys(currentCourseTotalStructure.sections).length > 0 ? (
                Object.entries(currentCourseTotalStructure.sections).map(([sectionKey, sectionTotals]) => {
                  const sectionData = courseContent.completedItems?.[sectionKey] || { lessons: [], quizzes: [], readings: [] };
                  const completedLessonsCount = sectionData.lessons?.length || 0;
                  const totalLessons = sectionTotals.totalLessons || 0;
                  const lessonProgress = totalLessons > 0 ? (completedLessonsCount / totalLessons) * 100 : 0;
                  const lessonsRemaining = totalLessons - completedLessonsCount;
                  const completedQuizzesCount = sectionData.quizzes?.length || 0;
                  const totalQuizzes = sectionTotals.totalQuizzes || 0;
                  const quizProgress = totalQuizzes > 0 ? (completedQuizzesCount / totalQuizzes) * 100 : 0;
                  const quizzesRemaining = totalQuizzes - completedQuizzesCount;
                  const completedReadingsCount = sectionData.readings?.length || 0;
                  const totalReadings = sectionTotals.totalReadings || 0;
                  const readingProgress = totalReadings > 0 ? (completedReadingsCount / totalReadings) * 100 : 0;
                  const readingsRemaining = totalReadings - completedReadingsCount;

                  let sectionItemsCount = 0;
                  let sectionProgressSum = 0;
                  if (totalLessons > 0) { sectionItemsCount++; sectionProgressSum += lessonProgress; }
                  if (totalQuizzes > 0) { sectionItemsCount++; sectionProgressSum += quizProgress; }
                  if (totalReadings > 0) { sectionItemsCount++; sectionProgressSum += readingProgress; }

                  if (sectionItemsCount > 0) {
                      totalSectionsWithData++;
                      overallCourseProgressPercentage += (sectionProgressSum / sectionItemsCount);
                  }

                  return (
                    <div key={sectionKey} className="mb-6 p-4 bg-white rounded-lg shadow-md border border-gray-100">
                      <p className="font-medium text-lg text-gray-800 mb-2">Section {sectionKey}:</p>
                      <p className="text-md text-gray-700 mb-1">
                        Lessons: {completedLessonsCount} / {totalLessons} Completed{" "}
                        <span className="font-semibold text-sm">({lessonProgress.toFixed(0)}%)</span>
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                        <div
                          className="bg-indigo-500 h-2.5 rounded-full"
                          style={{ width: `${lessonProgress}%` }}
                        ></div>
                      </div>
                      {lessonsRemaining > 0 ? (
                        <p className="text-sm text-gray-600 italic">
                          {lessonsRemaining} lessons remaining.
                        </p>
                      ) : (
                        totalLessons > 0 && <p className="text-sm text-green-600 italic">All lessons completed!</p>
                      )}
                      <p className="text-md text-gray-700 mt-3 mb-1">
                        Quizzes: {completedQuizzesCount} / {totalQuizzes} Completed{" "}
                        <span className="font-semibold text-sm">({quizProgress.toFixed(0)}%)</span>
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                        <div
                          className="bg-purple-500 h-2.5 rounded-full"
                          style={{ width: `${quizProgress}%` }}
                        ></div>
                      </div>
                      {quizzesRemaining > 0 ? (
                        <p className="text-sm text-gray-600 italic">
                          {quizzesRemaining} quizzes remaining.
                        </p>
                      ) : (
                        totalQuizzes > 0 && <p className="text-sm text-green-600 italic">All quizzes completed!</p>
                      )}
                      {totalReadings > 0 && (
                        <>
                          <p className="text-md text-gray-700 mt-3 mb-1">
                            Readings: {completedReadingsCount} / {totalReadings} Completed{" "}
                            <span className="font-semibold text-sm">({readingProgress.toFixed(0)}%)</span>
                          </p>
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                            <div
                              className="bg-orange-500 h-2.5 rounded-full"
                              style={{ width: `${readingProgress}%` }}
                            ></div>
                          </div>
                          {readingsRemaining > 0 ? (
                            <p className="text-sm text-gray-600 italic">
                              {readingsRemaining} readings remaining.
                            </p>
                          ) : (
                            <p className="text-sm text-green-600 italic">All readings completed!</p>
                          )}
                        </>
                      )}
                    </div>
                  );
                })
              ) : (
                <p className="text-gray-600 italic">No sections defined in course structure for {courseName}.</p>
              )}
              {totalSectionsWithData > 0 && (
                  <p className="text-right text-lg font-bold text-green-700 mt-4">
                      Overall Course Progress: {(overallCourseProgressPercentage / totalSectionsWithData).toFixed(0)}%
                  </p>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 sm:p-8">
        <Link to="/admin-panel" className="text-blue-600 hover:underline mb-4 inline-block font-medium">
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
            {enrolledCourseIds.length > 0 ? (
                enrolledCourseIds.map((courseId, index) => (
                    <React.Fragment key={courseId}>
                        <Link
                            to={`/enrollment-form?studentId=${id}&courseId=${courseId}`}
                            className="text-blue-700 hover:underline font-medium"
                        >
                            {courseId}
                        </Link>
                        {index < enrolledCourseIds.length - 1 && ", "}
                    </React.Fragment>
                ))
            ) : "None"}
          </p>
          <p>
            <strong className="text-indigo-800">In-Person Classes:</strong>{" "}
            {inPersonClassIds.length > 0 ? inPersonClassIds.join(", ") : "None"}
          </p>
          {/* New Timer input and save button */}
          <div className="mt-6">
            <div className="flex items-center space-x-2">
                <label htmlFor="timerValue" className="text-indigo-800 font-bold">Timer (mins):</label>
                <input
                    type="number"
                    id="timerValue"
                    value={timerValue}
                    onChange={(e) => setTimerValue(e.target.value)}
                    className="w-24 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    min="0"
                />
                <button
                    onClick={handleSaveTimer}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
                    disabled={isUpdating}
                >
                    {isUpdating ? 'Saving...' : 'Save'}
                </button>
            </div>
          </div>
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
                  {renderQuizAttempts(quizData.attempts, quizName)}
                </div>
              ))
            ) : (
              <p className="col-span-full text-gray-600 italic">No quizzes taken yet.</p>
            )}
          </div>
        </div>

        <div className="p-6 bg-green-50 rounded-lg border border-green-200">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Course Progress</h2>

          {enrolledCourseIds.length > 0 && (
            <div className="mb-6">
              <label htmlFor="courseSelect" className="block text-gray-700 text-lg font-medium mb-2">
                Select Course to View Progress:
              </label>
              <select
                id="courseSelect"
                value={selectedCourseProgress}
                onChange={(e) => setSelectedCourseProgress(e.target.value)}
                className="w-full md:w-1/2 lg:w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
              >
                {enrolledCourseIds.map(courseId => (
                  <option key={courseId} value={courseId}>
                    {courseId}
                  </option>
                ))}
              </select>
            </div>
          )}

          {selectedCourseProgress ? (
            renderCourseProgress(userProgress, allCoursesStructure, selectedCourseProgress)
          ) : (
            <p className="text-gray-600 italic">Please select a course to view its progress.</p>
          )}
        </div>
      </div>

      {showEditModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm border-t-4 border-blue-500">
            <h3 className="text-lg font-bold mb-4 text-blue-700">Edit Quiz Score</h3>
            <p className="mb-4 text-gray-700">
              Editing attempt {currentAttemptIndex + 1} for {currentQuizName}.
            </p>
            <input
              type="number"
              value={editedScore}
              onChange={(e) => setEditedScore(e.target.value)}
              placeholder="Enter new score"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              min="0"
              max={currentQuizName === "HTML_Week1" ? "20" : "10"}
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 disabled:opacity-50"
                disabled={isUpdating}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEditedScore}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                disabled={isUpdating}
              >
                {isUpdating ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
            {error && <p className="text-red-600 text-sm text-center mt-2">{error}</p>}
          </div>
        </div>
      )}

      {showMessageBox && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className={`bg-white p-6 rounded-lg shadow-xl w-full max-w-sm border-t-4 ${
                  messageBoxContent.type === 'success' ? 'border-green-500' :
                  messageBoxContent.type === 'error' ? 'border-red-500' :
                  messageBoxContent.type === 'confirm' ? 'border-orange-500' : 'border-blue-500'
              }`}>
                  <h3 className={`text-lg font-bold mb-2 ${
                      messageBoxContent.type === 'success' ? 'text-green-700' :
                      messageBoxContent.type === 'error' ? 'text-red-700' :
                      messageBoxContent.type === 'confirm' ? 'text-orange-700' : 'text-blue-700'
                  }`}>{messageBoxContent.title}</h3>
                  <p className="text-gray-700 mb-4">{messageBoxContent.body}</p>
                  {messageBoxContent.type === 'confirm' ? (
                      <div className="flex justify-end space-x-3">
                          <button
                              onClick={hideMessageBox}
                              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                          >
                              Cancel
                          </button>
                          <button
                              onClick={() => {
                                  if (messageBoxContent.onConfirm) messageBoxContent.onConfirm();
                                  hideMessageBox();
                              }}
                              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                          >
                              Confirm
                          </button>
                      </div>
                  ) : (
                      <button
                          onClick={hideMessageBox}
                          className={`w-full py-2 rounded-md text-white font-semibold transition duration-150 ease-in-out ${
                              messageBoxContent.type === 'success' ? 'bg-green-600 hover:bg-green-700' :
                              messageBoxContent.type === 'error' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
                          }`}
                      >
                          OK
                      </button>
                  )}
              </div>
          </div>
      )}
    </div>
  );
}

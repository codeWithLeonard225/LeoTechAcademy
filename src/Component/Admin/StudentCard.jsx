import React from "react";

function QuizAttempts({ quiz }) {
  if (!quiz.attempts || quiz.attempts.length === 0) return <p>No attempts yet.</p>;

  return (
    <ul className="list-disc pl-5">
      {quiz.attempts.map((attempt, idx) => (
        <li key={idx}>
          Date: {new Date(attempt.date).toLocaleString()} — Score: {attempt.score}
        </li>
      ))}
    </ul>
  );
}

export default function StudentCard({ student }) {
  // Calculate average quiz score
  const quizzesTaken = student.quizzesTaken || {};
  const allAttempts = [];

  Object.values(quizzesTaken).forEach((quiz) => {
    if (quiz.attempts) {
      quiz.attempts.forEach((attempt) => {
        allAttempts.push(attempt.score);
      });
    }
  });

  const averageScore =
    allAttempts.length > 0
      ? (allAttempts.reduce((a, b) => a + b, 0) / allAttempts.length).toFixed(2)
      : "N/A";

  return (
    <div className="border rounded p-4 mb-6 shadow bg-white">
      <h2 className="text-xl font-semibold mb-2">{student.username}</h2>

      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Phone:</strong> {student.tel}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <p><strong>User Type:</strong> {student.userType}</p>
      <p><strong>Enrolled Courses:</strong> {(student.enrolledCourseIds || []).join(", ")}</p>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Quiz Performance:</h3>
        <p><strong>Average Score:</strong> {averageScore}</p>
        <p><strong>Has Passed Any Quiz:</strong> {Object.values(quizzesTaken).some(q => q.hasPassedQuiz) ? "Yes" : "No"}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Course Progress:</h3>
        {student.enrolledCourseIds?.map((courseId) => {
          const courseProgress = student.userProgress?.[courseId];
          if (!courseProgress)
            return (
              <p key={courseId} className="italic">
                {courseId}: No progress data
              </p>
            );

          const completedLessonsCount = Object.keys(courseProgress.completedItems?.lessons || {}).length;
          const totalLessons = courseProgress.lessons?.length || 0;

          const completedQuizzesCount = Object.keys(courseProgress.completedItems?.quizzes || {}).length;
          const totalQuizzes = courseProgress.quizzes?.length || 0;

          const lessonPercent = totalLessons ? ((completedLessonsCount / totalLessons) * 100).toFixed(0) : 0;
          const quizPercent = totalQuizzes ? ((completedQuizzesCount / totalQuizzes) * 100).toFixed(0) : 0;

          return (
            <div key={courseId} className="mb-3">
              <p className="font-semibold">{courseId}</p>
              <p>
                Lessons: {completedLessonsCount} / {totalLessons} ({lessonPercent}%)
              </p>
              <p>
                Quizzes: {completedQuizzesCount} / {totalQuizzes} ({quizPercent}%)
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Quiz Attempts Details:</h3>
        {Object.entries(quizzesTaken).length === 0 && <p>No quizzes taken yet.</p>}
        {Object.entries(quizzesTaken).map(([quizId, quiz]) => (
          <div key={quizId} className="mb-3">
            <p className="font-semibold">{quizId}</p>
            <QuizAttempts quiz={quiz} />
          </div>
        ))}
      </div>
    </div>
  );
}

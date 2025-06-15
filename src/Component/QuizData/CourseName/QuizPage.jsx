// src/Component/Quiz/QuizPage.jsx
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Firebase imports
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from "../../../../firebase"; // Adjust this path as necessary for your project structure

import allQuizzes from './QuizData'; // Adjust path if necessary

// Define total maximum attempts for a quiz
const MAX_QUIZ_ATTEMPTS = 3;
// Define the target pass percentage
const PASS_PERCENTAGE = 0.80; // 80%

const QuizPage = () => {
    const { quizId } = useParams();
    const navigate = useNavigate();

    // Quiz States
    const [quizData, setQuizData] = useState(null);
    const [currentUser, setCurrentUser] = useState(null); // This will hold the full Firebase user document
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Question Navigation & Answering States
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({}); // Stores answers as {questionIndex: selectedOption}
    const [score, setScore] = useState(null); // Score for the current attempt
    const [showResults, setShowResults] = useState(false);

    // Stats for the current attempt
    const [questionsAttempted, setQuestionsAttempted] = useState(0);
    const [questionsNotAttempted, setQuestionsNotAttempted] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    // Attempt tracking state
    const [attemptsLeft, setAttemptsLeft] = useState(MAX_QUIZ_ATTEMPTS);
    const [quizPassedOverall, setQuizPassedOverall] = useState(false); // New state: true if user has *ever* passed this quiz

    // Timer States
    const TIMER_SECONDS = 10; // This is per question
    const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
    const timerRef = useRef(null);

    // --- Helper to initialize or reset quiz state ---
    const initializeQuiz = useCallback((quiz) => {
        const initialAnswers = {};
        quiz.questions.forEach((q, index) => {
            initialAnswers[index] = '';
        });
        setUserAnswers(initialAnswers);
        setCurrentQuestionIndex(0);
        setScore(null); // Reset score for new attempt
        setShowResults(false); // Hide results for new attempt
        setTimeLeft(TIMER_SECONDS);
        clearInterval(timerRef.current); // Ensure timer is reset for a new question
        timerRef.current = null; // Clear the ref value
        setQuestionsAttempted(0);
        setQuestionsNotAttempted(0);
        setWrongAnswers(0);
        setCorrectAnswers(0);
        // Do NOT reset attemptsLeft or quizPassedOverall here, they are loaded from currentUser via Firebase
    }, []);

    // --- Helper function to update user's quiz progress in Firestore and local state ---
    const updateFirestoreQuizProgress = useCallback(async (newQuizzesTaken) => {
        if (!currentUser || !currentUser.id) {
            console.error('Cannot update quiz progress: User ID is missing.');
            toast.error('Error: User not identified for progress update.');
            return;
        }

        try {
            const userDocRef = doc(db, 'Users', currentUser.id);
            await updateDoc(userDocRef, {
                quizzesTaken: newQuizzesTaken
            });
            // Update local currentUser state after successful Firestore update
            setCurrentUser(prevUser => ({
                ...prevUser,
                quizzesTaken: newQuizzesTaken
            }));
            // Also update localStorage's loggedInUser for consistency across the app
            localStorage.setItem('loggedInUser', JSON.stringify({
                ...currentUser, // Use the base currentUser from state
                quizzesTaken: newQuizzesTaken
            }));

            console.log('User quiz progress updated in Firestore successfully!');
        } catch (firebaseError) {
            console.error('Error updating user quiz progress in Firestore:', firebaseError);
            toast.error('Failed to save quiz progress. Please try again.');
        }
    }, [currentUser]); // currentUser is a dependency as we're reading and updating it


    // --- Memoized handleSubmitQuiz for stable reference ---
    const handleSubmitQuiz = useCallback(async () => {
        // Prevent submission if not ready (e.g., no quiz data, no user, already passed overall)
        if (!quizData || !currentUser || quizPassedOverall) {
            return;
        }

        let correctCount = 0;
        let attemptedCount = 0;
        let notAttemptedCount = 0;
        let wrongAttemptCount = 0;

        quizData.questions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            if (userAnswer !== '' && userAnswer !== undefined) {
                attemptedCount++;
                if (userAnswer === question.correctAnswer) {
                    correctCount++;
                } else {
                    wrongAttemptCount++;
                }
            } else {
                notAttemptedCount++;
            }
        });

        setScore(correctCount); // Set the score for this specific attempt
        setCorrectAnswers(correctCount);
        setQuestionsAttempted(attemptedCount);
        setQuestionsNotAttempted(notAttemptedCount);
        setWrongAnswers(wrongAttemptCount);

        setShowResults(true); // Show results after submission
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }

        const totalQuestions = quizData.questions.length;
        // Calculate the dynamic target pass score based on 80%
        const dynamicTargetPassScore = Math.ceil(PASS_PERCENTAGE * totalQuestions);

        let currentAttemptPassed = correctCount >= dynamicTargetPassScore;

        if (currentAttemptPassed) {
            setQuizPassedOverall(true); // Mark overall quiz as passed
            toast.success(`Quiz passed! You scored ${correctCount} out of ${totalQuestions}.`);
        } else {
            toast.info(`Quiz completed! You scored ${correctCount} out of ${totalQuestions}.`);
        }

        // --- Firebase Update Logic to store EVERY attempt ---
        const updatedUserQuizzes = { ...(currentUser?.quizzesTaken || {}) }; // Deep copy current quizzesTaken

        // Ensure the structure for this specific quizId exists
        if (!updatedUserQuizzes[quizId]) {
            updatedUserQuizzes[quizId] = {
                attempts: [],
                hasPassedQuiz: false,
                latestAttemptScore: null
            };
        }

        // Add the current attempt's data to the attempts array
        updatedUserQuizzes[quizId].attempts.push({
            score: correctCount,
            date: new Date().toISOString()
        });

        // Update overall quiz status and latest score
        updatedUserQuizzes[quizId].hasPassedQuiz = updatedUserQuizzes[quizId].hasPassedQuiz || currentAttemptPassed;
        updatedUserQuizzes[quizId].latestAttemptScore = correctCount;

        await updateFirestoreQuizProgress(updatedUserQuizzes);

        // Recalculate attempts left based on new data to update UI immediately
        const newAttemptsMade = updatedUserQuizzes[quizId].attempts.length;
        setAttemptsLeft(MAX_QUIZ_ATTEMPTS - newAttemptsMade);

    }, [quizData, currentUser, userAnswers, quizId, quizPassedOverall, updateFirestoreQuizProgress]);

    // --- useEffect for Initial Data Fetch and User Loading from Firebase ---
    useEffect(() => {
        const loadPageData = async () => {
            setLoading(true);
            setError(null);

            const storedUserString = localStorage.getItem('loggedInUser');
            if (!storedUserString) {
                navigate('/login');
                setLoading(false);
                return;
            }

            let userIdFromLocal = null;
            try {
                const tempUser = JSON.parse(storedUserString);
                userIdFromLocal = tempUser.id; // Get user ID from localStorage
            } catch (parseError) {
                console.error("Error parsing user from localStorage:", parseError);
                navigate('/login');
                setLoading(false);
                return;
            }

            if (!userIdFromLocal) {
                setError("User ID not found in local storage. Please log in again.");
                navigate('/login');
                setLoading(false);
                return;
            }

            try {
                // Fetch the full user document from Firebase
                const userDocRef = doc(db, 'Users', userIdFromLocal);
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists()) {
                    const userData = { id: userDocSnap.id, ...userDocSnap.data() };
                    setCurrentUser(userData); // Set the full user data from Firebase

                    // Also update the `loggedInUser` in localStorage with the fresh data from Firebase
                    localStorage.setItem('loggedInUser', JSON.stringify(userData));

                    const selectedQuiz = allQuizzes[quizId];

                    if (selectedQuiz) {
                        setQuizData(selectedQuiz);
                        initializeQuiz(selectedQuiz);

                        // Load existing attempts and pass status from the user's Firebase data
                        const userQuizProgress = userData.quizzesTaken?.[quizId] || {
                            attempts: [], // Initialize as empty array
                            hasPassedQuiz: false,
                            latestAttemptScore: null,
                        };

                        const attemptsMade = userQuizProgress.attempts.length;
                        setAttemptsLeft(MAX_QUIZ_ATTEMPTS - attemptsMade);
                        setQuizPassedOverall(userQuizProgress.hasPassedQuiz);

                        // If the quiz was already passed overall, show results immediately and set the latest score
                        if (userQuizProgress.hasPassedQuiz) {
                            setScore(userQuizProgress.latestAttemptScore);
                            setShowResults(true);
                        }

                        setLoading(false);
                    } else {
                        setError(`Quiz "${quizId}" not found in local data.`);
                        toast.error(`Quiz "${quizId}" not found.`);
                        setLoading(false);
                    }
                } else {
                    setError(`User profile not found in database for ID: ${userIdFromLocal}. Please contact support or log in again.`);
                    navigate('/login');
                    setLoading(false);
                }
            } catch (firebaseErr) {
                console.error("Error fetching user or quiz data from Firebase:", firebaseErr);
                setError("Failed to load user or quiz data. Please try again.");
                setLoading(false);
            }
        };

        if (quizId) {
            loadPageData();
        }
    }, [quizId, navigate, initializeQuiz]);

    // --- useEffect for Timer Logic ---
    useEffect(() => {
        // Stop timer if quiz data not loaded, results are shown, no attempts left, or quiz already passed
        if (!quizData || showResults || attemptsLeft <= 0 || quizPassedOverall) {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
            return;
        }

        setTimeLeft(TIMER_SECONDS);
        clearInterval(timerRef.current);

        timerRef.current = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timerRef.current);
                    timerRef.current = null;
                    if (currentQuestionIndex < quizData.questions.length - 1) {
                        setTimeout(() => {
                            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
                        }, 0);
                    } else {
                        setTimeout(() => {
                            handleSubmitQuiz(); // Submit quiz if it's the last question and time runs out
                        }, 0);
                    }
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [currentQuestionIndex, quizData, showResults, attemptsLeft, quizPassedOverall, handleSubmitQuiz]);

    const handleAnswerChange = (questionIndex, answer) => {
        // Only allow answer changes if quiz is active and not already passed
        if (!showResults && questionIndex === currentQuestionIndex && attemptsLeft > 0 && !quizPassedOverall) {
            setUserAnswers(prevAnswers => ({
                ...prevAnswers,
                [questionIndex]: answer
            }));
        }
    };

    const handleNextQuestion = () => {
        // Ensure an answer is selected if not the last question
        if (userAnswers[currentQuestionIndex] === '' && currentQuestionIndex < quizData.questions.length - 1) {
            toast.warn("Please select an answer before proceeding to the next question.");
            return;
        }

        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }

        if (currentQuestionIndex < quizData.questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            handleSubmitQuiz(); // Submit quiz on last question
        }
    };

    const handlePlayAgain = () => {
        // Allow playing again only if the quiz has NOT been passed overall AND there are attempts left
        if (!quizPassedOverall && attemptsLeft > 0) {
            initializeQuiz(quizData); // Reset quiz for a new attempt
        } else if (quizPassedOverall) {
            toast.info("You've already passed this quiz! No need to play again.");
        } else {
            toast.error("No more attempts left for this quiz!");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser'); // Clear local storage on logout
        navigate('/login');
    };

    // Determine if the quiz can be started/continued
    const canTakeQuiz = !showResults && attemptsLeft > 0 && !quizPassedOverall;

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-gray-700 text-lg">Loading quiz...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <p className="text-red-600 text-lg mb-4">{error}</p>
                <button
                    onClick={() => navigate('/distanceDashboard')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                    Go to Dashboard
                </button>
            </div>
        );
    }

    if (!quizData || !currentUser) {
        return null;
    }

    const currentQuestion = quizData.questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === quizData.questions.length - 1;

    // Get all attempts for this quiz to display history if needed
    const allAttemptsForThisQuiz = currentUser.quizzesTaken?.[quizId]?.attempts || [];

    // Calculate dynamic target pass score for display
    const dynamicTargetPassScoreDisplay = quizData.questions.length > 0
        ? Math.ceil(PASS_PERCENTAGE * quizData.questions.length)
        : 0;

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            <ToastContainer position="bottom-right" autoClose={5000} />

            {/* Header Section */}
            <header className="bg-white shadow-md p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-center mb-2 sm:mb-0">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-blue-600 hover:text-blue-800 font-semibold text-base sm:text-lg mr-4 bg-transparent border-none cursor-pointer"
                    >
                        ← Back
                    </button>
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

            {/* Main Quiz Content Area */}
            <div className="container mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 my-8 border border-gray-100">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 border-b pb-4">
                    Quiz: {quizData.title || `Week ${quizId.replace('week_', '')} Quiz`}
                </h1>
                <p className="text-gray-600 mb-6">{quizData.description}</p>
                <p className="text-gray-700 mb-4 text-sm sm:text-base font-semibold">
                    To pass this quiz, you need to score at least <span className="font-extrabold text-blue-600">{dynamicTargetPassScoreDisplay}</span> out of <span className="font-extrabold">{quizData.questions.length}</span> questions (80%).
                </p>


                {quizPassedOverall ? (
                    <div className="mt-8 p-6 bg-green-100 rounded-lg border border-green-200 text-center">
                        <h3 className="text-2xl font-bold text-green-800 mb-3">Quiz Passed! 🎉</h3>
                        <p className="text-xl text-green-700 mb-4">
                            Congratulations! You've already passed this quiz. Your latest score was <span className="font-extrabold">{score}</span> out of <span className="font-extrabold">{quizData.questions.length}</span>.
                        </p>
                        <p className="text-gray-600">You've successfully completed this quiz and achieved the required score.</p>
                        <button
                            onClick={() => navigate('/distanceDashboard')}
                            className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-300"
                        >
                            Back to Dashboard
                        </button>
                    </div>
                ) : (
                    <>
                        {canTakeQuiz ? (
                            <>
                                <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                                    {/* Timer Display */}
                                    <div className="text-right text-sm font-medium text-gray-500 mb-2">
                                        Time Left: <span className="font-bold text-blue-600">{timeLeft}s</span>
                                    </div>
                                    <div className="text-left text-sm font-medium text-gray-500 mb-4">
                                        Attempts Left: <span className="font-bold text-red-600">{attemptsLeft}</span>
                                    </div>

                                    <p className="text-lg font-semibold text-gray-800 mb-4">
                                        Question {currentQuestionIndex + 1} of {quizData.questions.length}: {currentQuestion.questionText}
                                    </p>
                                    <div className="space-y-3">
                                        {currentQuestion.options.map((option, oIndex) => (
                                            <label key={oIndex} className="flex items-center text-gray-700 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name={`question-${currentQuestionIndex}`}
                                                    value={option}
                                                    checked={userAnswers[currentQuestionIndex] === option}
                                                    onChange={() => handleAnswerChange(currentQuestionIndex, option)}
                                                    className="form-radio h-4 w-4 text-blue-600 mr-2"
                                                />
                                                <span className="flex-1">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={handleNextQuestion}
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
                                        disabled={userAnswers[currentQuestionIndex] === '' && !isLastQuestion}
                                    >
                                        {isLastQuestion ? 'Submit Quiz' : 'Next Question'}
                                    </button>
                                </div>
                            </>
                        ) : showResults ? ( // User has completed an attempt (either passed or ran out of attempts)
                            <div className="mt-8 p-6 bg-blue-100 rounded-lg border border-blue-200 text-center">
                                <h3 className="text-2xl font-bold text-blue-800 mb-3">Quiz Results</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
                                    <div className="bg-blue-200 p-4 rounded-lg">
                                        <p className="text-lg font-semibold text-blue-800">Your Score</p>
                                        <p className="text-2xl font-extrabold text-blue-900">{score} / {quizData.questions.length}</p>
                                    </div>
                                    <div className="bg-green-200 p-4 rounded-lg">
                                        <p className="text-lg font-semibold text-green-800">Correct</p>
                                        <p className="text-2xl font-extrabold text-green-900">{correctAnswers}</p>
                                    </div>
                                    <div className="bg-red-200 p-4 rounded-lg">
                                        <p className="text-lg font-semibold text-red-800">Wrong</p>
                                        <p className="text-2xl font-extrabold text-red-900">{wrongAnswers}</p>
                                    </div>
                                    <div className="bg-yellow-200 p-4 rounded-lg">
                                        <p className="text-lg font-semibold text-yellow-800">Not Attempted</p>
                                        <p className="text-2xl font-extrabold text-yellow-900">{questionsNotAttempted}</p>
                                    </div>
                                </div>

                                {attemptsLeft > 0 && !quizPassedOverall ? (
                                    <>
                                        <p className="text-lg text-gray-700 mb-4">
                                            You have <span className="font-bold text-red-600">{attemptsLeft}</span> attempt(s) remaining.
                                        </p>
                                        <button
                                            onClick={handlePlayAgain}
                                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-300 mr-4"
                                        >
                                            Play Again
                                        </button>
                                    </>
                                ) : (
                                    !quizPassedOverall && <p className="text-red-700 font-semibold mb-4">You have no attempts left for this quiz.</p>
                                )}
                                <button
                                    onClick={() => navigate('/distanceDashboard')}
                                    className={`mt-6 ${attemptsLeft > 0 && !quizPassedOverall ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-300`}
                                >
                                    Back to Dashboard
                                </button>
                            </div>
                        ) : ( // Covers cases where quiz has no questions or user is out of attempts and not passed
                            <div className="mt-8 p-6 bg-gray-100 rounded-lg border border-gray-200 text-center">
                                <p className="text-xl text-gray-700 mb-4">
                                    {quizData.questions.length === 0 ? "No questions available for this quiz yet." : "You cannot take this quiz."}
                                </p>
                                <button
                                    onClick={() => navigate('/distanceDashboard')}
                                    className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-300"
                                >
                                    Back to Dashboard
                                </button>
                            </div>
                        )}
                    </>
                )}

                {/* Display Previous Attempts History (Optional but useful for unique feature) */}
                {allAttemptsForThisQuiz.length > 0 && (
                    <div className="mt-10 p-6 bg-gray-50 rounded-lg shadow-xl border border-gray-100">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-b pb-3">Previous Attempts History</h3>
                        <ul className="divide-y divide-gray-200">
                            {allAttemptsForThisQuiz.map((attempt, index) => (
                                <li key={index} className="py-3 flex justify-between items-center text-gray-700">
                                    <div>
                                        <span className="font-semibold">Attempt {index + 1}:</span> Scored {attempt.score} / {quizData.questions.length}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        on {new Date(attempt.date).toLocaleString()}
                                        {attempt.score >= dynamicTargetPassScoreDisplay && (
                                            <span className="ml-2 px-2 py-0.5 text-xs font-bold text-white bg-green-500 rounded-full">PASSED</span>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizPage;
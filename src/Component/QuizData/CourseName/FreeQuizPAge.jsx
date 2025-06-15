// src/Component/Quiz/QuizPage.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import allQuizzes from './QuizData'; // Adjust path if necessary

const QuizPage = () => {
    const { quizId } = useParams();
    const navigate = useNavigate();

    // Quiz States
    const [quizData, setQuizData] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Question Navigation & Answering States
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({}); // Stores answers as {questionIndex: selectedOption}
    const [score, setScore] = useState(null);
    const [showResults, setShowResults] = useState(false);

    // New states for detailed results
    const [questionsAttempted, setQuestionsAttempted] = useState(0);
    const [questionsNotAttempted, setQuestionsNotAttempted] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0); // This is the same as 'score'

    // Timer States
    const TIMER_SECONDS = 10;
    const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
    const timerRef = useRef(null);

    // --- useEffect for Initial Data Fetch and User Loading ---
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
            let userId = null;
            try {
                const tempUser = JSON.parse(storedUserString);
                userId = tempUser.id;
                setCurrentUser(tempUser);
            } catch (parseError) {
                console.error("Error parsing user from localStorage:", parseError);
                navigate('/login');
                setLoading(false);
                return;
            }

            if (!userId) {
                setError("User ID not found in local storage. Please log in again.");
                navigate('/login');
                setLoading(false);
                return;
            }

            const selectedQuiz = allQuizzes[quizId];

            if (selectedQuiz) {
                setQuizData(selectedQuiz);
                const initialAnswers = {};
                selectedQuiz.questions.forEach((q, index) => {
                    initialAnswers[index] = '';
                });
                setUserAnswers(initialAnswers);
                setLoading(false);
            } else {
                setError(`Quiz "${quizId}" not found in local data.`);
                toast.error(`Quiz "${quizId}" not found.`);
                setLoading(false);
            }
        };

        if (quizId) {
            loadPageData();
        }
    }, [quizId, navigate]);

    // --- useEffect for Timer Logic ---
    useEffect(() => {
        if (!quizData || showResults) {
            return;
        }

        setTimeLeft(TIMER_SECONDS);
        clearInterval(timerRef.current);

        timerRef.current = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timerRef.current);
                    if (currentQuestionIndex < quizData.questions.length - 1) {
                        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
                    } else {
                        handleSubmitQuiz();
                    }
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timerRef.current);

    }, [currentQuestionIndex, quizData, showResults]);

    const handleAnswerChange = (questionIndex, answer) => {
        if (!showResults && questionIndex === currentQuestionIndex) {
            setUserAnswers(prevAnswers => ({
                ...prevAnswers,
                [questionIndex]: answer
            }));
            clearInterval(timerRef.current); // Clear timer immediately when an answer is selected
        }
    };

    const handleNextQuestion = () => {
        if (userAnswers[currentQuestionIndex] === '') {
            toast.warn("Please select an answer before proceeding.");
            return;
        }

        clearInterval(timerRef.current);

        if (currentQuestionIndex < quizData.questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            handleSubmitQuiz();
        }
    };

    const handleSubmitQuiz = () => {
        if (!quizData) return;

        let correctCount = 0;
        let attemptedCount = 0;
        let notAttemptedCount = 0;
        let wrongAttemptCount = 0;

        quizData.questions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            if (userAnswer !== '' && userAnswer !== undefined) { // Check if an answer was provided
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

        setScore(correctCount);
        setCorrectAnswers(correctCount); // Set correct answers based on attempted
        setQuestionsAttempted(attemptedCount);
        setQuestionsNotAttempted(notAttemptedCount);
        setWrongAnswers(wrongAttemptCount);

        setShowResults(true);
        clearInterval(timerRef.current);
        toast.success(`Quiz completed! You scored ${correctCount} out of ${quizData.questions.length}`);

        // TODO: Implement saving quiz results (e.g., to localStorage for local tracking, or to a backend)
        // Example for local storage update (basic):
        /*
        const storedUserString = localStorage.getItem('loggedInUser');
        if (storedUserString) {
            const user = JSON.parse(storedUserString);
            if (!user.quizProgress) {
                user.quizProgress = {};
            }
            user.quizProgress[quizId] = {
                score: correctCount,
                totalQuestions: quizData.questions.length,
                dateCompleted: new Date().toISOString(),
                attempted: attemptedCount,
                notAttempted: notAttemptedCount,
                wrong: wrongAttemptCount
            };
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            toast.info("Quiz results saved locally!");
        }
        */
    };

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        navigate('/login');
    };

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

                {quizData.questions && quizData.questions.length > 0 && !showResults ? (
                    <>
                        <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                            {/* Timer Display */}
                            <div className="text-right text-sm font-medium text-gray-500 mb-2">
                                Time Left: <span className="font-bold text-blue-600">{timeLeft}s</span>
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
                                            disabled={showResults}
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
                                disabled={userAnswers[currentQuestionIndex] === '' && !isLastQuestion} // Disable if no answer selected and not last question
                            >
                                {isLastQuestion ? 'Submit Quiz' : 'Next Question'}
                            </button>
                        </div>
                    </>
                ) : quizData.questions.length === 0 ? (
                    <p className="text-gray-600">No questions available for this quiz yet.</p>
                ) : null }

                {showResults && (
                    <div className="mt-8 p-6 bg-blue-100 rounded-lg border border-blue-200 text-center">
                        <h3 className="text-2xl font-bold text-blue-800 mb-3">Quiz Results</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <div className="bg-blue-200 p-4 rounded-lg">
                                <p className="text-lg font-semibold text-blue-800">Total Score</p>
                                <p className="text-2xl font-extrabold text-blue-900">{score} / {quizData.questions.length}</p>
                            </div>
                            <div className="bg-green-200 p-4 rounded-lg">
                                <p className="text-lg font-semibold text-green-800">Correct (Attempted)</p>
                                <p className="text-2xl font-extrabold text-green-900">{correctAnswers}</p>
                            </div>
                            <div className="bg-red-200 p-4 rounded-lg">
                                <p className="text-lg font-semibold text-red-800">Wrong (Attempted)</p>
                                <p className="text-2xl font-extrabold text-red-900">{wrongAnswers}</p>
                            </div>
                            <div className="bg-yellow-200 p-4 rounded-lg">
                                <p className="text-lg font-semibold text-yellow-800">Not Attempted</p>
                                <p className="text-2xl font-extrabold text-yellow-900">{questionsNotAttempted}</p>
                            </div>
                            {/* You can add Questions Attempted here if desired, but correct + wrong already implies it */}
                            {/* <div className="bg-purple-200 p-4 rounded-lg">
                                <p className="text-lg font-semibold text-purple-800">Questions Attempted</p>
                                <p className="text-2xl font-extrabold text-purple-900">{questionsAttempted}</p>
                            </div> */}
                        </div>

                        <h4 className="text-xl font-bold text-gray-700 mb-4">Detailed Breakdown:</h4>
                        <div className="max-h-96 overflow-y-auto pr-2"> {/* Added scroll for many questions */}
                            {quizData.questions.map((question, qIndex) => {
                                const userAnswer = userAnswers[qIndex];
                                const isCorrect = userAnswer === question.correctAnswer;
                                const hasAttempted = userAnswer !== '' && userAnswer !== undefined;

                                return (
                                    <div key={qIndex} className={`mb-4 text-left p-3 rounded-lg border
                                        ${hasAttempted
                                            ? (isCorrect ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50')
                                            : 'border-gray-300 bg-gray-50'
                                        }`}
                                    >
                                        <p className="font-semibold text-gray-800 mb-1">
                                            {qIndex + 1}. {question.questionText}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Your Answer:
                                            <span className={`font-medium ml-1 ${hasAttempted ? (isCorrect ? 'text-green-700' : 'text-red-700 line-through') : 'text-gray-500'}`}>
                                                {hasAttempted ? userAnswer : 'N/A'}
                                            </span>
                                            {!hasAttempted && <span className="text-yellow-600 ml-1">(Not Attempted)</span>}
                                        </p>
                                        <p className="text-sm text-green-700">
                                            Correct Answer: <span className="font-medium">{question.correctAnswer}</span>
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => navigate(-1)}
                            className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-300"
                        >
                            Back to Dashboard
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizPage;
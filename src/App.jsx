// src/App.js
import React from 'react';
import { Routes, Route } from "react-router-dom";

// Import your Navbar component
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Courses from './Component/Pages/Courses';
import VerifyPayment from './Component/Pages/VerifyPayment';
import DistanceDashboard from './Component/StudentsForm/Distance/DistanceDashboard';
import CoursePage from './Component/StudentsForm/Distance/CoursePage';
import Services from './Component/Pages/Services';
import Contact from './Component/Pages/ContactPage';
import FAQsPage from './Component/Pages/FAQsPage';
import BlogPage from './Component/Pages/BlogPage';
import PaidCourseForm from './Component/PaidCourse/PaidCourseForm';
import FreeCourseForm from './Component/FreeCourse/FreeCourseForm';
import UserProfileForm from './Component/StudentsForm/UserProfileForm';
import InPersonDashboard from './Component/StudentsForm/InPerson/InPersonDashboard';
import InPersonCourseForm from './Component/StudentsForm/InPerson/InPersonCourseForm';
import InPersonCoursePage from './Component/StudentsForm/InPerson/InPersonCoursePage';
import AdminPanel from './Component/Admin/AdminPanel';
import Week1Page from './Component/Reading/Week1Page';
import QuizPage from './Component/QuizData/CourseName/QuizPage';
import MsWorkWeek1 from './Component/Reading/MSWORD/WEEK!/MsWorkWeek1';
import MsWorkWeek2 from './Component/Reading/MSWORD/WEEK!/MsWorkWeek2';
import MsWorkWeek3 from './Component/Reading/MSWORD/WEEK!/MsWorkWeek3';
import MsWorkWeek4 from './Component/Reading/MSWORD/WEEK!/MsWorkWeek4';

import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './AuthProvider';
import StudentDashboard from './Component/Admin/StudentDashboard';
import StudentCardPage from './Component/Admin/StudentCardPage';
import CourseDetailPage from './Component/Pages/CourseDetailPage';
import LearningPathDetailPage from './Component/Pages/LearningPathDetailPage';
import Week1HTMLIntro from './Component/Reading/HTML/Week1HTMLIntro';
import Week2HTMLMedia from './Component/Reading/HTML/Week2HTMLMedia';
import Week3FormsSemantic from './Component/Reading/HTML/Week3HTMLFormsSemantic';
import Week4BestPracticesCSS from './Component/Reading/HTML/Week4HTLBestPracticesCSS';
import Week1PythonIntro from './Component/Reading/Python/Week1PythonIntro';
import Week2ControlFlow from './Component/Reading/Python/Week2ControlFlow';
import Week3MoreCollectionsFunctions from './Component/Reading/Python/Week3MoreCollectionsFunctions';
import Week4ErrorHandlingFileIO from './Component/Reading/Python/Week4ErrorHandlingFileIO';
import EnrollmentForm from './Component/Admin/EnrollmentForm';
import FeesForm from './Component/Admin/FeesForm';
import PrintEnrollmentDetails from './Component/Admin/PrintEnrollmentDetails';




function App() {
  return (
    <AuthProvider>
    <div className="font-sans antialiased">
      <Routes>
        {/* The HomePage component is rendered when the path is '/' */}
        <Route path="/" element={<Home />} />
        




        {/* Dedicated routes for other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
         <Route path="/courses/:id" element={<CourseDetailPage />} />
         <Route path="/learning-paths/:id" element={<LearningPathDetailPage />} />
        <Route path="/login" element={<VerifyPayment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/blog" element={<BlogPage />} />


        {/* Dedicated routes for other pages base on userid login */}
        <Route path="/userForm" element={<UserProfileForm />} />
        <Route path="/freeCourse" element={<FreeCourseForm />} />
        <Route path="/distanceCourseForm" element={<PaidCourseForm />} />
        <Route path="/inPersonCourseForm" element={<InPersonCourseForm />} />
        <Route path="/inPersonDashboard" element={<InPersonDashboard />} />
        <Route path="/inPerson-courses/:courseId" element={<InPersonCoursePage />} />
        <Route path="/distanceDashboard" element={<DistanceDashboard />} />
        <Route path="/my-courses/:courseId" element={<CoursePage />} />
       
           {/* Admin */}
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/students" element={<StudentDashboard />} />
        <Route path="/students/:id" element={<StudentCardPage />} />
        <Route path="/enrollment-form" element={<EnrollmentForm />} />
        <Route path="/fees-form" element={<FeesForm />} />
        <Route path="/print-enrollment" element={<PrintEnrollmentDetails />} />

        {/* Notes */}
        <Route path="/courses/week_1" element={<Week1Page />} />
        <Route path="/courses/MsWorkWeek1" element={<MsWorkWeek1 />} />
        <Route path="/courses/MsWorkWeek2" element={<MsWorkWeek2 />} />
        <Route path="/courses/MsWorkWeek3" element={<MsWorkWeek3 />} />
        <Route path="/courses/MsWorkWeek4" element={<MsWorkWeek4 />} />

        {/* HTML */}
        <Route path="/courses/Week1HTMLIntro" element={<Week1HTMLIntro />} />
        <Route path="/courses/Week2HTMLMedia" element={<Week2HTMLMedia />} />
        <Route path="/courses/Week3HTMLFormsSemantic" element={<Week3FormsSemantic />} />
        <Route path="/courses/Week4IntroductiontoCSS" element={<Week4BestPracticesCSS />} />

        {/* Python */}
        <Route path="/courses/Week1PythonIntro" element={<Week1PythonIntro />} />
        <Route path="/courses/Week2ControlFlow" element={<Week2ControlFlow />} />
        <Route path="/courses/Week3MoreCollectionsFunctions" element={<Week3MoreCollectionsFunctions />} />
        <Route path="/courses/Week4ErrorHandlingFileIO" element={<Week4ErrorHandlingFileIO />} />





        {/* --- Correct Route for QuizPage --- */}
        <Route path="/quiz/:quizId" element={<QuizPage />} />
       





        {/* Optional: Catch-all route for 404 Not Found */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>

    </div>

    </AuthProvider>
  );
}

export default App;
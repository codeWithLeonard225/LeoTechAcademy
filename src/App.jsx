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

function App() {
  return (
    <div className="font-sans antialiased">
      <Routes>
        {/* The HomePage component is rendered when the path is '/' */}
        <Route path="/" element={<Home />} />
        
       


        {/* Dedicated routes for other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<VerifyPayment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/blog" element={<BlogPage />} />

        <Route path="/userForm" element={<UserProfileForm />} />
        <Route path="/freeCourse" element={<FreeCourseForm />} />
        <Route path="/distanceCourseForm" element={<PaidCourseForm />} />
        <Route path="/inPersonCourseForm" element={<InPersonCourseForm />} />
        <Route path="/inPersonDashboard" element={<InPersonDashboard />} />
        <Route path="/inPerson-courses/:courseId" element={<InPersonCoursePage />} />
        <Route path="/distanceDashboard" element={<DistanceDashboard />} />
        <Route path="/my-courses/:courseId" element={<CoursePage />} />
         {/* <Route path="/" element={<VideoUploader />} /> */}
        {/* <Route path="/" element={<AdminPanel />} /> */}
        
        {/* Notes */}
        <Route path="/courses/week_1" element={<Week1Page />} />


          {/* --- Correct Route for QuizPage --- */}
        <Route path="/quiz/:quizId" element={<QuizPage />} />

        
       
       

        {/* Optional: Catch-all route for 404 Not Found */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>

      {/* The Footer also goes here, outside of <Routes>, to appear on all pages */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
// src/App.js
import React from 'react';
import { Routes, Route } from "react-router-dom";

// Import your Navbar component
import Navbar from './Component/Nav/Navbar'; // Adjust path if necessary, assuming components/Nav/Navbar.jsx
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Courses from './Component/Pages/Courses';
import VerifyPayment from './Component/Pages/VerifyPayment';
import UserDashboard from './Component/Pages/UserDashboard';
import CoursePage from './Component/Pages/data/CoursePage';
import Services from './Component/Pages/Services';
import Contact from './Component/Pages/ContactPage';
import FAQsPage from './Component/Pages/FAQsPage';
import BlogPage from './Component/Pages/BlogPage';
import Footer from './Component/Pages/Footer';


// import Footer from './components/Footer/Footer'; // Assuming you'll create this in components/Footer/Footer.jsx

// Import your page components


function App() {
  return (
    <div className="font-sans antialiased">
      {/* The Navbar goes here, outside of <Routes>, so it appears on all pages */}
      <Navbar />

      <Routes>
        {/* The HomePage component is rendered when the path is '/' */}
        <Route path="/" element={<Home />} />

        {/* Dedicated routes for other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<VerifyPayment />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/my-courses/:courseId" element={<CoursePage />} />
        
        
       
       

        {/* Optional: Catch-all route for 404 Not Found */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>

      {/* The Footer also goes here, outside of <Routes>, to appear on all pages */}
      <Footer />
    </div>
  );
}

export default App;
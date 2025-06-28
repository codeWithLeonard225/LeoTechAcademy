// src/pages/CourseDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from './coursesData'; // Import your course data
import Navbar from '../Nav/Navbar'; // Import Navbar
import Footer from './Footer';     // Import Footer

const CourseDetailPage = () => {
  // Get the 'id' parameter from the URL
  const { id } = useParams();

  // Find the course in your data based on the id
  const course = coursesData.find((c) => c.id === id);

  // If no course is found for that ID, handle it (e.g., show a 404 message or redirect)
  if (!course) {
    return (
      <>
        <Navbar />
        <div className="bg-gray-50 min-h-screen pt-12 pb-20 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Course Not Found!</h1>
          <p className="text-gray-700 mb-6">The course you are looking for does not exist.</p>
          <Link to="/courses" className="text-leo-blue hover:underline">
            Go back to all courses
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // If the course is found, render its details
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen pt-12 pb-20">
        <div className="container mx-auto px-6 max-w-4xl bg-white rounded-xl shadow-lg p-8 border border-gray-100 mt-10">
          <Link to="/courses" className="text-leo-blue hover:underline flex items-center mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to All Courses
          </Link>

          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 sm:h-72 object-cover rounded-lg mb-8 shadow-md"
          />


          <h1 className="text-4xl font-extrabold text-leo-blue mb-4">{course.title}</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">{course.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-gray-700">
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Level:</strong> {course.level}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Price:</strong> {course.price}</p>
            <p><strong>Category:</strong> <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">{course.category}</span></p>
          </div>

          {/* Add more detailed content here if available, like lesson plans, prerequisites, etc. */}
          {/* What You'll Learn Section */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-leo-blue mb-4">What You'll Learn</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {course.whatYouWillLearn && course.whatYouWillLearn.length > 0 ? (
                course.whatYouWillLearn.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <li>Details coming soon.</li>
              )}
            </ul>
          </div>


        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetailPage;
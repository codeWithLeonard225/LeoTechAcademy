// src/pages/LearningPathDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { learningPaths } from './coursesData';
import Navbar from '../Nav/Navbar';
import Footer from './Footer';

const LearningPathDetailPage = () => {
  const { id } = useParams();
  const path = learningPaths.find((p) => p.id === id);

  if (!path) {
    return (
      <>
        <Navbar />
        <div className="bg-gray-50 min-h-screen pt-12 pb-20 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Learning Path Not Found!</h1>
          <p className="text-gray-700 mb-6">The learning path you are looking for does not exist.</p>
          <Link to="/courses" className="text-leo-blue hover:underline">
            Go back to all courses
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen pt-12 pb-20">
        <div className="container mx-auto px-6 max-w-4xl bg-white rounded-xl shadow-lg p-8 border border-gray-100 mt-10">
          <Link to="/courses" className="text-leo-blue hover:underline flex items-center mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Courses
          </Link>

          <img src={path.image} alt={path.title} className="w-full h-56 object-cover rounded-lg mb-8 shadow-md" />

          <h1 className="text-4xl font-extrabold text-leo-blue mb-4">{path.title}</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">{path.description}</p>

          <div className="mb-8 text-gray-700">
            <p><strong>Duration:</strong> {path.duration}</p>
            <p className="mt-2"><strong>Includes Courses:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1">
              {path.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>

          {/* Projects Section */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-leo-blue mb-4">Projects You'll Build</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {path.projectsYouWillBuild && path.projectsYouWillBuild.length > 0 ? (
                path.projectsYouWillBuild.map((project, index) => (
                  <li key={index}>{project}</li>
                ))
              ) : (
                <li>Projects will be added soon.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LearningPathDetailPage;

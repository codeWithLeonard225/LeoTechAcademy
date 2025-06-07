// src/pages/CoursesPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {coursesData, learningPaths} from './coursesData';



const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Dynamically get all unique categories from the coursesData
  const categories = ['All', ...new Set(coursesData.map(course => course.category))].sort();

  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearchTerm = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              course.category.toLowerCase().includes(searchTerm.toLowerCase()); // Also search by category
    return matchesCategory && matchesSearchTerm;
  });

 

  return (
    <div className="bg-gray-50 min-h-screen pt-12 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Page Hero Section */}
        <section className="text-center mb-16 py-12 bg-white rounded-xl shadow-lg border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-extrabold text-leo-blue mb-6 animate-fade-in-down">
            Explore Our Practical Courses & Programs
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto animate-fade-in-up">
            Find the perfect course to kickstart your career or grow your business. Our programs are designed for practical skills and real-world impact in Sierra Leone.
          </p>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12 bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Search Input */}
            <div className="w-full md:w-1/2 relative">
              <input
                type="text"
                placeholder="Search courses by title, skill, instructor, or category..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leo-green focus:border-transparent text-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>

            {/* Category Filter */}
            <div className="w-full md:w-1/2">
              <label htmlFor="category-select" className="sr-only">Filter by Category</label>
              <div className="relative"> {/* Added relative for custom arrow positioning */}
                <select
                  id="category-select"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-leo-green focus:border-transparent appearance-none cursor-pointer"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                {/* Custom dropdown arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.59 4.59z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Catalog */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-leo-blue mb-10 text-center relative">
            <span className="relative z-10">Our Course Catalog</span>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-2 bg-leo-green rounded-full z-0"></span>
          </h2>
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out border border-gray-100 flex flex-col">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-leo-blue mb-2">{course.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{course.description}</p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center text-gray-500 text-sm mb-3">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          {course.instructor}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-1.25-3M15 10V5a2 2 0 00-2-2H9a2 2 0 00-2 2v5h6zm-.75 0h-4.5M20 10h3M1 10h3"></path></svg>
                          {course.level}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          {course.duration}
                        </span>
                        <span className="text-leo-blue font-bold text-lg">{course.price}</span>
                      </div>
                      <Link
                        to={`/courses/${course.id}`}
                        className="inline-block bg-leo-green text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 font-semibold shadow-md w-full text-center"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-700 text-xl mt-10">No courses found matching your criteria. Please try a different search or filter.</p>
          )}
        </section>

        {/* Learning Paths / Bundles Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-leo-blue mb-10 text-center relative">
            <span className="relative z-10">Accelerate Your Career with Learning Paths</span>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-2 bg-leo-yellow rounded-full z-0"></span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {learningPaths.map((path) => (
              <div key={path.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out border border-gray-100 flex flex-col">
                <img src={path.image} alt={path.title} className="w-full h-56 object-cover" />
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-leo-blue mb-3">{path.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{path.description}</p>
                    <p className="text-gray-600 text-sm mb-4">
                      <strong>Includes:</strong> {path.courses.join(', ')}
                    </p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-gray-500 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {path.duration}
                    </span>
                    <Link
                      to={`/learning-paths/${path.id}`}
                      className="inline-block bg-leo-blue text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 font-semibold shadow-md"
                    >
                      View Path
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default CoursesPage;
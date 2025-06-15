// src/pages/BlogPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import Footer from './Footer';

const BlogPage = () => {
  // Dummy blog post data for demonstration
  // In a real application, this would come from an API or CMS
  const blogPosts = [
    {
      id: 1,
      title: "Mastering Basic Computer Skills: A Guide for Beginners in Sierra Leone",
      excerpt: "Unlock the power of technology! This guide covers essential computer skills, from navigating the desktop to managing files, crucial for success in today's digital world in Sierra Leone.",
      imageUrl: "https://images.unsplash.com/photo-1596496336495-23e590200870?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "May 28, 2025",
      author: "LeoTech Team",
      link: "/blog/post-1", // Link to individual post page
    },
    {
      id: 2,
      title: "New Course Alert: Introduction to Web Development with Local Impact",
      excerpt: "Exciting news! We've launched a new course designed to empower Sierra Leonean youth with foundational web development skills. Learn to build websites and kickstart your tech career.",
      imageUrl: "https://images.unsplash.com/photo-1549692520-acc666922d05?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "May 20, 2025",
      author: "Admin",
      link: "/blog/post-2",
    },
    {
      id: 3,
      title: "Success Story: How Mariama Landed a Tech Job After Our Data Entry Course",
      excerpt: "Inspiring! Read Mariama's journey from beginner to employed professional after completing our Data Entry & Digital Literacy course. Her dedication paid off!",
      imageUrl: "https://images.unsplash.com/photo-1552581234-26390f59aba1?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "May 15, 2025",
      author: "Student Spotlight",
      link: "/blog/post-3",
    },
    {
      id: 4,
      title: "Cybersecurity Tips: Protecting Your Digital Life in Sierra Leone",
      excerpt: "In an increasingly connected world, staying safe online is paramount. Here are essential cybersecurity tips for individuals and small businesses in Sierra Leone.",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "May 10, 2025",
      author: "Tech Expert",
      link: "/blog/post-4",
    },
     {
      id: 5,
      title: "The Future of Education: Blended Learning Approaches in Sierra Leone",
      excerpt: "Discover how combining online and offline learning is transforming education and making it more accessible across Sierra Leone. A look into our innovative approaches.",
      imageUrl: "https://images.unsplash.com/photo-1546410531-bb4498305c56?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "May 01, 2025",
      author: "Insights Team",
      link: "/blog/post-5",
    },
  ];

  return (
    <> 
    <Navbar/>
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col">
      {/* Header - Simple navigation (re-using common header structure) */}
      <header className="bg-white shadow-md p-4 flex flex-col sm:flex-row justify-between items-center z-10">
        <Link to="/" className="text-xl sm:text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-200 mb-2 sm:mb-0">
          Your Platform Name
        </Link>
        <nav>
          <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-6">
            <li><Link to="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium text-xs sm:text-sm md:text-base">Dashboard</Link></li>
            <li><Link to="/courses" className="text-gray-700 hover:text-blue-600 font-medium text-xs sm:text-sm md:text-base">Courses</Link></li>
            <li><Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium text-xs sm:text-sm md:text-base">Services</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium text-xs sm:text-sm md:text-base">Contact</Link></li>
            <li><Link to="/faqs" className="text-gray-700 hover:text-blue-600 font-medium text-xs sm:text-sm md:text-base">FAQs</Link></li>
            <li><Link to="/blog" className="text-blue-600 font-bold text-xs sm:text-sm md:text-base">Blog / News</Link></li> {/* Active link */}
          </ul>
        </nav>
      </header>

      {/* Hero Section for Blog/News */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16 px-4 md:py-24 text-center shadow-lg relative overflow-hidden">
        {/* Subtle background pattern/effect */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 46v-4h-2v4H0v2h4v4h2v-4h4v-2H6zM6-20v-4h-2v4H0v2h4v4h2v-4h4v-2H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Our Blog & Latest News
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Stay updated with tech tips, platform announcements, and inspiring success stories from our community in Sierra Leone.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 md:py-16 md:px-6 lg:px-10 max-w-6xl mx-auto flex-grow">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">
          Latest Articles
        </h2>

        {blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                <Link to={post.link}>
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <div className="p-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                    <Link to={post.link} className="hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {post.date} by {post.author}
                  </p>
                  <p className="text-gray-700 text-base mb-4 line-clamp-3"> {/* line-clamp for consistent height */}
                    {post.excerpt}
                  </p>
                  <Link
                    to={post.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition duration-200 text-sm"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600">No blog posts found. Check back soon for exciting updates!</p>
        )}

        {/* Optional: Call to Action for contributing or staying updated */}
        <div className="text-center mt-12 bg-indigo-50 p-6 rounded-lg shadow-inner">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-800 mb-4">
            Don't Miss Out!
          </h3>
          <p className="text-sm sm:text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest tech tips, course announcements, and student success stories directly in your inbox.
          </p>
          {/* In a real app, this would be a form or a link to a subscription page */}
          <Link
            to="/subscribe"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 text-sm sm:text-base"
          >
            Subscribe Now
          </Link>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default BlogPage;
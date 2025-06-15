// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../Nav/Navbar';
import Footer from './Footer';

// --- Hero Section Component ---
const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-leo-blue to-green-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Practical Skills for a <span className="text-leo-yellow">Brighter Sierra Leone</span>.
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Empowering youth with in-demand technical and entrepreneurial skills for employment and self-reliance. Learn anytime, anywhere, on any device.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <a href="/all-courses" className="px-8 py-4 bg-leo-green text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transform hover:scale-105 transition duration-300">
              Explore All Courses
            </a>
            <a href="/signup" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-leo-blue transform hover:scale-105 transition duration-300">
              Get Started Free
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* Replace with a relevant, high-quality image of Sierra Leonean youth learning */}
          <img
            src="https://via.placeholder.com/600x400?text=Empowering+Youth+SL"
            alt="Youth learning practical skills in Sierra Leone"
            className="rounded-lg shadow-2xl max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

// --- Why LeoTech? (Value Proposition) Section ---
const WhyLeoTech = () => {
  const points = [
    {
      icon: (
        <svg className="w-10 h-10 text-leo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V9m0 3v3m0 3h.01M12 4v1m-4 5H3m11 0h7m-11 5H3m11 0h7"></path>
        </svg>
      ),
      title: "Skills for Jobs",
      description: "Learn practical skills directly applicable to current job market demands in Sierra Leone.",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-leo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Mobile-Friendly Learning",
      description: "Access lessons anytime, anywhere on your smartphone, optimized for low data usage.",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-leo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      title: "Affordable & Flexible",
      description: "Quality education that fits your budget, with flexible payment options including mobile money.",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50"> {/* ID for Navbar link */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-leo-blue mb-12">Why Choose LeoTech Academy?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <div className="mb-4 flex justify-center">{point.icon}</div>
              <h3 className="text-xl font-semibold text-leo-blue mb-4">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- How It Works Section ---
const HowItWorks = () => {
  const steps = [
    { number: 1, title: "Browse Courses", description: "Explore our wide range of practical, job-ready courses." },
    { number: 2, title: "Enroll & Learn", description: "Sign up, pay with mobile money, and start learning at your own pace." },
    { number: 3, title: "Gain a Skill", description: "Apply your new skills, get certified, and open doors to new opportunities." },
  ];

  return (
    <section id="services" className="py-20 bg-white"> {/* Increased padding, consistent with other sections */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-leo-blue mb-16 relative"> {/* Enhanced heading styles */}
          <span className="relative z-10">How LeoTech Academy Works</span>
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-2 bg-leo-yellow rounded-full z-0 animate-fade-in-down"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10"> {/* Increased gap */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 rounded-xl shadow-lg border border-gray-100
                         transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out
                         bg-white" // Explicitly set background to white for the shadow to show
            >
              <div className="w-20 h-20 bg-leo-green text-white rounded-full flex items-center justify-center
                              text-4xl font-extrabold mb-6 shadow-md border-2 border-leo-green/50"> {/* Larger number circle */}
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-leo-blue mb-3">{step.title}</h3> {/* Larger, bolder title */}
              <p className="text-gray-700 text-center leading-relaxed">{step.description}</p> {/* Better line height */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// --- Featured Courses Section ---
const FeaturedCourses = () => {
  const courses = [
    {
      title: "Basic Electrical Wiring",
      description: "Gain hands-on experience with domestic and commercial electrical wiring practices.",
      image: "https://via.placeholder.com/300x200?text=Electrical+Wiring+Course",
      level: "Beginner",
      duration: "5 Weeks",
    },
    {
      title: "Computer Hardware Maintenance & Repair",
      description: "Learn to assemble, repair, and maintain computers for homes and businesses.",
      image: "https://via.placeholder.com/300x200?text=Hardware+Repair+Course",
      level: "Beginner",
      duration: "4 Weeks",
    },
    {
      title: "Digital Marketing & Social Media Promotion",
      description: "Master online tools for promoting products, services, and growing your brand.",
      image: "https://via.placeholder.com/300x200?text=Digital+Marketing+Course",
      level: "Beginner",
      duration: "3 Weeks",
    },
  ];

  return (
    <section id="courses-section" className="py-16 bg-gray-100"> {/* ID for Navbar link */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-leo-blue mb-12">Popular Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-leo-blue mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
                  <span>Level: {course.level}</span>
                  <span>Duration: {course.duration}</span>
                </div>
                <a href="/all-courses" className="inline-block bg-leo-green text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300">
                  View Course
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a href="/all-courses" className="inline-block text-leo-blue text-lg font-semibold hover:text-leo-green transition duration-300">
            Browse All Courses &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

// --- Testimonials Section ---
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Thanks to LeoTech Academy, I now have the skills to repair phones and earn a living! The lessons were so practical.",
      name: "Fatmata S.",
      title: "Mobile Repair Technician",
    },
    {
      quote: "I never thought I could understand solar energy, but LeoTech made it simple and fun. Highly recommend!",
      name: "Mohamed K.",
      title: "Aspiring Solar Technician",
    },
    {
      quote: "The web development course was amazing! I can now build basic websites for my small business clients.",
      name: "Aminata B.",
      title: "Entrepreneur",
    },
  ];

  return (
    <section id="contact" className="bg-gradient-to-r from-green-900 to-leo-blue text-white py-16"> {/* Using contact ID for simplicity, you might rename */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Hear From Our Successful Learners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white text-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between transform hover:scale-105 transition duration-300">
              <p className="italic text-lg mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-leo-blue">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Secondary Call to Action ---
const CTA = () => {
  return (
    <section id="faqs" className="py-16 bg-gray-100"> {/* Using faqs ID for simplicity, you might rename */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-leo-blue mb-6">Ready to Transform Your Future?</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">Join thousands of Sierra Leoneans building valuable skills for today's economy.</p>
        <a href="/signup" className="px-10 py-5 bg-leo-green text-white text-xl font-semibold rounded-lg shadow-xl hover:bg-green-700 transform hover:scale-105 transition duration-300">
          Enroll Now & Start Learning!
        </a>
      </div>
    </section>
  );
};


// --- Main HomePage Component ---
const Home = () => {
  return (
    <>
    <Navbar/>
      <Hero />
      <WhyLeoTech />
      <HowItWorks />
      <FeaturedCourses />
      <Testimonials />
      <CTA />
      <Footer/>
    </>
  );
};

export default Home;
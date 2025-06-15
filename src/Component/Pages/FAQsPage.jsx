// src/pages/FAQsPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Assuming you have lucide-react installed
import Navbar from '../Nav/Navbar';

const FAQsPage = () => {
  // State to manage which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Define your frequently asked questions and their answers
  const faqs = [
    {
      question: "Is learning on LeoTech Academy completely free?",
      answer: "LeoTech Academy offers a blend of free and paid resources. Many of our foundational video courses and learning materials are available for free to help everyone get started. However, premium content, specialized workshops, private tutoring, and official certificates often come with a fee to support our platform and provide higher-value services. We believe in accessible education while ensuring sustainability for quality offerings.",
    },
    {
      question: "How do I get a certificate after completing a course?",
      answer: "For eligible paid courses, certificates are awarded upon successful completion of all course modules and passing any required assessments. Once you meet these criteria, your certificate will typically be available for download from your dashboard. For detailed instructions on a specific course's certification process, please refer to that course's description or contact our support team.",
    },
    {
      question: "Can I learn without internet access?",
      answer: "While our platform is primarily online, we understand internet access can be a challenge in Sierra Leone. We are actively exploring and developing features for offline learning, such as downloadable course materials or companion apps. Please check individual course descriptions for any available offline options or contact us for more information on our future plans.",
    },
    {
      question: "Will I get a job after learning through LeoTech Academy?",
      answer: "LeoTech Academy focuses on providing practical, in-demand skills relevant to the job market in Sierra Leone and beyond. While we cannot guarantee employment, our goal is to equip you with the knowledge and abilities that significantly enhance your employability. We often provide career guidance, resume-building tips, and sometimes connect our top-performing students with potential employers or internship opportunities. Your dedication to learning and applying these skills will be key to your success.",
    },
    {
        question: "What types of courses does LeoTech Academy offer?",
        answer: "We offer a diverse range of courses primarily focused on technology, digital literacy, and vocational skills. This includes, but is not limited to, basic computer skills, office productivity tools, web development, graphic design, data entry, and specialized software training. Our curriculum is constantly updated to reflect industry demands.",
    },
    {
        question: "What are the payment options for paid courses/services?",
        answer: "We strive to make payments convenient for our users in Sierra Leone. We typically accept payments via mobile money (Orange Money, Africell Money), bank transfers, and potentially other local payment gateways. Specific payment instructions will be provided during the enrollment or service booking process.",
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
            <li><Link to="/faqs" className="text-blue-600 font-bold text-xs sm:text-sm md:text-base">FAQs</Link></li> {/* Active link */}
          </ul>
        </nav>
      </header>

      {/* Hero Section for FAQs */}
      <section className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-16 px-4 md:py-24 text-center shadow-lg relative overflow-hidden">
        {/* Subtle background pattern/effect */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 46v-4h-2v4H0v2h4v4h2v-4h4v-2H6zm0-20v-4h-2v4H0v2h4v4h2v-4h4v-2H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Find quick answers to common questions about our platform, courses, and services.
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 px-4 md:py-16 md:px-6 lg:px-10 max-w-4xl mx-auto flex-grow">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">
          Your Questions, Answered.
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <button
                className="flex justify-between items-center w-full p-4 sm:p-5 md:p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                  {faq.question}
                </span>
                <span className="text-blue-600 transition-transform duration-300">
                  {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </span>
              </button>
              {openIndex === index && (
                <div
                  className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 pt-2 bg-gray-50 border-t border-gray-200 text-sm sm:text-base text-gray-700 animate-fadeIn"
                  style={{ animationDuration: '0.3s' }} // Inline style for smooth animation
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action for Unanswered Questions */}
        <div className="text-center mt-12 bg-blue-50 p-6 rounded-lg shadow-inner">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-800 mb-4">
            Still have questions?
          </h3>
          <p className="text-sm sm:text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer you were looking for, please don't hesitate to reach out to our friendly support team. We're here to help!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 text-sm sm:text-base"
          >
            Contact Our Support
          </Link>
        </div>
      </section>
    </div>
    <footer/>
    </>
  );
};

export default FAQsPage;
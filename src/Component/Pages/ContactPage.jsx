// src/pages/ContactPage.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import Footer from './Footer';

const Contact = () => { // Renamed from 'Contact' to 'ContactPage'
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', // New field for subject
    message: '',
  });
  const [serviceInquiryDisplay, setServiceInquiryDisplay] = useState('');
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', 'submitting', null

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const service = queryParams.get('service');

    if (service) {
      // Map service codes to user-friendly names for display and form subject
      const serviceMap = {
        database: 'Custom School Database Creation Inquiry',
        workshops: 'School Workshops Inquiry',
        tutoring: 'Private Tutoring Inquiry',
        'app-dev': 'App Development for Schools Inquiry',
        custom: 'Custom Solution Inquiry',
        // Add more mappings if needed
      };
      const display = serviceMap[service] || `Inquiry about: ${service}`;
      setServiceInquiryDisplay(display);
      // Pre-fill subject. Ensure it's not overwritten if user types something.
      setFormData(prev => ({ ...prev, subject: display }));
    } else {
      setServiceInquiryDisplay('');
      // Clear subject if no service param, but only if it hasn't been manually set by the user
      // A more robust solution might involve a separate state for initialSubject from query params
      setFormData(prev => ({ ...prev, subject: prev.subject || '' }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // In a real application, you would send this data to your backend server
    // Example: using fetch API
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });

    // For demonstration, we'll simulate an API call
    try {
      console.log('Form Data Submitted:', formData);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulate success or error
      const simulationSuccess = true; // Change to false to test error state

      if (simulationSuccess) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        throw new Error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setFormStatus('error');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col">
      {/* Main Content Area */}
      <main className="flex-grow container mx-auto p-4 md:p-8 lg:p-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-100">
          {/* Title and Introduction */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-4 sm:mb-6">
            Get in Touch
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            We'd love to hear from you! Whether you have questions, need support, or are interested in partnerships and custom solutions for your school in **Sierra Leone**, reach out to us.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Direct Contact Information */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left bg-blue-50 rounded-xl p-6 shadow-inner">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4">
                Reach Us Directly
              </h2>
              <div className="space-y-4 mb-6">
                <p className="flex flex-col sm:flex-row items-center justify-center lg:justify-start text-base sm:text-lg font-semibold text-gray-700">
                  <span className="text-2xl sm:text-3xl mr-0 sm:mr-3 mb-1 sm:mb-0">📞</span>
                  WhatsApp: <a href="https://wa.me/23277123456" target="_blank" rel="noopener noreferrer" className="ml-0 sm:ml-2 text-blue-600 hover:underline">
                    +232 77 123 456
                  </a> {/* Updated with a real Sierra Leone number placeholder */}
                </p>
                <p className="flex flex-col sm:flex-row items-center justify-center lg:justify-start text-base sm:text-lg font-semibold text-gray-700">
                  <span className="text-2xl sm:text-3xl mr-0 sm:mr-3 mb-1 sm:mb-0">✉️</span>
                  Email: <a href="mailto:info@yourplatform.com" className="ml-0 sm:ml-2 text-blue-600 hover:underline">
                    info@yourplatform.com
                  </a> {/* Replace with your actual email */}
                </p>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3">
                Connect on Social Media
              </h3>
              <div className="flex space-x-4 sm:space-x-6 justify-center lg:justify-start">
                {/* Replace # with your actual social media links */}
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110 text-2xl sm:text-3xl">
                  {/* Placeholder for Facebook icon */}
                  <i className="fab fa-facebook"></i> {/* Requires Font Awesome */}
                  <span role="img" aria-label="Facebook">📘</span> {/* Fallback emoji */}
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110 text-2xl sm:text-3xl">
                  {/* Placeholder for Twitter icon */}
                  <i className="fab fa-twitter"></i> {/* Requires Font Awesome */}
                  <span role="img" aria-label="Twitter">🐦</span> {/* Fallback emoji */}
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110 text-2xl sm:text-3xl">
                  {/* Placeholder for LinkedIn icon */}
                  <i className="fab fa-linkedin"></i> {/* Requires Font Awesome */}
                  <span role="img" aria-label="LinkedIn">🔗</span> {/* Fallback emoji */}
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
                Send Us a Message
              </h2>

              {formStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                  <strong className="font-bold">Success!</strong>
                  <span className="block sm:inline ml-2">Your message has been sent. We'll get back to you soon.</span>
                </div>
              )}
              {formStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                  <strong className="font-bold">Error!</strong>
                  <span className="block sm:inline ml-2">Failed to send message. Please try again later.</span>
                </div>
              )}

              {serviceInquiryDisplay && (
                <div className="bg-blue-50 text-blue-700 p-3 rounded-lg border border-blue-200 mb-4 text-sm sm:text-base text-center font-semibold">
                  You are inquiring about: <span className="font-bold">{serviceInquiryDisplay}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm sm:text-base font-bold mb-2">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm sm:text-base font-bold mb-2">
                    Your Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 text-sm sm:text-base font-bold mb-2">
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm sm:text-base font-bold mb-2">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-sm sm:text-base"
                    required
                  ></textarea>
                </div>
                <div className="flex flex-col items-center">
                  <button
                    type="submit"
                    className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 w-full md:w-auto text-base ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                  {/* Removed duplicate success/error messages here as they are now at the top of the form */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default Contact; // Export with the updated name
// src/pages/ServicesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  // Placeholder for icons. In a real app, you might use:
  // import { Database, Award, Briefcase, BookOpen, Smartphone } from 'lucide-react'; // Example using Lucide icons
  // Or simply use image assets or font-awesome classes.

  const services = [
    {
      id: 'custom-database',
      title: 'Custom School Database Creation',
      icon: '📊', // Placeholder emoji icon
      description: 'Streamline school operations with bespoke database solutions. From student records to academic performance tracking, we build robust, scalable, and secure systems tailored to your institution\'s unique needs in Sierra Leone.',
      benefits: [
        'Efficient data management',
        'Improved decision-making',
        'Enhanced security',
        'Customizable reporting',
      ],
      ctaText: 'Request a Consultation',
      ctaLink: '/contact?service=database', // Link to a contact page with pre-filled service
    },
    {
      id: 'school-workshops',
      title: 'Practical School Workshops',
      icon: '🏫', // Placeholder emoji icon
      description: 'Empower your educators and students with hands-on workshops. We offer training in digital literacy, modern teaching tools, coding basics, and more, designed to foster practical skills and innovation within your school environment.',
      benefits: [
        'Skill development for teachers',
        'Engaging student learning',
        'Curriculum enhancement',
        'Technology integration',
      ],
      ctaText: 'Arrange a Workshop',
      ctaLink: '/contact?service=workshops',
    },
    {
      id: 'certificates-fee',
      title: 'Accredited Course Certificates',
      icon: '🏆', // Placeholder emoji icon
      description: 'Receive a verifiable certificate upon successful completion of our paid courses. A professional credential that validates your new skills and boosts your career prospects in technical trades and digital fields.',
      benefits: [
        'Professional recognition',
        'Career advancement',
        'Skill validation',
        'Employer confidence',
      ],
      ctaText: 'Explore Certified Courses',
      ctaLink: '/courses', // Link to courses page where certificates are offered
    },
    {
      id: 'private-tutoring',
      title: 'Personalized Private Tutoring',
      icon: '👨‍🏫', // Placeholder emoji icon
      description: 'Access one-on-one expert guidance for specific subjects or technical skills. Our private tutoring sessions are customized to your learning pace and goals, ensuring accelerated progress and deeper understanding.',
      benefits: [
        'Tailored learning plans',
        'Direct expert feedback',
        'Flexible scheduling',
        'Targeted skill improvement',
      ],
      ctaText: 'Book a Tutoring Session',
      ctaLink: '/contact?service=tutoring',
    },
    {
      id: 'app-development',
      title: 'App Development for Schools',
      icon: '📱', // Placeholder emoji icon
      description: 'Revolutionize school communication and administration with custom mobile or web applications. We develop user-friendly apps for student portals, parent communication, attendance tracking, and more, enhancing engagement and efficiency.',
      benefits: [
        'Improved communication',
        'Streamlined administration',
        'Enhanced parent engagement',
        'Modern school branding',
      ],
      ctaText: 'Discuss Your App Idea',
      ctaLink: '/contact?service=app-dev',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-4 md:py-24 text-center shadow-lg relative overflow-hidden">
        {/* Subtle background pattern/effect */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 46v-4h-2v4H0v2h4v4h2v-4h4v-2H6zm0-20v-4h-2v4H0v2h4v4h2v-4h4v-2H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Beyond Learning: Our Comprehensive Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Empowering individuals and institutions with tailored solutions. We offer specialized expertise to help you innovate, streamline, and succeed.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 text-base sm:text-lg"
          >
            Get a Custom Quote
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 md:py-16 md:px-6 lg:px-10 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">
          How We Can Help You Succeed
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 border border-gray-100 flex flex-col items-start text-center"
            >
              <div className="text-5xl sm:text-6xl mb-4 text-blue-500 w-full text-center">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 w-full text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 text-left">
                {service.description}
              </p>
              {service.benefits && service.benefits.length > 0 && (
                <div className="mb-4 w-full text-left">
                  <h4 className="font-semibold text-gray-700 mb-2 text-base">Key Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
              <Link
                to={service.ctaLink}
                className="mt-auto inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg text-sm sm:text-base transition duration-300 w-full text-center"
              >
                {service.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action for Custom Needs */}
      <section className="bg-gray-100 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Have a Unique Requirement?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            If you have a specific project or need that isn't listed, don't hesitate to reach out. We specialize in tailored solutions.
          </p>
          <Link
            to="/contact?service=custom"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 text-base sm:text-lg"
          >
            Contact Us for Custom Solutions
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
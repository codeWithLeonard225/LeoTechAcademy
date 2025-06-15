// src/pages/AboutPage.jsx
import React from 'react';
import Navbar from '../Nav/Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen pt-12 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Hero Section for About Page */}
          <section
            className="text-center mb-16 p-10 rounded-lg
             bg-gradient-to-r from-leo-blue/80 to-leo-green/70
             shadow-lg
             text-white
             animate-fade-in"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
              Empowering Sierra Leone Through Practical Skills
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              At LeoTech Academy, we believe in the transformative power of education, especially when it's practical, accessible, and locally relevant. We're dedicated to equipping Sierra Leonean youth with the skills needed to thrive in today's dynamic job market.
            </p>
          </section>
          {/* Mission & Vision */}
          <section className="bg-white p-8 md:p-10 rounded-xl shadow-lg mb-16 border border-gray-100 animate-fade-in">
            <h2 className="text-3xl font-bold text-leo-blue mb-6 text-center">Our Mission & Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-leo-green mb-3 flex items-center">
                  <svg className="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8V9h2v1H9zm1 4a1 1 100-2 1z" /></svg>
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide high-quality, affordable, and mobile-friendly technical and entrepreneurial training that directly addresses the skill gaps and employment challenges in Sierra Leone. We aim to empower individuals to gain meaningful employment or create their own sustainable businesses.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-leo-yellow mb-3 flex items-center">
                  <svg className="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading online academy in Sierra Leone, fostering a generation of skilled, innovative, and self-sufficient professionals who contribute significantly to the nation's economic growth and development.
                </p>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="bg-white p-8 md:p-10 rounded-xl shadow-lg mb-16 border border-gray-100 animate-fade-in">
            <h2 className="text-3xl font-bold text-leo-blue mb-6 text-center">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              LeoTech Academy was born out of a deep understanding of Sierra Leone's unique challenges and immense potential. Observing the growing demand for practical skills in sectors like technology, renewable energy, and vocational trades, coupled with limited access to quality, affordable training, our founders envisioned a platform that could bridge this gap.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We started with a passion for empowering individuals, recognizing that a skilled workforce is key to national development. From humble beginnings, we've grown into an online learning hub, constantly adapting our curriculum to meet local industry needs and ensuring our content is accessible even on mobile devices with limited data. Our journey is driven by the success stories of our learners.
            </p>
          </section>

          {/* The Team / Instructors */}
          <section className="bg-white p-8 md:p-10 rounded-xl shadow-lg mb-16 border border-gray-100 animate-fade-in">
            <h2 className="text-3xl font-bold text-leo-blue mb-8 text-center">Meet Our Expert Team & Instructors</h2>
            <p className="text-gray-700 leading-relaxed mb-10 text-center max-w-2xl mx-auto">
              Our greatest asset is our team of dedicated professionals and experienced instructors. They are not just educators; they are industry veterans with a passion for sharing their knowledge and making a real difference in Sierra Leone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example Instructor Card 1 */}
              <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <img src="https://via.placeholder.com/120x120?text=Jane+D" alt="Jane Doe" className="rounded-full w-32 h-32 object-cover mx-auto mb-4 border-4 border-leo-green" />
                <h3 className="text-xl font-bold text-leo-blue mb-1">Jane Doe</h3>
                <p className="text-leo-green font-semibold mb-2">Lead Web Development Instructor</p>
                <p className="text-gray-600 text-sm">
                  With 10+ years in web development, Jane specializes in React and backend technologies. She's passionate about nurturing the next generation of Sierra Leonean coders.
                </p>
              </div>

              {/* Example Instructor Card 2 */}
              <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <img src="https://via.placeholder.com/120x120?text=John+K" alt="John Kamara" className="rounded-full w-32 h-32 object-cover mx-auto mb-4 border-4 border-leo-yellow" />
                <h3 className="text-xl font-bold text-leo-blue mb-1">John Kamara</h3>
                <p className="text-leo-yellow font-semibold mb-2">Certified Electrical Engineer</p>
                <p className="text-gray-600 text-sm">
                  John brings extensive experience in renewable energy systems, including solar panel installation and maintenance, a critical skill for Sierra Leone.
                </p>
              </div>

              {/* Example Instructor Card 3 */}
              <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <img src="https://via.placeholder.com/120x120?text=Mariama+B" alt="Mariama Bangura" className="rounded-full w-32 h-32 object-cover mx-auto mb-4 border-4 border-leo-blue" />
                <h3 className="text-xl font-bold text-leo-blue mb-1">Mariama Bangura</h3>
                <p className="text-leo-blue font-semibold mb-2">Mobile Repair Specialist</p>
                <p className="text-gray-600 text-sm">
                  Mariama is a renowned expert in mobile device repair and diagnostics, empowering learners with essential practical skills for immediate employment.
                </p>
              </div>
            </div>
            {/* Add a link to a full team page if you have one */}
            {/* <div className="text-center mt-12">
            <a href="/team" className="inline-flex items-center text-leo-blue text-lg font-bold hover:text-leo-green transition duration-300 group">
              Meet All Our Instructors &rarr;
            </a>
          </div> */}
          </section>

          {/* Our Values */}
          <section className="bg-white p-8 md:p-10 rounded-xl shadow-lg mb-16 border border-gray-100 animate-fade-in">
            <h2 className="text-3xl font-bold text-leo-blue mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-4">
                <div className="text-leo-green mb-3 flex justify-center">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-leo-blue mb-2">Accessibility</h3>
                <p className="text-gray-700 text-sm">Ensuring everyone in Sierra Leone can access quality learning, regardless of location or device.</p>
              </div>
              <div className="p-4">
                <div className="text-leo-yellow mb-3 flex justify-center">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 11c1.66 0 2.99-1.34 2.99-3S13.66 5 12 5s-3 1.34-3 3 1.34 3 3 3zm-2 9v-2c-2.21 0-4-1.79-4-4s1.79-4 4-4H7V8h3c2.21 0 4 1.79 4 4s-1.79 4-4 4v2H6z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-leo-blue mb-2">Empowerment</h3>
                <p className="text-gray-700 text-sm">Providing skills that lead to real-world opportunities for employment and self-reliance.</p>
              </div>
              <div className="p-4">
                <div className="text-leo-blue mb-3 flex justify-center">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 0h-4V4h4v2z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-leo-blue mb-2">Quality</h3>
                <p className="text-gray-700 text-sm">Delivering up-to-date, relevant, and effective training content.</p>
              </div>
              <div className="p-4">
                <div className="text-leo-green mb-3 flex justify-center">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-10c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-leo-blue mb-2">Local Relevance</h3>
                <p className="text-gray-700 text-sm">Tailoring courses to the specific needs and opportunities within Sierra Leone.</p>
              </div>
            </div>
          </section>

          {/* Impact / Goals */}
          <section className="bg-gradient-to-r from-leo-blue to-green-900 text-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-700 animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-6">Our Impact & Goals for Sierra Leone</h2>
            <p className="text-lg leading-relaxed mb-6 text-center max-w-2xl mx-auto opacity-95">
              We are committed to creating a lasting positive impact on Sierra Leone's future. Our goals extend beyond just teaching; we aim to foster economic resilience and individual prosperity.
            </p>
            <ul className="list-disc list-inside text-lg leading-relaxed space-y-3 max-w-2xl mx-auto">
              <li><strong>Reduce Youth Unemployment:</strong> By providing demand-driven skills that directly lead to job opportunities.</li>
              <li><strong>Foster Entrepreneurship:</strong> Equipping individuals with the knowledge to start and grow their own successful businesses.</li>
              <li><strong>Promote Digital Literacy:</strong> Enhancing the overall digital capabilities of the workforce.</li>
              <li><strong>Support Sustainable Development:</strong> Through training in green technologies like solar installation, contributing to a cleaner future.</li>
              <li><strong>Empower Rural Communities:</strong> Making high-quality education accessible to those outside major urban centers.</li>
            </ul>
            <p className="text-lg leading-relaxed mt-8 text-center opacity-95">
              Join us in building a skilled and prosperous Sierra Leone.
            </p>
          </section>

        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
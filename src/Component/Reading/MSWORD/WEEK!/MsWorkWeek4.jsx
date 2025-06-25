import React from 'react';

export default function MsWorkWeek4() {
  // Function to handle the back button click
  const handleBackClick = () => {
    // This will navigate back in the browser history.
    // In a real React app with routing, you might use
    // history.goBack() from react-router-dom or similar.
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4 sm:p-6 lg:p-8 font-inter">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header Section */}
        <header className="bg-emerald-700 text-white p-6 sm:p-8 rounded-t-lg relative">
          {/* Back Button */}
          <button
            onClick={handleBackClick}
            className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75"
            aria-label="Go back"
          >
            &larr; Back
          </button>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-2 tracking-tight">
            MS Word for Total Beginners
          </h1>
          <p className="text-lg text-emerald-100 text-center">
            1-Month Course Notes
          </p>
        </header>

        {/* Week 4 Content Section */}
        <main className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-6 border-b-2 border-emerald-200 pb-2">
            WEEK 4: Document Finalization & Review
          </h2>

          <section className="mb-8">
            {/* Class 8: Review & Practice (Week 1-3) */}
            <div className="bg-orange-50 p-5 rounded-lg mb-6 shadow-sm">
              <h4 className="text-lg sm:text-xl font-bold text-orange-800 mb-3">
                Class 8 – Review & Practice (Weeks 1-3)
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong className="text-orange-700">Comprehensive Review:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Quick recap of fundamental skills: basic formatting, lists, paragraphs, tables, images, and page layout.</li>
                    <li>Hands-on exercises to combine all previously learned concepts into practical document creation tasks.</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Class 9: Proofreading & Accessibility */}
            <div className="bg-lime-50 p-5 rounded-lg mb-6 shadow-sm">
              <h4 className="text-lg sm:text-xl font-bold text-lime-800 mb-3">
                Class 9 – Proofreading & Accessibility
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong className="text-lime-700">Spell Check & Grammar Check:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Utilize built-in tools to identify and correct spelling mistakes and grammatical errors.</li>
                    <li>Learn to efficiently navigate and apply suggestions.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-lime-700">Thesaurus:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Enhance your vocabulary and improve writing style by finding synonyms for words.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-lime-700">Accessibility Checker:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Understand the importance of document accessibility for all users.</li>
                    <li>Basic overview of how to check and fix common accessibility issues (e.g., alternative text for images, proper heading structure).</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Class 10: Printing Options */}
            <div className="bg-fuchsia-50 p-5 rounded-lg shadow-sm">
              <h4 className="text-lg sm:text-xl font-bold text-fuchsia-800 mb-3">
                Class 10 – Printing Options
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong className="text-fuchsia-700">Print Preview:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Visually inspect your document's layout and appearance before sending it to a printer to avoid errors.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-fuchsia-700">Printer Settings & Options:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Configure print settings: specify number of copies, select specific pages or page ranges to print.</li>
                    <li>Understand basic duplex (double-sided) printing options.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-fuchsia-700">Saving as PDF for Sharing:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Convert your Word document to a Portable Document Format (PDF) for universal compatibility and consistent viewing across devices.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </main>

        {/* Footer Section */}
        <footer className="bg-emerald-700 text-white p-4 text-center text-sm rounded-b-lg">
          <p>&copy; 2025 Study Notes. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

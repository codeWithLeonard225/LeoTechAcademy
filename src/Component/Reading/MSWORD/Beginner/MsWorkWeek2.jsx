import React from 'react';

export default function MsWorkWeek2() {
  // Function to handle the back button click
  const handleBackClick = () => {
    // This will navigate back in the browser history.
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4 sm:p-6 lg:p-8 font-inter">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header Section */}
        <header className="bg-pink-700 text-white p-6 sm:p-8 rounded-t-lg relative">
          {/* Back Button */}
          <button
            onClick={handleBackClick}
            className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-pink-600 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75"
            aria-label="Go back"
          >
            &larr; Back
          </button>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-2 tracking-tight">
            MS Word for Total Beginners
          </h1>
          <p className="text-lg text-pink-100 text-center">
            1-Month Course Notes
          </p>
        </header>

        {/* Week 2 Content Section */}
        <main className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-800 mb-6 border-b-2 border-pink-200 pb-2">
            WEEK 2: Paragraph Formatting & Page Layout
          </h2>

          <section className="mb-8">
            {/* Class 4: Paragraph Formatting */}
            <div className="bg-yellow-50 p-5 rounded-lg mb-6 shadow-sm">
              <h4 className="text-lg sm:text-xl font-bold text-yellow-800 mb-3">
                Class 4 – Paragraph Formatting
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong className="text-yellow-700">Alignment:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li><span className="font-medium">Left Align</span> (Ctrl+L): Aligns text to the left margin.</li>
                    <li><span className="font-medium">Center Align</span> (Ctrl+E): Centers text between margins.</li>
                    <li><span className="font-medium">Right Align</span> (Ctrl+R): Aligns text to the right margin.</li>
                    <li><span className="font-medium">Justify</span> (Ctrl+J): Distributes text evenly between margins.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-yellow-700">Line Spacing:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Adjusts the vertical space between lines of text within a paragraph.</li>
                    <li>Common options: Single, 1.5 Lines, Double.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-yellow-700">Paragraph Spacing:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Controls the space before and after a paragraph.</li>
                    <li>Found in the "Layout" tab or Paragraph group on "Home" tab.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-yellow-700">Shading & Borders:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li><span className="font-medium">Shading:</span> Adds a background color to a paragraph.</li>
                    <li><span className="font-medium">Borders:</span> Adds lines around paragraphs or text.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-yellow-700">Sort Text:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Arranges selected text or numbers alphabetically or numerically.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-yellow-700">Show/Hide ¶ (Paragraph Marks):</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Displays non-printing characters (spaces, tabs, paragraph breaks) to help with formatting.</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Class 5: Page Layout, Headers, Footers & Page Numbers */}
            <div className="bg-teal-50 p-5 rounded-lg shadow-sm">
              <h4 className="text-lg sm:text-xl font-bold text-teal-800 mb-3">
                Class 5 – Page Layout, Headers, Footers & Page Numbers
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong className="text-teal-700">Margins:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Adjusts the white space around the edges of your document.</li>
                    <li>Go to Layout Tab &gt; Margins.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-teal-700">Orientation:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Changes page orientation between Portrait (vertical) and Landscape (horizontal).</li>
                    <li>Go to Layout Tab &gt; Orientation.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-teal-700">Size:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Sets the paper size (e.g., Letter, A4).</li>
                    <li>Go to Layout Tab &gt; Size.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-teal-700">Columns:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Divides text into multiple vertical columns (e.g., for newsletters).</li>
                    <li>Go to Layout Tab &gt; Columns.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-teal-700">Headers & Footers:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Text or graphics that appear at the top (header) or bottom (footer) of every page.</li>
                    <li>Go to Insert Tab &gt; Header & Footer group.</li>
                    <li>Used for titles, author names, dates.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-teal-700">Page Numbers:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Automatically inserts page numbers into your document, typically in the header or footer.</li>
                    <li>Go to Insert Tab &gt; Page Number.</li>
                    <li>Options for Top of Page, Bottom of Page, Page Margins.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </main>

        {/* Footer Section */}
        <footer className="bg-pink-700 text-white p-4 text-center text-sm rounded-b-lg">
          <p>&copy; 2025 Study Notes. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

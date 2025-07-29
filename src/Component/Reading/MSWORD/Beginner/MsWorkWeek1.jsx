import React from 'react';

// Renamed the main component to MsWorkWeek1 as requested.
// It contains the entire content for MS Word Course Notes - Week 1.
export default function MsWorkWeek1() {
  // Function to handle the back button click
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8 font-inter">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header Section */}
        <header className="bg-indigo-700 text-white p-6 sm:p-8 rounded-t-lg relative"> {/* Added relative for button positioning */}
          {/* Back Button */}
          <button
            onClick={handleBackClick}
            className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
            aria-label="Go back"
          >
            &larr; Back {/* Left arrow unicode character */}
          </button>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-2 tracking-tight">
            MS Word for Total Beginners
          </h1>
          <p className="text-lg text-indigo-100 text-center">
            1-Month Course Notes
          </p>
        </header>

        {/* Week 1 Content Section */}
        <main className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2">
            WEEK 1: Basic Text Formatting & Interface
          </h2>

          {/* Introduction Section */}
          <section className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Introduction
            </h3>

            {/* Class 1 */}
            <div className="bg-blue-50 p-5 rounded-lg mb-6 shadow-sm">
              <h4 className="text-lg sm:text-xl font-bold text-blue-800 mb-3">
                Class 1 – Introduction + Basic Typing
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong className="text-blue-700">What is MS Word?</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>A word processing program developed by Microsoft.</li>
                    <li>Used to type, edit, format, and print documents.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-blue-700">Uses of Word Processing:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Writing letters, reports, resumes.</li>
                    <li>Creating forms, certificates, and flyers.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-blue-700">Word Interface:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li><span className="font-medium">Ribbon:</span> Contains tabs and command buttons.</li>
                    <li><span className="font-medium">Tabs:</span> Home, Insert, Page Layout, etc.</li>
                    <li><span className="font-medium">Groups:</span> Related tools within a tab.</li>
                    <li><span className="font-medium">Status Bar:</span> Shows page number, word count, etc.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-blue-700">Typing Practice:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Type: "The quick brown fox jumps over the lazy dog"</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-blue-700">Basic Formatting Tools:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li><span className="font-medium">Font Style:</span> Change the design of text.</li>
                    <li><span className="font-medium">Font Size:</span> Make text bigger/smaller.</li>
                    <li><span className="font-medium">Bold</span> (Ctrl+B)</li>
                    <li><span className="font-medium">Italic</span> (Ctrl+I)</li>
                    <li><span className="font-medium">Underline</span> (Ctrl+U)</li>
                    <li><span className="font-medium">Font Color:</span> Change text color.</li>
                    <li><span className="font-medium">Text Highlight Color:</span> Highlight text like using a marker.</li>
                    <li><span className="font-medium">Undo</span> (Ctrl+Z) / <span className="font-medium">Redo</span> (Ctrl+Y)</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Class 2 */}
            <div className="bg-green-50 p-5 rounded-lg mb-6 shadow-sm">
              <h4 className="text-lg sm:text-xl font-bold text-green-800 mb-3">
                Class 2 – Lists, Basic Editing, Indentation, Copy & Paste
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong className="text-green-700">Bulleted Lists:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Used for unordered lists (•, ○, ✓ etc.)</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-green-700">Numbered Lists:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Used for ordered lists (1, 2, 3…)</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-green-700">List Style:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Change bullet or number design from bullet dropdown.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-green-700">Indentation:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li><span className="font-medium">Increase Indent:</span> Moves text to the right.</li>
                    <li><span className="font-medium">Decrease Indent:</span> Moves text to the left.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-green-700">Copy/Cut/Paste:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li><span className="font-medium">Copy</span> (Ctrl+C): Make a copy.</li>
                    <li><span className="font-medium">Cut</span> (Ctrl+X): Remove and copy.</li>
                    <li><span className="font-medium">Paste</span> (Ctrl+V): Place copied/cut text.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-green-700">Borders & Shading:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Add lines or color around text or paragraphs.</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Class 3 */}
            <div className="bg-purple-50 p-5 rounded-lg shadow-sm">
              <h4 className="text-lg sm:text-xl font-bold text-purple-800 mb-3">
                Class 3 – Save & Open Documents
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong className="text-purple-700">Save</strong> (Ctrl+S):
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Saves your current document.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-purple-700">Save As:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Save with a new name, file type or location.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-purple-700">File Types:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li><span className="font-medium">.docx</span> (Word Document)</li>
                    <li><span className="font-medium">.pdf</span> (Portable Document Format)</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-purple-700">Open Document:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Go to File → Open to open an existing file.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-purple-700">Close/Reopen File:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Close Word, then reopen from File menu.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-purple-700">Export to PDF:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>File → Save As → Choose PDF as file type.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </main>

        {/* Footer Section (Optional) */}
        <footer className="bg-indigo-700 text-white p-4 text-center text-sm rounded-b-lg">
          <p>&copy; 2025 Study Notes. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

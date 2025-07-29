import React from 'react';

export default function MsWorkWeek3() {
  // Function to handle the back button click
  const handleBackClick = () => {
    // This will navigate back in the browser history.
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-4 sm:p-6 lg:p-8 font-inter">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header Section */}
        <header className="bg-blue-700 text-white p-6 sm:p-8 rounded-t-lg relative">
          {/* Back Button */}
          <button
            onClick={handleBackClick}
            className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            aria-label="Go back"
          >
            &larr; Back
          </button>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-2 tracking-tight">
            MS Word for Total Beginners
          </h1>
          <p className="text-lg text-blue-100 text-center">
            1-Month Course Notes
          </p>
        </header>

        {/* Week 3 Content Section */}
        <main className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
            WEEK 3: Tables, Images & Shapes
          </h2>

          <section className="mb-8">
            {/* Class 6: Working with Tables */}
            <div className="bg-red-50 p-5 rounded-lg mb-6 shadow-sm">
              <h4 className="text-lg sm:text-xl font-bold text-red-800 mb-3">
                Class 6 – Working with Tables
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong className="text-red-700">What are Tables?</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Organize information in rows and columns.</li>
                    <li>Useful for data, schedules, and comparisons.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-red-700">Inserting a Table:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Go to Insert Tab &gt; Table.</li>
                    <li>Drag to select number of rows and columns, or use "Insert Table" dialog.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-red-700">Basic Table Operations:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li><span className="font-medium">Add/Delete Rows/Columns:</span> Right-click on a cell or use "Layout" tab under "Table Tools".</li>
                    <li><span className="font-medium">Merge Cells:</span> Combine multiple cells into one.</li>
                    <li><span className="font-medium">Split Cells:</span> Divide a single cell into multiple.</li>
                    <li><span className="font-medium">Adjust Row Height/Column Width:</span> Drag borders or use "Layout" tab.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-red-700">Table Design:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Apply pre-designed table styles from the "Design" tab under "Table Tools".</li>
                    <li>Change border styles, shading, and effects.</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Class 7: Insert Images, Shapes & Text Box */}
            <div className="bg-cyan-50 p-5 rounded-lg shadow-sm">
              <h4 className="text-lg sm:text-xl font-bold text-cyan-800 mb-3">
                Class 7 – Insert Images, Shapes & Text Box
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong className="text-cyan-700">Inserting Images:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Go to Insert Tab &gt; Pictures (from device) or Online Pictures.</li>
                    <li><span className="font-medium">Resizing:</span> Drag corner handles.</li>
                    <li><span className="font-medium">Cropping:</span> Remove unwanted parts of an image.</li>
                    <li><span className="font-medium">Text Wrapping:</span> Controls how text flows around the image (e.g., Square, Tight, Through, Top and Bottom).</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-cyan-700">Inserting Shapes:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Go to Insert Tab &gt; Shapes.</li>
                    <li>Draw various shapes like rectangles, circles, arrows, stars.</li>
                    <li><span className="font-medium">Formatting Shapes:</span> Change fill color, outline, and effects from "Shape Format" tab.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-cyan-700">Inserting Text Box:</strong>
                  <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                    <li>Go to Insert Tab &gt; Text Box.</li>
                    <li>Creates a movable, resizable container for text.</li>
                    <li>Useful for sidebars, callouts, or placing text independently of the main document flow.</li>
                    <li>Can be formatted with fills and borders.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </main>

        {/* Footer Section */}
        <footer className="bg-blue-700 text-white p-4 text-center text-sm rounded-b-lg">
          <p>&copy; 2025 Study Notes. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

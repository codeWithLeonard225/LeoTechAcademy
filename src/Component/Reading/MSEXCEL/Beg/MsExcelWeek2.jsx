// src/components/MsExcelWeek2.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MsExcelWeek2 = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // You can add an image specifically for Week 2 if needed, or reuse one
  // For now, I'll use a placeholder or remove if no image is desired for this topic.
  // const imageUrl = "/images/excel-tables-filters.png"; // Example image for this topic

  const handleBackClick = () => {
    navigate(-1);
  };

  // If you decide to add an image for Week 2 Topic 1, uncomment and use this:
  // const handleImageClick = () => {
  //   setIsModalOpen(true);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Define color schemes for topics
  const topicStyles = [
    {
      bgColor: 'bg-blue-100', // Light blue background
      titleColor: 'text-blue-800', // Darker blue text
      borderColor: 'border-blue-300' // Blue border
    },
    {
      bgColor: 'bg-green-100', // Light green background
      titleColor: 'text-green-800', // Darker green text
      borderColor: 'border-green-300' // Green border
    },
    {
      bgColor: 'bg-purple-100', // Light purple background
      titleColor: 'text-purple-800', // Darker purple text
      borderColor: 'border-purple-300' // Purple border
    }
  ];

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
      <button
        onClick={handleBackClick}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        &larr; Back
      </button>

      <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 pb-2">
        MS Excel for Beginners: 1-Month Course Outline
      </h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Week 2: Working with Data and Simple Analysis
        </h2>

        {/* Topic 1: Organizing Data with Tables, Filtering, and Sorting */}
        <div className={`mb-8 p-4 rounded-lg border-l-4 ${topicStyles[0].bgColor} ${topicStyles[0].borderColor}`}>
          <h3 className={`text-2xl font-medium mb-2 ${topicStyles[0].titleColor}`}>
            Topic 1: Organizing Data with Tables, Filtering, and Sorting
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Objective: This session introduces the power of Excel Tables, a fundamental tool for
            organizing, managing, and analyzing structured data efficiently. It also covers how to
            effectively organize and pinpoint specific information within your datasets by using
            Excel's powerful sorting and filtering capabilities, which are seamlessly integrated with Tables.
          </p>
        </div>

        {/* If you have an image for this topic, uncomment this block */}
        {/*
        <div className="mb-6">
          <h3 className="text-2xl font-medium text-gray-700 mb-2">Diagram</h3>
          <div className="flex justify-center mt-4">
            <img
              src={imageUrl}
              alt="Excel Tables and Filters Diagram"
              className="rounded-md shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg h-auto mb-2 cursor-pointer"
              onClick={handleImageClick}
            />
          </div>
        </div>
        */}

        <div className="mb-6">
          <h3 className="text-2xl font-medium text-gray-700 mb-4">Key Learning Points:</h3>

          <ul className="list-disc pl-8 space-y-3 text-gray-700">
            <li>
              <p className="font-semibold text-xl">Converting Data Ranges into Excel Tables:</p>
              <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                <li>
                  Select any cell in your data, then <span className="font-bold">Insert Tab &gt; Table</span> (or <span className="font-bold">Ctrl + T</span>).
                </li>
                <li>Ensure "My table has headers" is checked.</li>
                <li>Tables are structured data objects with special features.</li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-xl mt-3">Understanding the Benefits of Tables:</p>
              <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                <li>
                  <span className="font-bold">Structured References:</span> Formulas are easier to read (e.g., <span className="font-mono">[Sales Amount]</span>).
                </li>
                <li><span className="font-bold">Automatic Formatting:</span> Banded rows, automatic header visibility on scroll.</li>
                <li><span className="font-bold">Automatic Expansion:</span> Table range extends when new data is added adjacent.</li>
                <li><span className="font-bold">Built-in Filtering and Sorting:</span> Filter arrows in headers.</li>
                <li><span className="font-bold">Total Row:</span> Easily add a row for quick calculations (sum, average, count).</li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-xl mt-3">Using Table Tools for Filtering and Sorting:</p>
              <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                <li>
                  <span className="font-bold">Table Design Tab:</span> Appears when a table cell is selected.
                </li>
                <li>
                  Allows changing styles, toggling features (Header Row, Total Row), and
                  converting back to a range.
                </li>
                <li>
                  <p className="font-medium mt-2">Applying Single and Multi-Level Sorting:</p>
                  <ul className="list-inside list-circle pl-4 space-y-1 text-gray-600">
                    <li>
                      <span className="font-bold">Single-Level:</span> Sort data by one column (ascending/descending) using <span className="font-bold">Data Tab &gt; Sort A to Z / Z to A</span> or the filter arrow in a Table header.
                    </li>
                    <li>
                      <span className="font-bold">Multi-Level (Custom Sort):</span> <span className="font-bold">Data Tab &gt; Sort</span> button. Sort by multiple criteria (e.g., by Region, then by Sales within Region). Add levels in the dialog box.
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="font-medium mt-2">Using Basic Filters to Display Specific Data:</p>
                  <ul className="list-inside list-circle pl-4 space-y-1 text-gray-600">
                    <li><span className="font-bold">Apply Filters:</span> Automatically applied in Tables.</li>
                    <li>Click filter arrows in headers to show/hide specific items.</li>
                    <li>
                      <span className="font-bold">Clear Filters:</span> Click filter arrow &gt; "Clear Filter From..." or <span className="font-bold">Data Tab &gt; Clear</span> for all.
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="font-medium mt-2">Introduction to Text, Number, and Date Filters:</p>
                  <ul className="list-inside list-circle pl-4 space-y-1 text-gray-600">
                    <li>Excel intelligently offers specific filter options based on data type:</li>
                    <li><span className="font-bold">Text Filters:</span> "Contains," "Begins With," etc.</li>
                    <li><span className="font-bold">Number Filters:</span> "Greater Than," "Top 10," "Between," etc.</li>
                    <li><span className="font-bold">Date Filters:</span> "Tomorrow," "Last Month," "Between," etc.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-medium text-gray-700 mb-4">
            Class Work/Exercises (Topic 1):
          </h3>
          <ul className="list-disc pl-8 space-y-2 text-gray-700">
            <li>
              Create a sample dataset with columns like "Product," "Region," "Sales Amount," and "Date."
              Enter at least 10 rows of varied data.
            </li>
            <li>Convert this data range into an Excel Table. Observe the automatic formatting.</li>
            <li>Add a "Total Row" to your table and experiment with different functions (Sum, Average, Count) for the "Sales Amount" column.</li>
            <li>Sort your table by "Sales Amount" in descending order.</li>
            <li>Perform a multi-level sort: first by "Region" (A-Z), then by "Sales Amount" (largest to smallest) within each region.</li>
            <li>Filter your table to show only products from a specific "Region."</li>
            <li>Apply a number filter to show only "Sales Amount" greater than a certain value.</li>
            <li>Clear all filters and observe the full dataset return.</li>
          </ul>
        </div>

        ---

        {/* Topic 2: Enhancing Table Design and Readability */}
        <div className={`mb-8 p-4 rounded-lg border-l-4 ${topicStyles[1].bgColor} ${topicStyles[1].borderColor}`}>
          <h3 className={`text-2xl font-medium mb-2 ${topicStyles[1].titleColor}`}>
            Topic 2: Enhancing Table Design and Readability
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Objective: This session will teach you how to customize the visual appearance of your Excel
            Tables to improve readability and presentation, focusing on text orientation, wrapping,
            and overall aesthetic enhancements.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-medium text-gray-700 mb-4">Key Learning Points:</h3>
          <ul className="list-disc pl-8 space-y-3 text-gray-700">
            <li>
              <p className="font-semibold text-xl">Table Styles and Options (Table Design Tab):</p>
              <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                <li>
                  <span className="font-bold">Table Styles:</span> Apply pre-defined visual styles to your table for a quick professional look.
                </li>
                <li>
                  <span className="font-bold">Table Style Options:</span> Toggle elements like "Header Row," "Total Row," "Banded Rows," "First Column," "Last Column," and "Banded Columns" to customize appearance.
                </li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-xl mt-3">Text Orientation:</p>
              <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                <li>
                  <span className="font-bold">Home Tab &gt; Alignment Group &gt; Orientation:</span> Change text direction within cells (e.g., vertical text, rotate text up/down) for specific headers or data.
                </li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-xl mt-3">Wrap Text:</p>
              <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                <li>
                  <span className="font-bold">Home Tab &gt; Alignment Group &gt; Wrap Text:</span> Automatically adjust row height to make all content visible within a cell, preventing text from being cut off. Useful for long headers or descriptive text.
                </li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-xl mt-3">Merging Cells (Cautionary Note):</p>
              <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                <li>
                  <span className="font-bold">Home Tab &gt; Alignment Group &gt; Merge & Center:</span> Combines selected cells into one larger cell. While it can be used for titles, avoid merging cells within your main data table as it can interfere with sorting, filtering, and data analysis.
                </li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-xl mt-3">Adjusting Column Widths and Row Heights:</p>
              <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                <li>Manually drag column/row borders.</li>
                <li>Double-click borders for auto-fit.</li>
                <li><span className="font-bold">Home Tab &gt; Cells Group &gt; Format &gt; AutoFit Column Width / AutoFit Row Height.</span></li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-xl mt-3">Adding Borders and Shading (Beyond Table Styles):</p>
              <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                <li>
                  <span className="font-bold">Home Tab &gt; Font Group &gt; Borders/Fill Color:</span> Apply custom borders and background colors to cells or ranges for specific emphasis, even within a table.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-medium text-gray-700 mb-4">
            Class Work/Exercises (Topic 2):
          </h3>
          <ul className="list-disc pl-8 space-y-2 text-gray-700">
            <li>Using the table created in Topic 1, apply different built-in 'Table Styles' from the 'Table Design' tab.</li>
            <li>Experiment with 'Table Style Options' like 'Banded Rows', 'First Column', and 'Total Row' to see their effects.</li>
            <li>In a new worksheet, create a small table with headers. Change the 'Orientation' of one of the headers to an angle.</li>
            <li>Enter a long sentence into a cell and use 'Wrap Text' to ensure all text is visible within the cell's width.</li>
            <li>For a title above your table, merge and center several cells.</li>
            <li>Manually adjust a column width, then double-click to 'AutoFit' it. Do the same for a row height.</li>
            <li>Select a range of cells and apply a custom border around them and a light fill color, distinct from the table's default style.</li>
          </ul>
        </div>

        ---

        {/* Topic 3: Conditional Formatting */}
        <div className={`mb-8 p-4 rounded-lg border-l-4 ${topicStyles[2].bgColor} ${topicStyles[2].borderColor}`}>
          <h3 className={`text-2xl font-medium mb-2 ${topicStyles[2].titleColor}`}>
            Topic 3: Conditional Formatting
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Objective: This session explores Conditional Formatting, a powerful feature that
            automatically applies formatting (like colors, icons, or data bars) to cells based on
            specified rules, making data analysis and visualization intuitive.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-medium text-gray-700 mb-4">Key Learning Points:</h3>
          <ul className="list-disc pl-8 space-y-3 text-gray-700">
            <li>
              <p className="font-semibold text-xl">Highlighting Cells Based on Specific Criteria:</p>
              <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                <li>Visually identifies trends or outliers.</li>
                <li>
                  Select range, <span className="font-bold">Home Tab &gt; Conditional Formatting &gt; Highlight Cells Rules</span>.
                </li>
                <li>
                  Rules include "Greater Than," "Less Than," "Text that Contains," "Duplicate Values," etc.
                </li>
                <li>Choose a preset formatting style.</li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-xl mt-3">Using Data Bars, Color Scales, and Icon Sets to Visualize Data:</p>
              <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                <li>Graphical representations of data within cells.</li>
                <li><span className="font-bold">Data Bars:</span> Length of bar represents value relative to the range.</li>
                <li><span className="font-bold">Color Scales:</span> Cells shaded with a gradient of colors based on value range.</li>
                <li><span className="font-bold">Icon Sets:</span> Icons (arrows, traffic lights) represent value tiers.</li>
                <li>Accessed via <span className="font-bold">Conditional Formatting</span> menu.</li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-xl mt-3">Managing Rules:</p>
              <ul className="list-inside list-disc pl-4 space-y-1 text-gray-600">
                <li>
                  <span className="font-bold">Conditional Formatting &gt; Manage Rules</span> allows viewing, editing, deleting, and reordering rules.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-medium text-gray-700 mb-4">
            Class Work/Exercises (Topic 3):
          </h3>
          <ul className="list-disc pl-8 space-y-2 text-gray-700">
            <li>Open a new worksheet and enter a list of 10-15 numbers (some positive, some negative, some zeros).</li>
            <li>Apply a Conditional Formatting rule to highlight all numbers 'Greater Than' a specific value (e.g., 50) with a green fill.</li>
            <li>In another column, apply a rule to highlight 'Duplicate Values'.</li>
            <li>Select a range of cells and apply 'Data Bars' to visualize their values. Observe how the bars change with different numbers.</li>
            <li>Apply a 'Color Scale' to a different set of numbers, noticing the gradient from lowest to highest values.</li>
            <li>Use an 'Icon Set' (e.g., Traffic Lights) on a column of sales figures to categorize performance (e.g., top, middle, bottom tier).</li>
            <li>Go to 'Manage Rules' for your worksheet. Edit one of the existing rules (e.g., change the highlight color), and then delete another rule.</li>
          </ul>
        </div>
          {/* Footer Section */}
                <footer className="bg-indigo-700 text-white py-4 px-6 text-center text-sm">
                    <p>&copy; 2025 Study Notes. All rights reserved.</p>
                </footer>
      </section>

      {/* Full-screen Modal for Image (optional, based on if you add an image for this week) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-4xl font-bold p-2 leading-none"
              aria-label="Close"
            >
              &times;
            </button>
            {/* If you add an image for Week 2, make sure imageUrl is defined and uncomment below */}
            {/* <img
              src={imageUrl}
              alt="Full Screen Diagram"
              className="max-w-full max-h-screen object-contain"
            /> */}
             <p className="text-white text-lg">No full-screen diagram available for this topic yet.</p> {/* Placeholder if no image */}
          </div>
        </div>
      )}
    </div>
  );
};

export default MsExcelWeek2;
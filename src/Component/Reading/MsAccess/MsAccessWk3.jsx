import React from 'react';
import { useNavigate } from 'react-router-dom';

const MsAccessWk3 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Content Container */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-5xl w-full mx-auto text-gray-800 flex-grow">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-fit"
        >
          &larr; Back
        </button>

        {/* Main Title for the Week */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-6">
          Week 3: Microsoft Access Forms (Part 2)
        </h1>

        {/* Goals Section */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Goals for This Week 🎯
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Understand what a form is and why we use it.</li>
            <li>Explore different form types and their uses.</li>
            <li>Learn to create and configure Combo Boxes (dropdowns).</li>
            <li>Perform basic calculations within forms.</li>
          </ul>
        </section>

        {/* Topic 7: Exploring Different Form Types */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 7: Exploring Different Form Types
          </h2>
          <p className="mb-4 leading-relaxed">
            While the basic <strong className="text-blue-600">Single Item Form</strong> is great for viewing and editing one record at a time, Access offers several other form types. Understanding when to use each will make your database much more powerful. You can create these from the <strong className="text-blue-600">Create tab</strong> in the Ribbon.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Single Item Form</h3>
          <ul className="list-disc list-inside space-y-1 text-base mb-3">
            <li>Standard form created with the Form Wizard.</li>
            <li>Focuses on <strong className="text-blue-600">one record at a time</strong>.</li>
            <li>Best for data entry (clear and simple).</li>
            <li>👉 <strong className="text-blue-600">Example:</strong> Entering details of one student.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Multiple Items Form (Datasheet View)</h3>
          <ul className="list-disc list-inside space-y-1 text-base mb-3">
            <li>Shows <strong className="text-blue-600">many records at once in rows</strong>, like a spreadsheet.</li>
            <li>Lets you add design features (fonts, colors, buttons) that tables don’t allow.</li>
            <li>Good for scanning or editing multiple records quickly.</li>
            <li>👉 <strong className="text-blue-600">Example:</strong> Browsing through all employee records.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Split Form</h3>
          <ul className="list-disc list-inside space-y-1 text-base mb-3">
            <li>Combines <strong className="text-blue-600">Form View (single record) + Datasheet View (many records)</strong> in one window.</li>
            <li>Clicking on a record in the datasheet updates the form view instantly.</li>
            <li>Very efficient for reviewing large sets of data.</li>
            <li>👉 <strong className="text-blue-600">Example:</strong> Quickly scrolling through products while seeing full details of each one.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Pop-up and Modal Dialog Forms</h3>
          <p className="mb-2 leading-relaxed">
            Not separate form types, but special display modes.
          </p>
          <ul className="list-disc list-inside space-y-1 text-base mb-3">
            <li><strong className="text-blue-600">Pop-up:</strong> The form floats on top of the main window. You can still click things in the background.</li>
            <li><strong className="text-blue-600">Modal Dialog:</strong> A stricter pop-up — you must close it before doing anything else. Perfect for login screens or confirmation forms.</li>
          </ul>
          <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">How to set a form as Pop-up/Modal:</h4>
          <ol className="list-decimal list-inside ml-6 space-y-2 text-base">
            <li>Open the form in <strong className="text-blue-600">Design View</strong>.</li>
            <li>Open the <strong className="text-blue-600">Property Sheet</strong>.</li>
            <li>Select the <strong className="text-blue-600">whole form</strong> (small square at top-left of the grid).</li>
            <li>In the <strong className="text-blue-600">Format tab</strong>:
              <ul className="list-disc list-inside ml-6 mt-1 text-sm">
                <li>Set <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Pop Up = Yes</code>.</li>
                <li>Set <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Modal = Yes</code>.</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Topic 8: Combo Boxes (Dropdowns) */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 8: Combo Boxes (Dropdowns)
          </h2>
          <p className="mb-4 leading-relaxed">
            A <strong className="text-blue-600">Combo Box</strong> is a dropdown list of options. It ensures consistency by forcing users to pick from a set of choices instead of typing freely.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Steps to add a Combo Box:</h3>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>Open the form in <strong className="text-blue-600">Design View</strong>.</li>
            <li>From the <strong className="text-blue-600">Form Design tab</strong>, click <strong className="text-blue-600">Combo Box</strong>.</li>
            <li>Click on the form where you want it.</li>
            <li>The <strong className="text-blue-600">Combo Box Wizard</strong> appears. Choose:
              <ul className="list-disc list-inside ml-6 mt-1 text-sm">
                <li>“I want the combo box to get the values from another table or query.”</li>
                <li>Select the table with your list (e.g., <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Class Table</code>).</li>
                <li>Pick the fields to show in the dropdown.</li>
                <li>Choose the field to store the value in your main table.</li>
              </ul>
            </li>
            <li>Name your combo box and click <strong className="text-blue-600">Finish</strong>.</li>
          </ol>
          <p className="mt-4 leading-relaxed">
            👉 <strong className="text-blue-600">Example:</strong> A combo box for “Gender” (Male/Female) or “Course” from a Course Table.
          </p>
        </section>

        {/* Topic 9: Basic Calculations in Forms */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 9: Basic Calculations in Forms
          </h2>
          <p className="mb-4 leading-relaxed">
            Forms can also do math for you automatically — just like Excel.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Steps to add a calculated field:</h3>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>Open the form in <strong className="text-blue-600">Design View</strong>.</li>
            <li>From the <strong className="text-blue-600">Form Design tab</strong>, click <strong className="text-blue-600">Text Box</strong> (<code className="font-mono bg-gray-100 px-1 py-0.5 rounded">ab|</code>).</li>
            <li>Draw the text box on your form.</li>
            <li>Select it → open <strong className="text-blue-600">Property Sheet</strong> → <strong className="text-blue-600">Data tab</strong>.</li>
            <li>In <strong className="text-blue-600">Control Source</strong>, type your formula.
              <ul className="list-disc list-inside ml-6 mt-1 text-sm">
                <li><strong className="text-blue-600">Example:</strong> <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">=[Quantity] * [Price]</code></li>
              </ul>
            </li>
            <li>Change the text box label to something like <strong className="text-blue-600">Subtotal</strong>.</li>
            <li>(Optional) Set the <strong className="text-blue-600">Format</strong> property to <strong className="text-blue-600">Currency</strong>.</li>
          </ol>
          <p className="mt-4 leading-relaxed">
            Now, whenever Quantity or Price changes, Access calculates the Subtotal automatically.
          </p>
          <p className="mt-4 leading-relaxed">
            👉 <strong className="text-blue-600">Example:</strong> On an order form, automatically calculate Subtotal = Quantity × Price.
          </p>
        </section>

      </div>

      {/* Footer Section */}
      <footer className="bg-indigo-700 text-white py-4 px-6 text-center text-sm">
        <p>&copy; 2025 Study Notes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MsAccessWk3;
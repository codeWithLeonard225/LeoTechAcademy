import React from 'react';
import { useNavigate } from 'react-router-dom';

const MsAccessWk4 = () => {
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
          Week 4: Dashboards and Navigation
        </h1>

        {/* Goals Section */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Goals for This Week 🎯
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Understand what a Dashboard (Switchboard) is.</li>
            <li>Learn how to create and design a Dashboard Form.</li>
            <li>Add functional buttons and clickable images.</li>
            <li>Enhance your dashboard’s layout and set it as startup.</li>
          </ul>
        </section>

        {/* Topic 10: What is a Dashboard? */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 10: What is a Dashboard?
          </h2>
          <p className="mb-4 leading-relaxed">
            A <strong className="text-blue-600">Dashboard</strong>, also known as a
            <strong className="text-blue-600"> Switchboard</strong>, is a special form that serves as
            the main menu of your Access database application. Instead of looking through the
            Navigation Pane, users can simply click buttons or images on the Dashboard to open
            forms, reports, or other sections.
          </p>
          <p className="mb-4 leading-relaxed">
            A good Dashboard makes your database feel like a professional application. It guides the
            user, improves experience, and prevents accidental changes.
          </p>
          <p className="mb-4 leading-relaxed">
            👉 <strong className="text-blue-600">Example:</strong> In a school database, the Dashboard
            might have buttons for "Students," "Teachers," "Classes," and "Reports."
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-2">Hands-on Activity:</h3>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>Open Access and go to the <strong className="text-blue-600">Create</strong> tab.</li>
            <li>Click on <strong className="text-blue-600">Blank Form</strong>.</li>
            <li>Save the form as <strong className="text-blue-600">Dashboard</strong>.</li>
            <li>Switch to <strong className="text-blue-600">Design View</strong>.</li>
            <li>Add a <strong className="text-blue-600">Label</strong> at the top using the “Aa” icon.</li>
            <li>Type a title like <em>📊 School Management Dashboard</em> and style it with a large font and background color.</li>
          </ol>
        </section>

        {/* Topic 11: Adding Buttons */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 11: Adding Buttons (Command Buttons)
          </h2>
          <p className="mb-4 leading-relaxed">
            Buttons (also called <strong className="text-blue-600">Command Buttons</strong>) are the
            most common way to open forms, reports, or even exit the application. The Command Button
            Wizard helps you create these buttons with simple macros.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-2">Step-by-Step: Adding a Button</h3>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>Go to <strong className="text-blue-600">Design View</strong> of your Dashboard form.</li>
            <li>Click the <strong className="text-blue-600">Button tool</strong> in the Form Design tab.</li>
            <li>Draw the button on your form. The <strong className="text-blue-600">Command Button Wizard</strong> will open.</li>
            <li>Choose a category:
              <ul className="list-disc list-inside ml-6 text-sm mt-1">
                <li>Form Operations – open a form</li>
                <li>Report Operations – open or print a report</li>
                <li>Application – exit the database</li>
              </ul>
            </li>
            <li>Select your desired action and click Next.</li>
            <li>Pick the form or report you want to open.</li>
            <li>Choose Text or Picture for the button, e.g. “Open Students Form.”</li>
            <li>Click Next → Name your button → Finish.</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Hands-on Activity:</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Create at least three buttons that open different forms.</li>
            <li>Switch to <strong className="text-blue-600">Form View</strong> and test them.</li>
          </ul>
        </section>

        {/* Topic 12: Using Images as Buttons */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 12: Using Images as Buttons
          </h2>
          <p className="mb-4 leading-relaxed">
            Sometimes, dashboards look better with icons instead of plain buttons. You can make any
            image clickable by assigning a macro to its <strong className="text-blue-600">On Click</strong> event.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-2">Step-by-Step: Making an Image Clickable</h3>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>In <strong className="text-blue-600">Design View</strong>, click the <strong className="text-blue-600">Image tool</strong>.</li>
            <li>Click on the form and insert an image (like a student or chart icon).</li>
            <li>Right-click the image → select <strong className="text-blue-600">Property Sheet</strong>.</li>
            <li>In the <strong className="text-blue-600">Event</strong> tab, find <strong>On Click</strong> → click the three dots (...).</li>
            <li>Choose <strong className="text-blue-600">Macro Builder</strong>.</li>
            <li>In Macro Builder, select the action <strong className="text-blue-600">OpenForm</strong>.</li>
            <li>Choose the form name (e.g., Student Form).</li>
            <li>Save and close the macro window.</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Hands-on Activity:</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Add at least one image button to your Dashboard.</li>
            <li>Link it to a form or report using a macro.</li>
          </ul>
        </section>

        {/* Topic 13: Enhancing Your Dashboard */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 13: Enhancing Your Dashboard
          </h2>
          <p className="mb-4 leading-relaxed">
            With your buttons and images in place, let’s polish your dashboard to make it look and
            feel professional.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-2">Enhancement Ideas:</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li><strong>Layout:</strong> Arrange buttons and images neatly in a grid for a clean look.</li>
            <li><strong>Styling:</strong> Use the Format tab to apply colors, fonts, or background images.</li>
            <li><strong>Navigation:</strong> Add a Close/Exit button using the Command Button Wizard.</li>
            <li><strong>Startup Option:</strong> Make your Dashboard open automatically at launch.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Steps to Set Dashboard as Startup:</h3>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>Go to <strong className="text-blue-600">File → Options</strong>.</li>
            <li>Select <strong className="text-blue-600">Current Database</strong>.</li>
            <li>Under <strong>Application Options</strong>, choose <strong>Dashboard</strong> in the <strong>Display Form</strong> dropdown.</li>
            <li>Click OK.</li>
            <li>Close and reopen the database to test.</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Hands-on Activity:</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Arrange your buttons and icons neatly.</li>
            <li>Add a working Exit button.</li>
            <li>Set your Dashboard to open at startup.</li>
          </ul>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="bg-indigo-700 text-white py-4 px-6 text-center text-sm">
        <p>&copy; 2025 Study Notes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MsAccessWk4;

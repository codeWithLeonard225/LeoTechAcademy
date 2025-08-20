import React from 'react';
import { useNavigate } from 'react-router-dom';

const MsAccessWk2 = () => {
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
          Week 2: Microsoft Access Forms
        </h1>

        {/* Goals Section */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Goals for This Week 🚀
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Understand what a form is and why we use it.</li>
            <li>Create a form with the Form Wizard.</li>
            <li>Adjust the layout of a form (moving and resizing fields).</li>
            <li>Change the style of a form (background colors, images, fonts).</li>
          </ul>
        </section>

        {/* Topic 4: From Table to Form with the Form Wizard */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 4: From Table to Form with the Form Wizard
          </h2>
          <p className="mb-4 leading-relaxed">
            Just to recap, a form is a <strong className="text-blue-600">user-friendly way to interact with your data</strong>. It’s much easier to use than a table, especially when entering or editing records. Instead of scrolling through rows and columns, you get a clear screen with labeled input boxes.
          </p>
          <p className="mb-4 leading-relaxed">
            The <strong className="text-blue-600">Form Wizard</strong> helps you quickly create a form from your table.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Steps to use the Form Wizard:</h3>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>Go to the <strong className="text-blue-600">Create tab</strong> → click <strong className="text-blue-600">Form Wizard</strong>.</li>
            <li>Select your <strong className="text-blue-600">source table</strong> (for example, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Students</code>).</li>
            <li>Choose the fields you want in the form. You can move:
              <ul className="list-disc list-inside ml-6 mt-1 text-sm">
                <li>All fields using the <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&gt;&gt;</code> button.</li>
                <li>Selected fields using the <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&gt;</code> button.</li>
              </ul>
            </li>
            <li>Click <strong className="text-blue-600">Next</strong> and choose a layout (Columnar, Tabular, Datasheet, or Justified).</li>
            <li>Click <strong className="text-blue-600">Next</strong>, give your form a name (e.g., <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">StudentForm</code>).</li>
            <li>Choose whether to open the form right away or go into design.</li>
            <li>Click <strong className="text-blue-600">Finish</strong>. Your form is ready!</li>
          </ol>
          <p className="mt-4 leading-relaxed">
            You now have a working form connected to your table.
          </p>
        </section>

        {/* Topic 5: Form Design — Moving and Adjusting Elements */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 5: Form Design — Moving and Adjusting Elements
          </h2>
          <p className="mb-4 leading-relaxed">
            Once the form is created, you’ll likely want to adjust how it looks. Access has two main design views for this: <strong className="text-blue-600">Layout View</strong> and <strong className="text-blue-600">Design View</strong>.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Layout View</h3>
          <ul className="list-disc list-inside space-y-2 text-base mb-4">
            <li>Lets you see the <strong className="text-blue-600">actual data while making changes</strong>.</li>
            <li>Good for quick adjustments like moving or resizing fields.</li>
          </ul>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">How to adjust in Layout View:</h4>
          <ul className="list-disc list-inside ml-6 space-y-2 text-base">
            <li><strong className="text-blue-600">Move a field:</strong> Click on a label or input box and drag it to a new spot.</li>
            <li><strong className="text-blue-600">Resize a field:</strong> Click on the box. Small squares (<strong className="text-blue-600">handles</strong>) appear. Drag them to resize.</li>
            <li><strong className="text-blue-600">Select multiple fields:</strong> Hold <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Shift</code> while clicking multiple items. You can move or resize them together.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Design View</h3>
          <ul className="list-disc list-inside space-y-2 text-base mb-4">
            <li>Does <strong className="text-blue-600">not show live data</strong>.</li>
            <li>Gives you <strong className="text-blue-600">full control of the structure and layout</strong>.</li>
            <li>Shows sections like <strong className="text-blue-600">Form Header</strong>, <strong className="text-blue-600">Detail</strong>, and <strong className="text-blue-600">Form Footer</strong>.</li>
          </ul>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">In Design View, you can also:</h4>
          <ul className="list-disc list-inside ml-6 space-y-2 text-base">
            <li>Add extra text labels (not tied to data).</li>
            <li>Insert buttons or other controls.</li>
          </ul>
          <p className="mt-4 leading-relaxed">
            Both views are useful. Start with <strong className="text-blue-600">Layout View</strong> for simple moves, then use <strong className="text-blue-600">Design View</strong> for more control.
          </p>
        </section>

        {/* Topic 6: Form Design — Styling and Appearance */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 6: Form Design — Styling and Appearance
          </h2>
          <p className="mb-4 leading-relaxed">
            A good form should be easy to use and nice to look at. Access lets you change colors, fonts, and even add images.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Using the Property Sheet:</h3>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>Go to <strong className="text-blue-600">Design View</strong>.</li>
            <li>If the Property Sheet isn’t visible, press <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">F4</code>.</li>
            <li>Click the gray background of the form to select the entire form. Now the Property Sheet shows the form’s properties.</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Changing the background color:</h3>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>In the Property Sheet, go to the <strong className="text-blue-600">Format tab</strong>.</li>
            <li>Find <strong className="text-blue-600">Back Color</strong>.</li>
            <li>Click the small button (<code className="font-mono bg-gray-100 px-1 py-0.5 rounded">...</code>) to open the color palette and choose a color.</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Adding a background image:</h3>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>In the Property Sheet (Format tab), find <strong className="text-blue-600">Picture</strong>.</li>
            <li>Click the (<code className="font-mono bg-gray-100 px-1 py-0.5 rounded">...</code>) button and choose an image from your computer.</li>
            <li>Adjust how it displays with <strong className="text-blue-600">Picture Size Mode</strong> or <strong className="text-blue-600">Picture Tiling</strong>.</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Other styling tips:</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Select labels or input boxes and change their <strong className="text-blue-600">Font Name</strong>, <strong className="text-blue-600">Size</strong>, or <strong className="text-blue-600">Color</strong>.</li>
            <li>Add a title in the <strong className="text-blue-600">Form Header</strong> or a logo in the <strong className="text-blue-600">Footer</strong>.</li>
            <li><strong className="text-blue-600">Keep it simple</strong>—too many colors or images make forms hard to read.</li>
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

export default MsAccessWk2;
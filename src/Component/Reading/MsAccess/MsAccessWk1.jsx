import React from 'react';
import { useNavigate } from 'react-router-dom';

const MsAccessWk1 = () => {
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
          Week 1: Introduction to Microsoft Access
        </h1>

        {/* Topic 1: Briefly About Databases */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 1: Briefly About Databases
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">What is a database?</h3>
          <p className="mb-3 leading-relaxed">
            A database is an organized place to store information so you can find it, update it, and report on it quickly and correctly.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Real-life examples (Sierra Leone context):</h3>
          <ul className="list-disc list-inside mt-4 space-y-2 text-base">
            <li><strong>School:</strong> Students, Subjects, Classes, Teachers, Results.</li>
            <li><strong>Clinic/Hospital:</strong> Patients, Visits, Medicines, Payments.</li>
            <li><strong>Shop/Store:</strong> Items, Suppliers, Purchases, Sales.</li>
            <li><strong>Police/Community:</strong> Incidents, People involved, Reports.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Why use a database (benefits):</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li><strong>Accuracy:</strong> reduce duplicate/incorrect entries.</li>
            <li><strong>Speed:</strong> search, filter, and report in seconds.</li>
            <li><strong>Security:</strong> control who can view or change data.</li>
            <li><strong>Sharing:</strong> many people can use the same data safely.</li>
            <li><strong>Reporting:</strong> automatic summaries (totals, counts, lists).</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Key Terms (simple):</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li><strong>Entity:</strong> the “thing” you store data about (e.g., Student).</li>
            <li><strong>Attribute/Field:</strong> a single piece of info about the entity (e.g., FirstName).</li>
            <li><strong>Record:</strong> one full row of data about one entity (e.g., one student).</li>
            <li><strong>Table:</strong> a set of records for one entity (e.g., Students table).</li>
            <li><strong>Primary Key (PK):</strong> a unique ID for each record (e.g., StudentID). No two records share the same PK.</li>
            <li><strong>Data Type:</strong> the kind of data stored in a field (Text, Number, Date/Time, etc.).</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Quick example:</h3>
          <p className="mb-2 leading-relaxed">
            <strong>Entity:</strong> Student
          </p>
          <p className="mb-2 leading-relaxed">
            <strong>Attributes (Fields):</strong> StudentID, FirstName, LastName, DateOfBirth, Gender, Class, Phone, Address
          </p>
          <p className="mb-2 leading-relaxed">
            <strong>Record:</strong> One row with all these details for one student.
          </p>
        </section>

        {/* Topic 2: How to Make a Table in Access */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">Topic 2: How to Make a Table in Access</h2>
          <p className="mb-4 leading-relaxed">We’ll build a <strong>Students</strong> table.</p>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Step A — Create a new database file</h3>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>Open <strong>Microsoft Access</strong>.</li>
            <li>Click <strong>Blank Database</strong>.</li>
            <li>On the right, type a <strong>File Name</strong> (e.g., <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">School.accdb</code>).</li>
            <li>Choose a folder to save it, then click <strong>Create</strong>. Access opens with a default Table1.</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Step B — Switch to Design View and name the table</h3>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>On the <strong>Home</strong> tab (or top-left), click the <strong>View</strong> button and choose <strong>Design View</strong>.</li>
            <li>When asked for a name, type <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Students</code> and click <strong>OK</strong>.</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Step C — Define fields (Design View)</h3>
          <p className="mb-3 leading-relaxed">
            Access 2010 naming note: <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Text (short text)</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Memo (long text)</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Number</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Date/Time</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Currency</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Yes/No</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">AutoNumber</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Hyperlink</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">OLE Object</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Attachment</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Lookup Wizard</code> (creates a lookup).
          </p>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>In the <strong>Field Name</strong> column, type fields like:
              <ul className="list-disc list-inside ml-6 mt-1 text-sm">
                <li><strong className="text-blue-600">StudentID</strong> — set Data Type to <strong>AutoNumber</strong>. With the row selected, click the <strong>Primary Key</strong> key icon on the ribbon.</li>
                <li><strong className="text-blue-600">FirstName</strong> — <strong>Text</strong>.</li>
                <li><strong className="text-blue-600">LastName</strong> — <strong>Text</strong>.</li>
                <li><strong className="text-blue-600">DateOfBirth</strong> — <strong>Date/Time</strong>.</li>
                <li><strong className="text-blue-600">Gender</strong> — <strong>Text</strong> (we’ll keep it simple for Week 1).</li>
                <li><strong className="text-blue-600">Class</strong> — <strong>Text</strong>.</li>
                <li><strong className="text-blue-600">Phone</strong> — <strong>Text</strong> (phone numbers are not used for math).</li>
                <li><strong className="text-blue-600">Address</strong> — <strong>Memo</strong> (longer notes).</li>
              </ul>
            </li>
            <li>(Optional) In the <strong>Field Properties</strong> area (bottom), you can set helpful rules:
              <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                <li><strong>Required:</strong> Yes (for important fields like FirstName).</li>
                <li><strong>Field Size (for Text):</strong> e.g., 50.</li>
                <li><strong>Format (for Date/Time):</strong> Short Date.</li>
              </ul>
            </li>
            <li>Press <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Ctrl+S</code> to save.</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Step D — Enter records (Datasheet View)</h3>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>Click <strong>View → Datasheet View</strong>.</li>
            <li>You’ll see columns for your fields. <strong>StudentID</strong> will fill automatically.</li>
            <li>Click the first empty row and type sample data. Press <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Tab</code> to move across; <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Enter</code> to finish a row.</li>
          </ol>
          <p className="mt-2 text-gray-700 font-semibold">
            Tip: Press <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Ctrl+'</code> to repeat the value from the cell above (handy for repeating Class).
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Design View vs Datasheet View — Quick Difference</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li><strong>Design View:</strong> define/edit structure (field names, data types, primary key, order).</li>
            <li><strong>Datasheet View:</strong> work with data (type, sort, filter, quick column tweaks).</li>
          </ul>
        </section>

        {/* Topic 3: Working with Columns, Adding Fields, Rearranging, and Deleting */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">Topic 3: Working with Columns, Adding Fields, Rearranging, and Deleting</h2>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">A) Increase/Adjust column width (Datasheet View)</h3>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>Move your mouse to the right edge of a column header (e.g., FirstName) until the double-arrow shows.</li>
            <li>Drag to resize, or double‑click to AutoFit the widest value.</li>
            <li>Or right‑click a header → Field Width… → type a number.</li>
          </ol>
          <p className="mt-2 text-gray-700 font-semibold">
            Bonus: Right‑click header → Freeze Fields (keeps important columns visible while scrolling).
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

export default MsAccessWk1;
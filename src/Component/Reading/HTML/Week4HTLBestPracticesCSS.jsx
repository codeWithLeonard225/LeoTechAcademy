import React from 'react';
import { useNavigate } from 'react-router-dom';

const Week4BestPracticesCSS = () => {
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
          ← Back
        </button>

        {/* Main Title for the Week */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-6">
          Week 4: Best Practices & Introduction to CSS
        </h1>
        <p className="mb-8 text-lg text-gray-700">
          Goal: Reinforce good HTML habits and introduce the concept of styling with CSS (the next step).
        </p>

        {/* Topic 1: HTML Validation & Comments */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 1: HTML Validation & Comments
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-3">HTML Validation:</h3>
          <p className="mb-3 leading-relaxed">
            Why it's important to write valid HTML (adhering to W3C standards). It helps ensure cross-browser compatibility and better rendering.
          </p>
          <p className="mb-3 leading-relaxed">
            W3C HTML Validator: Introduce <a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://validator.w3.org/</a> and encourage them to validate their code.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">HTML Comments:</h3>
          <p className="mb-3 leading-relaxed">
            Syntax: <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{''}</code>
          </p>
          <p className="mb-3 leading-relaxed">
            Comments are ignored by the browser and are not displayed on the page.
          </p>
          <h4 className="text-lg font-medium mt-4 mb-2">Purpose:</h4>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base mb-3">
            <li>Explain complex code sections.</li>
            <li>Temporarily disable code (for debugging).</li>
            <li>Organize code.</li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<main>
    <p>Welcome to my website!</p>
    </main>`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Indentation and Readability:</h3>
          <p className="mb-3 leading-relaxed">
            Emphasize consistent indentation to make code easier to read and understand (e.g., 2 or 4 spaces per level).
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">File Naming Conventions:</h3>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base mb-3">
            <li>Use lowercase.</li>
            <li>Use hyphens (<code className="font-mono bg-gray-100 px-1 py-0.5 rounded">-</code>) instead of spaces (e.g., <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">my-page.html</code>, not <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">my page.html</code>).</li>
            <li>Keep names descriptive but concise.</li>
          </ul>

          <p className="mt-6 text-gray-700 font-semibold">
            Practical Exercise: Add comments throughout your <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">index.html</code> to explain different sections. Try temporarily commenting out a section of code (e.g., an image) and observe the change. Run your <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">index.html</code> through the W3C validator and try to fix any errors it reports. Review your code for consistent indentation.
          </p>
        </section>

        {/* Topic 2: Basic CSS Introduction (Inline & Internal) */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 2: Basic CSS Introduction (Inline & Internal)
          </h2>
          <p className="mb-3 leading-relaxed">
            What is CSS? Cascading Style Sheets. It's used to style HTML elements (colors, fonts, layout, etc.). Think of it as the **skin and clothing** of a website.
          </p>
          <p className="mb-3 leading-relaxed">
            Separation of Concerns: Emphasize why it's good practice to separate HTML (structure) from CSS (style).
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-3">CSS Syntax (briefly):</h3>
          <p className="mb-3 leading-relaxed">
            <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">Selector &lcub; property: value; &rcub;</code>
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`p {
    color: blue;
    font-size: 16px;
}`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Inline CSS (avoid generally):</h3>
          <p className="mb-3 leading-relaxed">
            Applying styles directly to an HTML element using the <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">style</code> attribute. Good for quick tests, but hard to manage for larger projects.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<p style="color: red; font-size: 20px;">This text is red and larger.</p>`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Internal CSS:</h3>
          <p className="mb-3 leading-relaxed">
            Placing CSS rules within a <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;style&gt;</code> tag in the <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;head&gt;</code> section of your HTML document. Better for single-page styling.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<!DOCTYPE html>
<html>
<head>
    <title>Styling Example</title>
    <style>
        h1 {
            color: purple;
        }
        p {
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <h1>My Styled Page</h1>
    <p>This paragraph has a different font.</p>
</body>
</html>`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Common CSS properties to demonstrate:</h3>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base mb-3">
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">color</code></li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">background-color</code></li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">font-size</code></li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">font-family</code></li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">text-align</code></li>
          </ul>

          <p className="mt-6 text-gray-700 font-semibold">
            Practical Exercise: Apply some inline CSS to a few elements in your <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">index.html</code> (e.g., change a paragraph's color). Remove the inline styles and add an internal <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;style&gt;</code> tag in the <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;head&gt;</code>. Use internal CSS to style your <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<h1>'}</code> and <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<p>'}</code> tags (e.g., <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">h1</code> with <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">text-align: center;</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">p</code> with <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">font-size: 18px;</code>).
          </p>
        </section>

        {/* Topic 3: External CSS (The Standard Way) & Next Steps */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 3: External CSS (The Standard Way) & Next Steps
          </h2>
          <p className="mb-3 leading-relaxed">
            External CSS: Linking to a separate <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">.css</code> file from your HTML document. This is the standard and most recommended way for maintainability and reusability.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-3">Linking an external stylesheet:</h3>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base mb-3">
            <li>Create a file named <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">style.css</code> (or any name ending with <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">.css</code>) in your project folder.</li>
            <li>Add CSS rules to <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">style.css</code>.</li>
            <li>Link it in your HTML's <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;head&gt;</code>:</li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<link rel="stylesheet" href="style.css">`}
          </pre>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base mb-3">
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">rel="stylesheet"</code>: Specifies the relationship of the linked document (it's a stylesheet).</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">href="style.css"</code>: Specifies the path to the CSS file.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Review of HTML concepts:</h3>
          <p className="mb-3 leading-relaxed">
            Quick recap of all learned HTML tags and their purpose.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">What's next?</h3>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base mb-3">
            <li>More CSS: Selectors (class, ID), Box Model, Flexbox, Grid, Responsive Design.</li>
            <li>JavaScript: Adding interactivity to web pages.</li>
            <li>Web Hosting: How to get a website online.</li>
            <li>Version Control (Git/GitHub): Managing code changes.</li>
            <li>Frameworks: (e.g., Bootstrap for CSS, React/Vue/Angular for JavaScript).</li>
          </ul>
          <p className="mb-3 leading-relaxed">
            Encourage continued learning: Provide resources like W3Schools, MDN Web Docs, freeCodeCamp, Codecademy.
          </p>

          <p className="mt-6 text-gray-700 font-semibold">
            Practical Exercise: Create a new file <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">style.css</code>. Move all your internal CSS rules from your <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">index.html</code> <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;style&gt;</code> tag into <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">style.css</code>. Link <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">style.css</code> to <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">index.html</code> using the <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;link&gt;</code> tag. Verify that your styles are still applied.
          </p>
          <p className="mt-4 text-gray-700 font-semibold">
            Final Project Idea: Have students create a simple "About Me" page or a small portfolio page using all the HTML concepts learned, and apply some basic external CSS for styling.
          </p>
        </section>

      </div> {/* End of flex-grow div */}

      {/* Footer Section */}
      <footer className="bg-indigo-700 text-white py-4 px-6 text-center text-sm">
        <p>&copy; 2025 Study Notes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Week4BestPracticesCSS;
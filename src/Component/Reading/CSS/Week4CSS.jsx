import React from "react";

const Week4CSS = () => {
  return (
    <div className="week3-css p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Week 4: Advanced Layouts & Best Practices 🚀
      </h1>
      <p className="mb-8">
        <strong>Goal:</strong> Master CSS Grid for two-dimensional layouts and learn professional practices for writing clean, efficient, and maintainable code.
      </p>

      {/* Topic 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Topic 1: CSS Grid – The 2D Layout System 🖼️
        </h2>
        <p className="mb-2">
          <strong>What is CSS Grid?</strong> CSS Grid is a two-dimensional layout system, allowing you to arrange items in both rows and columns. Unlike Flexbox (one-dimensional), Grid is perfect for building full-page layouts, galleries, dashboards, and complex components.
        </p>

        <h3 className="font-semibold mb-2">Key Concepts & Properties</h3>
        <p><strong>Grid Container (Parent):</strong></p>
        <pre className="bg-gray-100 p-4 rounded mb-4">
{`.container {
  display: grid;               
  grid-template-columns: 1fr 2fr 1fr; 
  grid-template-rows: 200px 150px;    
  gap: 10px;                   
}`}
        </pre>

        <p><strong>Grid Item (Child):</strong></p>
        <pre className="bg-gray-100 p-4 rounded mb-2">
{`.item1 {
  grid-column: 1 / 3; 
  grid-row: 1 / 2;    
}`}
        </pre>

        <p><strong>Tips for Beginners:</strong></p>
        <ul className="list-disc ml-6">
          <li>Use <code>fr</code> units for flexible layouts instead of <code>px</code>.</li>
          <li><code>gap</code> replaces old margin hacks between items.</li>
          <li>Combine <code>grid-column</code> and <code>grid-row</code> to make items span multiple cells.</li>
        </ul>
      </section>

      {/* Topic 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Topic 2: Responsive Grid & Best Practices ⚙️
        </h2>
        <p><strong>Making Grids Responsive:</strong></p>
        <pre className="bg-gray-100 p-4 rounded mb-2">
{`/* Desktop: 3 columns */
.container {
  grid-template-columns: repeat(3, 1fr);
}

/* Tablet: 2 columns */
@media (max-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile: 1 column */
@media (max-width: 480px) {
  .container {
    grid-template-columns: 1fr;
  }
}`}
        </pre>

        <h3 className="font-semibold mb-2">Professional CSS Practices:</h3>
        <ul className="list-disc ml-6">
          <li>Use <code>repeat()</code> to simplify repeated columns or rows.</li>
          <li>Comment your code to explain complex sections.</li>
          <li>Consistent Class Naming: Use a convention like BEM (block__element--modifier).</li>
          <li>Organize CSS by grouping related sections and spacing for readability.</li>
        </ul>
        <p className="mt-2 font-semibold">✅ Tip: A responsive grid + clean code = easier maintenance and scalability.</p>
      </section>

      {/* Topic 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Topic 3: Introduction to CSS Preprocessors 🧑‍💻
        </h2>
        <p><strong>What are CSS Preprocessors?</strong> Preprocessors like Sass and LESS extend standard CSS. They compile into regular CSS but give you features that make coding more powerful and maintainable.</p>

        <h3 className="font-semibold mb-2">Key Features:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>Variables</strong> – Store reusable values like colors, fonts, or spacing.
            <pre className="bg-gray-100 p-2 rounded mt-1">{`$primary-color: #3498db;
body { color: $primary-color; }`}</pre>
          </li>
          <li>
            <strong>Nesting</strong> – Organize selectors to mirror your HTML.
            <pre className="bg-gray-100 p-2 rounded mt-1">{`nav {
  ul { list-style: none; }
  li { display: inline-block; }
}`}</pre>
          </li>
          <li>
            <strong>Mixins</strong> – Reusable groups of CSS rules.
            <pre className="bg-gray-100 p-2 rounded mt-1">{`@mixin button-style {
  padding: 10px 20px;
  border-radius: 5px;
}
.button { @include button-style; }`}</pre>
          </li>
        </ul>

        <p><strong>Why Use Preprocessors?</strong></p>
        <ul className="list-disc ml-6">
          <li>Make CSS more maintainable, organized, and scalable.</li>
          <li>Avoid repetition and errors.</li>
          <li>Prepare for large projects or team workflows.</li>
        </ul>

      </section>
            {/* Footer Section */}
            <footer className="bg-indigo-700 text-white py-4 px-6 text-center text-sm">
                <p>&copy; 2025 Study Notes. All rights reserved.</p>
            </footer>
    </div>
  );
};

export default Week4CSS;

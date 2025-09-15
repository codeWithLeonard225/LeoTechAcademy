import React from 'react';
import { useNavigate } from 'react-router-dom';

const Week1CSSIntro = () => {
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
          Week 1: The Foundations of CSS 🎨
        </h1>

        {/* Topic 1: Introduction to CSS & The Box Model */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 1: Introduction to CSS & The Box Model
          </h2>
          <p className="mb-3 leading-relaxed">
            <strong>What is CSS?</strong> <em>Cascading Style Sheets</em>. It's the language used to describe the presentation of a web page (colors, fonts, layout, etc.). Think of it as the "clothing" of your HTML "skeleton."
          </p>
          <p className="mb-4 leading-relaxed">
            <strong>How CSS Works:</strong> The browser takes the HTML file and the linked CSS file(s) and applies the styles to the elements.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">CSS Syntax:</h3>
          <p className="mb-3 leading-relaxed">A rule consists of a selector, a property, and a value.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`selector {
  property: value;
}`}
          </pre>
          <p className="mt-4 mb-3 leading-relaxed">
            <strong>Example:</strong>
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`h1 {
  color: blue;
}`}
          </pre>


        </section>

        {/* Topic 2: Colors, Fonts, Text Styling and Selectors */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 2: Colors, Fonts, Text Styling and Selectors
          </h2>
          <p className="mb-3 leading-relaxed">
            This topic is where you'll begin to add personality to your web page. We'll learn how to pick and apply colors, change your fonts, and, most importantly, tell CSS exactly which HTML elements to style.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Color Values: Speaking the Language of Color 🌈</h3>
          <p className="mb-3 leading-relaxed">
            You can use the <code>color</code> property for text and the <code>background-color</code> property for an element's background. Here are the most common ways to specify a color.
          </p>

          <ul className="list-disc list-inside mt-4 space-y-4 text-base">
            <li>
              <strong className="text-blue-600">Color Names:</strong> Simple names like <code>red</code>, <code>blue</code>, <code>green</code>, etc.
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap mt-2">
                {`p {
  color: red;
  background-color: yellow;
}`}
              </pre>
              <p className="text-sm text-gray-600 mt-1">✅ Easy to remember but limited in choice.</p>
            </li>

            <li>
              <strong className="text-blue-600">HEX Values:</strong> The most common way to specify a color. It's a 6-digit code that starts with <code>#</code> and represents a specific mix of red, green, and blue.
              <ul className="list-circle list-inside ml-6 mt-2 text-sm">
                <li><code>#000000</code> → black</li>
                <li><code>#ffffff</code> → white</li>
                <li><code>#ff0000</code> → red</li>
                <li><code>#00ff00</code> → green</li>
                <li><code>#0000ff</code> → blue</li>
              </ul>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap mt-2">
                {`h1 {
  color: #ff6600; /* orange */
}`}
              </pre>
            </li>

            <li>
              <strong className="text-blue-600">RGB (Red, Green, Blue) Values:</strong> A mix of red, green, and blue, where each color's intensity is a number from 0 to 255.
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap mt-2">
                {`h2 {
  color: rgb(0, 128, 255); /* blue shade */
  background-color: rgb(240, 240, 240); /* light gray */
}`}
              </pre>
            </li>
          </ul>
          {/* New Notes: Backgrounds, Gradients, Box Shadows */}
          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
            🔹 Background Colors & Images
          </h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`body {
  background-color: #f0f0f0; /* light grey */
  background-image: url('image.jpg'); /* add image */
  background-size: cover; /* cover full screen */
  background-repeat: no-repeat;
}`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">🔹 Gradients</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`/* Linear Gradient */
.header {
  background: linear-gradient(to right, red, yellow);
}

/* Radial Gradient */
.circle {
  background: radial-gradient(circle, blue, lightblue);
}`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">🔹 Box Shadows</h3>
          <p className="mb-3 leading-relaxed">
            <strong>What is box-shadow?</strong><br />
            • <code>box-shadow</code> is a CSS property that adds a shadow around an HTML element.<br />
            • Most commonly used on boxes, buttons, cards, and divs to make them look 3D or “lifted.”
          </p>

          <h4 className="font-semibold text-gray-700 mt-4 mb-2">1. Basic Syntax</h4>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`box-shadow: offsetX offsetY blurRadius spreadRadius color;

/* Where:
offsetX → horizontal shadow distance (positive = right, negative = left)
offsetY → vertical shadow distance (positive = down, negative = up)
blurRadius → how blurry the shadow is (optional, default 0 = sharp)
spreadRadius → size of the shadow (optional, positive = bigger, negative = smaller)
color → shadow color */`}
          </pre>

          <h4 className="font-semibold text-gray-700 mt-4 mb-2">Examples</h4>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`/* Only horizontal and vertical offsets (simplest) */
box-shadow: 5px 5px;

/* Add blur (most common) */
box-shadow: 5px 5px 10px gray;

/* Add spread */
box-shadow: 5px 5px 10px 3px gray;

/* Inset shadow (inside the box) */
box-shadow: inset 5px 5px 10px rgba(0,0,0,0.3);`}
          </pre>

          <h4 className="font-semibold text-gray-700 mt-4 mb-2">✅ Key Takeaways</h4>
          <ul className="list-disc list-inside mt-2 text-base">
            <li>Only 2 values (offsetX offsetY) are enough for a basic shadow.</li>
            <li>3 values (offsetX offsetY blur) → most common for soft shadows.</li>
            <li>4 values (offsetX offsetY blur spread) → optional, adds control over size.</li>
            <li>Color is optional but recommended.</li>
            <li>Inset is optional, changes shadow to inside the box.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Fonts and Text Styling: Giving Your Words Personality ✍️</h3>
          <p className="mb-3 leading-relaxed">
            This is where you make your text look good and easy to read.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-base">
            <li>
              <strong className="text-blue-600"><code>font-family</code>:</strong> This property sets the font. It's good practice to list several font names as a "fallback" in case the user's computer doesn't have the first one.
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap mt-2">
                {`p {
  font-family: Arial, sans-serif;
}`}
              </pre>
            </li>
            <li>
              <strong className="text-blue-600"><code>font-size</code>:</strong> Controls how big the text is. You can use pixels (<code>px</code>) for a fixed size.
            </li>
            <li>
              <strong className="text-blue-600"><code>font-weight</code>:</strong> Makes text bolder or lighter. Use <code>bold</code> or a number like <code>700</code>.
            </li>
            <li>
              <strong className="text-blue-600"><code>text-align</code>:</strong> Aligns text within its element.
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap mt-2">
                {`h1 {
  text-align: center;
}`}
              </pre>
            </li>
            <li>
              <strong className="text-blue-600"><code>text-decoration</code>:</strong> Adds a line to text. Most often used to remove the underline from links.
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap mt-2">
                {`a {
  text-decoration: none;
}`}
              </pre>
            </li>
            <li>
              <strong className="text-blue-600"><code>line-height</code>:</strong> Controls the space between lines of text. A value of <code>1.5</code> is often great for readability.
            </li>
          </ul>
        </section>

        {/* Topic 3: ID and Class Selectors */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 3: CSS ID vs Class Selectors 🎯
          </h2>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">1. ID Selector (#)</h3>
          <p className="mb-3 leading-relaxed">
            An <strong>ID</strong> is a unique name given to one single HTML element. Think of it like a passport number → no two people can share the same one. Only one element per page should have a given ID.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-base">
            <li><strong>HTML Example:</strong>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap mt-2">
                {`<h1 id="main-title">Welcome to My Website</h1>`}
              </pre>
            </li>
            <li><strong>CSS Example:</strong>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap mt-2">
                {`#main-title {
  color: blue;
  font-size: 40px;
}`}
              </pre>
            </li>
            <li>👉 This will only style the <code>&lt;h1&gt;</code> with the <code>id="main-title"</code>.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">2. Class Selector (.)</h3>
          <p className="mb-3 leading-relaxed">
            A <strong>class</strong> is a reusable group name you can assign to many elements. Think of it like a school uniform → many students can wear the same one. You can give multiple elements the same class.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-base">
            <li><strong>HTML Example:</strong>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap mt-2">
                {`<p class="special-text">Hello World</p><p class="special-text">Goodbye World</p>`}
              </pre>
            </li>
            <li><strong>CSS Example:</strong>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap mt-2">
                {`.special-text {
  color: green;
  font-style: italic;
}`}
              </pre>
            </li>
            <li>👉 Both <code>&lt;p&gt;</code> elements with <code>class="special-text"</code> will get the same style.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">3. Key Differences</h3>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold">Feature</th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold">ID</th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold">Class</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2"><strong>Symbol</strong></td>
                  <td className="px-4 py-2"><code>#idName</code></td>
                  <td className="px-4 py-2"><code>.className</code></td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-2"><strong>Use For</strong></td>
                  <td className="px-4 py-2">One unique element</td>
                  <td className="px-4 py-2">Multiple elements</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2"><strong>Example</strong></td>
                  <td className="px-4 py-2"><code>#main-title</code></td>
                  <td className="px-4 py-2"><code>.special-text</code></td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-2"><strong>Reuse</strong></td>
                  <td className="px-4 py-2">Cannot reuse</td>
                  <td className="px-4 py-2">Can reuse many times</td>
                </tr>
                <tr>
                  <td className="px-4 py-2"><strong>Priority</strong></td>
                  <td className="px-4 py-2">IDs have higher CSS specificity</td>
                  <td className="px-4 py-2">Classes have lower CSS specificity</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">4. When to Use?</h3>
          <ul className="list-disc list-inside mt-4 space-y-2 text-base">
            <li>✅ Use <strong>ID</strong> when you want to style one special, unique element (e.g., main title, footer container, navigation bar).</li>
            <li>✅ Use <strong>Class</strong> when you want to apply the same style to multiple elements (e.g., all buttons, all headings, all paragraphs in a group).</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">5. Beginner Example (Combined)</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<!DOCTYPE html>
<html>
<head>
  <style>
    /* ID selector */
    #main-title {
      color: blue;
      text-align: center;
    }
    /* Class selector */
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1 id="main-title">Welcome to My Website</h1>
  <p class="highlight">This text is highlighted.</p>
  <p class="highlight">This is also highlighted!</p>
  <p>This paragraph is normal.</p>
</body>
</html>`}
          </pre>
          <ul className="list-disc list-inside mt-4 space-y-2 text-base">
            <li>✅ The <code>&lt;h1&gt;</code> uses an ID because it’s unique.</li>
            <li>✅ The <code>&lt;p&gt;</code> tags use a class because we want to style many of them the same way.</li>
          </ul>
          <p className="mt-4 text-gray-700 font-semibold">
            💡 Tip for Beginners: Use IDs sparingly (only for unique elements). Use Classes more often (for groups of elements). In real-world projects, developers prefer classes for styling because they are more flexible and reusable.
          </p>
        </section>

        {/* Topic 4: The CSS Box Model */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 4: The CSS Box Model
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">1. What is the Box Model?</h3>
          <p className="mb-3 leading-relaxed">
            In CSS, every HTML element is a box. This box is made up of 4 parts:
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`+-----------------------------+
|        Margin               |   (outside space)
+-----------------------------+
|        Border               |   (outline of the element)
+-----------------------------+
|        Padding              |   (space inside, around content)
+-----------------------------+
|        Content              |   (text, image, etc.)
+-----------------------------+`}
          </pre>
          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">2. Parts of the Box Model</h3>
          <ul className="list-disc list-inside mt-4 space-y-2 text-base">
            <li>
              <strong>Content</strong> → The actual text, image, or content inside the box.
              <p className="ml-6 mt-1 text-sm text-gray-600">Example: words inside a <code>&lt;p&gt;</code>.</p>
            </li>
            <li>
              <strong>Padding</strong> → Space between the content and the border.
              <p className="ml-6 mt-1 text-sm text-gray-600">Example: pushing text away from the box edge.</p>
            </li>
            <li>
              <strong>Border</strong> → A line around the padding and content.
              <p className="ml-6 mt-1 text-sm text-gray-600">Example: making a box with a black outline.</p>
            </li>
            <li>
              <strong>Margin</strong> → Space outside the border, separating elements from each other.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">3. Box Model Properties</h3>
          <ul className="list-disc list-inside mt-4 space-y-2 text-base">
            <li><code>width</code> → how wide the content box is.</li>
            <li><code>height</code> → how tall the content box is.</li>
            <li><code>padding</code> → inside spacing.</li>
            <li><code>border</code> → thickness & style of outline.</li>
            <li><code>margin</code> → outside spacing.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">4. Examples</h3>
          <h4 className="font-semibold text-gray-700 mt-4 mb-2">Example 1: Padding & Margin</h4>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 200px;
      height: 100px;
      background-color: lightblue;
      padding: 20px;   /* inside space */
      margin: 30px;    /* outside space */
      border: 5px solid black;
    }
  </style>
</head>
<body>
  <div class="box">Hello, I am inside a box!</div>
</body>
</html>`}
          </pre>
          <ul className="list-disc list-inside mt-4 space-y-2 text-base">
            <li>✅ <code>padding</code> makes space inside the box.</li>
            <li>✅ <code>margin</code> makes space outside the box.</li>
          </ul>

          <h4 className="font-semibold text-gray-700 mt-6 mb-2">Example 2: Border Styles</h4>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`.box {
  border: 2px solid red;   /* solid line */
  border: 3px dashed blue; /* dashed line */
  border: 4px dotted green; /* dotted line */
  border-radius: 10px;      /* rounded corners */
}`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">5. Box-Sizing Property</h3>
          <p className="mb-3 leading-relaxed">
            By default, CSS calculates width + padding + border separately.
          </p>

          <h4 className="font-semibold text-gray-700 mt-4 mb-2"><code>content-box</code> (default)</h4>
          <p className="mb-3 leading-relaxed">
            Width & height apply only to the content. Padding & border are added outside of that.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`div {
  width: 200px; /* content only */
  padding: 20px;
  border: 10px solid black;
  box-sizing: content-box; /* default */
}
/* ➝ Final total width = 200 (content) + 20+20 (padding) + 10+10 (border) = 260px */`}
          </pre>

          <h4 className="font-semibold text-gray-700 mt-6 mb-2"><code>border-box</code></h4>
          <p className="mb-3 leading-relaxed">
            Width & height include content + padding + border.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`div {
  width: 200px; /* includes content + padding + border */
  padding: 20px;
  border: 10px solid black;
  box-sizing: border-box;
}
/* ➝ Final total width = 200px (fixed). */`}
          </pre>
          <h4 className="font-semibold text-gray-700 mt-6 mb-2">Why <code>border-box</code> is Better 💡</h4>
          <p className="mt-4 text-gray-700 font-semibold">
            Imagine you have a container that's exactly 600px wide and you want to put two columns inside it that are each 50% of the width. With <code>content-box</code>, if you add padding to each column, they'll become wider than 300px and won't fit side-by-side, causing one to drop to the next line. The layout breaks! With <code>border-box</code>, each column will stay at exactly 300px (50% of 600px). The padding is included inside that 300px total, so the two columns fit perfectly and your layout is stable. This predictable behavior is why modern developers use <code>box-sizing: border-box;</code> as a standard practice for their projects.
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

export default Week1CSSIntro;
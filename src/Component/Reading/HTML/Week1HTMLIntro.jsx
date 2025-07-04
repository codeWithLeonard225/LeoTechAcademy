import React from 'react';
import { useNavigate } from 'react-router-dom';

const Week1HTMLIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50"> {/* Changed background to gray-50 for a softer look consistent with earlier versions */}
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
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-6"> {/* Larger, bolder main title */}
          Week 1: Introduction to HTML
        </h1>

        {/* Topic 1: What is HTML & Document Structure */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md"> {/* Added padding and shadow for sections */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 1: Introduction to HTML & Document Structure
          </h2>
          <p className="mb-3 leading-relaxed">
            <strong>HTML</strong> stands for <em>HyperText Markup Language</em>. It's the standard markup language for creating web pages. It describes the structure of a web page (not the styling or behavior). Think of it as the <strong>skeleton</strong> of a website.
          </p>
          <p className="mb-4 leading-relaxed">
            How the Web Works (Briefly): Browsers interpret HTML files to display content.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Basic HTML Document Structure:</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    </body>
</html>`}
          </pre>

          <ul className="list-disc list-inside mt-4 space-y-2 text-base"> {/* Adjusted spacing and text size */}
            <li><strong className="text-blue-600">{'<!DOCTYPE html>'}</strong>: Declaration defining the document type to be HTML5.</li>
            <li><strong className="text-blue-600">{'<html>'}</strong>: The root element of an HTML page. All other elements go inside this.</li>
            <li><strong className="text-blue-600">{'<head>'}</strong>: Contains meta-information about the HTML document (not visible on the page itself).</li>
            <li><strong className="text-blue-600">{'<meta charset="UTF-8">'}</strong>: Specifies the character encoding for the document.</li>
            <li><strong className="text-blue-600">{'<meta name="viewport" content="width=device-width, initial-scale=1.0">'}</strong>: Essential for responsive design.</li>
            <li><strong className="text-blue-600">{'<title>'}</strong>: Sets the title of the page, which appears in the browser tab.</li>
            <li><strong className="text-blue-600">{'<body>'}</strong>: Contains all the visible content of the web page.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Elements, Tags, and Attributes:</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li><strong>Element</strong>: A complete HTML component, including the opening tag, content, and closing tag (e.g., <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<p>This is a paragraph.</p>'}</code>).</li>
            <li><strong>Tag</strong>: The opening or closing part of an element (e.g., <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<p>'}</code> is an opening tag, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'</p>'}</code> is a closing tag).</li>
            <li><strong>Self-closing tags</strong>: Some tags don't have closing tags because they don't enclose content (e.g., <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<img/>'}</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<br/>'}</code>).</li>
            <li><strong>Attributes</strong>: Provide additional information about an element, always specified in the opening tag (e.g., <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<img src="image.jpg" alt="Description of image">'}</code>).
              <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">src</code> (source) and <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">alt</code> (alternative text) are examples for <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<img>'}</code>.</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Creating your first HTML file:</h3>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>Open your text editor.</li>
            <li>Type the basic HTML structure.</li>
            <li>Save the file as <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">index.html</code> (or any name ending with <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">.html</code>).</li>
            <li>Open the file in your web browser (double-click or drag-and-drop).</li>
          </ol>
          <p className="mt-4 text-gray-700 font-semibold">
            Practical Exercise: Create an <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">index.html</code> file with the basic structure and a title "My First Webpage." Add a simple sentence inside the <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<body>'}</code> tags, like "Hello, HTML World!"
          </p>
        </section>

        {/* Topic 2: Headings and Paragraphs */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">Topic 2: Headings and Paragraphs</h2>
          <p className="mb-3 leading-relaxed">
            Headings (<code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<h1>'}</code> to <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<h6>'}</code>): Used to define titles and subtitles. <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<h1>'}</code> is the most important, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<h6>'}</code> is the least. Emphasize their semantic meaning for structure and SEO, not just visual size.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`<h1>Main Heading</h1>
<h2>Sub-heading</h2>
<h3>Even Smaller Heading</h3>`}
          </pre>

          <p className="mt-4 mb-3 leading-relaxed">
            Paragraphs (<code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<p>'}</code>): Used for blocks of text.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`<p>This is a paragraph of text. It can contain multiple sentences.</p>`}
          </pre>

          <p className="mt-4 mb-3 leading-relaxed">
            Line Breaks (<code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<br>'}</code>): A self-closing tag to insert a single line break. Use sparingly; usually, paragraphs are better for separating blocks of text.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`<p>This is the first line.<br>This is the second line.</p>`}
          </pre>

          <p className="mt-4 mb-3 leading-relaxed">
            Horizontal Rule (<code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<hr>'}</code>): A self-closing tag to draw a horizontal line across the page, used to separate content.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`<p>Some content above the line.</p><hr><p>Some content below the line.</p>`}
          </pre>
          <p className="mt-4 text-gray-700 font-semibold">
            Practical Exercise: Modify your <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">index.html</code> to include an <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<h1>'}</code> for a main title, a <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<h2>'}</code> for a subtitle, and a couple of <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<p>'}</code> tags with some dummy text. Experiment with <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<br>'}</code> and <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<hr>'}</code> tags.
          </p>
        </section>

        {/* Topic 3: Text Formatting and Basic Lists */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">Topic 3: Text Formatting and Basic Lists</h2>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Basic Text Formatting:</h3>
          <p className="mb-3 leading-relaxed">
            Use semantic tags like <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<strong>'}</code> for **important** text and <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<em>'}</code> for *emphasized* text. Generally, semantic tags are preferred for better accessibility and meaning.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`<p>This is <strong>important</strong> and <em>emphasized</em> text.</p>
<p>You can also use <b>bold</b> and <i>italic</i> for presentational purposes, but semantic tags are generally better.</p>`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Ordered Lists (<code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<ol>'}</code> and <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<li>'}</code>):</h3>
          <p className="mb-3 leading-relaxed">For items that have a specific order (e.g., steps in a recipe).</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Unordered Lists (<code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<ul>'}</code> and <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<li>'}</code>):</h3>
          <p className="mb-3 leading-relaxed">For items that do not have a specific order (e.g., grocery list).</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`<ul>
    <li>Item A</li>
    <li>Item B</li>
    <li>Item C</li>
</ul>`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Nesting Lists:</h3>
          <p className="mb-3 leading-relaxed">You can put lists inside other lists.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{`<ul>
    <li>Fruits
        <ul>
            <li>Apple</li>
            <li>Banana</li>
        </ul>
    </li>
    <li>Vegetables</li>
</ul>`}
          </pre>
          <p className="mt-4 text-gray-700 font-semibold">
            Practical Exercise: Add some text within your paragraphs and apply <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<strong>'}</code> and <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{'<em>'}</code> tags. Create an ordered list for "Steps to make coffee." Create an unordered list for "My Favorite Hobbies." Try nesting an unordered list inside one of the list items.
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

export default Week1HTMLIntro;
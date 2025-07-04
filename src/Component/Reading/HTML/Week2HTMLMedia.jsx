import React from 'react';
import { useNavigate } from 'react-router-dom';

const Week2HTMLMedia = () => {
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
          Week 2: Links, Images, and Basic Media
        </h1>
        <p className="mb-8 text-lg text-gray-700">
          Goal: Learn how to navigate between pages and embed visual and audio content.
        </p>

        {/* Topic 1: Hyperlinks (Anchors) */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 1: Hyperlinks (Anchors)
          </h2>
          <p className="mb-3 leading-relaxed">
            The <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;a&gt;</code> tag: Used to create hyperlinks. "a" stands for anchor.
          </p>
          <p className="mb-3 leading-relaxed">
            <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">href</code> attribute: Specifies the destination URL (Hypertext Reference).
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-3">Linking to external websites:</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<p>Visit <a href="https://www.google.com">Google</a> for search.</p>`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Linking to internal pages (relative paths):</h3>
          <p className="mb-3 leading-relaxed">
            Create another HTML file (e.g., <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">about.html</code>).
            Link to it from <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">index.html</code>:
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<p><a href="about.html">Learn more about us</a></p>`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Linking to sections within the same page (anchor links):</h3>
          <p className="mb-3 leading-relaxed">
            Give an element an <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">id</code> attribute: <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{`<h2 id="section1">Section One</h2>`}</code>
          </p>
          <p className="mb-3 leading-relaxed">
            Link to it: <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{`<a href="#section1">Go to Section One</a>`}</code>
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">target attribute:</h3>
          <p className="mb-3 leading-relaxed">
            Controls where the linked document opens.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base">
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">_self</code> (default): Opens in the same browser window/tab.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">_blank</code>: Opens in a new browser window/tab.</li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap mt-4">
            {`<p>Open Google in a new tab: <a href="https://www.google.com" target="_blank">Google</a></p>`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Email links:</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<p>Contact us: <a href="mailto:your_email@example.com">Send an Email</a></p>`}
          </pre>

          <p className="mt-6 text-gray-700 font-semibold">
            Practical Exercise: Create a new file <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">about.html</code> with some basic content. Add a link in <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">index.html</code> to <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">about.html</code> and vice-versa. Add an external link to a favorite website with <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">target="_blank"</code>. Add an email link.
          </p>
        </section>

        {/* Topic 2: Images */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 2: Images
          </h2>
          <p className="mb-3 leading-relaxed">
            The <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;img&gt;</code> tag: Used to embed images. It's a self-closing tag.
          </p>
          <p className="mb-3 leading-relaxed">
            <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">src</code> attribute: Specifies the path to the image file (Source).
          </p>
          <p className="mb-3 leading-relaxed">
            <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">alt</code> attribute: Provides alternative text for the image. Crucial for accessibility (screen readers) and when the image fails to load.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<img src="images/my-image.jpg" alt="A description of my image">`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Image paths:</h3>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base">
            <li>Relative paths: When the image is in the same folder or a subfolder (e.g., <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">images/my-image.jpg</code>).</li>
            <li>Absolute URLs: When the image is hosted online (e.g., <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">https://www.ex.com/image.png</code>).</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">width and height attributes:</h3>
          <p className="mb-3 leading-relaxed">
            (Optional, but useful for basic control) Specifies the dimensions. Better to control with CSS, but okay for quick examples.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<img src="logo.png" alt="Company Logo" width="100" height="50">`}
          </pre>

          <p className="mt-4 mb-3 leading-relaxed">
            Best practices: Create an <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">images</code> folder to organize images. Always use <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">alt</code> text.
          </p>
          <p className="mt-6 text-gray-700 font-semibold">
            Practical Exercise: Create an <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">images</code> folder in your project. Download a few images and place them in the <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">images</code> folder. Embed at least two images into your <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">index.html</code> using relative paths. Make sure to include meaningful <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">alt</code> text. Try embedding an image using an absolute URL (find one online, e.g., from Unsplash or Pixabay, but be mindful of hotlinking).
          </p>
        </section>

        {/* Topic 3: Tables */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 3: Tables
          </h2>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base mb-3">
            <li>The <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;table&gt;</code> tag: Defines a table.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;tr&gt;</code>: Table Row – defines a row in the table.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;th&gt;</code>: Table Header – defines a header cell (usually bold and centered by default).</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;td&gt;</code>: Table Data – defines a standard data cell.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-3">Basic table structure:</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
    <tr>
        <td>Data 3</td>
        <td>Data 4</td>
    </tr>
</table>`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">colspan and rowspan attributes:</h3>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base mb-3">
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">colspan</code>: Makes a cell span across multiple columns.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">rowspan</code>: Makes a cell span across multiple rows.</li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<table>
    <tr>
        <th colspan="2">Full Header</th>
    </tr>
    <tr>
        <td>Data A</td>
        <td>Data B</td>
    </tr>
</table>`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Table sections (<code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;thead&gt;</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;tbody&gt;</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;tfoot&gt;</code>):</h3>
          <p className="mb-3 leading-relaxed">
            For semantic grouping of table content. Good for long tables.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alice</td>
            <td>30</td>
        </tr>
        <tr>
            <td>Bob</td>
            <td>25</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="2">End of table</td>
        </tr>
    </tfoot>
</table>`}
          </pre>

          <p className="mt-6 text-gray-700 font-semibold">
            Practical Exercise: Create a simple table of student names and their favorite subjects. Try using <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">colspan</code> or <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">rowspan</code> to merge a cell. Implement <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;thead&gt;</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;tbody&gt;</code>, and <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;tfoot&gt;</code> for a slightly more complex table.
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

export default Week2HTMLMedia;
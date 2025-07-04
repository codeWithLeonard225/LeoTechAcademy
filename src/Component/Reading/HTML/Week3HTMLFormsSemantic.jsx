import React from 'react';
import { useNavigate } from 'react-router-dom';

const Week3FormsSemantic = () => {
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
          Week 3: Forms and Semantic HTML
        </h1>
        <p className="mb-8 text-lg text-gray-700">
          Goal: Understand how to collect user input and write more meaningful HTML.
        </p>

        {/* Topic 1: Forms and Input Fields */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 1: Forms and Input Fields
          </h2>
          <p className="mb-3 leading-relaxed">
            The <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;form&gt;</code> tag: Defines an HTML form for user input.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base mb-3">
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">action</code> attribute: Specifies where to send the form data when submitted (server-side script). For now, we can leave it empty or point to a placeholder.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">method</code> attribute: Specifies the HTTP method to use (e.g., GET or POST).</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-3">The <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;input&gt;</code> tag:</h3>
          <p className="mb-3 leading-relaxed">
            The most common form element. It's a self-closing tag.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base mb-3">
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">type</code> attribute: Crucial for defining the type of input:
              <ul className="list-circle list-inside ml-6 mt-1 text-sm">
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">text</code>: Single-line text input.</li>
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">password</code>: Password input (masked characters).</li>
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">email</code>: Email address input (basic validation).</li>
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">number</code>: Numeric input.</li>
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">checkbox</code>: Allows multiple selections.</li>
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">radio</code>: Allows only one selection from a group (use <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">name</code> attribute to group).</li>
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">submit</code>: A button to submit the form.</li>
                <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">reset</code>: A button to reset form fields.</li>
                <li>Other types: <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">date</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">time</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">color</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">range</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">file</code>, etc.</li>
              </ul>
            </li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">name</code> attribute: Essential for identifying the input when the form is submitted (server-side).</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">value</code> attribute: Sets the initial value of an input.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">placeholder</code> attribute: Provides a hint for the user.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">The <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;label&gt;</code> tag:</h3>
          <p className="mb-3 leading-relaxed">
            Associates a label with an input field (improves accessibility). Use the <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">for</code> attribute to link to the input's <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">id</code>.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<form action="#" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" placeholder="Enter your username">
    <br>
    <label>
        Password:
        <input type="password" name="password">
    </label>
    <br>
    <input type="submit" value="Login">
</form>`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">The <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;textarea&gt;</code> tag:</h3>
          <p className="mb-3 leading-relaxed">For multi-line text input.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<label for="message">Your Message:</label><br>
<textarea id="message" name="message" rows="5" cols="30"></textarea>`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">The <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;select&gt;</code> and <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;option&gt;</code> tags:</h3>
          <p className="mb-3 leading-relaxed">For dropdown lists.</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<label for="country">Country:</label>
<select id="country" name="country">
    <option value="usa">USA</option>
    <option value="canada">Canada</option>
    <option value="uk">UK</option>
</select>`}
          </pre>

          <p className="mt-6 text-gray-700 font-semibold">
            Practical Exercise: Create a simple contact form with fields for Name (text), Email (email), Message (textarea), and a Submit button. Add radio buttons for "Gender" (Male, Female, Other). Add checkboxes for "Interests" (e.g., Reading, Sports, Music). Include a dropdown for "Favorite Color." Make sure to use <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;label&gt;</code> tags for all inputs.
          </p>
        </section>

        {/* Topic 2: Semantic HTML5 Elements */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 2: Semantic HTML5 Elements
          </h2>
          <p className="mb-3 leading-relaxed">
            What is Semantic HTML? Using HTML tags that clearly describe the meaning or purpose of the content they contain, rather than just how it should look. This improves accessibility, SEO, and code readability.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-3">Non-semantic vs. Semantic:</h3>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base mb-3">
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;div&gt;</code> (non-semantic): A generic container.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;span&gt;</code> (non-semantic): A generic inline container.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Key Semantic Elements:</h3>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base mb-3">
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;header&gt;</code>: Introduces content, typically contains navigation, logos, headings.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;nav&gt;</code>: Contains navigation links.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;main&gt;</code>: Contains the dominant content of the <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;body&gt;</code>. There should only be one <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;main&gt;</code> per page.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;article&gt;</code>: Independent, self-contained content (e.g., a blog post, a news article).</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;section&gt;</code>: A thematic grouping of content, typically with a heading.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;aside&gt;</code>: Content that is tangentially related to the main content (e.g., a sidebar, a callout box).</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;footer&gt;</code>: Contains authorship information, copyright data, contact info, etc.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;figure&gt;</code> and <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;figcaption&gt;</code>: Used for self-contained content (like images, diagrams, code snippets) with a caption.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Benefits of Semantic HTML:</h3>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base mb-3">
            <li>Accessibility: Screen readers can better understand the page structure.</li>
            <li>SEO: Search engines can better understand the content's importance.</li>
            <li>Readability: Easier for developers to understand the code.</li>
            <li>Maintainability: Easier to work with and update.</li>
          </ul>

          <p className="mt-6 text-gray-700 font-semibold">
            Practical Exercise: Refactor your <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">index.html</code> (or create a new page) to use semantic HTML5 elements. Divide your page into a <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;header&gt;</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;nav&gt;</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;main&gt;</code>, and <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;footer&gt;</code>. Within <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;main&gt;</code>, use <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;section&gt;</code> and <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;article&gt;</code> tags to structure different parts of your content. If you have an image with a caption, use <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;figure&gt;</code> and <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;figcaption&gt;</code>.
          </p>
        </section>

        {/* Topic 3: Embedding Multimedia (Audio & Video) */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Topic 3: Embedding Multimedia (Audio & Video)
          </h2>

          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-3">The <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;audio&gt;</code> tag:</h3>
          <p className="mb-3 leading-relaxed">Embeds audio content.</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base mb-3">
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">src</code>: Path to the audio file.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">controls</code>: Displays default browser controls (play/pause, volume).</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">autoplay</code>: Automatically starts playing (use with caution, can be annoying).</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">loop</code>: Repeats the audio.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">muted</code>: Mutes the audio by default.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;source&gt;</code>: Allows multiple audio formats for browser compatibility.</li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<audio controls>
    <source src="audio/background-music.mp3" type="audio/mpeg">
    <source src="audio/background-music.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">The <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;video&gt;</code> tag:</h3>
          <p className="mb-3 leading-relaxed">Embeds video content.</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base mb-3">
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">src</code>: Path to the video file.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">controls</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">autoplay</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">loop</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">muted</code>: Similar to audio.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">width</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">height</code>: For specifying dimensions.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">poster</code>: Image to display before the video loads.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;source&gt;</code>: Allows multiple video formats.</li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<video controls width="640" height="360" poster="images/video-poster.jpg">
    <source src="video/my-video.mp4" type="video/mp4">
    <source src="video/my-video.webm" type="video/webm">
    Your browser does not support the video tag.
</video>`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">The <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;iframe&gt;</code> (Inline Frame) tag:</h3>
          <p className="mb-3 leading-relaxed">
            Embeds another HTML document within the current document. Commonly used for embedding YouTube videos, Google Maps.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base mb-3">
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">src</code>: URL of the document to embed.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">width</code>, <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">height</code>: Dimensions of the iframe.</li>
            <li><code className="font-mono bg-gray-100 px-1 py-0.5 rounded">frameborder</code>: (Deprecated, use CSS) Whether to show a border.</li>
          </ul>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {`<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        width="560" height="315"
        frameborder="0" allowfullscreen>
</iframe>`}
          </pre>
           <p className="mb-3 leading-relaxed text-sm text-gray-600">
            (Note: The YouTube URL in the example above is a placeholder. For actual use, get the embed code from a specific YouTube video.)
          </p>

          <p className="mt-6 text-gray-700 font-semibold">
            Practical Exercise: Find a royalty-free audio file (e.g., from Pixabay or Freesound.org) and embed it with controls. Find a short royalty-free video and embed it with controls. Embed a YouTube video using its <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">&lt;iframe&gt;</code> embed code.
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

export default Week3FormsSemantic;
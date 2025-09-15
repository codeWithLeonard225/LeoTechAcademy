import React from 'react';
import { useNavigate } from 'react-router-dom';

const Week3CSS = () => {
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
                    🌐 Week 3: Responsive Design & Animations 🎨
                </h1>
                <p className="mb-6 leading-relaxed text-gray-700">
                    Goal: Learn to make your websites look good on all devices, control element positioning, and add basic animations.
                </p>

                {/* Topic 1: Media Queries */}
                <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                        Topic 1: Media Queries 📱
                    </h2>

                    <p className="mb-3 leading-relaxed">
                        🔹 <strong>What are Media Queries?</strong><br />
                        Media queries let your website adapt to different screen sizes (desktop, tablet, mobile).<br />
                        They are part of responsive design.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-3">🔹 Syntax</h3>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`@media (condition) {
  selector {
    property: value;
  }
}`}
                    </pre>

                    <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">🔹 Common Conditions</h3>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                        <li><code>max-width</code> → styles apply if screen is smaller than value.</li>
                        <li><code>min-width</code> → styles apply if screen is larger than value.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">🔹 Example</h3>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`/* Default desktop style */
body {
  font-size: 18px;
}

/* Tablets */
@media (max-width: 768px) {
  body {
    font-size: 16px;
  }
}

/* Phones */
@media (max-width: 480px) {
  body {
    font-size: 14px;
  }
}`}
                    </pre>

                    <p className="mt-4 text-gray-700">
                        ✅ <strong>Result:</strong> Text gets smaller on smaller screens for readability.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">📝 Beginner Exercise</h3>
                    <p className="leading-relaxed">
                        Create a page with a large heading and paragraph.<br />
                        Use media queries to change font size for tablets and phones.<br />
                        Try changing the background color when the screen is small.
                    </p>
                </section>

                {/* Topic 2: max-width & The position Property */}
                <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                        Topic 2: max-width & The position Property
                    </h2>


                    <p className="mb-3 leading-relaxed">
                        This topic introduces two important tools for controlling an element's size and its exact location on the page.
                    </p>


                    <ul className="list-disc list-inside mb-4 text-gray-700">
                        <li><strong>max-width:</strong> Sets the maximum width an element can be. Useful for making images and containers shrink on smaller screens but not grow too large on big screens.</li>
                        <li><strong>Practical Use:</strong> Set a container to <code>max-width: 1200px;</code> and <code>margin: auto;</code> to keep content centered and readable on large screens while allowing it to shrink on mobile.</li>
                    </ul>


                    <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">👉 Example</h3>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`.container {
width: 100%;
max-width: 1200px;
margin: 0 auto; /* centers container */
}`}
                    </pre>
                    <h1 className="mb-3 leading-relaxed">✅ The container will stretch to 100% of the screen but never exceed 1200px.</h1>
                    <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">🔹 Positioning</h3>


                    <p className="mb-3 leading-relaxed">CSS offers 5 positioning types:</p>


                    <table className="w-full text-left border border-gray-300 mb-4">


                        <thead>


                            <tr className="bg-gray-200">


                                <th className="p-2 border border-gray-300">Position</th>


                                <th className="p-2 border border-gray-300">Description</th>


                            </tr>


                        </thead>


                        <tbody>


                            <tr><td className="p-2 border">static</td><td className="p-2 border">Default. Elements follow normal flow.</td></tr>
                            <tr><td className="p-2 border">relative</td><td className="p-2 border">Move element relative to its normal position.</td></tr>
                            <tr><td className="p-2 border">absolute</td><td className="p-2 border">Position relative to closest positioned ancestor.</td></tr>
                            <tr><td className="p-2 border">fixed</td><td className="p-2 border">Stays fixed on screen even when scrolling.</td></tr>
                            <tr><td className="p-2 border">sticky</td><td className="p-2 border">Behaves like relative until a scroll threshold, then sticks.</td></tr>


                        </tbody>


                    </table>
                    <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-3">Example:</h3>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">


                        {`.relative-box {
  position: relative;
  top: 20px;
  left: 10px;
  background: lightgreen;
}


.fixed-box {
  position: fixed;
  bottom: 0;
  right: 0;
  background: orange;
  padding: 10px;
}`}


                    </pre>
                    <p className="mt-3 text-gray-600 text-sm">
                        ✅ <strong>Relative:</strong> moves from its normal spot <br />
                        ✅ <strong>Absolute:</strong> floats above other elements <br />
                        ✅ <strong>Fixed:</strong> always visible

                    </p>
                    <p className="mt-4 font-semibold text-gray-700">📝 Beginner Exercise</p>
                    <p className="mb-3 leading-relaxed">
                        Create a small notification box and fix it at the bottom-right of the screen.<br />
                        Make an element move slightly using <code>position: relative</code> and <code>top/left</code>.<br />
                        Combine with <code>max-width</code> to make your content responsive.
                    </p>
                </section>
                {/* Topic 3: @keyframes and Simple Animation */}
                <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                        Topic 3: @keyframes and Simple Animation 🎬
                    </h2>


                    <p className="mb-3 leading-relaxed">
                        This topic introduces you to the magic of CSS animation! You can create complex animations by defining different steps and letting the browser handle the rest.
                    </p>


                    <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-3">🔹 What is @keyframes?</h3>
                    <p className="mb-3 leading-relaxed">
                        It's a CSS rule that allows you to define the different stages of an animation. You specify the style of an element at different points in time (using percentages or keywords like <code>from</code> and <code>to</code>).
                    </p>


                    <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-3">🔹 Keyframes Syntax</h3>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`@keyframes animation-name {
0% { property: value; }
50% { property: value; }
100% { property: value; }
}`}
                    </pre>


                    <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-3">🔹 Using Animation</h3>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`.box {
width: 100px;
height: 100px;
background: red;
animation: moveBox 3s infinite alternate;
}


@keyframes moveBox {
0% { transform: translateX(0); }
100% { transform: translateX(200px); }
}`}
                    </pre>


                    <p className="mt-3 text-gray-700">
                        ✅ <strong>Result:</strong> The red box moves back and forth horizontally.
                    </p>


                    <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">CSS Animation Properties</h3>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                        <li><code>animation-name</code>: Name of the @keyframes rule.</li>
                        <li><code>animation-duration</code>: How long one cycle runs.</li>
                        <li><code>animation-timing-function</code>: Speed curve (ease, linear, ease-in, ease-out).</li>
                        <li><code>animation-delay</code>: Delay before animation starts.</li>
                        <li><code>animation-iteration-count</code>: How many times it repeats (or infinite).</li>
                        <li><code>animation-direction</code>: normal, reverse, alternate.</li>
                        <li><code>animation-fill-mode</code>: forwards, backwards, both.</li>
                        <li><code>animation-play-state</code>: running or paused.</li>
                    </ul>


                    <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-3">🔹 Shorthand Example</h3>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`.box {
animation: slideIn 2s ease-in 0.5s 3 alternate;
}`}
                    </pre>


                    <p className="mt-3 text-gray-700">
                        ✅ This animation uses the <code>slideIn</code> keyframes, runs for 2 seconds, starts after 0.5s, repeats 3 times, and alternates direction.
                    </p>


                    <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">📝 Beginner Exercise</h3>
                    <p className="leading-relaxed">
                        Animate a <code>&lt;div&gt;</code> to fade in/out using <code>opacity</code>.<br />
                        Make a box bounce up and down.<br />
                        Combine <code>:hover</code> + animation for interactive effects.
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

export default Week3CSS;

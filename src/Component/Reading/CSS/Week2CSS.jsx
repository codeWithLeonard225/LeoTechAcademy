import React from 'react';
import { useNavigate } from 'react-router-dom';

const Week2CSS = () => {
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
                    Week 2: Layout and Interaction 💻
                </h1>

                {/* Single Topic Section */}
                <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                        Topic 1: Interactivity — Hover, Transitions & Transform ✨
                    </h2>
                    <p className="mb-3 leading-relaxed">
                        Adding interactivity makes your website feel alive by providing visual feedback to users.
                        You can use <code>:hover</code>, <code>transition</code>, and <code>transform</code> together
                        to create smooth and engaging effects.
                    </p>

                    {/* Hover */}
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Hover Pseudo-class (:hover)</h3>
                    <p className="mb-3 leading-relaxed">
                        The <code>:hover</code> selector changes the style of an element when the user moves the mouse over it. Great for links, buttons, or images.
                    </p>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`button {
  background-color: blue;
}
button:hover {
  background-color: darkblue;
}`}
                    </pre>

                    {/* Transition */}
                    <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Transition Property</h3>
                    <p className="mb-3 leading-relaxed">
                        The <code>transition</code> property creates smooth animation between style changes.
                    </p>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`button {
  background-color: red;
  transition: background-color 0.5s ease;
}`}
                    </pre>
                    <p className="mt-3 text-gray-600 text-sm">✅ The color smoothly fades instead of instantly changing.</p>

                    {/* Transform */}
                    <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-3">Transform Property 🎢</h3>
                    <p className="mb-3 leading-relaxed">
                        The <code>transform</code> property allows you to move, resize, rotate, or skew elements. Combined with hover and transition, it creates dynamic effects.
                    </p>

                    <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">1. Scale()</h4>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`.card {
  transition: transform 0.5s ease;
}
.card:hover {
  transform: scale(1.1); /* enlarges by 10% */
}`}
                    </pre>

                    <h4 className="text-lg font-semibold text-gray-700 mt-6 mb-2">2. Rotate()</h4>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`.icon:hover {
  transform: rotate(360deg); /* spins fully */
}`}
                    </pre>

                    <h4 className="text-lg font-semibold text-gray-700 mt-6 mb-2">3. Translate()</h4>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`.button:hover {
  transform: translateY(-5px); /* moves upward */
}`}
                    </pre>

                    <p className="mt-4 text-gray-700 font-semibold">
                        💡 Tip: Always combine <code>transform</code> with <code>transition</code> for smooth, professional effects.
                    </p>
                </section>

                {/* Topic 2: Display & Flexbox */}
                <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                        Topic 2: Display & The Flexbox Model ↔️
                    </h2>

                    <p className="mb-3 leading-relaxed">
                        🔹 <strong>What is Flexbox?</strong>
                    </p>
                    <p className="mb-3 leading-relaxed">
                        Flexbox = Flexible Box Layout.<br />
                        It helps you align and distribute space among items in a container.<br />
                        Great for: menus, cards, layouts, navigation bars.
                    </p>

                    <p className="mb-3 leading-relaxed">
                        🔹 <strong>Key Idea:</strong><br />
                        Apply <code>display: flex;</code> to a parent (container).<br />
                        The direct children automatically become flex items.
                    </p>

                    <p className="mb-3 leading-relaxed">
                        🔹 <strong>Flex-Container Properties (applied to parent)</strong><br />
                        <code>flex-direction</code> → row (default) or column.<br />
                        <code>justify-content</code> → controls main axis (start, center, end, space-between).<br />
                        <code>align-items</code> → controls cross axis (top, middle, bottom).
                    </p>

                    <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-3">Example:</h3>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`.container {
  display: flex;
  justify-content: center; /* center horizontally */
  align-items: center;     /* center vertically */
}`}
                    </pre>
                </section>
                {/* Topic 3: Mastering Flexbox */}
                <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                        Topic 3: Mastering Flexbox 👨‍🏫
                    </h2>
                    <p className="mb-3 leading-relaxed">
                        This topic dives deeper into Flexbox properties to give you complete control over your layouts.
                    </p>

                    <p className="mb-3 leading-relaxed">
                        🔹 <strong>flex-wrap:</strong> Allows flex items to wrap to a new line if they run out of space.<br />
                        Value: <code>wrap</code> or <code>nowrap</code> (default).
                    </p>

                    <p className="mb-3 leading-relaxed">
                        🔹 <strong>Flex-Item Properties (applied to children)</strong><br />
                        <code>flex-grow</code> → Specifies how an item will grow to fill available space.<br />
                        <code>flex-shrink</code> → Specifies how an item will shrink to fit into a container.<br />
                        <code>flex-basis</code> → Defines the default size of an item before it grows or shrinks.<br />
                        Shorthand <code>flex</code> → A combination of <code>flex-grow</code>, <code>flex-shrink</code>, and <code>flex-basis</code>.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-3">Example:</h3>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                        {`.item {
  flex: 1 1 150px; /* grow, shrink, basis */
}`}
                    </pre>
                </section>
            </div>

            {/* Footer Section */}
            <footer className="bg-indigo-700 text-white py-4 px-6 text-center text-sm">
                <p>&copy; 2025 Study Notes. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Week2CSS;

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Week1Page() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Goes back to the previous page
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">📘 Week 1 - Introduction to HTML</h1>

      <div className="mb-6">
        <p className="text-gray-700 text-lg">
          In this week's lesson, you'll learn the basics of HTML including:
        </p>
        <ul className="list-disc pl-6 mt-3 text-gray-600 space-y-1">
          <li>What is HTML?</li>
          <li>Basic structure of an HTML document</li>
          <li>Common HTML tags (headings, paragraphs, links, images)</li>
          <li>Creating your first HTML page</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">📝 Assignment</h2>
        <p className="text-gray-700">
          Create a simple webpage that includes your name, a picture, and a list of your hobbies.
        </p>
      </div>

      <button
        onClick={handleGoBack}
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        ← Back
      </button>
    </div>
  );
}

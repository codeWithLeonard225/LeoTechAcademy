import React from "react";

export default function Unauthorized() {
  return (
    <div className="flex items-center justify-center h-screen bg-red-50">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">🚫 Access Denied</h1>
        <p className="text-lg text-gray-700">You do not have permission to view this page.</p>
      </div>
    </div>
  );
}

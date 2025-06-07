// src/pages/VerifyPayment.jsx

import { useState } from 'react';
import { users } from '../Pages/Userdb'; // Import your user database

export default function VerifyPayment() {
  const [transactionCode, setTransactionCode] = useState('');
  const [verified, setVerified] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', id: '' });
  const [error, setError] = useState('');

  const handleVerify = (e) => {
    e.preventDefault();
    if (transactionCode === 'ABC123' || transactionCode === 'XYZ789') {
      setVerified(true);
    } else {
      alert('Invalid transaction code');
    }
  };

  const handleAccountSubmit = (e) => {
    e.preventDefault();

    const match = users.find(
      (user) =>
        user.username.toLowerCase() === formData.username.toLowerCase() &&
        user.email.toLowerCase() === formData.email.toLowerCase() &&
        user.id === formData.id
    );

    if (match) {
      alert('Login successful!');
      // You can store the user in localStorage or context here
      localStorage.setItem('loggedInUser', JSON.stringify(match));
      window.location.href = '/dashboard';
    } else {
      setError('No user found with the provided details. Please check your info.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {!verified ? (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-center">Verify Your Payment</h2>
            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Transaction Code</label>
                <input
                  type="text"
                  value={transactionCode}
                  onChange={(e) => setTransactionCode(e.target.value)}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Verify
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-center">Login with Your Details</h2>
            <form onSubmit={handleAccountSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Username</label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">User ID</label>
                <input
                  type="text"
                  value={formData.id}
                  onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
              >
                Login
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

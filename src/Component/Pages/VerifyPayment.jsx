// src/pages/VerifyPayment.jsx

import { useState } from 'react';
// Corrected import path for Userdb. Assuming it's in src/data/Userdb.js
// If it's in src/pages/Userdb.js, then use './Userdb'
import { users } from './Userdb'; 
import { useNavigate } from 'react-router-dom';

export default function VerifyPayment() {
  const navigate = useNavigate();
  const [transactionCode, setTransactionCode] = useState('');
  const [verified, setVerified] = useState(false);
  // Only need 'id' in formData now
  const [formData, setFormData] = useState({ id: '' }); 
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

    // Use .trim() for robustness, especially with mobile input
    const enteredId = formData.id.trim(); 

    const match = users.find(
      (user) => user.id === enteredId
    );

    if (match) {
      alert('Login successful!');
      localStorage.setItem('loggedInUser', JSON.stringify(match));
      navigate('/dashboard'); 
    } else {
      // Clear error message if user starts typing again
      setError('No user found with that ID. Please check your ID.'); 
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
            <h2 className="text-2xl font-semibold mb-6 text-center">Login with Your User ID</h2>
            <form onSubmit={handleAccountSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">User ID</label>
                <input
                  type="text"
                  value={formData.id}
                  onChange={(e) => {
                      setFormData({ ...formData, id: e.target.value });
                      setError(''); // Clear error when user types
                  }}
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
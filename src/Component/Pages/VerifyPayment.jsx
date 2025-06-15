import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase'; // Assuming your Firebase config is in src/firebase.js

export default function VerifyPayment() {
    const navigate = useNavigate();
    const [transactionCode, setTransactionCode] = useState('');
    const [verified, setVerified] = useState(false);
    const [formData, setFormData] = useState({ id: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // New loading state

    // Updated handleVerify to fetch from Firestore
    const handleVerify = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        setError(''); // Clear previous errors

        const enteredCode = transactionCode.trim().toUpperCase(); // Clean and standardize input

        if (!enteredCode) {
            setError('Please enter a transaction code.');
            setLoading(false);
            return;
        }

        try {
            // Collection name is now 'handleVerify' as per your code
            const transactionsCollectionRef = collection(db, 'handleVerify'); 

            // Create a query to find documents where 'transactionCode' field matches the entered code
            const q = query(transactionsCollectionRef, where('transactionCode', '==', enteredCode));

            // Execute the query
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                // If querySnapshot is not empty, it means we found at least one matching transaction code
                const transactionDoc = querySnapshot.docs[0]; 
                const transactionData = transactionDoc.data();

                // You can add more checks here if your 'handleVerify' documents have other fields
                // For example: if (transactionData.status === 'completed') { ... }

                setVerified(true);
                alert('Payment verified successfully! You can now log in with your User ID.');
            } else {
                // No document found with the given transaction code
                setError('Invalid transaction code. Please try again.');
                alert('Invalid transaction code.');
            }
        } catch (err) {
            console.error('Payment verification error from Firestore:', err);
            setError('An error occurred during verification. Please try again.');
        } finally {
            setLoading(false); // End loading
        }
    };

    // This part is updated to include userType-based navigation
    const handleAccountSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
        setError(''); 

        const enteredId = formData.id.trim();

        if (!enteredId) {
            setError('Please enter a user ID.');
            setLoading(false);
            return;
        }

        try {
            const userDocRef = doc(db, 'Users', enteredId);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                const user = { ...userData, id: userDocSnap.id }; 

                // Store user data in localStorage (optional, but good for persistence)
                localStorage.setItem('loggedInUser', JSON.stringify(user));

                // --- NEW LOGIC FOR USER TYPE NAVIGATION ---
                if (user.userType === 'in-person') {
                    alert(`Welcome, ${user.username || user.id}! Redirecting to In-Person Dashboard.`);
                    navigate('/inPersonDashboard'); // Navigate to InPersonDashboard
                } else if (user.userType === 'distance') {
                    alert(`Welcome, ${user.username || user.id}! Redirecting to Distance Dashboard.`);
                    navigate('/distanceDashboard'); // Navigate to DistanceDashboard
                } else {
                    // Handle cases where userType is missing or unknown
                    setError('User type not specified or recognized. Please contact support.');
                    alert('Login successful, but user type is undefined. Please contact support.');
                    // Optionally, navigate to a default dashboard or an error page
                    navigate('/'); 
                }
            } else {
                setError('No user found with that ID. Please check your ID.');
            }
        } catch (err) {
            console.error('Error fetching user from Firestore:', err);
            setError('An error occurred while logging in. Please try again.');
        } finally {
            setLoading(false); 
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
                                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={loading}
                            >
                                {loading ? 'Verifying...' : 'Verify Payment'}
                            </button>
                            {error && <p className="text-red-600 text-sm mt-2 text-center">{error}</p>}
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
                                        setError(''); 
                                    }}
                                    required
                                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {error && <p className="text-red-600 text-sm">{error}</p>}
                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={loading}
                            >
                                {loading ? 'Logging In...' : 'Login'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

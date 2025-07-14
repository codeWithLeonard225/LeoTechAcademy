import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase'; // Ensure this path is correct

export default function VerifyPayment() {
    const navigate = useNavigate();
    const [transactionCode, setTransactionCode] = useState('');
    const [verified, setVerified] = useState(false);
    const [formData, setFormData] = useState({ id: '', isAdmin: false });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showMessageBox, setShowMessageBox] = useState(false); // State for custom message box
    const [messageBoxContent, setMessageBoxContent] = useState({ title: '', body: '', type: '' }); // Content for message box
    const [showUserId, setShowUserId] = useState(false); // State to toggle User ID visibility

    // Function to show custom message box with a timeout
    const showMessage = (title, body, type = 'info') => {
        setMessageBoxContent({ title, body, type });
        setShowMessageBox(true);
        setTimeout(() => {
            hideMessageBox();
        }, 2000); // Hide after 2 seconds
    };

    // Function to hide custom message box
    const hideMessageBox = () => {
        setShowMessageBox(false);
        setMessageBoxContent({ title: '', body: '', type: '' });
    };

    // Function to set error message with a timeout
    const setTimedError = (msg) => {
        setError(msg);
        setTimeout(() => {
            setError('');
        }, 2000); // Clear error after 2 seconds
    };

    // --- Verify Transaction Code ---
    const handleVerify = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(''); // Clear error immediately
        hideMessageBox(); // Hide any previous messages

        const enteredCode = transactionCode.trim().toUpperCase();

        if (!enteredCode) {
            setTimedError('Please enter a transaction code.'); // Use timed error
            setLoading(false);
            return;
        }

        try {
            const transactionsRef = collection(db, 'handleVerify');
            const q = query(transactionsRef, where('transactionCode', '==', enteredCode));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setVerified(true);
                showMessage('Payment Verified', 'Payment verified successfully! You can now log in.', 'success');
            } else {
                setTimedError('Invalid transaction code.'); // Use timed error
                showMessage('Verification Failed', 'Invalid transaction code.', 'error');
            }
        } catch (err) {
            console.error('Verification error:', err);
            setTimedError('Verification failed. Please try again.'); // Use timed error
            showMessage('Error', 'Verification failed. Please try again.', 'error');
        } finally {
            setLoading(false);
        }
    };

    // --- Handle Login (Admin or Student) ---
    const handleAccountSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(''); // Clear error immediately
        hideMessageBox(); // Hide any previous messages

        const enteredId = formData.id.trim();
        const isAdmin = formData.isAdmin;

        if (!enteredId) {
            setTimedError('Please enter a user ID.'); // Use timed error
            setLoading(false);
            return;
        }

        try {
            if (isAdmin) {
                

                // 🔍 Look for admin where id field matches the entered ID
                const adminQuery = query(collection(db, 'Admin'), where('id', '==', enteredId));
                const querySnapshot = await getDocs(adminQuery);

                if (!querySnapshot.empty) {
                    const adminDoc = querySnapshot.docs[0];
                    const adminData = adminDoc.data();
                    const user = { ...adminData, id: adminDoc.id, role: 'admin' };

                    localStorage.setItem('loggedInUser', JSON.stringify(user));
                    showMessage('Welcome Admin!', `Welcome Admin ${user.username || user.id}!`, 'success');
                    navigate('/admin-panel');
                } else {
                    console.log('❌ No admin document found with id field matching:', enteredId);
                    setTimedError('Invalid admin ID.'); // Use timed error
                    showMessage('Login Failed', 'Invalid admin ID.', 'error');
                }

            } else {
                const userRef = doc(db, 'Users', enteredId);
                const userSnap = await getDoc(userRef);

                if (userSnap.exists()) {
                    const userData = userSnap.data();
                    const user = { ...userData, id: userSnap.id, role: 'student' };

                    localStorage.setItem('loggedInUser', JSON.stringify(user));

                    if (user.userType === 'in-person') {
                        showMessage('Welcome!', `Welcome ${user.username || user.id}, redirecting to In-Person Dashboard.`, 'success');
                        navigate('/inPersonDashboard');
                    } else if (user.userType === 'distance') {
                        showMessage('Welcome!', `Welcome ${user.username || user.id}, redirecting to Distance Dashboard.`, 'success');
                        navigate('/distanceDashboard');
                    } else {
                        setTimedError('User type not recognized. Please contact support.'); // Use timed error
                        showMessage('Login Failed', 'User type not recognized. Please contact support.', 'error');
                    }
                } else {
                    setTimedError('No user found with that ID.'); // Use timed error
                    showMessage('Login Failed', 'No user found with that ID.', 'error');
                }
            }
        } catch (err) {
            console.error('Login error:', err);
            setTimedError('Login failed. Please try again.'); // Use timed error
            showMessage('Error', 'Login failed. Please try again.', 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-gray-200">
                {!verified ? (
                    <>
                        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Verify Your Payment</h2>
                        <form onSubmit={handleVerify} className="space-y-4">
                            <div>
                                <label htmlFor="transactionCode" className="block mb-1 font-medium text-gray-700">Transaction Code</label>
                                <input
                                    type="text"
                                    id="transactionCode"
                                    value={transactionCode}
                                    onChange={(e) => setTransactionCode(e.target.value)}
                                    required
                                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                                    placeholder="Enter transaction code"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 transition duration-150 ease-in-out font-semibold"
                                disabled={loading}
                            >
                                {loading ? 'Verifying...' : 'Verify Payment'}
                            </button>
                            {error && <p className="text-red-600 text-sm text-center mt-2">{error}</p>}
                        </form>
                    </>
                ) : (
                    <>
                        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login with Your User ID</h2>
                        <form onSubmit={handleAccountSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="userId" className="block mb-1 font-medium text-gray-700">User ID</label>
                                <div className="relative">
                                    <input
                                        type={showUserId ? 'text' : 'password'}
                                        id="userId"
                                        value={formData.id}
                                        onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                                        required
                                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-10 transition duration-150 ease-in-out"
                                        placeholder="Enter your user ID"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowUserId(!showUserId)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-600 hover:text-gray-900 focus:outline-none"
                                        aria-label={showUserId ? 'Hide user ID' : 'Show user ID'}
                                    >
                                        {showUserId ? (
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.025m5.858.02L10.5 9.25m3.75-2.25L10.5 9.25m3.75-2.25L10.5 9.25M12 18V6m0 0a2 2 0 100-4 2 2 0 000 4zm0 0a2 2 0 100-4 2 2 0 000 4z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        ) : (
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="adminCheck"
                                    checked={formData.isAdmin}
                                    onChange={(e) => setFormData({ ...formData, isAdmin: e.target.checked })}
                                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                />
                                <label htmlFor="adminCheck" className="text-sm text-gray-700">Login as Admin</label>
                            </div>

                            {error && <p className="text-red-600 text-sm text-center mt-2">{error}</p>}

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 disabled:opacity-50 transition duration-150 ease-in-out font-semibold"
                                disabled={loading}
                            >
                                {loading ? 'Logging In...' : 'Login'}
                            </button>
                        </form>
                    </>
                )}
            </div>

            {/* Custom Message Box */}
            {showMessageBox && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className={`bg-white p-6 rounded-lg shadow-xl w-full max-w-sm border-t-4 ${
                        messageBoxContent.type === 'success' ? 'border-green-500' :
                        messageBoxContent.type === 'error' ? 'border-red-500' : 'border-blue-500'
                    }`}>
                        <h3 className={`text-lg font-bold mb-2 ${
                            messageBoxContent.type === 'success' ? 'text-green-700' :
                            messageBoxContent.type === 'error' ? 'text-red-700' : 'text-blue-700'
                        }`}>{messageBoxContent.title}</h3>
                        <p className="text-gray-700 mb-4">{messageBoxContent.body}</p>
                        <button
                            onClick={hideMessageBox}
                            className={`w-full py-2 rounded-md text-white font-semibold transition duration-150 ease-in-out ${
                                messageBoxContent.type === 'success' ? 'bg-green-600 hover:bg-green-700' :
                                messageBoxContent.type === 'error' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

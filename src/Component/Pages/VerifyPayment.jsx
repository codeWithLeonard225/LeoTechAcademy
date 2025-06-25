import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';


export default function VerifyPayment() {
    const navigate = useNavigate();
    const [transactionCode, setTransactionCode] = useState('');
    const [verified, setVerified] = useState(false);
    const [formData, setFormData] = useState({ id: '', isAdmin: false });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // --- Verify Transaction Code ---
    const handleVerify = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const enteredCode = transactionCode.trim().toUpperCase();

        if (!enteredCode) {
            setError('Please enter a transaction code.');
            setLoading(false);
            return;
        }

        try {
            const transactionsRef = collection(db, 'handleVerify');
            const q = query(transactionsRef, where('transactionCode', '==', enteredCode));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setVerified(true);
                alert('Payment verified successfully! You can now log in.');
            } else {
                setError('Invalid transaction code.');
                alert('Invalid transaction code.');
            }
        } catch (err) {
            console.error('Verification error:', err);
            setError('Verification failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // --- Handle Login (Admin or Student) ---
    const handleAccountSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const enteredId = formData.id.trim();
        const isAdmin = formData.isAdmin;

        if (!enteredId) {
            setError('Please enter a user ID.');
            setLoading(false);
            return;
        }

        try {
            if (isAdmin) {
                console.log("🔐 Attempting admin login with ID:", enteredId);

                // 🔍 Look for admin where id field matches the entered ID
                const adminQuery = query(collection(db, 'Admin'), where('id', '==', enteredId));
                const querySnapshot = await getDocs(adminQuery);

                if (!querySnapshot.empty) {
                    const adminDoc = querySnapshot.docs[0];
                    const adminData = adminDoc.data();
                    const user = { ...adminData, id: adminDoc.id, role: 'admin' };

                    localStorage.setItem('loggedInUser', JSON.stringify(user));
                    alert(`Welcome Admin ${user.username || user.id}!`);
                    navigate('/admin-panel');
                } else {
                    console.log('❌ No admin document found with id field matching:', enteredId);
                    setError('Invalid admin ID.');
                }

            }
            else {
                const userRef = doc(db, 'Users', enteredId);
                const userSnap = await getDoc(userRef);

                if (userSnap.exists()) {
                    const userData = userSnap.data();
                    const user = { ...userData, id: userSnap.id, role: 'student' };

                    localStorage.setItem('loggedInUser', JSON.stringify(user));

                    if (user.userType === 'in-person') {
                        alert(`Welcome ${user.username || user.id}, redirecting to In-Person Dashboard.`);
                        navigate('/inPersonDashboard');
                    } else if (user.userType === 'distance') {
                        alert(`Welcome ${user.username || user.id}, redirecting to Distance Dashboard.`);
                        navigate('/distanceDashboard');
                    } else {
                        setError('User type not recognized. Please contact support.');
                    }
                } else {
                    setError('No user found with that ID.');
                }
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Login failed. Please try again.');
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
                                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
                                disabled={loading}
                            >
                                {loading ? 'Verifying...' : 'Verify Payment'}
                            </button>
                            {error && <p className="text-red-600 text-sm text-center">{error}</p>}
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
                                    onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                                    required
                                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="adminCheck"
                                    checked={formData.isAdmin}
                                    onChange={(e) => setFormData({ ...formData, isAdmin: e.target.checked })}
                                />
                                <label htmlFor="adminCheck" className="text-sm text-gray-700">Login as Admin</label>
                            </div>

                            {error && <p className="text-red-600 text-sm text-center">{error}</p>}

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 disabled:opacity-50"
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

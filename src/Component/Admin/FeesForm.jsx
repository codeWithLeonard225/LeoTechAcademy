// src/components/FeesForm.jsx
import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from 'firebase/firestore';
import { db } from '../../../firebase'; // Adjust path as needed
import { useSearchParams, Link } from 'react-router-dom';

export default function FeesForm() {
    const [searchParams] = useSearchParams();

    const [enrollment, setEnrollment] = useState(null); // Stores the full enrollment object
    const [payments, setPayments] = useState([]); // New state to store payment history for this enrollment
    const [formData, setFormData] = useState({
        enrollmentId: '',
        studentId: '',
        studentName: '',
        courseId: '',
        courseTitle: '',
        enrollmentCost: '', // Total cost of the enrollment
        amountPaid: '',    // Amount for this specific payment
        paymentDate: new Date().toISOString().split('T')[0], // Default to today's date
        notes: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFetchingPayments, setIsFetchingPayments] = useState(false); // Loading state for payments table
    const [editingPaymentId, setEditingPaymentId] = useState(null); // State to hold the ID of the payment being edited

    // --- Message Box / Error Handling ---
    const [showMessageBox, setShowMessageBox] = useState(false);
    const [messageBoxContent, setMessageBoxContent] = useState({ title: '', body: '', type: '', onConfirm: null, requiresPassword: false });
    const [confirmationPassword, setConfirmationPassword] = useState(''); // New state for password input in message box
    const ADMIN_PASSWORD = 'admin'; // !!! IMPORTANT: FOR DEMONSTRATION ONLY. DO NOT HARDCODE PASSWORDS IN PRODUCTION !!!

    const showMessage = (title, body, type = 'info', onConfirm = null, requiresPassword = false) => {
        setMessageBoxContent({ title, body, type, onConfirm, requiresPassword });
        setShowMessageBox(true);
        setConfirmationPassword(''); // Reset password input
        if (type !== 'confirm') {
            setTimeout(() => {
                hideMessageBox();
            }, 2000);
        }
    };

    const hideMessageBox = () => {
        setShowMessageBox(false);
        setMessageBoxContent({ title: '', body: '', type: '', onConfirm: null, requiresPassword: false });
        setConfirmationPassword(''); // Clear password on hide
    };

    const setTimedError = (msg) => {
        setError(msg);
        setTimeout(() => {
            setError('');
        }, 2000);
    };
    // --- End Message Box / Error Handling ---

    // Function to fetch payment history for the current enrollment
    const fetchPaymentHistory = async (enrollmentId) => {
        if (!enrollmentId) return;
        setIsFetchingPayments(true);
        try {
            const paymentsCollectionRef = collection(db, 'Payments');
            const q = query(paymentsCollectionRef, where('enrollmentId', '==', enrollmentId));
            const querySnapshot = await getDocs(q);
            const paymentList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            paymentList.sort((a, b) => new Date(b.paymentDate) - new Date(a.paymentDate));
            setPayments(paymentList);
        } catch (err) {
            console.error("Error fetching payment history:", err);
            setTimedError("Failed to load payment history.");
            setPayments([]);
        } finally {
            setIsFetchingPayments(false);
        }
    };

    // Function to update enrollment's totalAmountPaid and balanceDue
    const updateEnrollmentBalance = async (enrollmentId, newPaymentAmount, oldPaymentAmount = 0, isDeletion = false) => {
        const enrollmentRef = doc(db, 'CourseEnrollments', enrollmentId);
        const currentEnrollmentSnap = await getDoc(enrollmentRef);

        if (currentEnrollmentSnap.exists()) {
            const currentEnrollmentData = currentEnrollmentSnap.data();
            let currentTotalPaid = currentEnrollmentData.totalAmountPaid || 0;
            const enrollmentCost = currentEnrollmentData.costOrPrice;

            let newTotalPaid;
            if (isDeletion) {
                newTotalPaid = currentTotalPaid - oldPaymentAmount;
            } else if (editingPaymentId) { // Editing an existing payment
                newTotalPaid = currentTotalPaid - oldPaymentAmount + newPaymentAmount;
            } else { // Adding a new payment
                newTotalPaid = currentTotalPaid + newPaymentAmount;
            }

            const newBalanceDue = enrollmentCost - newTotalPaid;

            await updateDoc(enrollmentRef, {
                totalAmountPaid: newTotalPaid,
                balanceDue: newBalanceDue,
            });
            setEnrollment(prev => ({ ...prev, totalAmountPaid: newTotalPaid, balanceDue: newBalanceDue }));
        }
    };

    useEffect(() => {
        const fetchEnrollmentAndPrepopulate = async () => {
            const enrollmentIdParam = searchParams.get('enrollmentId');
            const studentIdParam = searchParams.get('studentId');
            const studentNameParam = searchParams.get('studentName');
            const courseIdParam = searchParams.get('courseId');
            const courseTitleParam = searchParams.get('courseTitle');
            const costOrPriceParam = searchParams.get('costOrPrice');

            if (enrollmentIdParam) {
                try {
                    const enrollmentRef = doc(db, 'CourseEnrollments', enrollmentIdParam);
                    const enrollmentSnap = await getDoc(enrollmentRef);

                    if (enrollmentSnap.exists()) {
                        const enrollmentData = enrollmentSnap.data();
                        setEnrollment(enrollmentData);

                        setFormData({
                            enrollmentId: enrollmentIdParam,
                            studentId: enrollmentData.studentId,
                            studentName: enrollmentData.studentName,
                            courseId: enrollmentData.courseId,
                            courseTitle: enrollmentData.courseTitle,
                            enrollmentCost: enrollmentData.costOrPrice,
                            amountPaid: '',
                            paymentDate: new Date().toISOString().split('T')[0],
                            notes: '',
                        });
                        fetchPaymentHistory(enrollmentIdParam);
                    } else {
                        setTimedError("Enrollment record not found in database. Using URL parameters.");
                        setFormData({
                            enrollmentId: enrollmentIdParam,
                            studentId: studentIdParam || '',
                            studentName: decodeURIComponent(studentNameParam || ''),
                            courseId: courseIdParam || '',
                            courseTitle: decodeURIComponent(courseTitleParam || ''),
                            enrollmentCost: Number(costOrPriceParam) || '',
                            amountPaid: '',
                            paymentDate: new Date().toISOString().split('T')[0],
                            notes: '',
                        });
                        fetchPaymentHistory(enrollmentIdParam);
                    }
                } catch (err) {
                    console.error("Error fetching enrollment:", err);
                    setTimedError("Failed to load enrollment details. Please try again.");
                    setFormData({
                        enrollmentId: enrollmentIdParam,
                        studentId: studentIdParam || '',
                        studentName: decodeURIComponent(studentNameParam || ''),
                        courseId: courseIdParam || '',
                        courseTitle: decodeURIComponent(courseTitleParam || ''),
                        enrollmentCost: Number(costOrPriceParam) || '',
                        amountPaid: '',
                        paymentDate: new Date().toISOString().split('T')[0],
                        notes: '',
                    });
                    fetchPaymentHistory(enrollmentIdParam);
                } finally {
                    setLoading(false);
                }
            } else {
                setTimedError("No enrollment ID provided in URL.");
                setLoading(false);
            }
        };

        fetchEnrollmentAndPrepopulate();
    }, [searchParams]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleEditClick = (payment) => {
        setEditingPaymentId(payment.id);
        setFormData({
            ...formData,
            amountPaid: payment.amountPaid,
            paymentDate: payment.paymentDate,
            notes: payment.notes,
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDeleteClick = (paymentId, amountPaid) => {
        showMessage(
            'Confirm Deletion',
            `Are you sure you want to delete this payment of SLE ${Number(amountPaid).toFixed(2)}? This action cannot be undone. Please enter the admin password to confirm.`,
            'confirm',
            async () => {
                // This is the callback that runs if the user confirms AND the password is correct
                try {
                    await deleteDoc(doc(db, 'Payments', paymentId));
                    await updateEnrollmentBalance(formData.enrollmentId, 0, amountPaid, true);
                    fetchPaymentHistory(formData.enrollmentId);
                    showMessage('Deleted!', 'Payment has been successfully deleted.', 'success');
                } catch (err) {
                    console.error('Error deleting payment:', err);
                    setTimedError('Failed to delete payment. Please try again.');
                    showMessage('Error', 'Failed to delete payment.', 'error');
                }
            },
            true // requiresPassword: true
        );
    };

    const handleCancelEdit = () => {
        setEditingPaymentId(null);
        setFormData(prev => ({
            ...prev,
            amountPaid: '',
            paymentDate: new Date().toISOString().split('T')[0],
            notes: '',
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        hideMessageBox();

        if (!formData.enrollmentId || !formData.amountPaid || !formData.paymentDate) {
            setTimedError('Please fill in Amount Paid and Payment Date.');
            setIsSubmitting(false);
            return;
        }
        if (isNaN(formData.amountPaid) || Number(formData.amountPaid) <= 0) {
            setTimedError('Please enter a valid positive amount paid.');
            setIsSubmitting(false);
            return;
        }

        try {
            const paymentData = {
                enrollmentId: formData.enrollmentId,
                studentId: formData.studentId,
                studentName: formData.studentName,
                courseId: formData.courseId,
                courseTitle: formData.courseTitle,
                enrollmentCost: Number(formData.enrollmentCost),
                amountPaid: Number(formData.amountPaid),
                paymentDate: formData.paymentDate,
                notes: formData.notes,
            };

            if (editingPaymentId) {
                const oldPayment = payments.find(p => p.id === editingPaymentId);
                const oldAmountPaid = oldPayment ? Number(oldPayment.amountPaid) : 0;

                await updateDoc(doc(db, 'Payments', editingPaymentId), {
                    ...paymentData,
                    paymentLastUpdated: new Date().toISOString(),
                });
                await updateEnrollmentBalance(formData.enrollmentId, Number(formData.amountPaid), oldAmountPaid, false);
                showMessage('Payment Updated', 'Payment has been successfully updated and enrollment balance adjusted!', 'success');
                setEditingPaymentId(null);
            } else {
                await addDoc(collection(db, 'Payments'), {
                    ...paymentData,
                    paymentRecordedAt: new Date().toISOString(),
                });
                await updateEnrollmentBalance(formData.enrollmentId, Number(formData.amountPaid), 0, false);
                showMessage('Payment Recorded', 'Payment has been successfully recorded and enrollment balance updated!', 'success');
            }

            setFormData(prev => ({
                ...prev,
                amountPaid: '',
                paymentDate: new Date().toISOString().split('T')[0],
                notes: '',
            }));
            fetchPaymentHistory(formData.enrollmentId);

        } catch (err) {
            console.error('Error processing payment:', err);
            setTimedError('Failed to process payment. Please try again.');
            showMessage('Error', `Failed to ${editingPaymentId ? 'update' : 'record'} payment.`, 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-xl text-gray-700">Loading payment form...</p>
            </div>
        );
    }

    if (!formData.enrollmentId) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
                <p className="text-xl text-red-700 mb-4">Error: No enrollment selected for payment.</p>
                <Link to="/enrollment-form" className="text-blue-600 hover:underline">
                    Go back to Enrollments
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl border border-gray-200">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                    {editingPaymentId ? 'Edit Payment' : 'Record Payment for Enrollment'}
                </h2>
                <div className="mb-6 p-4 bg-blue-50 rounded-md border border-blue-200">
                    <p className="text-gray-700 mb-1"><strong className="text-gray-900">Student:</strong> {formData.studentName} ({formData.studentId})</p>
                    <p className="text-gray-700 mb-1"><strong className="text-gray-900">Course:</strong> {formData.courseTitle} ({formData.courseId})</p>
                    <p className="text-gray-700 mb-1"><strong className="text-gray-900">Enrollment Cost:</strong> SLE {Number(formData.enrollmentCost).toFixed(2)}</p>
                    {enrollment && (
                        <>
                            <p className="text-gray-700 mb-1"><strong className="text-gray-900">Total Paid:</strong> SLE {Number(enrollment.totalAmountPaid || 0).toFixed(2)}</p>
                            <p className="text-gray-700"><strong className="text-gray-900">Balance Due:</strong> <span className="font-bold text-red-600">SLE {Number(enrollment.balanceDue || enrollment.costOrPrice).toFixed(2)}</span></p>
                        </>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Amount Paid */}
                    <div>
                        <label htmlFor="amountPaid" className="block mb-1 font-medium text-gray-700">
                            Amount Paid <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            id="amountPaid"
                            name="amountPaid"
                            value={formData.amountPaid}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="e.g., 50.00"
                            min="0.01"
                            step="0.01"
                        />
                    </div>

                    {/* Payment Date */}
                    <div>
                        <label htmlFor="paymentDate" className="block mb-1 font-medium text-gray-700">
                            Payment Date <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            id="paymentDate"
                            name="paymentDate"
                            value={formData.paymentDate}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                        />
                    </div>

                    {/* Notes */}
                    <div>
                        <label htmlFor="notes" className="block mb-1 font-medium text-gray-700">
                            Payment Notes (Optional)
                        </label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows="2"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="e.g., First installment, Cash payment"
                        ></textarea>
                    </div>

                    {error && <p className="text-red-600 text-sm text-center mt-2">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 disabled:opacity-50 transition duration-150 ease-in-out font-semibold"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (editingPaymentId ? 'Updating Payment...' : 'Recording Payment...') : (editingPaymentId ? 'Update Payment' : 'Record Payment')}
                    </button>
                    {editingPaymentId && (
                        <button
                            type="button"
                            onClick={handleCancelEdit}
                            className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 disabled:opacity-50 transition duration-150 ease-in-out font-semibold mt-2"
                        >
                            Cancel Edit
                        </button>
                    )}
                    <Link to="/enrollment-form" className="block text-center mt-4 text-blue-600 hover:underline">
                        ← Back to Enrollments
                    </Link>
                </form>

                {/* Payment History Table */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Payment History</h3>
                    {isFetchingPayments ? (
                        <p className="text-center text-gray-600">Loading payment history...</p>
                    ) : payments.length === 0 ? (
                        <p className="text-center text-gray-600 italic">No payments recorded for this enrollment yet.</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-2 px-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b">Date</th>
                                        <th className="py-2 px-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b">Amount</th>
                                        <th className="py-2 px-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b">Notes</th>
                                        <th className="py-2 px-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b">Recorded At</th>
                                        <th className="py-2 px-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {payments.map(payment => (
                                        <tr key={payment.id} className="hover:bg-gray-50">
                                            <td className="py-2 px-3 whitespace-nowrap text-sm text-gray-800">{payment.paymentDate}</td>
                                            <td className="py-2 px-3 whitespace-nowrap text-sm text-gray-800">SLE {Number(payment.amountPaid).toFixed(2)}</td>
                                            <td className="py-2 px-3 text-sm text-gray-800">{payment.notes || 'N/A'}</td>
                                            <td className="py-2 px-3 whitespace-nowrap text-sm text-gray-800">{new Date(payment.paymentRecordedAt).toLocaleString()}</td>
                                            <td className="py-2 px-3 whitespace-nowrap text-sm">
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => handleEditClick(payment)}
                                                        className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-xs"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteClick(payment.id, payment.amountPaid)}
                                                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-xs"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Custom Message Box */}
            {showMessageBox && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className={`bg-white p-6 rounded-lg shadow-xl w-full max-w-sm border-t-4 ${
                        messageBoxContent.type === 'success' ? 'border-green-500' :
                        messageBoxContent.type === 'error' ? 'border-red-500' :
                        messageBoxContent.type === 'confirm' ? 'border-orange-500' : 'border-blue-500'
                    }`}>
                        <h3 className={`text-lg font-bold mb-2 ${
                            messageBoxContent.type === 'success' ? 'text-green-700' :
                            messageBoxContent.type === 'error' ? 'text-red-700' :
                            messageBoxContent.type === 'confirm' ? 'text-orange-700' : 'text-blue-700'
                        }`}>{messageBoxContent.title}</h3>
                        <p className="text-gray-700 mb-4">{messageBoxContent.body}</p>

                        {/* Password input for confirmation */}
                        {messageBoxContent.requiresPassword && messageBoxContent.type === 'confirm' && (
                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password:
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    value={confirmationPassword}
                                    onChange={(e) => setConfirmationPassword(e.target.value)}
                                    autoFocus
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            // Trigger confirm action on Enter key press
                                            if (confirmationPassword === ADMIN_PASSWORD) {
                                                if (messageBoxContent.onConfirm) messageBoxContent.onConfirm();
                                                hideMessageBox();
                                            } else {
                                                alert('Incorrect password!'); // Simple alert for wrong password
                                                setConfirmationPassword(''); // Clear password field
                                            }
                                        }
                                    }}
                                />
                            </div>
                        )}

                        {messageBoxContent.type === 'confirm' ? (
                            <div className="flex justify-end space-x-3">
                                <button
                                    onClick={hideMessageBox}
                                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        if (messageBoxContent.requiresPassword && confirmationPassword !== ADMIN_PASSWORD) {
                                            alert('Incorrect password!'); // Simple alert for wrong password
                                            setConfirmationPassword(''); // Clear password field
                                            return;
                                        }
                                        if (messageBoxContent.onConfirm) messageBoxContent.onConfirm();
                                        hideMessageBox();
                                    }}
                                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                                >
                                    Confirm
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={hideMessageBox}
                                className={`w-full py-2 rounded-md text-white font-semibold transition duration-150 ease-in-out ${
                                    messageBoxContent.type === 'success' ? 'bg-green-600 hover:bg-green-700' :
                                    messageBoxContent.type === 'error' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                            >
                                OK
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
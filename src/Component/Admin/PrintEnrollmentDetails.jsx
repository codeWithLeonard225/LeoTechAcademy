// src/components/PrintEnrollmentDetails.jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function PrintEnrollmentDetails() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [enrollmentDetails, setEnrollmentDetails] = useState(null);

    useEffect(() => {
        // Extract data from URL search parameters
        const details = {
            studentName: searchParams.get('studentName'),
            studentId: searchParams.get('studentId'),
            courseTitle: searchParams.get('courseTitle'),
            courseId: searchParams.get('courseId'),
            costOrPrice: searchParams.get('costOrPrice'),
            courseDuration: searchParams.get('courseDuration'),
            startDate: searchParams.get('startDate'),
            endDate: searchParams.get('endDate'),
            selectedDays: searchParams.get('selectedDays')?.split(',') || [],
            attendanceTime: searchParams.get('attendanceTime'),
            enrollmentDate: searchParams.get('enrollmentDate'),
            status: searchParams.get('status'),
            notes: searchParams.get('notes'),
        };

        // Decode URI components where necessary
        details.studentName = decodeURIComponent(details.studentName || '');
        details.courseTitle = decodeURIComponent(details.courseTitle || '');
        details.notes = decodeURIComponent(details.notes || '');
        details.courseDuration = decodeURIComponent(details.courseDuration || 'N/A');
        details.attendanceTime = decodeURIComponent(details.attendanceTime || 'N/A');
        // Ensure enrollmentDate is formatted consistently for display
        details.enrollmentDate = details.enrollmentDate ? new Date(details.enrollmentDate).toLocaleDateString() : 'N/A';


        setEnrollmentDetails(details);
    }, [searchParams]);

    const handlePrint = () => {
        if (!enrollmentDetails) {
            console.error("No enrollment details to print.");
            return;
        }

        // Generate print-friendly HTML content
        const printContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Enrollment Details - LeoTech Academy</title>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
                <style>
                    body { font-family: 'Inter', sans-serif; margin: 0; padding: 20px; color: #333; }
                    .print-container {
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 30px;
                        border: 1px solid #eee;
                        border-radius: 8px;
                        box-shadow: 0 0 15px rgba(0,0,0,0.1);
                        background-color: #fff;
                    }
                    .academy-header {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 30px;
                        padding-bottom: 15px;
                        border-bottom: 2px solid #3b82f6;
                    }
                    .academy-logo {
                        height: 60px; /* Adjust as needed */
                        margin-right: 15px;
                        border-radius: 8px;
                    }
                    .academy-info h1 {
                        font-size: 2.25rem; /* text-3xl */
                        font-weight: 700; /* font-bold */
                        color: #1f2937; /* gray-900 */
                        margin-bottom: 5px;
                    }
                    .academy-info p {
                        font-size: 0.875rem; /* text-sm */
                        color: #4b5563; /* gray-600 */
                        margin-bottom: 2px;
                    }
                    h2 {
                        font-size: 1.5rem; /* text-2xl */
                        font-weight: 600; /* font-semibold */
                        color: #1f2937; /* gray-800 */
                        margin-top: 25px;
                        margin-bottom: 15px;
                        border-bottom: 1px solid #e5e7eb;
                        padding-bottom: 8px;
                    }
                    .info-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                        gap: 15px;
                        margin-bottom: 25px;
                    }
                    .info-grid p {
                        margin: 0;
                        font-size: 0.95rem;
                        color: #374151; /* gray-700 */
                    }
                    .info-grid strong {
                        color: #1f2937; /* gray-900 */
                        display: inline-block;
                        min-width: 120px; /* Align labels */
                    }
                    .notes-section {
                        margin-top: 25px;
                        padding-top: 15px;
                        border-top: 1px solid #e5e7eb;
                    }
                    .status-badge {
                        padding: 4px 10px;
                        border-radius: 9999px; /* full rounded */
                        font-weight: 600; /* font-semibold */
                        font-size: 0.75rem; /* text-xs */
                        display: inline-block;
                        min-width: 80px;
                        text-align: center;
                    }
                    .status-active { background-color: #d1fae5; color: #065f46; } /* green-100, green-800 */
                    .status-paused { background-color: #fffbeb; color: #92400e; } /* yellow-100, yellow-800 */
                    .status-completed { background-color: #dbeafe; color: #1e40af; } /* blue-100, blue-800 */
                    .status-expired { background-color: #fee2e2; color: #991b1b; } /* red-100, red-800 */
                    .status-cancelled { background-color: #e5e7eb; color: #374151; } /* gray-100, gray-800 */

                    /* Print-specific styles */
                    @media print {
                        body { margin: 0; padding: 0; }
                        .print-container {
                            box-shadow: none;
                            border: none;
                            margin: 0;
                            padding: 10mm; /* Use mm for print */
                        }
                        .print\\:hidden {
                            display: none !important;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="print-container">
                    <div class="academy-header">
                        <img src="https://placehold.co/60x60/3b82f6/ffffff?text=LOGO" alt="LeoTech Academy Logo" class="academy-logo"/>
                        <div class="academy-info">
                            <h1>LeoTech Academy</h1>
                            <p>123 Tech Lane, Freetown, Sierra Leone</p>
                            <p>Phone: +232 78 355 416</p>
                            
                            <p>Website: www.leotech-academy.vercel.app</p>
                        </div>
                    </div>

                    <h2>Student Enrollment Details</h2>
                    <div class="info-grid">
                        <p><strong>Student Name:</strong> ${enrollmentDetails.studentName}</p>
                        <p><strong>Student ID:</strong> ${enrollmentDetails.studentId}</p>
                        <p><strong>Course Title:</strong> ${enrollmentDetails.courseTitle}</p>
                        <p><strong>Course ID:</strong> ${enrollmentDetails.courseId}</p>
                        <p><strong>Enrollment Cost:</strong> SLE ${Number(enrollmentDetails.costOrPrice).toFixed(2)}</p>
                        <p><strong>Course Duration:</strong> ${enrollmentDetails.courseDuration}</p>
                        <p><strong>Start Date:</strong> ${enrollmentDetails.startDate}</p>
                        <p><strong>End Date:</strong> ${enrollmentDetails.endDate}</p>
                        <p><strong>Days of Week:</strong> ${enrollmentDetails.selectedDays.join(', ') || 'N/A'}</p>
                        <p><strong>Attendance Time:</strong> ${enrollmentDetails.attendanceTime}</p>
                        <p><strong>Enrollment Date:</strong> ${enrollmentDetails.enrollmentDate}</p>
                        <p><strong>Status:</strong> <span class="status-badge status-${enrollmentDetails.status.toLowerCase()}">${enrollmentDetails.status}</span></p>
                    </div>

                    <div class="notes-section">
                        <h2>Additional Notes</h2>
                        <p>${enrollmentDetails.notes || 'No additional notes provided for this enrollment.'}</p>
                    </div>

                    <div class="mt-8 text-center text-gray-500 text-sm">
                        <p>Thank you for choosing LeoTech Academy!</p>
                        <p>For any payment inquiries, please contact us at the details above.</p>
                    </div>

                    <div class="mt-10 text-sm text-gray-600 border-t pt-4">
                        <div style="display: flex; justify-content: space-between; align-items: flex-end;">
                            <div>
                                <p style="font-weight: 600; color: #1f2937; margin-bottom: 20px;">LeoTech Academy</p>
                                <p>Authorized Signature: _________________________</p>
                            </div>
                            <p style="font-style: italic;">Printed on: ${new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `;

        const printWindow = window.open('', '_blank');
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    };

    if (!enrollmentDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-xl text-red-700">Loading enrollment details or no data provided...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 flex justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl border border-gray-200">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Enrollment Details Preview</h1>

                {/* Academy Header for Preview */}
                <div className="flex items-center justify-center mb-6 pb-4 border-b-2 border-blue-500">
                    <img src="https://placehold.co/60x60/3b82f6/ffffff?text=LOGO" alt="LeoTech Academy Logo" className="h-16 w-16 mr-4 rounded-lg" />
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-1">LeoTech Academy</h2>
                        <p className="text-sm text-gray-600">Zadet School Shell New Road, Freetown, Sierra Leone</p>
                        <p className="text-sm text-gray-600">Phone: +232 78 355 416 | Email: info@leotech.sl</p>
                        <p className="text-sm text-gray-600">www.leotech-academy.vercel.app</p>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Student Enrollment Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <p><strong>Student Name:</strong> {enrollmentDetails.studentName}</p>
                    <p><strong>Student ID:</strong> {enrollmentDetails.studentId}</p>
                    <p><strong>Course Title:</strong> {enrollmentDetails.courseTitle}</p>
                    <p><strong>Course ID:</strong> {enrollmentDetails.courseId}</p>
                    <p><strong>Enrollment Cost:</strong> SLE {Number(enrollmentDetails.costOrPrice).toFixed(2)}</p>
                    <p><strong>Course Duration:</strong> {enrollmentDetails.courseDuration}</p>
                    <p><strong>Start Date:</strong> {enrollmentDetails.startDate}</p>
                    <p><strong>End Date:</strong> {enrollmentDetails.endDate}</p>
                    <p><strong>Days of Week:</strong> {enrollmentDetails.selectedDays.join(', ') || 'N/A'}</p>
                    <p><strong>Attendance Time:</strong> {enrollmentDetails.attendanceTime}</p>
                    <p><strong>Enrollment Date:</strong> {enrollmentDetails.enrollmentDate}</p>
                    <p><strong>Status:</strong> <span className={`px-2 inline-flex text-sm leading-5 font-semibold rounded-full ${enrollmentDetails.status === 'Active' ? 'bg-green-100 text-green-800' :
                        enrollmentDetails.status === 'Paused' ? 'bg-yellow-100 text-yellow-800' :
                        enrollmentDetails.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                        enrollmentDetails.status === 'Expired' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                    }`}>
                        {enrollmentDetails.status}
                    </span></p>
                </div>

                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Additional Notes</h2>
                <p className="mb-6 text-gray-700">{enrollmentDetails.notes || 'No additional notes provided for this enrollment.'}</p>

                {/* This is the general thank you message, always visible */}
                <div className="mt-8 text-center text-gray-500 text-sm">
                    <p>Thank you for choosing LeoTech Academy!</p>
                    <p>For any payment inquiries, please contact us at the details above.</p>
                </div>

                <div className="flex justify-center space-x-4 mt-6 print:hidden"> {/* Hide buttons when printing */}
                    <button
                        onClick={() => navigate(-1)} // Go back to the previous page
                        className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-150 ease-in-out"
                    >
                        ← Back
                    </button>
                    <button
                        onClick={handlePrint}
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150 ease-in-out font-semibold"
                    >
                        Print
                    </button>
                </div>
            </div>
        </div>
    );
}

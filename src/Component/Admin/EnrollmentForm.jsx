// src/components/EnrollmentForm.jsx
import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../firebase'; // Adjust path as needed
import { useSearchParams, Link, useNavigate } from 'react-router-dom'; // Import useSearchParams, Link, and useNavigate

export default function EnrollmentForm() {
    const [searchParams] = useSearchParams(); // Hook to read URL query parameters
    const navigate = useNavigate(); // Hook for navigation
    

    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [enrollments, setEnrollments] = useState([]); // New state for existing enrollments
    const [formData, setFormData] = useState({
        studentId: '',
        studentName: '',
        courseId: '',
        courseTitle: '',
        costOrPrice: '',
        startDate: '',
        endDate: '',
        status: 'Active', // Default status
        notes: '',
        courseDuration: '', // Stores the string like "4 weeks"
        selectedDays: [],   // New: Array to store selected days of the week
        attendanceTime: '', // New: String for attendance time
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isUpdatingTable, setIsUpdatingTable] = useState(false); // For table loading state

    // States for editing enrollment modal
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingEnrollment, setEditingEnrollment] = useState(null); // Stores the enrollment being edited
    const [editFormData, setEditFormData] = useState({ // Form data for the modal
        studentId: '',
        studentName: '',
        courseId: '',
        courseTitle: '',
        costOrPrice: '',
        startDate: '',
        endDate: '',
        status: '',
        notes: '',
        courseDuration: '', // Stores the string like "4 weeks" in edit modal
        selectedDays: [],   // New: Array to store selected days of the week in edit modal
        attendanceTime: '', // New: String for attendance time in edit modal
    });
    const [isSavingEdit, setIsSavingEdit] = useState(false); // For modal save button loading

    // Define all possible days of the week for checkboxes
    const daysOfWeekOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // --- Message Box / Error Handling ---
    const [showMessageBox, setShowMessageBox] = useState(false);
    const [messageBoxContent, setMessageBoxContent] = useState({ title: '', body: '', type: '', onConfirm: null });

    const showMessage = (title, body, type = 'info', onConfirm = null) => {
        setMessageBoxContent({ title, body, type, onConfirm });
        setShowMessageBox(true);
        if (type !== 'confirm') {
            setTimeout(() => {
                hideMessageBox();
            }, 2000);
        }
    };

    const hideMessageBox = () => {
        setShowMessageBox(false);
        setMessageBoxContent({ title: '', body: '', type: '', onConfirm: null });
    };

    const setTimedError = (msg) => {
        setError(msg);
        setTimeout(() => {
            setError('');
        }, 2000);
    };
    // --- End Message Box / Error Handling ---

    // --- Helper function to calculate end date ---
    const calculateEndDate = (startDateStr, durationStr) => {
        if (!startDateStr || !durationStr) return '';

        // Extract the number of weeks from the duration string (e.g., "4 weeks" -> 4)
        const weeksMatch = durationStr.match(/^(\d+)\s*weeks?$/i);
        if (!weeksMatch) {
            console.warn("Could not parse duration string:", durationStr);
            return ''; // Return empty if format is unexpected
        }
        const weeksToAdd = parseInt(weeksMatch[1], 10);

        // Create a Date object from the start date string.
        // Append 'T00:00:00' to ensure it's parsed as UTC midnight to avoid timezone issues.
        const startDate = new Date(startDateStr + 'T00:00:00');
        if (isNaN(startDate.getTime())) {
            console.warn("Invalid start date provided:", startDateStr);
            return '';
        }

        // Add the calculated number of days (weeks * 7)
        startDate.setDate(startDate.getDate() + (weeksToAdd * 7));

        // Format the new date back to YYYY-MM-DD string
        const year = startDate.getFullYear();
        const month = String(startDate.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
        const day = String(startDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // --- Fetch Data Functions ---
    const fetchStudents = async () => {
        const usersCollectionRef = collection(db, 'Users');
        const usersSnapshot = await getDocs(usersCollectionRef);
        return usersSnapshot.docs.map(doc => ({
            id: doc.id,
            username: doc.data().username,
        }));
    };

    const fetchCourses = async () => {
        const coursesCollectionRef = collection(db, 'InPersonCourses');
        const coursesSnapshot = await getDocs(coursesCollectionRef);
        return coursesSnapshot.docs.map(doc => ({
            id: doc.id,
            title: doc.data().title,
            price: doc.data().price,
            duration: doc.data().duration || '', // Fetch the 'duration' field
        }));
    };

    const fetchEnrollments = async () => {
        setIsUpdatingTable(true);
        try {
            const enrollmentsCollectionRef = collection(db, 'CourseEnrollments');
            const enrollmentsSnapshot = await getDocs(enrollmentsCollectionRef);
            const enrollmentsList = enrollmentsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setEnrollments(enrollmentsList);
        } catch (err) {
            console.error("Error fetching enrollments:", err);
            setTimedError("Failed to load enrollment records.");
        } finally {
            setIsUpdatingTable(false);
        }
    };

    // --- Initial Data Fetch and URL Parameter Pre-fill ---
    useEffect(() => {
        const fetchAndPrepopulate = async () => {
            setLoading(true);
            try {
                const [studentsList, coursesList] = await Promise.all([
                    fetchStudents(),
                    fetchCourses(),
                ]);
                setStudents(studentsList);
                setCourses(coursesList);
                await fetchEnrollments();

                // Check URL parameters for pre-filling
                const studentIdParam = searchParams.get('studentId');
                const courseIdParam = searchParams.get('courseId');

                if (studentIdParam && courseIdParam) {
                    const selectedStudent = studentsList.find(s => s.id === studentIdParam);
                    const selectedCourse = coursesList.find(c => c.id === courseIdParam);

                    if (selectedStudent && selectedCourse) {
                        setFormData(prev => ({
                            ...prev,
                            studentId: studentIdParam,
                            studentName: selectedStudent.username,
                            courseId: courseIdParam,
                            courseTitle: selectedCourse.title,
                            costOrPrice: selectedCourse.price,
                            courseDuration: selectedCourse.duration,
                            // startDate and endDate will be handled by the subsequent useEffect
                            // No pre-fill for selectedDays or attendanceTime from URL, as they are specific to this form
                        }));
                    }
                }
            } catch (err) {
                console.error("Error fetching initial data or prepopulating:", err);
                setTimedError("Failed to load data or prepopulate form.");
            } finally {
                setLoading(false);
            }
        };
        fetchAndPrepopulate();
    }, [searchParams]); // Re-run if URL search params change

    // --- Effect for new enrollment form endDate calculation ---
    useEffect(() => {
        if (formData.startDate && formData.courseId) {
            const selectedCourse = courses.find(c => c.id === formData.courseId);
            if (selectedCourse && selectedCourse.duration) {
                const calculatedEndDate = calculateEndDate(formData.startDate, selectedCourse.duration);
                setFormData(prev => ({ ...prev, endDate: calculatedEndDate }));
            }
        }
    }, [formData.startDate, formData.courseId, courses]); // Re-run when startDate or courseId changes

    // --- Effect for edit modal endDate calculation ---
    useEffect(() => {
        // Only run if the edit modal is open and relevant data is available
        if (showEditModal && editFormData.startDate && editFormData.courseId) {
            const selectedCourse = courses.find(c => c.id === editFormData.courseId);
            if (selectedCourse && selectedCourse.duration) {
                const calculatedEndDate = calculateEndDate(editFormData.startDate, selectedCourse.duration);
                setEditFormData(prev => ({ ...prev, endDate: calculatedEndDate }));
            }
        }
    }, [editFormData.startDate, editFormData.courseId, courses, showEditModal]); // Re-run on relevant changes

    // --- Form Handling for New Enrollment ---
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'selectedDays') {
            // Handle multiple checkboxes for selectedDays
            let updatedDays = [...formData.selectedDays];
            if (checked) {
                if (updatedDays.length < 3) { // Limit to 3 selections
                    updatedDays.push(value);
                } else {
                    showMessage('Limit Reached', 'You can select a maximum of 3 days.', 'info');
                    return; // Prevent checking if limit reached
                }
            } else {
                updatedDays = updatedDays.filter(day => day !== value);
            }
            setFormData(prev => ({ ...prev, selectedDays: updatedDays }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));

            if (name === 'studentId') {
                const selectedStudent = students.find(s => s.id === value);
                setFormData(prev => ({
                    ...prev,
                    studentName: selectedStudent ? selectedStudent.username : '',
                }));
            } else if (name === 'courseId') {
                const selectedCourse = courses.find(c => c.id === value);
                const courseDuration = selectedCourse ? selectedCourse.duration : '';
                setFormData(prev => ({
                    ...prev,
                    courseTitle: selectedCourse ? selectedCourse.title : '',
                    costOrPrice: selectedCourse ? selectedCourse.price : '',
                    courseDuration: courseDuration,
                    // endDate will be calculated by the useEffect
                }));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        hideMessageBox();

        if (!formData.studentId || !formData.courseId || !formData.startDate || !formData.endDate || formData.costOrPrice === '') {
            setTimedError('Please fill in all required fields (Student, Course, Cost, Start/End Dates).');
            setLoading(false);
            return;
        }
        if (formData.selectedDays.length === 0) {
            setTimedError('Please select at least one day of the week.');
            setLoading(false);
            return;
        }
        if (!formData.attendanceTime) {
            setTimedError('Please enter an attendance time.');
            setLoading(false);
            return;
        }


        try {
            const enrollmentData = {
                ...formData,
                costOrPrice: Number(formData.costOrPrice),
                enrollmentDate: new Date().toISOString(),
            };

            await addDoc(collection(db, 'CourseEnrollments'), enrollmentData);
            showMessage('Enrollment Recorded', 'Student enrollment has been successfully recorded!', 'success');

            setFormData({
                studentId: '',
                studentName: '',
                courseId: '',
                courseTitle: '',
                costOrPrice: '',
                startDate: '',
                endDate: '',
                status: 'Active',
                notes: '',
                courseDuration: '',
                selectedDays: [],
                attendanceTime: '',
            });
            await fetchEnrollments(); // Re-fetch enrollments to update the table

        } catch (err) {
            console.error('Error adding enrollment:', err);
            setTimedError('Failed to record enrollment. Please try again.');
            showMessage('Error', 'Failed to record enrollment.', 'error');
        } finally {
            setLoading(false);
        }
    };

    // --- Edit/Delete Functionality for Table ---

    const handleEditClick = (enrollment) => {
        setEditingEnrollment(enrollment);
        setEditFormData({
            studentId: enrollment.studentId,
            studentName: enrollment.studentName,
            courseId: enrollment.courseId,
            courseTitle: enrollment.courseTitle,
            costOrPrice: enrollment.costOrPrice,
            startDate: enrollment.startDate,
            endDate: enrollment.endDate,
            status: enrollment.status,
            notes: enrollment.notes,
            courseDuration: enrollment.courseDuration || '',
            selectedDays: enrollment.selectedDays || [], // Populate selected days
            attendanceTime: enrollment.attendanceTime || '', // Populate attendance time
        });
        setShowEditModal(true);
    };

    const handleEditFormChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'selectedDays') {
            let updatedDays = [...editFormData.selectedDays];
            if (checked) {
                if (updatedDays.length < 3) {
                    updatedDays.push(value);
                } else {
                    showMessage('Limit Reached', 'You can select a maximum of 3 days.', 'info');
                    return;
                }
            } else {
                updatedDays = updatedDays.filter(day => day !== value);
            }
            setEditFormData(prev => ({ ...prev, selectedDays: updatedDays }));
        } else {
            setEditFormData(prev => ({ ...prev, [name]: value }));

            if (name === 'studentId') {
                const selectedStudent = students.find(s => s.id === value);
                setEditFormData(prev => ({
                    ...prev,
                    studentName: selectedStudent ? selectedStudent.username : '',
                }));
            } else if (name === 'courseId') {
                const selectedCourse = courses.find(c => c.id === value);
                const courseDuration = selectedCourse ? selectedCourse.duration : '';
                setEditFormData(prev => ({
                    ...prev,
                    courseTitle: selectedCourse ? selectedCourse.title : '',
                    costOrPrice: selectedCourse ? selectedCourse.price : '',
                    courseDuration: courseDuration,
                }));
            }
        }
    };

    const handleSaveEdit = async (e) => {
        e.preventDefault();
        setIsSavingEdit(true);
        setError(''); // Clear form-level error
        hideMessageBox(); // Hide any general messages

        if (!editFormData.studentId || !editFormData.courseId || !editFormData.startDate || !editFormData.endDate || editFormData.costOrPrice === '') {
            setTimedError('Please fill in all required fields in the edit form.');
            setIsSavingEdit(false);
            return;
        }
        if (editFormData.selectedDays.length === 0) {
            setTimedError('Please select at least one day of the week in the edit form.');
            setIsSavingEdit(false);
            return;
        }
        if (!editFormData.attendanceTime) {
            setTimedError('Please enter an attendance time in the edit form.');
            setIsSavingEdit(false);
            return;
        }

        try {
            const enrollmentRef = doc(db, 'CourseEnrollments', editingEnrollment.id);
            await updateDoc(enrollmentRef, {
                ...editFormData,
                costOrPrice: Number(editFormData.costOrPrice),
            });
            showMessage('Update Successful', 'Enrollment record updated!', 'success');
            setShowEditModal(false);
            await fetchEnrollments(); // Re-fetch to update table
        } catch (err) {
            console.error('Error updating enrollment:', err);
            setTimedError('Failed to update enrollment. Please try again.');
            showMessage('Error', 'Failed to update enrollment.', 'error');
        } finally {
            setIsSavingEdit(false);
        }
    };

    const handleDelete = async (enrollmentId) => {
        showMessage(
            "Confirm Delete",
            "Are you sure you want to delete this enrollment record? This action cannot be undone.",
            "confirm",
            async () => {
                setIsUpdatingTable(true); // Indicate table is updating
                try {
                    await deleteDoc(doc(db, 'CourseEnrollments', enrollmentId));
                    showMessage('Delete Successful', 'Enrollment record deleted!', 'success');
                    await fetchEnrollments(); // Re-fetch to update table
                } catch (err) {
                    console.error('Error deleting enrollment:', err);
                    setTimedError('Failed to delete enrollment. Please try again.');
                    showMessage('Error', 'Failed to delete enrollment.', 'error');
                } finally {
                    setIsUpdatingTable(false);
                }
            }
        );
    };

    // Function to handle printing of enrollment details - now navigates to a new page
    const handlePrint = () => {
        if (!editingEnrollment) {
            showMessage('No Enrollment Selected', 'Please select an enrollment to print its details.', 'info');
            return;
        }

        // Construct query parameters for the new print page
        const params = new URLSearchParams({
            studentName: editingEnrollment.studentName,
            studentId: editingEnrollment.studentId,
            courseTitle: editingEnrollment.courseTitle,
            courseId: editingEnrollment.courseId,
            costOrPrice: editingEnrollment.costOrPrice,
            courseDuration: editingEnrollment.courseDuration || 'N/A',
            startDate: editingEnrollment.startDate,
            endDate: editingEnrollment.endDate,
            selectedDays: editingEnrollment.selectedDays?.join(',') || '', // Join array for URL
            attendanceTime: editingEnrollment.attendanceTime || 'N/A',
            enrollmentDate: editingEnrollment.enrollmentDate,
            status: editingEnrollment.status,
            notes: editingEnrollment.notes || '',
        }).toString();

        // Navigate to the new print page
        navigate(`/print-enrollment?${params}`);
        setShowEditModal(false); // Close the edit modal after navigating
    };


    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-xl text-gray-700">Loading initial data (students, courses, enrollments)...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
                {/* New Enrollment Form */}
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-8">
                    <div className='flex items-center justify-between mb-4'>
                        <h2 className="text-2xl font-semibold text-gray-800">Record New Course Enrollment</h2>
                        <Link to="/students" className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-150 ease-in-out text-sm font-medium">
                            Go back to Dashboard
                        </Link>

                    </div>
                   
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Student Selection */}
                        <div>
                            <label htmlFor="studentId" className="block mb-1 font-medium text-gray-700">
                                Select Student <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="studentId"
                                name="studentId"
                                value={formData.studentId}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            >
                                <option value="">-- Select Student --</option>
                                {students.map(student => (
                                    <option key={student.id} value={student.id}>
                                        {student.username} ({student.id})
                                    </option>
                                ))}
                            </select>
                            {formData.studentName && (
                                <p className="text-sm text-gray-500 mt-1">Student Name: {formData.studentName}</p>
                            )}
                        </div>

                        {/* Course Selection */}
                        <div>
                            <label htmlFor="courseId" className="block mb-1 font-medium text-gray-700">
                                Select Course <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="courseId"
                                name="courseId"
                                value={formData.courseId}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            >
                                <option value="">-- Select Course --</option>
                                {courses.map(course => (
                                    <option key={course.id} value={course.id}>
                                        {course.title} ({course.id})
                                    </option>
                                ))}
                            </select>
                            {formData.courseTitle && (
                                <p className="text-sm text-gray-500 mt-1">Course Title: {formData.courseTitle}</p>
                            )}
                        </div>

                        {/* Cost/Price */}
                        <div>
                            <label htmlFor="costOrPrice" className="block mb-1 font-medium text-gray-700">
                                Cost / Price <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                id="costOrPrice"
                                name="costOrPrice"
                                value={formData.costOrPrice}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g., 250"
                                min="0"
                            />
                        </div>

                        {/* Course Duration */}
                        <div>
                            <label htmlFor="courseDuration" className="block mb-1 font-medium text-gray-700">
                                Course Duration
                            </label>
                            <input
                                type="text"
                                id="courseDuration"
                                name="courseDuration"
                                value={formData.courseDuration}
                                readOnly
                                className="w-full border border-gray-300 px-4 py-2 rounded-md bg-gray-100 cursor-not-allowed"
                                placeholder="Auto-filled"
                            />
                        </div>

                        {/* Days of Week Selection */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">
                                Days of Week (Select up to 3) <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                                {daysOfWeekOptions.map(day => (
                                    <label key={day} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="selectedDays"
                                            value={day}
                                            checked={formData.selectedDays.includes(day)}
                                            onChange={handleChange}
                                            className="form-checkbox h-4 w-4 text-blue-600 rounded"
                                        />
                                        <span className="text-gray-700">{day}</span>
                                    </label>
                                ))}
                            </div>
                            {formData.selectedDays.length > 0 && (
                                <p className="text-sm text-gray-500 mt-1">Selected: {formData.selectedDays.join(', ')}</p>
                            )}
                        </div>

                        {/* Attendance Time */}
                        <div>
                            <label htmlFor="attendanceTime" className="block mb-1 font-medium text-gray-700">
                                Attendance Time <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="attendanceTime"
                                name="attendanceTime"
                                value={formData.attendanceTime}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g., 10:00 AM, Evening"
                            />
                        </div>

                        {/* Start Date */}
                        <div>
                            <label htmlFor="startDate" className="block mb-1 font-medium text-gray-700">
                                Start Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                id="startDate"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            />
                        </div>

                        {/* End Date */}
                        <div>
                            <label htmlFor="endDate" className="block mb-1 font-medium text-gray-700">
                                End Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                id="endDate"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange} // Keep onChange to allow manual override if needed
                                required
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            />
                        </div>

                        {/* Status */}
                        <div>
                            <label htmlFor="status" className="block mb-1 font-medium text-gray-700">
                                Enrollment Status <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            >
                                <option value="Active">Active</option>
                                <option value="Paused">Paused</option>
                                <option value="Completed">Completed</option>
                                <option value="Expired">Expired</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>

                        {/* Notes */}
                        <div>
                            <label htmlFor="notes" className="block mb-1 font-medium text-gray-700">
                                Notes (Optional)
                            </label>
                            <textarea
                                id="notes"
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                rows="3"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Add any relevant notes about this enrollment..."
                            ></textarea>
                        </div>

                        {error && <p className="text-red-600 text-sm text-center mt-2">{error}</p>}

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 transition duration-150 ease-in-out font-semibold"
                            disabled={loading}
                        >
                            {loading ? 'Recording Enrollment...' : 'Record Enrollment'}
                        </button>
                    </form>
                </div>

                {/* Existing Enrollments Table */}
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Existing Enrollments</h2>
                    {isUpdatingTable ? (
                        <p className="text-center text-gray-600">Loading enrollments...</p>
                    ) : enrollments.length === 0 ? (
                        <p className="text-center text-gray-600">No enrollment records found.</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b">Student Name</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b">Course Title</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b">Cost</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b">Duration</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b">Days</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b">Time</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b">Start Date</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b">End Date</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b">Status</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {enrollments.map(enrollment => (
                                        <tr key={enrollment.id} className="hover:bg-gray-50">
                                            <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">{enrollment.studentName}</td>
                                            <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">{enrollment.courseTitle}</td>
                                            <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">SLE {Number(enrollment.costOrPrice).toFixed(2)}</td>
                                            <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">{enrollment.courseDuration || 'N/A'}</td>
                                            <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">{enrollment.selectedDays?.join(', ') || 'N/A'}</td>
                                            <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">{enrollment.attendanceTime || 'N/A'}</td>
                                            <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">{enrollment.startDate}</td>
                                            <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">{enrollment.endDate}</td>
                                            <td className="py-3 px-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${enrollment.status === 'Active' ? 'bg-green-100 text-green-800' :
                                                        enrollment.status === 'Paused' ? 'bg-yellow-100 text-yellow-800' :
                                                            enrollment.status === 'Expired' ? 'bg-red-100 text-red-800' :
                                                                'bg-gray-100 text-gray-800'
                                                    }`}>
                                                    {enrollment.status}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4 whitespace-nowrap text-sm font-medium space-x-2">
                                                <button
                                                    onClick={() => handleEditClick(enrollment)}
                                                    className="text-indigo-600 hover:text-indigo-900 focus:outline-none"
                                                    title="Edit Enrollment"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(enrollment.id)}
                                                    className="text-red-600 hover:text-red-900 focus:outline-none"
                                                    title="Delete Enrollment"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                                <Link
                                                    to={`/fees-form?enrollmentId=${enrollment.id}&studentId=${enrollment.studentId}&studentName=${encodeURIComponent(enrollment.studentName)}&courseId=${enrollment.courseId}&courseTitle=${encodeURIComponent(enrollment.courseTitle)}&costOrPrice=${enrollment.costOrPrice}`}
                                                    className="text-green-600 hover:text-green-900 focus:outline-none ml-2"
                                                    title="Record Payment"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Edit Enrollment Modal */}
            {showEditModal && editingEnrollment && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md border-t-4 border-indigo-500 max-h-[90vh] overflow-y-auto"> {/* Added max-h and overflow-y */}
                        <h3 className="text-2xl font-bold mb-6 text-center text-indigo-700">Edit Enrollment Record</h3>
                        <form onSubmit={handleSaveEdit} className="space-y-4">
                            {/* Student ID (Read-only) */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Student ID</label>
                                <input
                                    type="text"
                                    value={editFormData.studentId}
                                    readOnly
                                    className="w-full border border-gray-300 px-4 py-2 rounded-md bg-gray-100 cursor-not-allowed"
                                />
                            </div>
                            {/* Student Name (Read-only) */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Student Name</label>
                                <input
                                    type="text"
                                    value={editFormData.studentName}
                                    readOnly
                                    className="w-full border border-gray-300 px-4 py-2 rounded-md bg-gray-100 cursor-not-allowed"
                                />
                            </div>
                            {/* Course ID (Read-only) */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Course ID</label>
                                <input
                                    type="text"
                                    value={editFormData.courseId}
                                    readOnly
                                    className="w-full border border-gray-300 px-4 py-2 rounded-md bg-gray-100 cursor-not-allowed"
                                />
                            </div>
                            {/* Course Title (Read-only) */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Course Title</label>
                                <input
                                    type="text"
                                    value={editFormData.courseTitle}
                                    readOnly
                                    className="w-full border border-gray-300 px-4 py-2 rounded-md bg-gray-100 cursor-not-allowed"
                                />
                            </div>
                            {/* Cost/Price */}
                            <div>
                                <label htmlFor="editCostOrPrice" className="block mb-1 font-medium text-gray-700">Cost / Price <span className="text-red-500">*</span></label>
                                <input
                                    type="number"
                                    id="editCostOrPrice"
                                    name="costOrPrice"
                                    value={editFormData.costOrPrice}
                                    onChange={handleEditFormChange}
                                    required
                                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    min="0"
                                />
                            </div>
                            {/* Course Duration (Read-only) */}
                            <div>
                                <label htmlFor="editCourseDuration" className="block mb-1 font-medium text-gray-700">
                                    Course Duration
                                </label>
                                <input
                                    type="text"
                                    id="editCourseDuration"
                                    name="courseDuration"
                                    value={editFormData.courseDuration}
                                    readOnly
                                    className="w-full border border-gray-300 px-4 py-2 rounded-md bg-gray-100 cursor-not-allowed"
                                    placeholder="Auto-filled"
                                />
                            </div>

                            {/* Days of Week Selection (Edit Modal) */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">
                                    Days of Week (Select up to 3) <span className="text-red-500">*</span>
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                                    {daysOfWeekOptions.map(day => (
                                        <label key={day} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                name="selectedDays"
                                                value={day}
                                                checked={editFormData.selectedDays.includes(day)}
                                                onChange={handleEditFormChange}
                                                className="form-checkbox h-4 w-4 text-blue-600 rounded"
                                            />
                                            <span className="text-gray-700">{day}</span>
                                        </label>
                                    ))}
                                </div>
                                {editFormData.selectedDays.length > 0 && (
                                    <p className="text-sm text-gray-500 mt-1">Selected: {editFormData.selectedDays.join(', ')}</p>
                                )}
                            </div>

                            {/* Attendance Time (Edit Modal) */}
                            <div>
                                <label htmlFor="editAttendanceTime" className="block mb-1 font-medium text-gray-700">
                                    Attendance Time <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="editAttendanceTime"
                                    name="attendanceTime"
                                    value={editFormData.attendanceTime}
                                    onChange={handleEditFormChange}
                                    required
                                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="e.g., 10:00 AM, Evening"
                                />
                            </div>

                            {/* Start Date */}
                            <div>
                                <label htmlFor="editStartDate" className="block mb-1 font-medium text-gray-700">Start Date <span className="text-red-500">*</span></label>
                                <input
                                    type="date"
                                    id="editStartDate"
                                    name="startDate"
                                    value={editFormData.startDate}
                                    onChange={handleEditFormChange}
                                    required
                                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                />
                            </div>
                            {/* End Date */}
                            <div>
                                <label htmlFor="editEndDate" className="block mb-1 font-medium text-gray-700">End Date <span className="text-red-500">*</span></label>
                                <input
                                    type="date"
                                    id="editEndDate"
                                    name="endDate"
                                    value={editFormData.endDate}
                                    onChange={handleEditFormChange}
                                    required
                                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                />
                            </div>
                            {/* Status */}
                            <div>
                                <label htmlFor="editStatus" className="block mb-1 font-medium text-gray-700">Enrollment Status <span className="text-red-500">*</span></label>
                                <select
                                    id="editStatus"
                                    name="status"
                                    value={editFormData.status}
                                    onChange={handleEditFormChange}
                                    required
                                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                >
                                    <option value="Active">Active</option>
                                    <option value="Paused">Paused</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Expired">Expired</option>
                                    <option value="Cancelled">Cancelled</option>
                                </select>
                            </div>
                            {/* Notes */}
                            <div>
                                <label htmlFor="editNotes" className="block mb-1 font-medium text-gray-700">Notes (Optional)</label>
                                <textarea
                                    id="editNotes"
                                    name="notes"
                                    value={editFormData.notes}
                                    onChange={handleEditFormChange}
                                    rows="3"
                                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Add any relevant notes about this enrollment..."
                                ></textarea>
                            </div>

                            {error && <p className="text-red-600 text-sm text-center mt-2">{error}</p>}

                            <div className="flex justify-end space-x-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowEditModal(false)}
                                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 disabled:opacity-50 transition duration-150 ease-in-out"
                                    disabled={isSavingEdit}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 transition duration-150 ease-in-out font-semibold"
                                    disabled={isSavingEdit}
                                >
                                    {isSavingEdit ? 'Saving...' : 'Save Changes'}
                                </button>
                                <button
                                    type="button"
                                    onClick={handlePrint}
                                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 transition duration-150 ease-in-out font-semibold"
                                    disabled={isSavingEdit}
                                >
                                    Print Details
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Custom Message Box (from VerifyPayment) */}
            {showMessageBox && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className={`bg-white p-6 rounded-lg shadow-xl w-full max-w-sm border-t-4 ${messageBoxContent.type === 'success' ? 'border-green-500' :
                            messageBoxContent.type === 'error' ? 'border-red-500' :
                                messageBoxContent.type === 'confirm' ? 'border-orange-500' : 'border-blue-500'
                        }`}>
                        <h3 className={`text-lg font-bold mb-2 ${messageBoxContent.type === 'success' ? 'text-green-700' :
                                messageBoxContent.type === 'error' ? 'text-red-700' :
                                    messageBoxContent.type === 'confirm' ? 'text-orange-700' : 'text-blue-700'
                            }`}>{messageBoxContent.title}</h3>
                        <p className="text-gray-700 mb-4">{messageBoxContent.body}</p>
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
                                className={`w-full py-2 rounded-md text-white font-semibold transition duration-150 ease-in-out ${messageBoxContent.type === 'success' ? 'bg-green-600 hover:bg-green-700' :
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

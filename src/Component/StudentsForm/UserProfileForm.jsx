import React, { useState, useEffect, useCallback } from 'react';
import { db } from '../../../firebase';
import { doc, getDoc, setDoc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import CloudinaryImageUserUploader from './CloudinaryImageUserUploader';

const UserProfileForm = () => {
    // Define the initial empty state for a new profile
    const initialProfileState = {
        id: '',
        username: '',
        profilePhoto: '',
        tel: '',
        address: '',
        email: '',
        userType: 'distance', // NEW: Default to 'distance'
        enrolledCourseIds: [], // For distance learners (video lessons)
        inPersonClassIds: [], // NEW: For face-to-face learners (classes)
    };

    const [profile, setProfile] = useState(initialProfileState);
    const [userProfiles, setUserProfiles] = useState([]); // State to store all user profiles
    const [availableCourses, setAvailableCourses] = useState([]);
    const [availableClasses, setAvailableClasses] = useState([]); // NEW: State for available in-person classes
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedClass, setSelectedClass] = useState(''); // NEW: State for selected in-person class
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [addCourseLoading, setAddCourseLoading] = useState(false);
    const [addClassLoading, setAddClassLoading] = useState(false); // NEW: Loading for adding new class

    const [newCourseId, setNewCourseId] = useState('');
    const [newCourseTitle, setNewCourseTitle] = useState('');

    const [newClassId, setNewClassId] = useState(''); // NEW: State for new class ID
    const [newClassName, setNewClassName] = useState(''); // NEW: State for new class name


    // --- NEW: Function to fetch all user profiles ---
    const fetchUserProfiles = useCallback(async () => {
        setLoading(true);
        try {
            const usersCollectionRef = collection(db, 'Users');
            const querySnapshot = await getDocs(usersCollectionRef);
            const profiles = [];
            querySnapshot.forEach((doc) => {
                profiles.push({ id: doc.id, ...doc.data() });
            });
            setUserProfiles(profiles);
        } catch (error) {
            console.error('Error fetching user profiles:', error);
            toast.error('Failed to load user profiles.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
  const loadProfilesAndCourses = async () => {
    await fetchUserProfiles(); // Fetch all user profiles

    try {
      // Load courses from 'Course' collection
      const coursesSnap = await getDocs(collection(db, 'Course'));
      const courses = [];

      coursesSnap.forEach(doc => {
        courses.push({ id: doc.id, ...doc.data() });
      });

      setAvailableCourses(courses);

      // Auto-select the first course if not already selected
      if (courses.length > 0 && !selectedCourse) {
        setSelectedCourse(courses[0].id);
      }
    } catch (err) {
      console.error('Error loading courses:', err);
      toast.error('Failed to load courses.');
    }
  };

  loadProfilesAndCourses();
}, [fetchUserProfiles]); // Runs only once or when fetchUserProfiles changes


useEffect(() => {
  const loadClasses = async () => {
    try {
      // Load classes from 'Classes' collection
      const classesSnap = await getDocs(collection(db, 'Classes'));
      const classes = [];

      classesSnap.forEach(doc => {
        classes.push({ id: doc.id, ...doc.data() });
      });

      setAvailableClasses(classes);

      // Auto-select the first class if not already selected
      if (classes.length > 0 && !selectedClass) {
        setSelectedClass(classes[0].id);
      }
    } catch (err) {
      console.error('Error loading classes:', err);
      toast.error('Failed to load classes.');
    }
  };

  loadClasses();
}, [selectedClass]); // Only rerun when selectedClass changes (optional)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    // Handler for userType change
    const handleUserTypeChange = (e) => {
        const { value } = e.target;
        setProfile(prev => ({
            ...prev,
            userType: value,
            // Clear enrolled courses/classes when switching type to avoid confusion
            enrolledCourseIds: value === 'distance' ? prev.enrolledCourseIds : [],
            inPersonClassIds: value === 'in-person' ? prev.inPersonClassIds : [],
        }));
    };


    const handleAddCourse = () => {
        if (!selectedCourse) {
            toast.warn('Please select a course to add.');
            return;
        }
        if (profile.enrolledCourseIds.includes(selectedCourse)) {
            toast.info('This course is already in the enrolled list.');
            return;
        }

        setProfile(prev => ({
            ...prev,
            enrolledCourseIds: [...prev.enrolledCourseIds, selectedCourse],
        }));
        const courseTitle = availableCourses.find(c => c.id === selectedCourse)?.title || selectedCourse;
        toast.success(`"${courseTitle}" added to enrolled courses.`);
    };

   const handleRemoveCourse = (courseIdToRemove) => {
    setProfile(prev => ({
        ...prev,
        enrolledCourseIds: prev.enrolledCourseIds.filter(id => id !== courseIdToRemove),
    }));
    const courseTitle = availableCourses.find(c => c.id === courseIdToRemove)?.title || courseIdToRemove;
    toast.info(`"${courseTitle}" removed from enrolled courses.`);
};

    // NEW: Handlers for in-person classes
    const handleAddClass = () => {
        if (!selectedClass) {
            toast.warn('Please select a class to add.');
            return;
        }
        if (profile.inPersonClassIds.includes(selectedClass)) {
            toast.info('This class is already in the enrolled list.');
            return;
        }

        setProfile(prev => ({
            ...prev,
            inPersonClassIds: [...prev.inPersonClassIds, selectedClass],
        }));
        const classTitle = availableClasses.find(c => c.id === selectedClass)?.name || selectedClass; // Assuming 'name' field for classes
        toast.success(`"${classTitle}" added to enrolled classes.`);
    };

    const handleRemoveClass = (classIdToRemove) => {
        setProfile(prev => ({
            ...prev,
            inPersonClassIds: prev.inPersonClassIds.filter(id => id !== classIdToRemove),
        }));
        const classTitle = availableClasses.find(c => c.id === classIdToRemove)?.name || classIdToRemove;
        toast.info(`"${classTitle}" removed from enrolled classes.`);
    };


    const handleImageUploadSuccess = (url) => {
        setProfile(prev => ({ ...prev, profilePhoto: url }));
    };

    const handleCreateNewCourse = async () => {
        if (!newCourseId.trim()) {
            toast.error('Course ID cannot be empty.');
            return;
        }

        setAddCourseLoading(true);
        try {
            const courseDocRef = doc(db, 'Course', newCourseId.trim());
            const courseDocSnap = await getDoc(courseDocRef);

            if (courseDocSnap.exists()) {
                toast.error(`Course with ID "${newCourseId.trim()}" already exists.`);
                return;
            }

            const courseData = {
                title: newCourseTitle.trim() || `Course ${newCourseId.trim()}`,
                createdAt: new Date(),
            };

            await setDoc(courseDocRef, courseData);
            toast.success(`Course "${newCourseId.trim()}" created successfully!`);

            setAvailableCourses(prev => [...prev, { id: newCourseId.trim(), title: courseData.title }]);
            setSelectedCourse(newCourseId.trim());
            setNewCourseId('');
            setNewCourseTitle('');

        } catch (err) {
            console.error('Error creating new course:', err);
            toast.error('Failed to create new course.');
        } finally {
            setAddCourseLoading(false);
        }
    };

    // NEW: Handle Create New Class
    const handleCreateNewClass = async () => {
        if (!newClassId.trim()) {
            toast.error('Class ID cannot be empty.');
            return;
        }

        setAddClassLoading(true);
        try {
            const classDocRef = doc(db, 'Classes', newClassId.trim()); // Assuming 'Classes' collection
            const classDocSnap = await getDoc(classDocRef);

            if (classDocSnap.exists()) {
                toast.error(`Class with ID "${newClassId.trim()}" already exists.`);
                return;
            }

            const classData = {
                name: newClassName.trim() || `Class ${newClassId.trim()}`,
                createdAt: new Date(),
                // Add other default fields for a class if needed (e.g., schedule, room)
                schedule: 'TBD',
                room: 'TBD'
            };

            await setDoc(classDocRef, classData);
            toast.success(`Class "${newClassId.trim()}" created successfully!`);

            setAvailableClasses(prev => [...prev, { id: newClassId.trim(), name: classData.name }]);
            setSelectedClass(newClassId.trim());
            setNewClassId('');
            setNewClassName('');

        } catch (err) {
            console.error('Error creating new class:', err);
            toast.error('Failed to create new class.');
        } finally {
            setAddClassLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            if (!profile.id) {
                toast.error('Student ID is required to save the profile.');
                setSaving(false);
                return;
            }

            const userDocRef = doc(db, 'Users', profile.id);
            await setDoc(userDocRef, profile, { merge: true }); // Merge ensures existing fields are kept
            toast.success('Profile saved successfully!');

            setProfile(initialProfileState); // Clear form after successful save
            setSelectedCourse('');
            setSelectedClass(''); // Clear selected class
            setNewCourseId('');
            setNewCourseTitle('');
            setNewClassId(''); // Clear new class fields
            setNewClassName(''); // Clear new class fields
            await fetchUserProfiles(); // Re-fetch profiles to update the table

        } catch (err) {
            console.error('Error saving profile:', err);
            toast.error('Failed to save profile.');
        } finally {
            setSaving(false);
        }
    };

    // --- NEW: Function to load profile into form for editing ---
    const handleEditProfile = (userToEdit) => {
        setProfile({
            id: userToEdit.id,
            username: userToEdit.username || '',
            profilePhoto: userToEdit.profilePhoto || '',
            tel: userToEdit.tel || '',
            address: userToEdit.address || '',
            email: userToEdit.email || '',
            userType: userToEdit.userType || 'distance', // Load existing userType, default to 'distance'
            enrolledCourseIds: userToEdit.enrolledCourseIds || [],
            inPersonClassIds: userToEdit.inPersonClassIds || [], // Load existing inPersonClassIds
        });
        toast.info(`Editing profile for ${userToEdit.username || userToEdit.id}`);
    };

    // --- NEW: Function to delete a profile ---
    const handleDeleteProfile = async (userId) => {
        if (window.confirm(`Are you sure you want to delete profile for ID: ${userId}? This cannot be undone.`)) {
            setLoading(true); // Indicate loading while deleting
            try {
                const userDocRef = doc(db, 'Users', userId);
                await deleteDoc(userDocRef);
                toast.success(`Profile ${userId} deleted successfully!`);
                await fetchUserProfiles(); // Re-fetch profiles to update the table
                if (profile.id === userId) {
                    setProfile(initialProfileState); // Clear form if current user was deleted
                }
            } catch (error) {
                console.error('Error deleting profile:', error);
                toast.error(`Failed to delete profile ${userId}.`);
            } finally {
                setLoading(false);
            }
        }
    };

    if (loading) {
        return <div className="text-center py-20 text-indigo-700 text-xl">Loading data...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-10 mb-20">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">User Profile Management</h2>

            {/* User Profile Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Create/Update Profile</h3>

                {/* ID - This is now the source of your document ID */}
                <div>
                    <label htmlFor="id" className="block text-sm font-medium text-gray-700">Student ID:</label>
                    <input type="text" id="id" name="id" value={profile.id} onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="e.g., STD20250001"
                        required
                        disabled={profile.id !== '' && userProfiles.some(u => u.id === profile.id)} // Disable ID if editing existing
                    />
                    {profile.id !== '' && userProfiles.some(u => u.id === profile.id) && (
                        <p className="mt-1 text-sm text-gray-500">
                            (ID is disabled for editing existing profiles. To create a new one, clear the form.)
                        </p>
                    )}
                </div>

                {/* User Type Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">User Type:</label>
                    <div className="mt-1 flex space-x-4">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="userType"
                                value="distance"
                                checked={profile.userType === 'distance'}
                                onChange={handleUserTypeChange}
                                className="form-radio text-indigo-600"
                            />
                            <span className="ml-2 text-gray-800">Distance Learner (Online Courses)</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="userType"
                                value="in-person"
                                checked={profile.userType === 'in-person'}
                                onChange={handleUserTypeChange}
                                className="form-radio text-indigo-600"
                            />
                            <span className="ml-2 text-gray-800">In-Person Student (Face-to-Face Classes)</span>
                        </label>
                    </div>
                </div>

                {/* Other Profile Fields */}
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                    <input type="text" id="username" name="username" value={profile.username} onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email" id="email" name="email" value={profile.email} onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                </div>

                <div>
                    <label htmlFor="tel" className="block text-sm font-medium text-gray-700">Phone Number:</label>
                    <input type="tel" id="tel" name="tel" value={profile.tel} onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="+232 7X XXXXXX" />
                </div>

                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
                    <textarea id="address" name="address" value={profile.address} onChange={handleChange} rows="3"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>

                {/* Profile Photo */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Profile Photo:</label>
                    <CloudinaryImageUserUploader
                        onUploadSuccess={handleImageUploadSuccess}
                        currentImageUrl={profile.profilePhoto}
                    />
                    {profile.profilePhoto && (
                        <div className="mt-4 text-center">
                            <p className="text-sm text-gray-600 mb-2">Current Photo:</p>
                            <img src={profile.profilePhoto} alt="Profile Preview"
                                className="max-h-32 object-contain rounded-full mx-auto shadow-md" />
                        </div>
                    )}
                </div>

                {/* Conditional sections based on userType */}
                {profile.userType === 'distance' && (
                    <>
                        {/* Create New Course Section */}
                        <div className="border border-indigo-200 p-4 rounded-md bg-indigo-50">
                            <h3 className="text-lg font-bold text-indigo-700 mb-4">Quick Add New Online Course (to Database)</h3>
                            <div className="space-y-3">
                                <div>
                                    <label htmlFor="newCourseId" className="block text-sm font-medium text-gray-700">New Course ID:</label>
                                    <input
                                        type="text"
                                        id="newCourseId"
                                        value={newCourseId}
                                        onChange={(e) => setNewCourseId(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="e.g., react-fundamentals"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="newCourseTitle" className="block text-sm font-medium text-gray-700">Course Title (Optional):</label>
                                    <input
                                        type="text"
                                        id="newCourseTitle"
                                        value={newCourseTitle}
                                        onChange={(e) => setNewCourseTitle(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="e.g., React Fundamentals"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={handleCreateNewCourse}
                                    disabled={addCourseLoading || !newCourseId.trim()}
                                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-colors duration-200"
                                >
                                    {addCourseLoading ? 'Creating Course...' : 'Create Course in Database'}
                                </button>
                            </div>
                        </div>
                        <hr className="my-6 border-gray-200" />

                        {/* Enrolled Courses Dropdown (for Distance Learners) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Enroll in an Online Course:</label>
                            <div className="flex gap-4 items-center">
                                <select
                                    className="flex-1 border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    value={selectedCourse}
                                    onChange={(e) => setSelectedCourse(e.target.value)}
                                >
                                    <option value="">-- Select a Course --</option>
                                    {availableCourses.map(course => (
                                        <option key={course.id} value={course.id}>{course.title || course.id}</option>
                                    ))}
                                </select>
                                <button
                                    type="button"
                                    onClick={handleAddCourse}
                                    disabled={!selectedCourse}
                                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Add Course
                                </button>
                            </div>

                            {/* Display selected course list */}
                            {profile.enrolledCourseIds.length > 0 && (
                                <div className="mt-3 p-3 border border-gray-200 rounded-md bg-gray-50">
                                    <h4 className="text-sm font-medium text-gray-700 mb-2">Currently Enrolled Online Courses:</h4>
                                    <ul className="space-y-2">
                                        {profile.enrolledCourseIds.map((id) => {
                                            const enrolledCourse = availableCourses.find(c => c.id === id);
                                            return (
                                                <li key={id} className="flex items-center justify-between bg-white p-2 rounded shadow-sm">
                                                    <span>{enrolledCourse ? `${enrolledCourse.title} (${id})` : id}</span>
                                                    <button type="button" onClick={() => handleRemoveCourse(id)}
                                                        className="text-red-500 hover:text-red-700 text-sm font-medium">
                                                        Remove
                                                    </button>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </>
                )}

                {profile.userType === 'in-person' && (
                    <>
                        {/* NEW: Create New Class Section */}
                        <div className="border border-purple-200 p-4 rounded-md bg-purple-50">
                            <h3 className="text-lg font-bold text-purple-700 mb-4">Quick Add New In-Person Class (to Database)</h3>
                            <div className="space-y-3">
                                <div>
                                    <label htmlFor="newClassId" className="block text-sm font-medium text-gray-700">New Class ID:</label>
                                    <input
                                        type="text"
                                        id="newClassId"
                                        value={newClassId}
                                        onChange={(e) => setNewClassId(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="e.g., physics-fall-2025"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="newClassName" className="block text-sm font-medium text-gray-700">Class Name (Optional):</label>
                                    <input
                                        type="text"
                                        id="newClassName"
                                        value={newClassName}
                                        onChange={(e) => setNewClassName(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="e.g., Introduction to Physics I"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={handleCreateNewClass}
                                    disabled={addClassLoading || !newClassId.trim()}
                                    className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-colors duration-200"
                                >
                                    {addClassLoading ? 'Creating Class...' : 'Create Class in Database'}
                                </button>
                            </div>
                        </div>
                        <hr className="my-6 border-gray-200" />

                        {/* Enrolled Classes Dropdown (for In-Person Learners) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Enroll in an In-Person Class:</label>
                            <div className="flex gap-4 items-center">
                                <select
                                    className="flex-1 border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    value={selectedClass}
                                    onChange={(e) => setSelectedClass(e.target.value)}
                                >
                                    <option value="">-- Select a Class --</option>
                                    {availableClasses.map(classItem => (
                                        <option key={classItem.id} value={classItem.id}>{classItem.name || classItem.id}</option>
                                    ))}
                                </select>
                                <button
                                    type="button"
                                    onClick={handleAddClass}
                                    disabled={!selectedClass}
                                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Add Class
                                </button>
                            </div>

                            {/* Display selected class list */}
                            {profile.inPersonClassIds.length > 0 && (
                                <div className="mt-3 p-3 border border-gray-200 rounded-md bg-gray-50">
                                    <h4 className="text-sm font-medium text-gray-700 mb-2">Currently Enrolled In-Person Classes:</h4>
                                    <ul className="space-y-2">
                                        {profile.inPersonClassIds.map((id) => {
                                            const enrolledClass = availableClasses.find(c => c.id === id);
                                            return (
                                                <li key={id} className="flex items-center justify-between bg-white p-2 rounded shadow-sm">
                                                    <span>{enrolledClass ? `${enrolledClass.name} (${id})` : id}</span>
                                                    <button type="button" onClick={() => handleRemoveClass(id)}
                                                        className="text-red-500 hover:text-red-700 text-sm font-medium">
                                                        Remove
                                                    </button>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </>
                )}


                {/* Form Action Buttons */}
                <div className="mt-8 flex gap-4">
                    <button type="submit" disabled={saving}
                        className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700
                        disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg transition-colors duration-200">
                        {saving ? 'Saving Profile...' : 'Save Profile'}
                    </button>
                    <button type="button" onClick={() => setProfile(initialProfileState)}
                        className="flex-none bg-gray-500 text-white py-3 px-6 rounded-md hover:bg-gray-600
                        disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg transition-colors duration-200">
                        Clear Form
                    </button>
                </div>
            </form>

            ---

            {/* User Profiles Table */}
            <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Existing User Profiles</h3>
                {userProfiles.length === 0 ? (
                    <p className="text-gray-600 text-center">No user profiles found. Create one above!</p>
                ) : (
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                {/* Corrected: No whitespace between <tr> and <th>, or between <th> tags */}
                                <tr><th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th><th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th><th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th><th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th><th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrollments</th><th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th></tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {userProfiles.map((user) => (
                                    <tr key={user.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {user.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {user.username}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                                            {user.userType || 'N/A'} {/* Display userType */}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {user.userType === 'distance' && user.enrolledCourseIds && user.enrolledCourseIds.length > 0
                                                ? user.enrolledCourseIds.map(courseId => {
                                                    const course = availableCourses.find(c => c.id === courseId);
                                                    return course ? course.title : courseId;
                                                }).join(', ')
                                                : user.userType === 'in-person' && user.inPersonClassIds && user.inPersonClassIds.length > 0
                                                    ? user.inPersonClassIds.map(classId => {
                                                        const classItem = availableClasses.find(c => c.id === classId);
                                                        return classItem ? classItem.name : classId;
                                                    }).join(', ')
                                                    : 'None'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                            <button
                                                onClick={() => handleEditProfile(user)}
                                                className="text-indigo-600 hover:text-indigo-900 mr-3"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteProfile(user.id)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <ToastContainer position="bottom-right" autoClose={5000} />
        </div>
    );
};

export default UserProfileForm;
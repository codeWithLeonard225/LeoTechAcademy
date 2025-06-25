import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // We will remove axios as per your request
import { toast } from 'react-toastify'; // For notifications

// IMPORTANT: Replace these with your actual Cloudinary credentials
// You can find your Cloud Name in your Cloudinary Dashboard.
// Your upload preset should be configured as an 'unsigned' preset for client-side uploads.
const CLOUD_NAME = "dyt1xzrcv"; // Use the specific Cloud Name you provided
const UPLOAD_PRESET = "firstTime"; // Use the specific Upload Preset you provided

const CloudinaryImageUploader = ({ onUploadSuccess, currentImageUrl }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(currentImageUrl); // To display the current image from props
  const [uploadProgress, setUploadProgress] = useState(0); // For the progress bar
  const [error, setError] = useState(null); // For handling upload errors

  // Effect to update the displayed image URL if the parent component passes a new one
  useEffect(() => {
    setImageUrl(currentImageUrl);
  }, [currentImageUrl]);

  // Handles when a new file is selected by the user
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) { // Validate file type for images
        setSelectedFile(file);
        setImageUrl(null); // Clear previous image preview when a new file is chosen
        setUploadProgress(0); // Reset progress bar
        setError(null); // Clear previous errors
      } else {
        setSelectedFile(null);
        setError('Please select a valid image file (e.g., .jpg, .png, .gif).');
        toast.error('Invalid file type. Please select an image.');
      }
    }
  };

  // Handles the actual upload process to Cloudinary using XMLHttpRequest
  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error('Please select an image file first.');
      return;
    }

    // Basic validation for Cloudinary credentials
    if (!CLOUD_NAME || CLOUD_NAME === "YOUR_CLOUD_NAME" || !UPLOAD_PRESET || UPLOAD_PRESET === "YOUR_UNSIGNED_UPLOAD_PRESET") {
        toast.error('Cloudinary credentials are not set up. Please configure CLOUD_NAME and UPLOAD_PRESET in CloudinaryImageUserUploader.js');
        console.error('Cloudinary Configuration Error: Please set your CLOUD_NAME and UPLOAD_PRESET.');
        return;
    }

    setUploading(true);
    setUploadProgress(0);
    setError(null); // Clear previous errors

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', UPLOAD_PRESET);
    formData.append('folder', 'user_profile_images'); // Specific folder for user profiles

    const xhr = new XMLHttpRequest();

    // Listen for upload progress events
    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) {
        const percentCompleted = Math.round((e.loaded * 100) / e.total);
        setUploadProgress(percentCompleted);
      }
    });

    // Handle the response when the upload is complete
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) { // Request is complete
        setUploading(false);
        if (xhr.status === 200) { // Success
          const response = JSON.parse(xhr.responseText);
          const secureUrl = response.secure_url;
          // const publicId = response.public_id; // Public ID might be useful but not strictly needed for this component
          setImageUrl(secureUrl); // Set the newly uploaded image URL for display
          onUploadSuccess(secureUrl); // Call the parent component's success handler, passing only the URL
          setSelectedFile(null); // Clear the file input after successful upload
          toast.success('Image uploaded successfully!');
        } else { // Error
          let errorMessage = 'Image upload failed.';
          try {
            const errorResponse = JSON.parse(xhr.responseText);
            if (errorResponse && errorResponse.error && errorResponse.error.message) {
              errorMessage = `Upload failed: ${errorResponse.error.message}`;
            }
          } catch (e) { /* not JSON */ }
          setError(errorMessage);
          toast.error(errorMessage);
        }
        setUploadProgress(0); // Reset progress after completion or error
      }
    };

    // Open and send the XMLHttpRequest
    xhr.open('POST', `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`);
    xhr.send(formData);
  };

  return (
    <div className="border border-dashed border-gray-300 p-4 rounded-md bg-gray-50">
      <input
        type="file"
        accept="image/*" // Accept all image types
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
      />
      {selectedFile && (
        <p className="text-sm text-gray-600 mt-2">Selected: {selectedFile.name}</p>
      )}
      <button
        type="button"
        onClick={handleUpload}
        disabled={!selectedFile || uploading} // Disable button if no file selected or already uploading
        className="mt-3 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
      >
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>

      {uploading && (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${uploadProgress}%` }}
          ></div>
          <span className="text-xs text-gray-600 mt-1 block text-right">{uploadProgress}%</span>
        </div>
      )}

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>} {/* Display error message */}

      {imageUrl && !selectedFile && ( // Display uploaded image URL if no new file is selected
        <p className="text-sm text-gray-600 mt-2">
          Uploaded: <a href={imageUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-all">{imageUrl.substring(0, 40)}...</a>
        </p>
      )}
    </div>
  );
};

export default CloudinaryImageUploader;
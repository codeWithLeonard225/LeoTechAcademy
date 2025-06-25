// src/components/CloudinaryAssignmentUploader.js
import React, { useState, useEffect } from 'react'; // Import useEffect
import { toast } from 'react-toastify';

const CLOUD_NAME = "dyt1xzrcv"; // Your Cloudinary Cloud Name
const UPLOAD_PRESET = "firstTime"; // Your Cloudinary Upload Preset (must allow raw uploads for PDFs)

const CloudinaryAssignmentUploader = ({ onUploadSuccess, currentUrl }) => { // Add currentUrl prop
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [uploadedDisplayUrl, setUploadedDisplayUrl] = useState(currentUrl || ''); // Internal state for display

  // Sync internal display URL with parent's currentUrl prop
  useEffect(() => {
    setUploadedDisplayUrl(currentUrl || '');
  }, [currentUrl]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError(null);
      setProgress(0);
      setUploadedDisplayUrl(''); // Clear display URL when a new file is selected
      uploadFile(selectedFile); // Auto-upload on selection
    } else {
      setFile(null);
      setError('Please select a valid PDF file.');
      toast.error('Invalid file type. Please select a PDF.');
    }
  };

  const uploadFile = async (selectedFile) => {
    if (!selectedFile) return;

    if (!CLOUD_NAME || !UPLOAD_PRESET) {
      setError('Cloudinary configuration missing. Check environment variables.');
      toast.error('Cloudinary configuration error!');
      return;
    }

    setUploading(true);
    setProgress(0);
    setError(null);

    const resourceType = 'raw'; // For PDFs use 'raw' resource type on Cloudinary

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', UPLOAD_PRESET);
    formData.append('folder', 'Paidcourse_assignments'); // Optional: specific folder in Cloudinary

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) {
        const percent = Math.round((e.loaded * 100) / e.total);
        setProgress(percent);
      }
    });

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        setUploading(false);
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          const secureUrl = response.secure_url;
          const publicId = response.public_id;
          onUploadSuccess(secureUrl, publicId);
          setFile(null); // Clear selected file from internal state
          setUploadedDisplayUrl(secureUrl); // Set the display URL for this component
          toast.success('PDF uploaded successfully!');
        } else {
          let errorMessage = 'PDF upload failed.';
          try {
            const errorResponse = JSON.parse(xhr.responseText);
            if (errorResponse && errorResponse.error && errorResponse.error.message) {
              errorMessage = `PDF upload failed: ${errorResponse.error.message}`;
            }
          } catch (e) { /* not JSON */ }
          setError(errorMessage);
          toast.error(errorMessage);
        }
      }
    };

    xhr.open('POST', `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${resourceType}/upload`);
    xhr.send(formData);
  };

  return (
    <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
      {uploadedDisplayUrl ? (
        // Display the uploaded file and a "Change/Remove" button
        <div>
          <p className="text-sm text-gray-700 mb-2">Assignment uploaded:</p>
          <a href={uploadedDisplayUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all block mb-2">
            {uploadedDisplayUrl.split('/').pop()} {/* Display just the filename for brevity */}
          </a>
          <button
            type="button"
            onClick={() => {
              setUploadedDisplayUrl(''); // Clear the display URL
              onUploadSuccess('', ''); // Inform parent that URL is cleared
            }}
            className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
          >
            Change/Remove Assignment
          </button>
        </div>
      ) : (
        // Display the file input for upload
        <label htmlFor="assignment-upload-input" className="cursor-pointer text-indigo-600 hover:text-indigo-800 font-medium">
          {file && uploading ? `Uploading ${file.name}...` : 'Click to select PDF assignment'}
          <input
            id="assignment-upload-input"
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            disabled={uploading}
            className="hidden"
          />
        </label>
      )}
      {uploading && (
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className="bg-indigo-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {/* Show "Upload complete!" only if not uploading and a file was successfully uploaded to display */}
      {!uploading && !error && uploadedDisplayUrl && <p className="text-green-600 text-sm mt-2">Upload complete!</p>}
    </div>
  );
};

export default CloudinaryAssignmentUploader;
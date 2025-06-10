// src/components/CloudinaryVideoUploader.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CLOUD_NAME = "dyt1xzrcv"; // Your Cloudinary Cloud Name
const UPLOAD_PRESET = "firstTime"; // Your Cloudinary Upload Preset (must allow videos)

const CloudinaryVideoUploader = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && (selectedFile.type.startsWith('video/') || selectedFile.type.startsWith('audio/'))) {
      setFile(selectedFile);
      setError(null);
      setProgress(0);
      uploadFile(selectedFile); // Auto-upload on selection
    } else {
      setFile(null);
      setError('Please select a valid video or audio file.');
      toast.error('Invalid file type. Please select a video or audio.');
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

    const resourceType = selectedFile.type.startsWith('video/') ? 'video' : 'raw'; // 'raw' for audio
    
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', UPLOAD_PRESET);
    formData.append('folder', 'Paidcourse_media'); // Optional: specific folder in Cloudinary

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
          onUploadSuccess(secureUrl, publicId); // Pass URL and publicId back to parent
          setFile(null); // Clear selected file
          toast.success(`${resourceType === 'video' ? 'Video' : 'Audio'} uploaded successfully!`);
        } else {
          let errorMessage = `${resourceType === 'video' ? 'Video' : 'Audio'} upload failed.`;
          try {
            const errorResponse = JSON.parse(xhr.responseText);
            if (errorResponse && errorResponse.error && errorResponse.error.message) {
              errorMessage = `${resourceType === 'video' ? 'Video' : 'Audio'} upload failed: ${errorResponse.error.message}`;
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
      <label htmlFor="media-upload-input" className="cursor-pointer text-indigo-600 hover:text-indigo-800 font-medium">
        {file ? `Uploading ${file.name}...` : 'Click to select video/audio'}
        <input
          id="media-upload-input"
          type="file"
          accept="video/*,audio/*" // Accepts all video and audio formats
          onChange={handleFileChange}
          disabled={uploading}
          className="hidden"
        />
      </label>
      {uploading && (
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className="bg-indigo-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {!uploading && file && !error && <p className="text-green-600 text-sm mt-2">Upload complete!</p>}
    </div>
  );
};

export default CloudinaryVideoUploader;
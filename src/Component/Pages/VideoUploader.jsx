import React, { useState } from "react";
// Import Firebase Firestore functions
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// Adjust this path to where your firebaseConfig.js is located
import { db } from "../../../firebase";

const CLOUD_NAME = "dyt1xzrcv"; // Your Cloudinary Cloud Name
const UPLOAD_PRESET = "firstTime"; // Your Cloudinary Upload Preset (must allow videos)

const VideoUploader = () => {
  const [file, setFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [publicId, setPublicId] = useState(""); // To store Cloudinary public_id
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message

  const handleChange = (e) => {
    // Clear previous states when a new file is selected
    setFile(e.target.files[0]);
    setVideoUrl("");
    setPublicId("");
    setError("");
    setSuccessMessage("");
    setProgress(0);
  };

  const handleVideoUpload = async () => {
    if (!file) {
      setError("Please select a video file.");
      return;
    }

    setUploading(true);
    setError("");
    setSuccessMessage(""); // Clear success message on new upload attempt
    setProgress(0);

    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", UPLOAD_PRESET);
    uploadData.append("folder", "video_testing"); // Cloudinary folder name

    const xhr = new XMLHttpRequest();

    // Event listener for upload progress
    xhr.upload.addEventListener("progress", (e) => {
      if (e.lengthComputable) {
        const percent = Math.round((e.loaded * 100) / e.total);
        setProgress(percent);
      }
    });

    // Event listener for when the request completes (success or failure)
    xhr.onreadystatechange = async () => { // Made async to use await for Firebase
      if (xhr.readyState === 4) { // Request finished and response is ready
        setUploading(false);
        if (xhr.status === 200) {
          try {
            const response = JSON.parse(xhr.responseText);
            const uploadedSecureUrl = response.secure_url;
            const uploadedPublicId = response.public_id;

            setVideoUrl(uploadedSecureUrl);
            setPublicId(uploadedPublicId);

            // --- Store URL and Public ID in Firebase Firestore ---
            try {
              const docRef = await addDoc(collection(db, "uploadedVideos"), {
                fileName: file.name,
                cloudinaryUrl: uploadedSecureUrl,
                cloudinaryPublicId: uploadedPublicId,
                uploadDate: serverTimestamp(), // Firebase timestamp
                // Add any other metadata you need, e.g., userId, courseId
              });
              setSuccessMessage(`Video uploaded and saved to Firebase! Document ID: ${docRef.id}`);
              console.log("Document written with ID: ", docRef.id);
            } catch (firebaseError) {
              console.error("Error writing document to Firebase: ", firebaseError);
              setError("Video uploaded to Cloudinary, but failed to save URL to Firebase.");
            }
            // --- End Firebase Storage ---

          } catch (jsonError) {
            console.error("Failed to parse Cloudinary response:", jsonError);
            setError("Upload successful, but failed to process response.");
          }
        } else {
          // Handle HTTP errors from Cloudinary
          let errorMessage = "Upload failed. Please try again.";
          try {
            const errorResponse = JSON.parse(xhr.responseText);
            if (errorResponse && errorResponse.error && errorResponse.error.message) {
              errorMessage = `Upload failed: ${errorResponse.error.message}`;
            }
          } catch (parseError) {
            // Ignore if response is not JSON
          }
          setError(errorMessage);
          setProgress(0);
        }
      }
    };

    // Open and send the XHR request to Cloudinary
    xhr.open(
      "POST",
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`
    );
    xhr.send(uploadData);
  };

  // Helper to generate optimized Cloudinary URL for playback
  const getOptimizedVideoUrl = (pId) => {
    if (!pId) return '';
    // f_auto: automatic format, q_auto: automatic quality
    return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto/${pId}.mp4`;
  };

  // Helper to generate a thumbnail poster for the video
  const getVideoThumbnailUrl = (pId) => {
    if (!pId) return '';
    // f_jpg: format as JPG, q_auto: auto quality, w_600: width, c_fill: crop to fill
    return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_jpg,q_auto,w_600,h_300,c_fill/${pId}.jpg`;
  };


  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Cloudinary Video Upload</h2>

      <div className="mb-4">
        <label htmlFor="video-file-input" className="block text-gray-700 text-sm font-bold mb-2">
          Select Video File:
        </label>
        <input
          id="video-file-input"
          type="file"
          accept="video/*"
          onChange={handleChange}
          className="mb-4 w-full p-2 border border-gray-300 rounded-md
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-violet-50 file:text-violet-700
                     hover:file:bg-violet-100"
        />
        {file && (
          <p className="text-sm text-gray-600 mt-2">
            Selected: <span className="font-medium">{file.name}</span> ({(file.size / (1024 * 1024)).toFixed(2)} MB)
          </p>
        )}
      </div>

      <button
        onClick={handleVideoUpload}
        disabled={uploading || !file}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700
                   disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-colors duration-200"
      >
        {uploading ? `Uploading... (${progress}%)` : "Upload Video"}
      </button>

      {/* Progress Bar */}
      {uploading && (
        <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="mt-4 text-red-600 font-semibold text-center bg-red-50 p-2 rounded">{error}</p>
      )}

      {/* Success Message */}
      {successMessage && (
        <p className="mt-4 text-green-700 font-semibold text-center bg-green-50 p-2 rounded">{successMessage}</p>
      )}

      {/* Video Playback Section */}
      {videoUrl && publicId && (
        <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Preview:</h3>
          <video
            width="100%"
            controls
            className="rounded-lg shadow-md mb-3"
            src={getOptimizedVideoUrl(publicId)}
            poster={getVideoThumbnailUrl(publicId)} // Use generated thumbnail
          >
            Your browser does not support the video tag.
          </video>
          <p className="text-sm text-gray-700 break-words">
            **Cloudinary URL:** <span className="font-mono text-xs bg-gray-100 p-1 rounded-sm">{getOptimizedVideoUrl(publicId)}</span>
          </p>
          <p className="text-sm text-gray-700 break-words mt-1">
            **Public ID:** <span className="font-mono text-xs bg-gray-100 p-1 rounded-sm">{publicId}</span>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            This URL is also stored in Firebase.
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoUploader;
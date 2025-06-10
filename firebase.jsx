// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8XaBb-cuQpZTzyFjtGXvbP0hW0tNKSZU",
  authDomain: "thanks-6450f.firebaseapp.com",
  projectId: "thanks-6450f",
  storageBucket: "thanks-6450f.firebasestorage.app",
  messagingSenderId: "548379185190",
  appId: "1:548379185190:web:e68941ff29eebd89a296e7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };




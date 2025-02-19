// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVd3WtJlJ_euP2rOWguqc-NEdgrzXVu4Q",
  authDomain: "arewafile.firebaseapp.com",
  projectId: "arewafile",
  storageBucket: "arewafile.firebasestorage.app",
  messagingSenderId: "1094337799384",
  appId: "1:1094337799384:web:f5f1490fe945f80beca3ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

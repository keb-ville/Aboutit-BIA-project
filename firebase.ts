import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // storageBucket: "aboutit-project.firebasestorage.app",
  // messagingSenderId: "646405074352",
  // appId: "1:646405074352:web:1337af873c449719cd7a75",
  // measurementId: "G-T7R1731LN5",
};

console.log(
  "Firebase Project ID:",
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
);

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

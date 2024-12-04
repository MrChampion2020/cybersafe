// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyADufEXEfKqxJllkVs1u9kKB162UboteCA",
  
//   // import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "blog-44617.firebaseapp.com",
//   // import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: "blog-44617",
//   // import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: "blog-44617.firebasestorage.app",
//   // import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId:"420219573817",
//   //  import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: "1:420219573817:web:f583a111b4ede654e81fe8",
//   // import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: "G-DNZP7GT1K6"
//   // import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";

// Firebase configuration (ensure the values are correct)
const firebaseConfig = {
  apiKey: "AIzaSyADufEXEfKqxJllkVs1u9kKB162UboteCA",
  authDomain: "blog-44617.firebaseapp.com",
  projectId: "blog-44617",
  storageBucket: "blog-44617.appspot.com",  // Corrected
  messagingSenderId: "420219573817",
  appId: "1:420219573817:web:f583a111b4ede654e81fe8",
  measurementId: "G-DNZP7GT1K6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

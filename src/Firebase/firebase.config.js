// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDQ0Htzmxcj5DZ_je1QBF4hCLqrtoc7Bfk",
//   authDomain: "assignment-ten-9a4b3.firebaseapp.com",
//   projectId: "assignment-ten-9a4b3",
//   storageBucket: "assignment-ten-9a4b3.firebasestorage.app",
//   messagingSenderId: "283618575003",
//   appId: "1:283618575003:web:3b678ae2f3e5d3ab1ebc3e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // এটা অ্যাড করো

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ0Htzmxcj5DZ_je1QBF4hCLqrtoc7Bfk",
  authDomain: "assignment-ten-9a4b3.firebaseapp.com",
  projectId: "assignment-ten-9a4b3",
  storageBucket: "assignment-ten-9a4b3.firebasestorage.app",
  messagingSenderId: "283618575003",
  appId: "1:283618575003:web:3b678ae2f3e5d3ab1ebc3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // এটা যোগ করো

export { app, auth }; // auth এখান থেকে এক্সপোর্ট করো

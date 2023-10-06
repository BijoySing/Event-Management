// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyEffDBlfqAG8r9ywQvRhsTNTca1_JhAs",
  authDomain: "event-management-a01cf.firebaseapp.com",
  projectId: "event-management-a01cf",
  storageBucket: "event-management-a01cf.appspot.com",
  messagingSenderId: "115213390509",
  appId: "1:115213390509:web:10de23c696e17503146c24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
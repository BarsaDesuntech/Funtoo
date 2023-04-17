// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVb5cgLt-U6UzEVhSHYS-hq_Esp--FkSk",
  authDomain: "funtoo-5f034.firebaseapp.com",
  databaseURL: "https://funtoo-5f034-default-rtdb.firebaseio.com",
  projectId: "funtoo-5f034",
  storageBucket: "funtoo-5f034.appspot.com",
  messagingSenderId: "96297155563",
  appId: "1:96297155563:web:39a93032b9195e1c6337ae",
  measurementId: "G-SKNP4CLQBB"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
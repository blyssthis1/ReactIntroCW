// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





















// const firebaseConfig = {
//     apiKey: "AIzaSyBrloaVCztGlo3cu4bDVXawTJuxwzex8PU",
//     authDomain: "intro-to-react-cdn-109.firebaseapp.com",
//     projectId: "intro-to-react-cdn-109",
//     storageBucket: "intro-to-react-cdn-109.appspot.com",
//     messagingSenderId: "792051331247",
//     appId: "1:792051331247:web:ad128d447f13a4741ea45a"
//   };
  
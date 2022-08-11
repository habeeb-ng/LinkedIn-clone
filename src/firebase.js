// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlaMzjk1e4SCoegOFHouCKDq2rFpGwjlg",
  authDomain: "linkedin-clone-27139.firebaseapp.com",
  projectId: "linkedin-clone-27139",
  storageBucket: "linkedin-clone-27139.appspot.com",
  messagingSenderId: "176217076929",
  appId: "1:176217076929:web:6bddb024d0fba11a07d040",
  measurementId: "G-2DJH89XC47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const colRef = collection(db, "Post"); //gets reference to the database


export{db, auth, colRef}

// import firebase from 'firebase/app';

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBlaMzjk1e4SCoegOFHouCKDq2rFpGwjlg",
//   authDomain: "linkedin-clone-27139.firebaseapp.com",
//   projectId: "linkedin-clone-27139",
//   storageBucket: "linkedin-clone-27139.appspot.com",
//   messagingSenderId: "176217076929",
//   appId: "1:176217076929:web:6bddb024d0fba11a07d040",
//   measurementId: "G-2DJH89XC47"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = pp.firestore();
// const auth = firebase.auth();

// export {db, auth}
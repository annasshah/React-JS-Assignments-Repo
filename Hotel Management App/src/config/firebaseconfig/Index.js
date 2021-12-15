import { initializeApp } from "firebase/app";
// Authentication
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
//Database
import {
  getDatabase,
  onChildAdded,
  child,
  ref,
  push,
  update,
  set,
  onValue,
  remove
} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1twcFZMzGMbkd9mDjQEcqN5WeJEinaEc",
  authDomain: "hackathonproject-b5d86.firebaseapp.com",
  projectId: "hackathonproject-b5d86",
  storageBucket: "hackathonproject-b5d86.appspot.com",
  messagingSenderId: "857055963413",
  appId: "1:857055963413:web:bd641a07c244278c6c611c",
};


// const firebaseConfig = {
//   apiKey: "AIzaSyCJNX5eCjvTV_F2xnFhEmDCNNzOq5pOWw0",
//   authDomain: "reacthotelmanagement.firebaseapp.com",
//   projectId: "reacthotelmanagement",
//   storageBucket: "reacthotelmanagement.appspot.com",
//   messagingSenderId: "901644970153",
//   appId: "1:901644970153:web:f8754fb31c32390acea1b8"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  database,
  onChildAdded,
  child,
  ref,
  push,
  update,
  set,
  onValue,
  remove
};

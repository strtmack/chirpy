import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAeilobmMHcqvzBnHf9nJDRfLrzDUF7wwE",
  authDomain: "chirpy-fa91d.firebaseapp.com",
  projectId: "chirpy-fa91d",
  storageBucket: "chirpy-fa91d.appspot.com",
  messagingSenderId: "10117081934",
  appId: "1:10117081934:web:7624281e6427693e588c1f",
  measurementId: "G-ENKHFQ0BR6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

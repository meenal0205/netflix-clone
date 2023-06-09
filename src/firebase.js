import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5oxo7hkfcTxykUSwf5LzCTINAfVc8jDU",
  authDomain: "netflix-clone-b00f1.firebaseapp.com",
  projectId: "netflix-clone-b00f1",
  storageBucket: "netflix-clone-b00f1.appspot.com",
  messagingSenderId: "233329883587",
  appId: "1:233329883587:web:bea2816119dc276e5b6576",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

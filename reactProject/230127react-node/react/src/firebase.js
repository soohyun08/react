import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYzwdnqKyfJeVtwslat3lw6R34ioB51yo",
  authDomain: "react-join-ccd5d.firebaseapp.com",
  projectId: "react-join-ccd5d",
  storageBucket: "react-join-ccd5d.appspot.com",
  messagingSenderId: "145306468388",
  appId: "1:145306468388:web:0358d5c35867e61dcf18b1",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

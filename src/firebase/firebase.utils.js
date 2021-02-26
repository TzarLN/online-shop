import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/firebase-auth";

const config = {
  apiKey: "AIzaSyBYqNe-P8e4BP5SyB0D4EQvEd5CRMZka4c",
  authDomain: "crwn-tutorial-ec827.firebaseapp.com",
  projectId: "crwn-tutorial-ec827",
  storageBucket: "crwn-tutorial-ec827.appspot.com",
  messagingSenderId: "527858417396",
  appId: "1: 527858417396: web: f4e14e81f9288955db28a1",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
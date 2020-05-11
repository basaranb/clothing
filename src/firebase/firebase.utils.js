import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCO7Ev0o9OccQsvuH-Pw8Hzi_IVmrWKZnI",
  authDomain: "clothing-706de.firebaseapp.com",
  databaseURL: "https://clothing-706de.firebaseio.com",
  projectId: "clothing-706de",
  storageBucket: "clothing-706de.appspot.com",
  messagingSenderId: "965564515843",
  appId: "1:965564515843:web:1e468dcae14441e0e5b036",
  measurementId: "G-CC8L8S084P",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

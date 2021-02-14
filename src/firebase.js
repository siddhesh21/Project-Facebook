import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpFM5EDMoSZ6bkE2VE6DxwYE7HyataYRk",
  authDomain: "project-facebook-a52db.firebaseapp.com",
  projectId: "project-facebook-a52db",
  storageBucket: "project-facebook-a52db.appspot.com",
  messagingSenderId: "146848540372",
  appId: "1:146848540372:web:7abf3401d462ebecfdfd41",
  measurementId: "G-NEP9LEYGRC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

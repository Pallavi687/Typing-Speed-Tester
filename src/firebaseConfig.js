import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAKfCl3tvrp4y-b_sqZ5k-dn99CncU5p5s",
  authDomain: "typingspeedtest-195fb.firebaseapp.com",
  projectId: "typingspeedtest-195fb",
  storageBucket: "typingspeedtest-195fb.appspot.com",
  messagingSenderId: "23071819937",
  appId: "1:23071819937:web:4163fc7789a394183148e0",
  measurementId: "G-ZLRB4Q0K11"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
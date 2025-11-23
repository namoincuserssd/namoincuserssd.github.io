// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQPLT5JSZEAYUD7k5U3OeB3pvkW5BMS70",
  authDomain: "namo-inc-users.firebaseapp.com",
  projectId: "namo-inc-users",
  storageBucket: "namo-inc-users.firebasestorage.app",
  messagingSenderId: "784321805268",
  appId: "1:784321805268:web:fccc355243d54a821d3441",
  measurementId: "G-ETK346EFM9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { createUserWithEmailAndPassword, signInWithEmailAndPassword };

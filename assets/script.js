// script.js
import { auth } from "../firebase.js";

// SIGN UP
export async function signUp(email, password) {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    alert("Account created!");
    window.location.href = "/sign-in/";
  } catch (err) {
    alert(err.message);
  }
}

// SIGN IN
export async function signIn(email, password) {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    window.location.href = "/home"; // or your users dashboard
  } catch (err) {
    alert(err.message);
  }
}

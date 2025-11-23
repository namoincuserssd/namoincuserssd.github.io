// assets/script.js
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../firebase.js";

// --- SIGN UP PAGE ---
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = signupForm.email.value.trim();
    const password = signupForm.password.value;
    const confirm = signupForm.confirmPassword.value;
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    if (password !== confirm) {
      errorMsg.textContent = "Passwords do not match.";
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      window.location.href = "/sign-in/?signup=success";
    } catch (error) {
      errorMsg.textContent = error.message;
    }
  });
}

// --- SIGN IN PAGE ---
const signinForm = document.getElementById("signinForm");
if (signinForm) {
  signinForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = signinForm.email.value.trim();
    const password = signinForm.password.value;
    const errorMsg = document.getElementById("errorMsg");
    const successBox = document.getElementById("successMsg");

    errorMsg.textContent = "";
    successBox.textContent = "";

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/dashboard/"; // Change later
    } catch (error) {
      errorMsg.textContent = error.message;
    }
  });

  // Show "Account created!" message if redirected from signup
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("signup") === "success") {
    const successBox = document.getElementById("successMsg");
    successBox.textContent = "Account created successfully! Please sign in.";
  }
}

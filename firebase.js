<!-- firebase.js (drop into users.namo-inc.org and/or include from other sites) -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getDatabase, ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAQPLT5JSZEAYUD7k5U3OeB3pvkW5BMS70",
    authDomain: "namo-inc-users.firebaseapp.com",
    databaseURL: "https://namo-inc-users-default-rtdb.firebaseio.com",
    projectId: "namo-inc-users",
    storageBucket: "namo-inc-users.firebasestorage.app",
    messagingSenderId: "784321805268",
    appId: "1:784321805268:web:fccc355243d54a821d3441",
    measurementId: "G-ETK346EFM9"
  };


  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const auth = getAuth(app);

  // save user data at /users/<username>
  window.saveUser = (username, data) => {
    return set(ref(db, "users/" + username), data);
  };

  // read user data once
  window.loadUser = async (username) => {
    const snap = await get(ref(db, "users/" + username));
    return snap.exists() ? snap.val() : null;
  };

  // observe live updates for a user
  window.watchUser = (username, cb) => {
    const r = ref(db, "users/" + username);
    return onValue(r, snap => cb(snap.exists() ? snap.val() : null));
  };

  // simple auth helpers (email/password)
  window.signupEmail = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);
  window.loginEmail = (email, pass) => signInWithEmailAndPassword(auth, email, pass);
</script>

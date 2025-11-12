import { app, getAuth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const auth = getAuth(app);

// ========================== REGISTER ==========================
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("regConfirmPassword").value;

    // Validasi confirm password
    if (password !== confirmPassword) {
      return alert("Password dan Konfirmasi Password tidak cocok!");
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registrasi berhasil! Silakan login.");
      window.location.href = "index.html";
    } catch (error) {
      alert("Registrasi gagal: " + error.message);
    }
  });
}

// ============================ LOGIN ===========================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login berhasil!");
      window.location.href = "home.html";
    } catch (error) {
      alert("Login gagal: " + error.message);
    }
  });
}

import { signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// ============================ LOGOUT ===========================
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);
      alert("Berhasil logout!");
      window.location.href = "index.html"; // kembali ke login
    } catch (error) {
      alert("Gagal logout: " + error.message);
    }
  });
}



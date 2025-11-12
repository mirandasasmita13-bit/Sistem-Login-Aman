// Firebase Web SDK via CDN
// (pakai importmaps biar tetap modular)

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Konfigurasi Firebase kamu
const firebaseConfig = {
  apiKey: "AIzaSyDS8ms94w5SJUE2PfbfRKyZLJC48H3WeUo",
  authDomain: "sistem-login-aman-79b31.firebaseapp.com",
  projectId: "sistem-login-aman-79b31",
  storageBucket: "sistem-login-aman-79b31.firebasestorage.app",
  messagingSenderId: "785633807671",
  appId: "1:785633807671:web:79ff01a44fff1a61f91eb2"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Ekspor biar bisa dipakai file lain
export { app, getAuth };

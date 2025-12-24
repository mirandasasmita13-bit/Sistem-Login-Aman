**---SISTEM LOGIN AMAN MENGGUNAKAN FIREBASE AUTHENTICATION DAN FIRESTORE---**
  proyek ini merupakan implementasi sistem login berbasis cloud yang mengutamakan keamanan dan memanfaatkan Firebase Authentication DAN Firestore, serta menggunakan vercel sebagai hosting, yang telah mendukung SSL otomatis.
**---FITUR UTAMA---**
-Sistem ini memiliki register akun menggunakan Firebase Authentication
-login (email + password), data disimpan di Firestore
-logout
-HTTPS otomatis (vercel)
-Security Headers (CSP,HSTS, Referrer, X-Frame-Options)
**---ARSITEKTUR SISTEM---**
  -Client/Web (Browser User)
  -Vercel Hosting (Frontend : HTML, CSS, JS)
  -Firebase Authentication (Register, Logi, Home)
  -Firestore Database (Penyimpanan data user)
**---TEKNOLOGI YANG DIGUNAKAN---**
Autentikasi   -> Firebase Authentication
Database      -> Firestore
Hosting       -> Vercel
Frontend      -> HTML, CSS, JS
IAM           -> Firebase Role-based Access
Security      -> SSL/TLS, CSP, HSTS
**---STRUKTUR PROYEK---**
-index.html        -style.css
-register.html     -firebase-config.js
-home.html         -auth.js
-vercel.json
**---CARA MENJALANKAN PROYEK---**
(secara lokal)
-Download proyek 
-Buka index.html dan sistem akan berjalan secara otomatis
(secara online)
-Proyek otomatis di deploy oleh Vercel setiap commit Guthub
**---IMPLEMENTASI KEAMANAN---**
-HTTPS (SSL/TLS) -> disediakan oleh vercel
-Security Headers (HSTS, CSP, X-FRAME-OPTIONS-REFERRER-POLICY) ->Via Vercel.json
**---PENGUJIAN KEAMANAN---**
SSL Labs          -> A (HTTPS aktif, TLS 1.3)
Security Headers  -> Hasil Security mendapatkan nilai A
Uji Brute-force   -> Firebase membatasi percobaan login
Login             -> Sistem mengenali user login/logout
**---LINK APLIKASI---**
https://sistem-login-aman.vercel.app/
****---LINK VIDEO---**

**---LINK REPOSITORY---****
https://github.com/mirandasasmita13-bit/Sistem-Login-Aman
**---PROYEK DIBUAT OLEH---**
Miranda Sasmita (230170147)
untuk memenuhi tugas akhir dari matakuliah : Cloud Networking & Cybersecurity




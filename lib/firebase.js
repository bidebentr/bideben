// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCkrx4n1e-REALKEYBURAYA",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "bideben-db62e.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "bideben-db62e",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "bideben-db62e.appspot.com",
  messagingSenderId: "145377273022",
  appId: "1:145377273022:web:49b1e0bafc98c54013c1d3"
};

// ⚡️ Eğer app zaten başlatılmışsa yeniden başlatma hatası önlenir
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 🔥 Firestore bağlantısı
export const db = getFirestore(app);

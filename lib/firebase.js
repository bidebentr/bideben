// Firebase modüllerini içe aktar
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase yapılandırması
const firebaseConfig = {
  apiKey: "AIzaSyBMqDP3-0OlsE3j5yfYrgeKm1wAlEW2jxE",
  authDomain: "bideben-db62e.firebaseapp.com",
  projectId: "bideben-db62e",
  storageBucket: "bideben-db62e.appspot.com", // ✅ düzeltildi
  messagingSenderId: "160590350941",
  appId: "1:160590350941:web:18275711e6003a5d33dbb4"
};

// Firebase başlat
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Auth servislerini dışa aktar
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

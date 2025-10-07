import { auth, googleProvider, facebookProvider } from "../lib/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function AuthBox() {
  const [user] = useAuthState(auth);

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error("Google giriş hatası:", err);
    }
  };

  const loginWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
    } catch (err) {
      console.error("Facebook giriş hatası:", err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Çıkış hatası:", err);
    }
  };

  if (user) {
    return (
      <div className="p-6 bg-sky-900/60 border border-sky-400 rounded-xl text-white text-center shadow-lg backdrop-blur-sm">
        <p className="text-lg font-semibold mb-2">👋 Hoş geldin, {user.displayName}</p>
        <img
          src={user.photoURL}
          alt="Profil"
          className="w-16 h-16 rounded-full mx-auto mb-3 border border-sky-300"
        />
        <button
          onClick={logout}
          className="mt-3 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold transition"
        >
          Çıkış Yap
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-900/70 border border-sky-400 rounded-xl text-white text-center shadow-lg backdrop-blur-sm flex flex-col gap-3">
      <button
        onClick={loginWithGoogle}
        className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-lg font-semibold transition"
      >
        Google ile Giriş Yap
      </button>
      <button
        onClick={loginWithFacebook}
        className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg font-semibold transition"
      >
        Facebook ile Giriş Yap
      </button>
    </div>
  );
}

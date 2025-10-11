"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function ProfileMenu() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="fixed top-4 right-6 flex items-center gap-3 z-50">
        <img
          src={session.user?.image || "/default-avatar.png"}
          alt={session.user?.name || "Kullanıcı"}
          className="w-10 h-10 rounded-full border border-gray-500 cursor-pointer hover:scale-105 transition"
          title={session.user?.name}
        />
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="px-3 py-1 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 transition"
        >
          Çıkış
        </button>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-6 flex items-center gap-3 z-50">
      <button
        onClick={() => signIn("google")}
        className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
      >
        Google ile Giriş
      </button>
      <button
        onClick={() => signIn("facebook")}
        className="px-3 py-1 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition"
      >
        Facebook ile Giriş
      </button>
    </div>
  );
}

"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function ProfileMenu() {
  const { data: session } = useSession();

  return (
    <div className="fixed top-4 right-6 flex items-center gap-3 z-50">
      {!session ? (
        <>
          <button
            onClick={() => signIn("google")}
            className="px-3 py-1 bg-[#4285F4] text-white rounded-md hover:bg-[#357ae8] transition"
          >
            Google ile Giriş Yap
          </button>

          <button
            onClick={() => signIn("facebook")}
            className="px-3 py-1 bg-[#3b5998] text-white rounded-md hover:bg-[#334d84] transition"
          >
            Facebook ile Giriş Yap
          </button>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

"use client";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { FaUserCircle, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";

export default function ProfileMenu() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  if (!session) return null;

  return (
    <div className="fixed top-4 right-6 z-50">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <img
          src={session.user?.image || "/default-avatar.png"}
          alt={session.user?.name || "Kullanıcı"}
          className="w-10 h-10 rounded-full border border-yellow-500 group-hover:scale-105 transition"
          title={session.user?.name}
        />
        <span className="text-gray-300 group-hover:text-yellow-400 transition text-sm">
          {session.user?.name?.split(" ")[0] || "Profil"}
        </span>
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-[#111] border border-gray-700 rounded-xl shadow-lg overflow-hidden animate-fadeIn">
          <Link
            href="/hesabim"
            className="flex items-center gap-2 px-4 py-2 hover:bg-yellow-500/20 text-gray-200 text-sm transition"
          >
            <FaUserCircle /> Hesabım
          </Link>
          <Link
            href="/siparisler"
            className="flex items-center gap-2 px-4 py-2 hover:bg-yellow-500/20 text-gray-200 text-sm transition"
          >
            <FaShoppingBag /> Siparişlerim
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center gap-2 px-4 py-2 w-full hover:bg-red-500/20 text-gray-200 text-sm transition"
          >
            <FaSignOutAlt /> Çıkış
          </button>
        </div>
      )}
    </div>
  );
}

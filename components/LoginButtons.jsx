import { FaGoogle, FaFacebook } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function LoginButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
      <button
        onClick={() => signIn("google")}
        className="flex items-center justify-center gap-2 px-5 py-2 bg-[#1a1a1a] border border-[#3b82f6]/60 text-[#3b82f6] rounded-xl hover:bg-[#3b82f6]/20 hover:shadow-[0_0_10px_#3b82f6] transition-all"
      >
        <FaGoogle /> Google ile Giriş Yap
      </button>

      <button
        onClick={() => signIn("facebook")}
        className="flex items-center justify-center gap-2 px-5 py-2 bg-[#1a1a1a] border border-[#1877f2]/60 text-[#1877f2] rounded-xl hover:bg-[#1877f2]/20 hover:shadow-[0_0_10px_#1877f2] transition-all"
      >
        <FaFacebook /> Facebook ile Giriş Yap
      </button>
    </div>
  );
}

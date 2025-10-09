import Head from "next/head";
import Link from "next/link";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaHome,
  FaBuilding,
} from "react-icons/fa";
import Footer from "@/components/Footer";

export default function Iletisim() {
  return (
    <>
      <Head>
        <title>İletişim | bideben</title>
        <meta
          name="description"
          content="bideben iletişim sayfası — WhatsApp, e-posta, sosyal medya hesaplarımız ve şirket bilgileri."
        />
      </Head>

      <main
        className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-gray-200"
        style={{
          background:
            "radial-gradient(circle at top, #3b006a 0%, #0a0015 70%, #000 100%)",
        }}
      >
        <div
          className="max-w-4xl w-full rounded-2xl shadow-2xl p-10 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,0,60,0.95), rgba(15,0,35,0.9))",
            border: "2px solid rgba(180, 80, 255, 0.8)",
            boxShadow:
              "0 0 25px rgba(160,60,255,0.5), inset 0 0 20px rgba(180,80,255,0.3)",
          }}
        >
          {/* parlak aura efekti */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#b400ff33] via-transparent to-[#ff00ff11] blur-2xl" />

          <h1
            className="text-4xl md:text-5xl font-extrabold mb-10 text-center relative z-10"
            style={{
              color: "#d0a6ff",
              textShadow:
                "0 0 15px #c77bff, 0 0 30px #a855f7, 0 0 45px #7e22ce",
            }}
          >
            💫 İletişim
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            {/* Sol sütun */}
            <div className="space-y-6">
              <h2
                className="text-2xl font-semibold mb-4"
                style={{
                  color: "#c77bff",
                  textShadow: "0 0 12px #a855f7",
                }}
              >
                Ulaşım Bilgileri
              </h2>

              <div className="flex items-center space-x-3 hover:scale-105 transition-transform">
                <FaWhatsapp className="text-green-400 text-2xl drop-shadow-[0_0_10px_#00ff88]" />
                <a
                  href="https://wa.me/905427721015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c77bff] transition"
                >
                  +90 542 772 10 15
                </a>
              </div>

              <div className="flex items-center space-x-3 hover:scale-105 transition-transform">
                <FaEnvelope className="text-[#9f7aea] text-2xl drop-shadow-[0_0_10px_#b388ff]" />
                <a
                  href="mailto:info@bideben.com"
                  className="hover:text-[#d0a6ff] transition"
                >
                  info@bideben.com
                </a>
              </div>

              <div className="flex items-center space-x-3 hover:scale-105 transition-transform">
                <FaInstagram className="text-pink-500 text-2xl drop-shadow-[0_0_10px_#ff66cc]" />
                <a
                  href="https://www.instagram.com/bideben"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c77bff] transition"
                >
                  Instagram
                </a>
              </div>

              <div className="flex items-center space-x-3 hover:scale-105 transition-transform">
                <FaTiktok className="text-gray-100 text-2xl drop-shadow-[0_0_10px_#00f5ff]" />
                <a
                  href="https://www.tiktok.com/@bidebencom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c77bff] transition"
                >
                  TikTok
                </a>
              </div>

              <div className="flex items-center space-x-3 hover:scale-105 transition-transform">
                <FaYoutube className="text-red-500 text-2xl drop-shadow-[0_0_10px_#ff3333]" />
                <a
                  href="https://www.youtube.com/@bidebencom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c77bff] transition"
                >
                  YouTube
                </a>
              </div>
            </div>

            {/* Sağ sütun */}
            <div
              className="rounded-xl p-6"
              style={{
                background:
                  "linear-gradient(145deg, rgba(40,0,70,0.9), rgba(20,0,40,0.8))",
                border: "1px solid rgba(200,100,255,0.4)",
                boxShadow:
                  "0 0 25px rgba(180,80,255,0.4), inset 0 0 10px rgba(160,60,255,0.3)",
              }}
            >
              <h2
                className="text-2xl font-semibold mb-4 flex items-center gap-2"
                style={{
                  color: "#c77bff",
                  textShadow: "0 0 10px #a855f7",
                }}
              >
                <FaBuilding /> Şirket Bilgileri
              </h2>
              <p className="text-sm leading-relaxed text-gray-300">
                <strong>
                  SEYMEN TEKNİK ENDÜSTRİYEL EKİPMAN SANAYİ
                  <br />İÇ VE DIŞ TİCARET LTD. ŞTİ
                </strong>
                <br />
                <br />
                Vergi No: 7671304338
                <br />
                Mersis: 0767130433800001
                <br />
                KEP: seymenteknik@hs01.kep.tr
                <br />
                Telefon: +90 542 772 10 15
              </p>
            </div>
          </div>

          {/* Anasayfa butonu */}
          <div className="flex justify-center mt-12 relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#a855f7] to-[#c77bff] hover:from-[#c77bff] hover:to-[#e0aaff] text-black font-semibold rounded-full transition transform hover:scale-105 shadow-[0_0_20px_#b388ff]"
            >
              <FaHome /> Anasayfa’ya Dön
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 w-full">
          <Footer />
        </div>
      </main>
    </>
  );
}

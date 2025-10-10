import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] border-t border-yellow-700/40 text-gray-300 mt-20 py-10 overflow-hidden">
      {/* ✨ Üst geçiş efekti */}
      <div className="absolute top-[-60px] left-0 w-full h-[60px] bg-gradient-to-b from-transparent to-[#0a0a0a]" />

      {/* 💎 Ana içerik */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left relative z-10">
        {/* 1️⃣ Sütun - Marka */}
        <div>
          <h2 className="text-yellow-400 font-semibold text-lg mb-2">bideben</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Dijital eserlerle topluluk ödülleri kazandıran yeni nesil platform.
            Katkı yap, topluluğu büyüt, ödülü kazan!
          </p>
        </div>

        {/* 2️⃣ Sütun - Menü */}
        <div>
          <h2 className="text-yellow-400 font-semibold text-lg mb-2">Keşfet</h2>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/nasil-calisir" className="hover:text-yellow-400 transition">
                ⚙️ Nasıl Çalışır
              </a>
            </li>
            <li>
              <a href="/katkilar" className="hover:text-yellow-400 transition">
                🌟 Topluluk Katkıları
              </a>
            </li>
            <li>
              <a href="/oduller" className="hover:text-yellow-400 transition">
                🎁 Katkı Ödülleri
              </a>
            </li>
            <li>
              <a href="/sss" className="hover:text-yellow-400 transition">
                ❓ SSS
              </a>
            </li>
            <li>
              <a href="/iletisim" className="hover:text-yellow-400 transition">
                📩 İletişim
              </a>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Sütun - Telif ve bilgi */}
        <div className="sm:text-right flex flex-col items-center sm:items-end justify-between h-full">
          <div>
            <p className="text-sm">
              © 2025 <span className="text-yellow-400 font-medium">bideben.com</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Yapay Zeka ile Üretilen Dijital Eser Platformu
            </p>
          </div>

          {/* 📄 Yasal bağlantılar */}
          <div className="flex flex-wrap justify-center sm:justify-end mt-4 space-x-3 text-xs text-gray-500">
            <a href="/kullanim-kosullari" className="hover:text-yellow-400 transition">
              Kullanım Koşulları
            </a>
            <span className="text-gray-600">|</span>
            <a href="/gizlilik-politikasi" className="hover:text-yellow-400 transition">
              Gizlilik Politikası
            </a>
            <span className="text-gray-600">|</span>
            <a href="/kvkk-aydinlatma-metni" className="hover:text-yellow-400 transition">
              KVKK Aydınlatma Metni
            </a>
          </div>
        </div>
      </div>

      {/* 🌐 Sosyal Medya Barı */}
      <div className="flex justify-center space-x-6 mt-10 relative z-10">
        <a
          href="https://www.instagram.com/bideben"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-400 text-2xl drop-shadow-[0_0_10px_#ff4dab] transition-transform transform hover:scale-110"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.tiktok.com/@bidebencom"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 hover:text-white text-2xl drop-shadow-[0_0_10px_#00f5ff] transition-transform transform hover:scale-110"
        >
          <FaTiktok />
        </a>

        <a
          href="https://www.youtube.com/@bidebencom"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-400 text-2xl drop-shadow-[0_0_10px_#ff1a1a] transition-transform transform hover:scale-110"
        >
          <FaYoutube />
        </a>
      </div>

      {/* Alt çizgi */}
      <div className="text-center text-xs text-gray-600 mt-10 border-t border-gray-800 pt-4 relative z-10">
        Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

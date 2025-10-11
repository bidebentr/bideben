"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState, useMemo } from "react";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import Footer from "@/components/Footer";

export default function Siparislerim() {
  const { data: session, status } = useSession();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchOrders = async () => {
      try {
        const q = query(
          collection(db, "orders"),
          where("userEmail", "==", session.user.email),
          orderBy("date", "desc")
        );
        const snapshot = await getDocs(q);
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(list);
      } catch (err) {
        console.error("❌ Siparişler alınamadı:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [session]);

  if (status === "loading") {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen text-gray-300">
        🔄 Giriş bilgileri kontrol ediliyor...
      </main>
    );
  }

  if (!session) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen text-center text-gray-300 animate-fadeIn">
        <h1 className="text-2xl font-semibold text-yellow-400 mb-4">
          Siparişlerim
        </h1>
        <p>Giriş yapmadınız. Lütfen ana sayfadan giriş yapın.</p>
        <Link
          href="/"
          className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition"
        >
          🏠 Anasayfaya Dön
        </Link>
        <Footer />
      </main>
    );
  }

  if (loading) {
    return (
      <main className="flex items-center justify-center min-h-screen text-gray-300">
        🔄 Siparişlerin yükleniyor...
      </main>
    );
  }

  // 💰 Toplam harcama
  const totalSpent = useMemo(() => {
    return orders.reduce((acc, o) => acc + (parseFloat(o.total_amount) || 0), 0);
  }, [orders]);

  return (
    <>
      <main className="flex flex-col items-center justify-start min-h-screen text-gray-200 animate-fadeIn py-10">
        <div className="bg-[#0a0a0a] border border-yellow-600/40 rounded-2xl shadow-lg p-8 w-[700px] max-w-[95%]">
          <h1 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">
            🧾 Siparişlerim
          </h1>

          {orders.length > 0 ? (
            <>
              <table className="w-full text-sm text-left text-gray-300 mb-6">
                <thead className="text-yellow-400 border-b border-gray-700">
                  <tr>
                    <th className="py-2 px-3">Tarih</th>
                    <th className="py-2 px-3">Tutar</th>
                    <th className="py-2 px-3">Durum</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr
                      key={o.id}
                      className="border-b border-gray-800 hover:bg-gray-900/40 transition"
                    >
                      <td className="py-2 px-3">
                        {o.date?.toDate
                          ? o.date.toDate().toLocaleString("tr-TR")
                          : o.date || "-"}
                      </td>
                      <td className="py-2 px-3">
                        {(o.total_amount || 0).toFixed(2)} ₺
                      </td>
                      <td className="py-2 px-3 text-green-400">
                        {o.status || "success"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* 🧮 Özet kutusu */}
              <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-4 text-center">
                <p className="text-gray-400 mb-2">Toplam Katkın</p>
                <p className="text-2xl font-bold text-yellow-400">
                  {totalSpent.toFixed(2)} ₺
                </p>
                <div className="mt-4 flex justify-center gap-4">
                  <Link
                    href="/hesabim"
                    className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-purple-500 text-black font-semibold rounded-lg hover:scale-105 transition-transform"
                  >
                    👤 Hesabım
                  </Link>
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 bg-gray-700 text-gray-100 rounded-lg hover:bg-gray-600 transition"
                  >
                    📄 Fiş Yazdır
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-400 py-10 border border-gray-700 rounded-xl">
              Henüz bir dijital eser satın almadınız.
            </div>
          )}
        </div>

        <div className="mt-6">
          <Link
            href="/"
            className="text-sm text-yellow-500 hover:text-yellow-400 transition"
          >
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

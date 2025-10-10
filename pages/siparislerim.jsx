"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Footer from "@/components/Footer";

export default function Siparislerim() {
  const { data: session } = useSession();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (session?.user?.email) {
      const fetchOrders = async () => {
        const q = query(
          collection(db, "orders"),
          where("userEmail", "==", session.user.email)
        );
        const snapshot = await getDocs(q);
        const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOrders(list);
      };
      fetchOrders();
    }
  }, [session]);

  if (!session) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen text-center text-gray-300 animate-fadeIn">
        <h1 className="text-2xl font-semibold text-yellow-400 mb-4">Siparişlerim</h1>
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

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen text-gray-200 animate-fadeIn">
        <div className="bg-[#0a0a0a] border border-yellow-600/40 rounded-2xl shadow-lg p-8 w-[700px] max-w-[95%]">
          <h1 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">
            🧾 Siparişlerim
          </h1>

          {orders.length > 0 ? (
            <table className="w-full text-sm text-left text-gray-300">
              <thead className="text-yellow-400 border-b border-gray-700">
                <tr>
                  <th className="py-2 px-3">Eser</th>
                  <th className="py-2 px-3">Fiyat</th>
                  <th className="py-2 px-3">Tarih</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-b border-gray-800 hover:bg-gray-900/40 transition">
                    <td className="py-2 px-3 flex items-center gap-2">
                      <img src={o.image} alt="" className="w-8 h-8 rounded-md" />
                      {o.productName}
                    </td>
                    <td className="py-2 px-3">{o.price}</td>
                    <td className="py-2 px-3">
                      {o.date.toDate().toLocaleDateString("tr-TR")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center text-gray-400 py-10 border border-gray-700 rounded-xl">
              Henüz bir dijital eser satın almadınız.
            </div>
          )}
        </div>

        <div className="mt-6">
          <Link
            href="/hesabim"
            className="text-sm text-yellow-500 hover:text-yellow-400 transition"
          >
            ← Hesabıma Dön
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

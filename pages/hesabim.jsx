"use client";
import React, { useEffect, useState, useMemo } from "react";
import { useSession, signOut } from "next-auth/react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link"; // ✅ doğru konum

export default function Hesabim() {
  const { data: session } = useSession();
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
        const userOrders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(userOrders);
      } catch (error) {
        console.error("❌ Siparişler alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [session]);

  if (!session)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h2 className="text-2xl mb-4">🚪 Giriş yapman gerekiyor</h2>
        <p className="text-gray-400">Sipariş geçmişini görmek için önce oturum aç.</p>
      </div>
    );

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-300">
        🔄 Siparişlerin yükleniyor...
      </div>
    );

  // 💰 Toplam katkı
  const totalSpent = useMemo(() => {
    return orders.reduce((acc, o) => {
      const amount = parseFloat(String(o.price).replace(/[₺TL\s]/gi, ""));
      return acc + (isNaN(amount) ? 0 : amount);
    }, 0);
  }, [orders]);

  // 🧾 Toplam sipariş sayısı
  const totalOrders = orders.length;

  // ⏰ Son katkı tarihi
  const lastOrderDate = orders[0]?.date?.toDate
    ? orders[0].date.toDate().toLocaleString("tr-TR")
    : orders[0]?.date || "-";

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      {/* 👤 Profil üst kısmı */}
      <div className="max-w-4xl mx-auto mb-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={session.user?.image || "/default-avatar.png"}
              alt="Profil"
              className="w-20 h-20 rounded-full border-2 border-purple-400 shadow-[0_0_15px_#bb86fc]"
            />
            <div>
              <h2 className="text-2xl font-bold text-purple-400">
                {session.user?.name}
              </h2>
              <p className="text-gray-400 text-sm">{session.user?.email}</p>
            </div>
          </div>

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="mt-4 md:mt-0 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 transition text-sm text-gray-200"
          >
            Çıkış Yap
          </button>
        </div>

        {/* 📊 İstatistik kutuları */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-inner hover:shadow-purple-500/20 transition">
            <p className="text-gray-400 text-sm mb-1">Toplam Katkı</p>
            <h3 className="text-2xl font-bold text-yellow-400">
              {totalSpent.toFixed(2)} TL
            </h3>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-inner hover:shadow-purple-500/20 transition">
            <p className="text-gray-400 text-sm mb-1">Katkı Sayısı</p>
            <h3 className="text-2xl font-bold text-green-400">{totalOrders}</h3>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-inner hover:shadow-purple-500/20 transition">
            <p className="text-gray-400 text-sm mb-1">Son Katkı</p>
            <h3 className="text-lg font-semibold text-blue-400">{lastOrderDate}</h3>
          </div>
        </div>
      </div>

      {/* 🧾 Sipariş Listesi */}
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-400 drop-shadow-[0_0_10px_#bb86fc]">
        🧾 Katkı Geçmişim
      </h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-400 mt-10">
          Henüz hiç katkı yapmadın 💜
        </p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 p-5 rounded-2xl shadow-md hover:shadow-purple-500/30 transition duration-300"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={order.image}
                  alt={order.productName}
                  className="w-20 h-20 object-cover rounded-lg border border-gray-600"
                />
                <div>
                  {/* 🔗 Ürün detay linki */}
                  <Link
                    href={`/urun/${order.productId}`}
                    className="text-lg font-semibold text-yellow-300 hover:text-yellow-400 transition cursor-pointer"
                  >
                    🔗 {order.productName}
                  </Link>

                  <p className="text-sm text-gray-400">{order.category}</p>
                  <p className="text-sm text-gray-400">
                    🕓{" "}
                    {order.date?.toDate
                      ? order.date.toDate().toLocaleString("tr-TR")
                      : order.date}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold text-green-400">{order.price}</p>
                <p className="text-sm text-gray-400">Adet: {order.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

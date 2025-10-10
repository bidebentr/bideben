import crypto from "crypto";
import { db } from "@/lib/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";

export const config = {
  api: {
    bodyParser: false, // PayTR 'application/x-www-form-urlencoded' gönderir
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Sadece POST desteklenir" });
  }

  try {
    // 🔹 PayTR callback verisini oku
    const rawBody = await new Promise((resolve) => {
      let data = "";
      req.on("data", (chunk) => (data += chunk));
      req.on("end", () => resolve(data));
    });

    const params = Object.fromEntries(new URLSearchParams(rawBody));

    // 🔹 Ortak env değişkenleri
    const merchant_key = process.env.PAYTR_MERCHANT_KEY;
    const merchant_salt = process.env.PAYTR_MERCHANT_SALT;

    // 🔒 Hash kontrolü (güvenlik)
    const paytr_hash_str =
      params.merchant_oid + merchant_salt + params.status + params.total_amount;
    const hash = crypto
      .createHmac("sha256", merchant_key)
      .update(paytr_hash_str)
      .digest("base64");

    if (hash !== params.hash) {
      console.error("⚠️ Hash doğrulaması başarısız!");
      return res.status(400).send("BAD HASH");
    }

    // 🔹 Başarılı ödeme ise Firestore’a kaydet
    if (params.status === "success") {
      await addDoc(collection(db, "orders"), {
        merchant_oid: params.merchant_oid,
        total_amount: parseFloat(params.total_amount) / 100,
        status: "success",
        userEmail: params.email || "Bilinmiyor",
        paymentType: params.payment_type || "PayTR",
        date: Timestamp.now(),
      });
      console.log("✅ Ödeme başarıyla Firestore’a eklendi:", params.merchant_oid);
    } else {
      console.warn("❌ Başarısız ödeme:", params.merchant_oid);
    }

    // 🔁 PayTR 'OK' bekler, aksi halde tekrar gönderir
    res.status(200).send("OK");
  } catch (err) {
    console.error("💥 Callback hata:", err);
    res.status(500).send("ERROR");
  }
}

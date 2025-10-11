import crypto from "crypto";
import { db } from "@/lib/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";

export const config = {
  api: {
    bodyParser: false, // PayTR callback form-data gönderir
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Sadece POST desteklenir" });
  }

  try {
    // 🔹 Gövdeyi raw olarak oku
    const rawBody = await new Promise((resolve) => {
      let data = "";
      req.on("data", (chunk) => (data += chunk));
      req.on("end", () => resolve(data));
    });

    const params = Object.fromEntries(new URLSearchParams(rawBody));

    const merchant_key = process.env.PAYTR_MERCHANT_KEY;
    const merchant_salt = process.env.PAYTR_MERCHANT_SALT;

    // 🔐 Hash doğrulama
    const paytr_hash_str =
      String(params.merchant_oid) +
      merchant_salt +
      String(params.status) +
      String(params.total_amount);

    const generatedHash = crypto
      .createHmac("sha256", merchant_key)
      .update(paytr_hash_str)
      .digest("base64");

    const receivedHash = params.hash || params.HASH;

    if (generatedHash !== receivedHash) {
      console.error("⚠️ Hash doğrulaması başarısız!", { expected: generatedHash, received: receivedHash });
      res.status(400).send("BAD HASH");
      return;
    }

    // 🔹 Ödeme başarılıysa Firestore’a kaydet
    if (params.status === "success") {
      try {
        await addDoc(collection(db, "orders"), {
          merchant_oid: params.merchant_oid,
          total_amount: Number(params.total_amount) / 100, // kuruş -> TL
          status: "success",
          userEmail: params.email || "Bilinmiyor",
          paymentType: params.payment_type || "PayTR",
          date: Timestamp.now(),
        });
        console.log("✅ Ödeme başarıyla Firestore’a eklendi:", params.merchant_oid);
      } catch (dbErr) {
        console.error("⚠️ Firestore kayıt hatası:", dbErr);
      }
    } else {
      console.warn("❌ Başarısız ödeme bildirimi:", params.merchant_oid);
    }

    // 🔁 PayTR 'OK' bekler, aksi halde tekrar gönderir
    res.status(200).send("OK");
  } catch (err) {
    console.error("💥 Callback hata:", err);
    // Hata olsa bile PayTR tekrar denememesi için 'OK' döneriz
    res.status(200).send("OK");
  }
}

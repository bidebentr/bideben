import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { basket, total, test_mode } = req.body;
  if (!basket || basket.length === 0) return res.status(400).json({ message: "Sepet boş" });

  const merchant_id = process.env.PAYTR_MERCHANT_ID;
  const merchant_key = process.env.PAYTR_MERCHANT_KEY;
  const merchant_salt = process.env.PAYTR_MERCHANT_SALT;

  const user_ip = "127.0.0.1";
  const merchant_oid = "BDBN_" + Date.now();
  const email = "test@bideben.com";
  const payment_amount = Math.round(parseFloat(total) * 100);
  const user_name = "BideBen Kullanıcısı";
  const user_address = "BideBen Dijital Platform";
  const user_phone = "0000000000";
  const currency = "TL";

  const basket_str = Buffer.from(JSON.stringify(basket)).toString("base64");

  const hash_str = `${merchant_id}${user_ip}${merchant_oid}${email}${payment_amount}${basket_str}${currency}${test_mode}${merchant_salt}`;
  const token = crypto.createHmac("sha256", merchant_key).update(hash_str).digest("base64");

  try {
    const formData = new URLSearchParams({
      merchant_id,
      user_ip,
      merchant_oid,
      email,
      payment_amount,
      paytr_token: token,
      user_name,
      user_address,
      user_phone,
      merchant_ok_url: "https://www.bideben.com/odeme-basarili",
      merchant_fail_url: "https://www.bideben.com/odeme-hata",
      basket: basket_str,
      currency,
      test_mode: test_mode || "0", // ✅ Frontend'den gelen değer
      lang: "tr",
    });

    const response = await fetch("https://www.paytr.com/odeme/api/get-token", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    return res.status(200).json(result);
  } catch (error) {
    console.error("PAYTR Error:", error);
    return res.status(500).json({ message: "PayTR bağlantı hatası" });
  }
}

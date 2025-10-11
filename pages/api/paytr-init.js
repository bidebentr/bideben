import crypto from "crypto";
import base64 from "nodejs-base64-converter";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Yalnızca POST istekleri desteklenir." });
  }

  try {
    const {
      user_name,
      user_address,
      user_phone,
      email,
      payment_amount,
      basket,
    } = req.body;

    if (!email || !basket || basket.length === 0) {
      return res.status(400).json({ error: "Eksik bilgi gönderildi." });
    }

    const merchant_id = process.env.PAYTR_MERCHANT_ID;
    const merchant_key = process.env.PAYTR_MERCHANT_KEY;
    const merchant_salt = process.env.PAYTR_MERCHANT_SALT;

    // 🚀 Güvenli IP fallback
    const user_ip =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.socket.remoteAddress ||
      "1.1.1.1";

    // 🔢 Sipariş ID'si
    const merchant_oid = "BB" + Date.now();

    // 💰 Sepeti encode et
    const user_basket = base64.encode(JSON.stringify(basket));

    // PayTR parametreleri
    const no_installment = "0";
    const max_installment = "0";
    const currency = "TL";
    const test_mode = "0"; // canlı mod
    const timeout_limit = "30";
    const lang = "tr";

    const merchant_ok_url = "https://www.bideben.com/odeme-basarili";
    const merchant_fail_url = "https://www.bideben.com/odeme-hata";

    // 🔐 Güvenlik imzası
    const hash_str = `${merchant_id}${user_ip}${merchant_oid}${email}${payment_amount}${user_basket}${no_installment}${max_installment}${currency}${test_mode}`;
    const paytr_token = crypto
      .createHmac("sha256", merchant_key)
      .update(hash_str + merchant_salt)
      .digest("base64");

    // POST body oluştur
    const formData = new URLSearchParams({
      merchant_id,
      user_ip,
      merchant_oid,
      email,
      payment_amount,
      user_basket,
      no_installment,
      max_installment,
      currency,
      test_mode,
      merchant_ok_url,
      merchant_fail_url,
      user_name: user_name || "BideBen Kullanıcısı",
      user_address: user_address || "BideBen Topluluk Katkısı",
      user_phone: user_phone || "05555555555",
      paytr_token,
      timeout_limit,
      lang,
    });

    // 🌍 PayTR Token isteği
    const response = await fetch("https://www.paytr.com/odeme/api/get-token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    });

    const text = await response.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch {
      console.error("JSON parse hatası, gelen veri:", text);
      return res.status(500).json({ error: "Geçersiz PayTR cevabı" });
    }

    if (result.status === "success") {
      return res.status(200).json({ token: result.token });
    } else {
      return res.status(400).json({ error: result.reason || "PayTR isteği başarısız." });
    }
  } catch (err) {
    console.error("PAYTR API hatası:", err);
    return res.status(500).json({ error: "Sunucu hatası" });
  }
}

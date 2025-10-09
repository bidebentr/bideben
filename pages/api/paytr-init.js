import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { basket, total } = req.body;
  if (!basket || basket.length === 0) {
    return res.status(400).json({ message: "Sepet boş" });
  }

  // 🔐 Ortam değişkenleri (.env.local)
  const merchant_id = process.env.PAYTR_MERCHANT_ID;
  const merchant_key = process.env.PAYTR_MERCHANT_KEY;
  const merchant_salt = process.env.PAYTR_MERCHANT_SALT;

  if (!merchant_id || !merchant_key || !merchant_salt) {
    console.error("PAYTR ortam değişkenleri eksik!");
    return res.status(500).json({ message: "Sunucu yapılandırması eksik." });
  }

  // 👤 Kullanıcı ve sipariş bilgileri
  const user_ip = "127.0.0.1";
  const merchant_oid = "BDBN_" + Date.now();
  const email = "test@bideben.com"; // Giriş yapan kullanıcının mailiyle değiştirilebilir
  const payment_amount = Math.round(parseFloat(total) * 100);
  const user_name = "BideBen Kullanıcısı";
  const user_address = "BideBen Dijital Platform";
  const user_phone = "0000000000";
  const currency = "TL";
  const test_mode = "0"; // 🚀 Canlı mod aktif

  // 🧾 Sepeti encode et
  const basket_str = Buffer.from(JSON.stringify(basket)).toString("base64");

  // 🔑 Token oluştur
  const hash_str = `${merchant_id}${user_ip}${merchant_oid}${email}${payment_amount}${basket_str}${currency}${test_mode}${merchant_salt}`;
  const paytr_token = crypto.createHmac("sha256", merchant_key).update(hash_str).digest("base64");

  try {
    // 📦 PAYTR istek verisi
    const formData = new URLSearchParams({
      merchant_id,
      user_ip,
      merchant_oid,
      email,
      payment_amount,
      paytr_token,
      user_name,
      user_address,
      user_phone,
      merchant_ok_url: "https://www.bideben.com/odeme-basarili",
      merchant_fail_url: "https://www.bideben.com/odeme-hata",
      basket: basket_str,
      currency,
      test_mode, // "0" canlı, "1" test modu
      lang: "tr",
    });

    // 🌐 PAYTR bağlantısı
    const response = await fetch("https://www.paytr.com/odeme/api/get-token", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.status === "success") {
      return res.status(200).json({ token: result.token });
    } else {
      console.error("PAYTR API Hatası:", result.reason || result);
      return res.status(400).json({
        message: "PAYTR API hatası",
        detail: result.reason || result,
      });
    }
  } catch (error) {
    console.error("PAYTR bağlantı hatası:", error);
    return res.status(500).json({ message: "PayTR bağlantı hatası" });
  }
}

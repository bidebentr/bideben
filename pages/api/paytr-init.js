import crypto from "crypto";
import base64 from "nodejs-base64-converter";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Yalnızca POST istekleri desteklenir." });
  }

  const {
    user_name,
    user_address,
    user_phone,
    email,
    payment_amount,
    basket,
  } = req.body;

  const merchant_id = process.env.PAYTR_MERCHANT_ID;
  const merchant_key = process.env.PAYTR_MERCHANT_KEY;
  const merchant_salt = process.env.PAYTR_MERCHANT_SALT;

  // Sepeti encode et
  const user_basket = base64.encode(JSON.stringify(basket));

  // Sipariş numarası (benzersiz)
  const merchant_oid = "IN" + Date.now();

  // Ortak değişkenler
  const no_installment = "0";
  const max_installment = "0";
  const currency = "TL";
  const test_mode = "0";
  const lang = "tr";
  const timeout_limit = "30";

  const merchant_ok_url = "https://www.bideben.com/odeme-basarili";
  const merchant_fail_url = "https://www.bideben.com/odeme-hata";

  const user_ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  // 🔐 Güvenlik imzası
  const hashSTR = `${merchant_id}${user_ip}${merchant_oid}${email}${payment_amount}${user_basket}${no_installment}${max_installment}${currency}${test_mode}`;
  const paytr_token = crypto
    .createHmac("sha256", merchant_key)
    .update(hashSTR + merchant_salt)
    .digest("base64");

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
    user_name,
    user_address,
    user_phone,
    paytr_token,
    timeout_limit,
    lang,
  });

  try {
    const response = await fetch("https://www.paytr.com/odeme/api/get-token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    });

    const result = await response.json();

    if (result.status === "success") {
      return res.status(200).json({ token: result.token });
    } else {
      return res.status(400).json({ error: result.reason });
    }
  } catch (error) {
    console.error("PAYTR API hatası:", error);
    return res.status(500).json({ error: "Sunucu hatası" });
  }
}

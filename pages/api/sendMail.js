import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ error: "Eksik bilgi gönderildi." });

  try {
    // 💌 Mail transporter (örnek: Gmail SMTP)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER, // örnek: info@bideben.com
        pass: process.env.MAIL_PASS, // uygulama şifresi
      },
    });

    await transporter.sendMail({
      from: `"bideben İletişim" <${process.env.MAIL_USER}>`,
      to: "info@bideben.com",
      subject: `Yeni İletişim Mesajı - ${name}`,
      html: `
        <h3>Yeni Mesaj Geldi!</h3>
        <p><strong>Ad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Mail hatası:", error);
    res.status(500).json({ error: "Mail gönderilemedi." });
  }
}

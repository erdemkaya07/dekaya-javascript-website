import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { token } = req.body;

  const secretKey = "6LdeU3sqAAAAAFUhxPO83Daa9GZQMsZhMuhhdKa4";

  try {
    // Google reCAPTCHA doğrulama isteği gönder
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: secretKey,
          response: token,
        },
      }
    );

    if (response.data.success) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false, error: response.data["error-codes"] });
    }
  } catch (error) {
    console.error("reCAPTCHA doğrulama hatası:", error);
    res.status(500).json({ success: false, error: "Sunucu hatası" });
  }
}

import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    option: "Arıza Bildirimi",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "name") {
      const nameRegex = /^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/;
      if (!nameRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: "İsim yalnızca harf ve Türkçe karakterlerden oluşmalıdır.",
        }));
      } else {
        setErrors((prevErrors) => {
          const { name, ...rest } = prevErrors;
          return rest;
        });
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Geçerli bir e-posta adresi giriniz.",
        }));
      } else {
        setErrors((prevErrors) => {
          const { email, ...rest } = prevErrors;
          return rest;
        });
      }
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      alert("Lütfen reCAPTCHA doğrulamasını tamamlayın.");
      return;
    }

    if (Object.keys(errors).length > 0) {
      alert("Lütfen formu doğru doldurduğunuzdan emin olun.");
      return;
    }

    try {
      const recaptchaResponse = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: recaptchaValue }),
      });

      if (!recaptchaResponse.ok) {
        throw new Error("reCAPTCHA doğrulama isteği başarısız.");
      }

      const recaptchaResult = await recaptchaResponse.json();

      if (!recaptchaResult.success) {
        alert("reCAPTCHA doğrulaması başarısız. Lütfen tekrar deneyin.");
        return;
      }

      emailjs
        .send(
          "service_uzxp3ll",
          "template_09jv0zr",
          {
            name: formData.name,
            email: formData.email,
            option: formData.option,
            message: formData.message,
          },
          "VNXL7YSQNVV0rZkfd"
        )
        .then(() => {
          setSuccessMessage("Mesajınız başarıyla gönderildi!");
          setFormData({
            name: "",
            email: "",
            option: "Arıza Bildirimi",
            message: "",
          });
          setRecaptchaValue(null);
        })
        .catch(() => {
          alert("Mesaj gönderilirken bir hata oluştu.");
        });
    } catch (error) {
      console.error("reCAPTCHA doğrulama hatası:", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-user">
        <label htmlFor="name">Adınız Soyadınız</label>
        <input
          type="text"
          name="name"
          placeholder="Lütfen Adınız ve Soyadınızı yazın"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div className="contact-epost">
        <label htmlFor="email">E-Posta Adresiniz</label>
        <input
          type="text"
          name="email"
          placeholder="E-Posta Adresini giriniz"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div className="contact-options">
        <label htmlFor="option">
          Ne Hakkında İletişim kurmak istiyorsunuz?
        </label>
        <select name="option" value={formData.option} onChange={handleChange}>
          <option value="Arıza Bildirimi">Arıza Bildirimi</option>
          <option value="Satış">Satış</option>
          <option value="Seyyar Soğutma Odası Kiralama">
            Seyyar Soğutma Odası Kiralama
          </option>
          <option value="Genel">Genel</option>
        </select>
      </div>
      <div className="contact-message">
        <label htmlFor="message">Mesajınız</label>
        <textarea
          name="message"
          placeholder="Mesajınız.."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <ReCAPTCHA
        sitekey="6LdeU3sqAAAAAAjSzBlkL0KUUWn4oZ8_we2NKZfF"
        onChange={handleRecaptchaChange}
      />

      <button className="btn" type="submit">
        Gönder
      </button>

      {successMessage && (
        <p style={{ color: "green", marginTop: "10px" }}>{successMessage}</p>
      )}
    </form>
  );
}

export default ContactForm;

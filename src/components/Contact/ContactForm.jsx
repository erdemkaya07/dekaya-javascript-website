import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    option: "Arıza Bildirimi",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const [mathQuestion, setMathQuestion] = useState({ question: "", answer: null });
  const [userAnswer, setUserAnswer] = useState("");

  // Rastgele bir matematik sorusu oluştur
  useEffect(() => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setMathQuestion({ question: `${num1} + ${num2} = ?`, answer: num1 + num2 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Regex doğrulaması
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kullanıcı cevabının doğru olup olmadığını kontrol et
    if (parseInt(userAnswer) !== mathQuestion.answer) {
      alert("Matematik sorusunu yanlış yanıtladınız. Lütfen tekrar deneyin.");
      return;
    }

    if (Object.keys(errors).length > 0) {
      alert("Lütfen formu doğru doldurduğunuzdan emin olun.");
      return;
    }

    emailjs.send(
      "service_l1k81bp",
      "template_7m9z5w3",
      {
        name: formData.name,
        email: formData.email,
        option: formData.option,
        message: formData.message,
      },
      "VNXL7YSQNVV0rZkfd"
    )
    .then((response) => {
      console.log("E-posta başarıyla gönderildi!", response.status, response.text);
      setSuccessMessage("Mesajınız başarıyla gönderildi!");
      setFormData({
        name: "",
        email: "",
        option: "Arıza Bildirimi",
        message: "",
      });
      setUserAnswer(""); // Kullanıcı cevabını sıfırla
    })
    .catch((err) => {
      console.error("E-posta gönderilirken hata oluştu:", err);
      alert("Mesaj gönderilirken bir hata oluştu.");
    });
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
        <label htmlFor="option">Ne Hakkında İletişim kurmak istiyorsunuz?</label>
        <select
          name="option"
          value={formData.option}
          onChange={handleChange}
        >
          <option value="Arıza Bildirimi">Arıza Bildirimi</option>
          <option value="Satış">Satış</option>
          <option value="Seyyar Soğutma Odası Kiralama">Seyyar Soğutma Odası Kiralama</option>
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

      {/* Matematik Sorusu */}
      <div>
        <label>{mathQuestion.question}</label>
        <input
          type="text"
          placeholder="Cevabınızı girin"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
      </div>

      <button className="btn" type="submit">Gönder</button>
      
      {successMessage && <p style={{ color: "green", marginTop: "10px" }}>{successMessage}</p>}
    </form>
  );
}

export default ContactForm;

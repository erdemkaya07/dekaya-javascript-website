import React, { useState } from "react";
import DeKayaLinks from "./DeKayaLinks";
import blogs from '../../data/blogs.json';
import { Link } from "react-router-dom";

function FooterDetails() {
  const [email, setEmail] = useState(""); // Email durumunu tutmak için state ekliyoruz.
  const [message, setMessage] = useState(""); // Kullanıcıya geri bildirim mesajı göstermek için state.
  const [isError, setIsError] = useState(false); // Hata durumunu belirtmek için state

  // Geçerli bir e-posta kontrolü için regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Form gönderildiğinde çağrılacak fonksiyon
  const handleSubscribe = (e) => {
    e.preventDefault();

    if (emailRegex.test(email)) {
      setMessage("Abonelik başarılı!"); // Başarı mesajı
      setIsError(false); // Hata olmadığını belirtir
      setEmail(""); // Email alanını temizle
    } else {
      setMessage("Lütfen geçerli bir e-posta adresi girin."); // Hata mesajı
      setIsError(true); // Hata olduğunu belirtir
    }
  };

  return (
    <section className="footer-details">
      <div className="container">
        <div className="footer-container-details">
          <div className="footer-links">
            <h2 className="footer-detail-header">Links</h2>
            <div className="footer-header-line"></div>
            <ul className="footer-navlink">
              <DeKayaLinks />
            </ul>
          </div>
          <div className="footer-blog">
            <h2 className="footer-detail-header">Blog</h2>
            <div className="footer-header-line"></div>
            {blogs.map((blog) => (
              <p key={blog.id}>
                <Link to={`/blog/${blog.slug}`}>
                  {blog.title}
                </Link>
              </p>
            ))}
          </div>
          <div className="newsletters">
            <h2 className="footer-detail-header">Haberdar olun</h2>
            <div className="footer-header-line"></div>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Şuan aktif değil"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                disabled
              />
              <button type="submit" className="newsletter-button">Abone Ol</button>
            </form>
            {message && (
              <p className={`newsletter-message ${isError ? 'error' : 'success'}`}>
                {message}
              </p>
            )}
          </div>
          <div className="contact-details">
          <h2 className="footer-detail-header">İletişim</h2>
          <div className="footer-header-line"></div>
            <ul>
              <li><span className="bold">Servis talep hattı - 7/24:</span> <a href="tel:+905425335292">+90 542 533 5292</a></li>
              <li><span className="bold">Telefon:</span> <a href="tel:+905424522757">+90 542 452 2757</a></li>
              <li><span className="bold">E-posta:</span> <a href="mailto:ekrem.kaya@de-kaya.com">ekrem.kaya@de-kaya.com</a></li>
              <li><span className="bold">Adres:</span> Yerbelen Mahallasi, Muğla Fethiye Yolu No:263, 48600 Ortaca/Muğla</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterDetails;

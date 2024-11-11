import React from "react";
import MapIframe from "./MapIframe";
import ContactForm from "./ContactForm";

function ContactPage() {
  return (
    <section className="contact-page">
      <div className="container">
        <div className="our-services-sida-header">
          <h1>İletişim</h1>
          <div className="sida-headers"></div>
        </div>
        <div className="contact-container">
            <div className="contact-details-page">
              <div className="contact-details-page-right">
                <h1>Bize Ulaşın</h1>
                <div className="contanct-page-right-detail">
                  <ul>
                    <li><span className="bold">Servis talep hattı - 7/24:</span> <a href="tel:+905425335292">+90 542 533 5292</a></li>
                    <li><span className="bold">Telefon:</span> Ekrem Kaya - <a href="tel:+905424522757">+90 542 452 2757</a></li>
                    <li><span className="bold">E-posta:</span> <a href="mailto:ekrem.kaya@de-kaya.com">ekrem.kaya@de-kaya.com</a></li>
                    <li><span className="bold">Adres:</span> Yerbelen Mahallasi, Muğla Fethiye Yolu No:263, 48600 Ortaca/Muğla</li>
                  </ul>
                </div>
                
              </div>
              <div className="contact-details-page-left">
                <div className="contact-form-container">
                <h1>Bize Yazın</h1>
                  <ContactForm />
                </div>
              </div>
            </div>
          <MapIframe></MapIframe>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;

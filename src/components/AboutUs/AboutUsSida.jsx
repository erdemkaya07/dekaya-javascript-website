import React from "react";
import DeKayaLogo from "../../assets/images/dekaya-logo.png";

function AboutUsSida() {
  return (
    <section className="aboust-sida-us-section">
      <div className="container">
        <div className="about-sida-us-container">
          <img src={DeKayaLogo} alt="" />
        <div className="about-us-details">
          <h2 className="footer-detail-header">Hakkımızda</h2>
          <div className="footer-header-line"></div>
          <p>
            De-Kaya Bilgi Teknolojileri ve Soğutma Sistemleri, 30 yıllık sektör
            deneyimini ve güçlü altyapısını kullanarak 2013 yılında limited
            şirket yapısıyla sektördeki yeni yüzünü ortaya koymuştur. Sürekli
            gelişimi hedefleyen, yenilikçi bir vizyona sahip olan firmamız, bu
            yaklaşımı sayesinde başarılı projelere imza atmıştır. De-Kaya, bilgi
            teknolojileri ve soğutma sistemleri alanında sektördeki ilkelerinden
            ödün vermeden hizmetlerini sürdürmeyi ve müşterilerine en kaliteli
            çözümleri sunmayı hedeflemektedir.
          </p>

          <h2 className="footer-detail-header">Misyonumuz</h2>
          <div className="footer-header-line"></div>
          <p>
            De-Kaya Bilgi Teknolojileri ve Soğutma Sistemleri olarak misyonumuz,
            temel prensiplerimizden taviz vermeden ve her zaman müşteri
            memnuniyetini ön planda tutarak sektörde başarılı projelere imza
            atmaya devam etmektir. Kısa sürede kazandığımız başarımızı ileriye
            taşımak ve bilgi teknolojileri ile soğutma sistemleri sektöründe
            öncü ve yenilikçi bir lider olmak en büyük hedefimizdir. Firmamız,
            sektörde fark yaratan, güvenilir ve müşteri odaklı çözümleri ile
            tanınmayı amaçlamaktadır.
          </p>

          <h2 className="footer-detail-header">Vizyonumuz</h2>
          <div className="footer-header-line"></div>
          <p>
            De-Kaya’nın vizyonu, kalite ve hizmetten ödün vermeden sektörde öncü
            konuma yükselmek ve müşterilere en güvenilir çözümleri sunarak
            sektörde bir referans noktası haline gelmektir. Müşterilerimizin
            ihtiyaçlarına yönelik yenilikçi çözümler geliştirmek ve sektördeki
            en iyi uygulamaları sunmak için durmaksızın çalışmaktayız.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSida;

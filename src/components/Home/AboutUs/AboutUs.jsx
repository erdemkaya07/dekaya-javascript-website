import React from "react";
import SectionHeaders from "../../SectionHeaders";
import AIImage from "../../../assets/images/airesim.png";
import AboutCard from "./AboutCard";

function AboutUs() {
  return (
    <section className="about-us-section">
      <div className="container">
        <div className="about-us-container">
          <SectionHeaders index={1} />
          <div className="about-us-detail">
            <div className="detail-right">
              <div className="detail-right-text">
                <p>
                  De-Kaya Bilgi Teknolojileri ve Soğutma Sistemleri 30 yıllık iş
                  tecrübesinin vermiş olduğu alt yapıyla 2013 yılında limited
                  yapıya sahip bir işletme olarak sektördeki yerini almıştır.
                </p>
                  <h2>Neler Yapıyoruz?</h2>
                <p>
                  Soğuk Hava odaları imalat, bakım ve servisi. Ticari
                  buzdolapları satış, montaj, bakım ve servisi. Seyyar Soğutma
                  odaları satış ve kiralama hizmetleri. Tecrübeli ekibimizle 7
                  gün 24 saat servis hizmetimiz bulunmaktadır. Muğla ve tüm
                  ilçeleri, Kaş, Kalkan, Denizli, Aydın ve müşterilerimizin
                  talebi ve istediği olduğunda tüm Türkiye'ye hizmet
                  vermekteyiz.
                </p>
              </div>
              <div className="line"></div>

              <div className="detail-right-container">
                <AboutCard />
              </div>
            </div>
            <div className="detail-left">
              <img src={AIImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

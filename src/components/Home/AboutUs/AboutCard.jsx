import React from "react";

function AboutCard() {
  return (
    <>
      <div className="detail-right-card">
        <div className="cardIcon">
          <i className="fa-solid fa-face-smile"></i>
        </div>
        <div className="card-text">
          <p className="card-text-header">Memnuniyet</p>
          <p>%100 Müşteri Memnuniyeti</p>
        </div>
      </div>

      <div className="detail-right-card">
        <div className="cardIcon">
          <i className="fa-solid fa-people-group"></i>
        </div>
        <div className="card-text">
          <p className="card-text-header">Ekip</p>
          <p>İşinde Uzman Profesyonel Kadro</p>
        </div>
      </div>

      <div className="detail-right-card">
        <div className="cardIcon">
          <i className="fa-solid fa-people-arrows"></i>
        </div>
        <div className="card-text">
          <p className="card-text-header">Referanslar</p>
          <p>Kurumsal onlarca referans</p>
        </div>
      </div>

      <div className="detail-right-card">
        <div className="cardIcon">
          <i className="fa-solid fa-handshake"></i>
        </div>
        <div className="card-text">
          <p className="card-text-header">Güven</p>
          <p>Kaliteli ve garantili hizmet</p>
        </div>
      </div>

      <div className="detail-right-card">
        <div className="cardIcon flex">
          <i className="fa-solid fa-gauge-high"></i>
        </div>
        <div className="card-text">
          <p className="card-text-header">Hızlı Servis Hizmeti</p>
          <p>Arızalara hızlı müdahale</p>
        </div>
      </div>

      <div className="detail-right-card">
        <div className="cardIcon">
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="card-text">
          <p className="card-text-header">Kalite</p>
          <p>Üstün Hizmet Kalitesi</p>
        </div>
      </div>
    </>
  );
}

export default AboutCard;

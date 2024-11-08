import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ServicesData from "../../../../data/services.json";

function ServiceDetail() {
  const { serviceId } = useParams(); // URL'den gelen parametre
  const navigate = useNavigate(); // Yönlendirme için useNavigate hook'u

  // JSON verisinde eşleşen hizmeti bul
  const service = ServicesData.services.find((item) => item.link === serviceId);

  if (!service) {
    return <p>Hizmet bulunamadı.</p>;
  }

  return (
    <div className="container">
      <div className="service-detail">
        <h1>{service.title}</h1>
        <div className="sida-headers"></div>
        <img src={service.imagesrc} alt={service.imgalt} />
        <div className="service-detail-desc">
          {service.descriptions.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
        <button className="btn" onClick={() => navigate("/hizmetlerimiz")}>
          Hizmetlerimize Geri Dön
        </button>
      </div>
    </div>
  );
}

export default ServiceDetail;

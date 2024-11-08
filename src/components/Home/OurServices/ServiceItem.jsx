import React from "react";
import { Link } from "react-router-dom";

function ServiceItem({ item }) {
  return (
    <div className="service-item">
      <div className="card-image">
        <img src={item.imagesrc} alt={item.imgalt} />
      </div>
      <div className="card-details">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <Link to={`/hizmetlerimiz/${item.link}`}>
          Devamını gör<i className="fa-solid fa-arrow-right pl-0"></i>
        </Link>
      </div>
    </div>
  );
}

export default ServiceItem;

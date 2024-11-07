import React from "react";

function ServiceItem({ item }) {
  return (
    <div className="service-item">
      <div className="card-image">
        <img src={item.imagesrc} alt={item.imgalt} />
      </div>
      <div className="card-details">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <a href="#">
          Devamını gör<i className="fa-solid fa-arrow-right pl-0"></i>
        </a>
      </div>
    </div>
  );
}

export default ServiceItem;

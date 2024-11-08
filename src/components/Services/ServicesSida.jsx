import React from "react";
import ServiceList from "../Home/OurServices/ServiceList";

function ServicesSida() {
  return (
    <section className="our-services-sida" aria-label="Our services sida">
      <div className="container">
        <div className="our-services-sida-header">
          <h1>Hizmetlerimiz & Servislerimiz</h1>
          <div className="sida-headers"></div>
        </div>
        <ServiceList />
      </div>
    </section>
  );
}

export default ServicesSida;

import React from "react";
import SectionHeaders from "../../SectionHeaders";
import ServiceList from "./ServiceList";

function OurServices() {
  return (
    <section className="our-services" aria-label="Our services section">
      <div className="container">
      <SectionHeaders index={0} />
      <ServiceList />
      </div>
    </section>
  );
}
export default OurServices;

import React from "react";
import SectionHeaders from "../../SectionHeaders";
import CoolingRoomImage from "../../../assets/images/coolingroom.jpg"


function OurServices() {


  return (
    <section className="our-services" aria-label="Our services section">
      <SectionHeaders index={0} />
      <div className="services">
        <div className="service-card">
          <div className="card-image">
            <img src={CoolingRoomImage} alt="Soğuk hava odası" />
          </div>
          <div className="card-details">
            <h3>Soğuk Hava Depoları Hakkında</h3>
            <p>
              De-Kaya soğutma sistemleri olarak, Soğuk Hava Deposu satış, montaj, arıza ve bakım hizmeti vermekteyiz.
            </p>
            <a href="#">Devamını gör<i className="fa-solid fa-arrow-right pl-0"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OurServices;

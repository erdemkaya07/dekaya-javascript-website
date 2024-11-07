import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ServiceItem from "./ServiceItem";
import ServicesData from "../../../../data/services.json";

function ServiceList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // servicesData ile benzersiz id'leri ekleyerek sadece bir kez dizi oluştur
    const servicesUniqId = ServicesData.services.map((item) => ({
      ...item,
      id: uuidv4(),
    }));
    setServices(servicesUniqId);
  }, []);


  return (
    <div className="services">
      {services.map((item) => (
        <div className="service-card" key={item.id}>
          <ServiceItem item={item} />
        </div>
      ))}
    </div>
  );
}

export default ServiceList;

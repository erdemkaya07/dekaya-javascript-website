import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ReferencesItem from "./ReferencesItem";
import ReferencesData from '../../../data/references.json'



function ReferencesList() {

  const [references, setReferences] = useState([])


  useEffect(() => {
        // ReferencesData ile benzersiz id'leri ekleyerek sadece bir kez dizi oluştur
    const referencesUniqId = ReferencesData.references.map((item) => ({
      ...item,
      id: uuidv4(),
    }));
    setReferences(referencesUniqId);
  }, [])
  

  return (
    <section className="reference-page-section">
      <div className="container">
        <div className="our-services-sida-header">
          <h1>Referanslar</h1>
          <div className="sida-headers"></div>
        </div>
        <div className='references-container' >
            {references.map((item) => (
              <ReferencesItem item={item} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default ReferencesList;

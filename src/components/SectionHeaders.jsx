import React from "react";
import SectionHeaderData from "../../data/sectionheaders.json";

function SectionHeaders({ index = 0 }) {
  const headers = SectionHeaderData.sectionheaders;

  const title = headers[index] ? headers[index].title : "Başlık Bulunamadı";

  return (
    <div className="sectionHeader">
      <h1 className="">{title}</h1>
      <div className="headerSpan"></div>
    </div>
  );
}

export default SectionHeaders;

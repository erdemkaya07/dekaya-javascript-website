import React from 'react'



function ReferencesItem( {item} ) {

  return (
      <div className="reference-card" key={item.id}>
        <img className='reference-img' src={item.imgsrc} alt={item.imgalt} />
        <p className="reference-title">{item.referenceTitle}</p>
        <p className="reference-desc">{item.referenceDesc}</p>
  </div>
  )
}

export default ReferencesItem
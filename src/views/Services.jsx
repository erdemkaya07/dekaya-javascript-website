import React from 'react'
import Breadcrumbs from '../Breadcrumbs'
import ServiceList from "../components/Home/OurServices/ServiceList";


function Services() {
  return (
    <>
      <Breadcrumbs />
      <section className="our-services-sida" aria-label="Our services sida">
      <div className="container">
        <div className="our-services-sida-header">
          <h1>Hizmetlerimiz & Servislerimiz</h1>
          <div className="sida-headers"></div>
        </div>
        <ServiceList />
      </div>
    </section>
    </>
  )
}

export default Services
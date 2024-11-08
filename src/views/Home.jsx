import React from 'react'
import BannerSection from '../components/Home/BannerSection/BannerSection'
import OurServices from '../components/Home/OurServices/OurServices'
import AboutUs from '../components/Home/AboutUs/AboutUs'
import StructuredData from '../StructuredData'

function Home() {
  return (
    <>
      <StructuredData />
      <BannerSection />
      <OurServices />
      <AboutUs />
    </>
  )
}

export default Home
import React from 'react'
import BannerSection from '../components/Home/BannerSection/BannerSection'
import OurServices from '../components/Home/OurServices/OurServices'
import AboutUs from '../components/Home/AboutUs/AboutUs'

function Home() {
  return (
    <>
      <BannerSection />
      <OurServices />
      <AboutUs />
    </>
  )
}

export default Home
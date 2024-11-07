import React from 'react'
import CoolingRoom from '../../../assets/images/coolingroom.jpg'
import { Link } from 'react-router-dom'
import MarqueeText from './MarqueeText'

function BannerSection() {
  return (
    <section className='banner-section' aria-label="Banner section">
      <div className='container'>
        <div className="banner-container">
          <div className="banner-right">
            <div className="banner-right-text">
              <h1>De-Kaya Soğutma Sistemleri</h1>
              <h3>7 Gün 24 Saat Servis Hizmeti</h3>
              <p aria-label="Banner paragraph">
                Hizmetlerimiz ve işletmemiz hakkında daha detaylı bilgi almak
                için lütfen bizimle iletişime geçin.
              </p>
            </div>
            <Link to='/iletisim' className="btn btn-primary" aria-label="Contact button">
              İletişim
            </Link>
          </div>
          <div className="banner-left">
          <img
              src={CoolingRoom}
              alt="De-Kaya soğuk hava deposu imalat bakım"
            />
          </div>
        </div>
        <MarqueeText />
      </div>
    </section>
  )
}

export default BannerSection
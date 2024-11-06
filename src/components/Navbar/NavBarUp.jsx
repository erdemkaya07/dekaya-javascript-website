import React from 'react'

function NavBarUp( {className} ) {
  return (
    <div className={`navbar-up ${className}`}>
        <div className="container">
          <div className="navbar-contact-detail">
          <div className="contactInfo">
            <ul className="contactInfoList" aria-label="Contact info">
              <li aria-label="phone number">
                <i className="fa-solid fa-phone-volume pr-0"></i><span>Telefon: 0542 533 5292</span></li>
              <li aria-label="E-mail">
                <i className="fa-solid fa-envelope-open-text pr-0"></i><span>E-posta:ekrem.kaya@de-kaya.com</span></li>
              <li aria-label="Working time">
                <i className="fa-solid fa-clock pr-0"></i><span>Çalışma Saatleri: 08:00 - 22:00</span></li>
            </ul>
          </div>
          <div className="socialMedia">
            <ul className="social-media-icon" aria-label="Social media icons">
              <li aria-label="Social media facebook">
                <a href="#" aria-label="Social media facebook"><i className="fa-brands fa-facebook fs-1 secondary"></i></a>
              </li>
              <li aria-label="Social media instagram">
                <a href="#" aria-label="Social media facebook"><i className="fa-brands fa-instagram fs-1 secondary"></i></a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
  )
}

export default NavBarUp
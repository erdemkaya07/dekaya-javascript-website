import React from 'react'

function Footer() {

  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <p>© Copyright De-Kaya Soğutma Sistemleri {currentYear}. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}

export default Footer
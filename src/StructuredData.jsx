import React from 'react';
import { Helmet } from 'react-helmet-async';

function StructuredData() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "De-Kaya Soğutma Sistemleri",
            "description": "Seyyar soğutma odaları, ticari buzdolapları ve soğuk hava depoları için servis ve kiralama hizmetleri sunuyoruz.",
            "telephone": "+90542 533 5292",
            "email": "ekrem.kaya@de-kaya.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Yerbelen Mahallasi, Muğla Fethiye Yolu No:263",
              "addressLocality": "Ortaca",
              "addressRegion": "Muğla",
              "postalCode": "48600",
              "addressCountry": "TR"
            }
          }
        `}
      </script>
    </Helmet>
  );
}

export default StructuredData;

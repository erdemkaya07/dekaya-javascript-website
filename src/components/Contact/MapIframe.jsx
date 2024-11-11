import React from 'react'

function MapIframe() {
  return (
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d949.5049401540797!2d28.789732616840084!3d36.82472100478759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c07a4a80fe03ad%3A0x5b5e6e156f5f535e!2sDe-Kaya%20Bilgi%20Teknolojileri%20ve%20So%C4%9Futma%20Sistemleri!5e0!3m2!1ssv!2sse!4v1726569500135!5m2!1ssv!2sse"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    style={{ border: 0, width: '100%', height: '450px' }}
    title="Location Map"
  ></iframe>
  )
}

export default MapIframe
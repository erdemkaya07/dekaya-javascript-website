import React, { useEffect, useRef } from 'react';

const MarqueeText = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let startPosition = marquee.offsetWidth;

    const animateMarquee = () => {
      startPosition -= 1; // Kayma hızı, daha hızlı yapmak için değeri arttırabilirsiniz
      if (startPosition < -marquee.scrollWidth) {
        startPosition = marquee.offsetWidth;
      }
      marquee.style.transform = `translateX(${startPosition}px)`;
      requestAnimationFrame(animateMarquee);
    };

    animateMarquee();
  }, []);

  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', backgroundColor: '#f8f8f8', padding: '1rem', borderRadius: '5px', marginBlock: '2rem' }}>
      <p ref={marqueeRef} style={{ display: 'inline-block', fontWeight: 'bold', color: '#333' }}>
        Soğuk Hava Odaları - Projelendirme, İmalat, Bakım ve Servisi 
        • Ticari Buzdolapları - Projelendirme, İmalat, Bakım ve Servisi 
        • Soğutma grupları servis ve bakımı 
        • Seyyar Soğutma odaları imalat, servis ve Kiralama Hizmeti 
        • Buz makineleri Servis hizmeti 
        • Açık tezgah sunum soğutma ürünleri 
      </p>
    </div>
  );
};

export default MarqueeText;

import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../../../data/blogs.json';
import { Helmet } from 'react-helmet-async';

function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <p>Blog yazısı bulunamadı.</p>;
  }

  return (
    <div className="container">
      <div className="blog-container">
        <div className="blog-detail">
          <h1 className='blog-detail-title'>{blog.title}</h1>
          <p className='blog-detail-content'>{blog.content}</p>
        </div>
      </div>
      {/* BlogPosting Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.de-kaya.com/blog/${blog.slug}`
            },
            "headline": blog.title,
            "description": blog.metaDescription,
            "datePublished": "2023-11-01T08:00:00+08:00", // Yayınlanma tarihini ISO formatında ekleyin
            "dateModified": "2023-11-01T08:00:00+08:00", // Güncellenme tarihi
            "author": {
              "@type": "Person",
              "name": "Ekrem Kaya" // Yazar adı
            },
            "publisher": {
              "@type": "Organization",
              "name": "De-Kaya",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.de-kaya.com/images/dekaya-logo.png" // Logonuzun URL'si
              }
            },
            "image": "https://www.de-kaya.com/images/seyyarsogutma.png" // Blog yazısına ait ana görsel URL'si
          })}
        </script>
      </Helmet>
    </div>
  );
}

export default BlogDetail;

import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../../../data/blogs.json';

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

    </div>
  );
}

export default BlogDetail;

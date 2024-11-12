import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../../../data/blogs.json';

function BlogList() {
  return (
      <div className="blog-list">
        <h1>Blog</h1>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link to={`/blog/${blog.slug}`}>
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default BlogList;

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './Blogs';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogPosts[parseInt(id)];

  if (!blog) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-red-500">Blog post not found</h2>
        <Link to="/blogs" className="text-pink-600 underline mt-4 block">Go back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img src={blog.image} alt={blog.title} className="w-full rounded-lg mb-6 h-72 object-cover" />
      <h1 className="text-4xl font-bold mb-2 text-gray-800">{blog.title}</h1>
      <p className="text-gray-500 mb-4">
        Posted on <span className="font-semibold">{blog.date}</span> by{' '}
        <span className="font-semibold">{blog.author}</span>
      </p>
      <p className="text-gray-700 text-lg leading-7 whitespace-pre-line">{blog.content.trim()}</p>

      <Link
        to="/blogs"
        className="inline-block mt-8 text-pink-600 hover:text-pink-800 font-semibold underline"
      >
        ← Back to all blogs
      </Link>
    </div>
  );
};

export default BlogDetails;

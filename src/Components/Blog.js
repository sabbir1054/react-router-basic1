import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <h1>I mam Blog Components</h1>
      <ul>
        <li>
          <Link to="/blog">Blog</Link>{" "}
        </li>
        <li>
          <Link to="/contact">Contact</Link>{" "}
        </li>
        <li>
          <Link to="/home">Home Page</Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Blog;

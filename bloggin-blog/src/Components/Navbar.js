import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
          <h1>Bloggin Blog</h1>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/blog">Blogs</Link>
            <Link to="/create">New Blog</Link>
          </div>
        </nav>
      );
}
export default Navbar;
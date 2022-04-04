import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
// Navbar
const Navbar = () => {
    return (
        <div className="nav-container">
            <nav class="nav">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/reviews" className="nav-item">Reviews</Link>
                <Link to="/dashbord" className="nav-item">Dashboard</Link>
                <Link to="/blogs" className="nav-item">Blogs</Link>
                <Link to="/about" className="nav-item">About</Link>
            </nav>
        </div>
    );
};

export default Navbar;
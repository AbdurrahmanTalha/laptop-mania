import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className="nav-container">
            <nav class="nav">
                <Link to="/" class="nav-item" active-color="orange">Home</Link>
                <Link to="/reviews" class="nav-item" active-color="green">Reviews</Link>
                <Link to="/dashbord" class="nav-item" active-color="blue">Dashboard</Link>
                <Link to="/blogs" class="nav-item" active-color="red">Blogs</Link>
                <Link to="/about" class="nav-item" active-color="rebeccapurple">About</Link>
                <span class="nav-indicator"></span>
            </nav>
        </div>
    );
};

export default Navbar;
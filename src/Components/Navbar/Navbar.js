import React from 'react';
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className="nav-container">
            <nav class="nav">
                <a href="#" class="nav-item is-active" active-color="orange">HOME</a>
                <a href="#" class="nav-item" active-color="green">CONTACT</a>
                <a href="#" class="nav-item" active-color="blue">ABOUT</a>
                <a href="#" class="nav-item" active-color="red">LOACATIONS</a>
                <a href="#" class="nav-item" active-color="rebeccapurple">TESTIMONIALS</a>
                <span class="nav-indicator"></span>
            </nav>
        </div>
    );
};

export default Navbar;
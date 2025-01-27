import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Save Mother Nature</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/get-involved">Get Involved</Link>
                <Link to="/learn">Learn</Link>
                <Link to="/take-action">Take Action</Link>
                <Link to="/explore-resources">Explore Resources</Link>
                <Link to="/donate">Donate</Link>
            </div>
        </nav>
    );
}

export default Navbar;

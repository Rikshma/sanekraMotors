import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import companyLogo from '../Assets/CompanyLogo.jpg';

const Navbar = () => {
    return (
            <div className="navbar-container">
                <img src={companyLogo} alt="Company Logo" className="company-logo" />
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Brands</Link></li>
                        <li><Link to="/wholesale">Wholesale</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
    );
};

export default Navbar;

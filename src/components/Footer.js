import React, { useEffect } from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import CompanyLogo from '../Assets/CompanyLogo.jpg';
import locationIcon from '../Assets/Location2.png';
import phoneIcon from '../Assets/Call.png';
import emailIcon from '../Assets/Mail.png';
import Gmail from '../Assets/Gmail.png';
import facebookIcon from '../Assets/Facebook1.png';
import whatsappIcon from '../Assets/Whatapp.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const phoneNumber = '94776561924'; // Correct format without '+'

    const generateWhatsAppLink = () => {
        return `https://wa.me/${phoneNumber}`;
    };

    const scrollToTop = () => {
        const scrollStep = -window.scrollY / (1000 / 18); // Adjust the divisor to control speed (larger number means slower speed)
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 10); // Adjust the interval to control speed (larger number means slower speed)
    };

    useEffect(() => {
        const footer = document.querySelector('.footer-container');

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { width, height } = footer.getBoundingClientRect();
            const xPercent = (clientX / width) * 100;
            const yPercent = (clientY / height) * 100;
            footer.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, #023E8A, #BA181B)`;
        };

        footer.addEventListener('mousemove', handleMouseMove);

        return () => {
            footer.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* <div className="footer-left">
                    <img src={CompanyLogo} alt="Company Logo" className="fcompany-logo" />
                    <p className="company-description"> Quality vehicle parts, exceptional service, and unbeatable value at Sanekra Motors.</p>
                </div> */}
                <div className="footer-right">
                    <div className="footer-section">
                        <img src={CompanyLogo} alt="Company Logo" className="fcompany-logo" />
                        <p className="company-description"> Quality vehicle parts, exceptional service, and unbeatable value at Sanekra Motors.</p>
                    </div>
                    <div className="footer-section">
                        <h3>Contact</h3>
                        <div className="contact-info">
                            <img src={locationIcon} alt="Location" className="icon" />
                            <span>No 378/A, Chilow Road, Wiskkala, Sri Lanka</span>
                        </div>
                        <div className="contact-info">
                            <img src={phoneIcon} alt="Phone" className="icon" />
                            <span>+94 77 656 1924</span> {/* Display format with spaces for readability */}
                        </div>
                        <div className="contact-info">
                            <img src={emailIcon} alt="Email" className="icon" />
                            <span>sanekramotors@gmail.com</span>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3>Information</h3>
                        <ul className="information-list">
                            <li onClick={scrollToTop}><Link to="/">Home</Link></li>
                            <li onClick={scrollToTop}><Link to="/product">Brands</Link></li>
                            <li onClick={scrollToTop}><Link to="/wholesale">Wholesale</Link></li>
                            <li onClick={scrollToTop}><Link to="/aboutus">About Us</Link></li>
                            <li onClick={scrollToTop}><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Social Media</h3>
                        <div className="social-links">
                            <a href="https://www.facebook.com/profile.php?id=100075918463420&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                <img src={facebookIcon} alt="Facebook" className="social-icon" />
                            </a>
                            <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                                <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
                            </a>
                            < a href="https://mail.google.com/mail" target='_blank' rel='noopener noreferrer'>
                                <img src={Gmail} alt='Gmail' className='social-icon'></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Sanekra Motors. All Rights Reserved.</p>
            </div>
            <button className="scroll-to-top" onClick={scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </footer>
    );
};

export default Footer;

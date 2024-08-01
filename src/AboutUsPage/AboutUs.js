import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aboutImage from '../Assets/image7.jpg';
import BodyImage from '../Assets/Bodyimage.png';
import image1 from '../Assets/image1.jpg';
import image2 from '../Assets/image2.jpg';
import image3 from '../Assets/image3.jpg';
import image4 from '../Assets/image4.jpg';
import image5 from '../Assets/image5.jpg';
import image6 from '../Assets/image6.jpg';

import image8 from '../Assets/image8.jpg';
import image9 from '../Assets/image9.jpg';
import './AboutUs.css';

const AboutUs = () => {
    const galleryRef = useRef(null);

    // Function to handle left arrow click
    const scrollLeft = () => {
        galleryRef.current.scrollBy({
            left: -galleryRef.current.clientWidth / 1, // Scroll by half the container's width
            behavior: 'smooth'
        });
    };

    // Function to handle right arrow click
    const scrollRight = () => {
        galleryRef.current.scrollBy({
            left: galleryRef.current.clientWidth / 1, // Scroll by half the container's width
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <Navbar />
            <div className="about-us-container">
                <div className='main-image'>
                    <img src={aboutImage} alt="About" className="about-image" />
                </div>
                <h1 className="head-text">
                    About Sanekra Motors
                </h1>
                <p className="about-detail">
                    Welcome to Sanekra Motors, your trusted source for high-quality auto parts in Sri Lanka. We are dedicated to providing a wide range of spare parts to meet the diverse needs of vehicle owners, mechanics, and retailers across the island.<br /><br />
                    With a strong focus on quality and customer satisfaction, we import premium auto parts from renowned international suppliers to ensure the best performance and reliability for your vehicles. Our extensive inventory includes everything from essential components to specialized parts, allowing us to serve both common and unique automotive needs effectively.
                </p>
                <h2 className='sub-head-text-a'>Our Commitment</h2>
                <p className='sub-phara-a'>
                    At Sanekra Motors, customer satisfaction is at the heart of everything we do. We are committed to providing top-notch products, expert advice, and unparalleled support to help you keep your vehicle in optimal condition. Our team of experienced professionals is always ready to assist you in finding the right parts and solutions for your automotive needs.
                </p>
                <h2 className='sub-head-text'>Why Choose Us</h2>
                <ul className="sub-head-text-detail">
                    <li>Wide Range of Products: Extensive inventory of high-quality auto parts.</li>
                    <li>Trusted Brands: Parts compatible with popular vehicle brands.</li>
                    <li>Reliable Wholesale: Efficient distribution network for bulk orders.</li>
                    <li>Exceptional Service: Dedicated customer support and expert guidance.</li>
                    {/* <li>paojosifnpaskofoaisfpoaijsofp</li> */}
                </ul>


                <div className="mission-vision-section">
                    <div className="mission-paragraph">
                        <h2 className="mission-heading">Our Mission</h2>

                        <p className="mission-text">
                            "To become the leader and the most trusted brand in the automotive after market in <br />Sri Lanka"
                        </p>
                    </div>

                    <div className="vision-paragraph">
                        <h2 className="vision-heading">Our Vision</h2>

                        <p className="vision-text">
                            To ensure high quality service with high quality brands and honesty towards our dedicated dealer network, loyal customers and our committed employees. keeping to our motto: <br />"One world of auto parts...!"
                        </p>
                    </div>
                </div>
                <div className="body-image-container">
                    <img src={BodyImage} alt="Cover" className="body-image" />
                    <div className="body-image-text">
                        <h1 className="headline">Sri Lanka's No 1 Spare Parts Dealer</h1>
                        <p className="paragraph"><br />Your go-to destination for dependable auto parts, driven by a vision for excellence and integrity.</p>
                    </div>
                </div>
                <h1 className="gallery-text">
                    Image Gallery
                </h1>
                <div className="image-gallery-wrapper">
                    <button className="scroll-button left" onClick={scrollLeft}>◀</button>
                    <div className="image-gallery-container" ref={galleryRef}>
                        <img src={image1} alt="Gallery 1" className="gallery-image" />
                        <img src={image2} alt="Gallery 2" className="gallery-image" />
                        <img src={image3} alt="Gallery 3" className="gallery-image" />
                        <img src={image4} alt="Gallery 4" className="gallery-image" />
                        <img src={image5} alt="Gallery 5" className="gallery-image" />
                        <img src={image6} alt="Gallery 6" className="gallery-image" />

                        <img src={image8} alt="Gallery 8" className="gallery-image" />
                        <img src={image9} alt="Gallery 9" className="gallery-image" />
                    </div>
                    <button className="scroll-button right" onClick={scrollRight}>▶</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;

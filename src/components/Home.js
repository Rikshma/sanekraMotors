import React, { useEffect } from 'react';
import './Home.css';
import coverPhoto from '../Assets/HomeImage.png';
// BackgroundImage from '../Assets/BackgroundImage.png';

import EngineA from '../Assets/Filters.jpg';
import EngineB from '../Assets/Lights.jpg';
import EngineC from '../Assets/BrakeSystem.jpg';
import EngineD from '../Assets/Engine.jpg';

import BrandA from '../Assets/Brand1.png';
import BrandB from '../Assets/Brand2.png';
import BrandC from '../Assets/Brand3.png';
import BrandD from '../Assets/Brand4.png';

import WholeSaleA from '../Assets/Wholesale1.jpg';
import WholeSaleB from '../Assets/Wholesale5.jpg';
import WholeSaleC from '../Assets/Wholesale3.jpg';
import WholeSaleD from '../Assets/Wholesale4.jpg';

// import overlayImage from '../Assets/overlayImage.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {

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
        const containers = document.querySelectorAll('.container');

        function checkScroll() {
            const scrollPosition = window.scrollY + window.innerHeight;

            containers.forEach(container => {
                const gallery = container.querySelector('.gallery');
                const contentBox = container.querySelector('.content-box');

                if (scrollPosition > container.offsetTop + container.offsetHeight / 2) {
                    if (gallery) {
                        gallery.style.opacity = '1';
                        gallery.style.transform = 'translateY(0)';
                    }

                    if (contentBox) {
                        contentBox.style.opacity = '1';
                        contentBox.style.transform = 'translateY(0)';
                    }
                }
            });
        }

        window.addEventListener('scroll', checkScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    return (
        <div className="home-container">
            <div className="cover-photo-container">
                <img src={coverPhoto} alt="Cover" className="cover-photo" />
                {/* <img src={overlayImage} alt="Overlay" className="overlay-image" /> New overlay image */}
                <div className="cover-photo-text">Sanekra Motors Company (Private) Limited.</div>
                <div className="title-container">
                    <h1 className="title">
                        One World of Auto Parts
                    </h1>
                    <div className="red-line-c"></div>
                    <p className="subtitle">
                        We are the Sri Lanka No. 1 Vehicle Spare parts dealer. We offers the widest selection of auto parts<br /> and are proud to stock a comprehensive range of quality genuine and aftermarket auto parts<br /> suitable for an array of models and popular auto brands in Sri Lanka
                    </p>
                    <p>
                        <Link to="/AboutUs" className="about-us-link">About Us</Link> {/* Link component */}
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="gallery">
                    <div className="image-grid">
                        <img src={EngineA} alt="ImageA" />
                        <img src={EngineB} alt="ImageB" />
                        <img src={EngineC} alt="ImageC" />
                        <img src={EngineD} alt="ImageD" />
                    </div>
                </div>
                <div className="content-box">
                    <h1>Vehicle Auto Parts</h1>
                    <p>
                        We offer a comprehensive range of high-quality auto parts for all vehicle types, including engine components, suspension systems, and more. Whether you need parts for maintenance, repairs, or upgrades, our extensive inventory ensures you'll find exactly what you're looking for.<br /><br />
                        Our selection includes everything from essential engine parts to advanced suspension systems, designed to enhance performance and reliability. We pride ourselves on providing top-notch customer service and expert advice to help you choose the right parts for your vehicle.
                    </p>
                    <button>SEE MORE</button>
                </div>
            </div>

            <div className="container reverse">
                <div className="gallery">
                    <div className="image-grid">
                        <img src={BrandB} alt="ImageA" />
                        <img src={BrandA} alt="ImageB" />
                        <img src={BrandC} alt="ImageC" />
                        <img src={BrandD} alt="ImageD" />
                    </div>
                </div>
                <div className="content-box">
                    <h1>Our Vehicle Brands</h1>
                    <p>
                        Our company supplies spare parts for a wide range of the most popular vehicle brands in Sri Lanka. We stock high-quality components compatible with well-known brands, ensuring that you have access to reliable and durable parts for your vehicle's needs.<br /><br />
                        Whether you are looking for parts to keep your vehicle running smoothly or to enhance its performance, our comprehensive range is designed to meet your demands. Trust us to provide the right parts to keep your vehicle in optimal condition.
                    </p>
                    <Link to="/product"><button onClick={scrollToTop}>VIEW BRANDS </button></Link>
                </div>
            </div>

            <div className="container second">
                <div className="gallery">
                    <div className="image-grid">
                        <img src={WholeSaleA} alt="ImageA" />
                        <img src={WholeSaleB} alt="ImageB" />
                        <img src={WholeSaleC} alt="ImageC" />
                        <img src={WholeSaleD} alt="ImageD" />
                    </div>
                </div>
                <div className="content-box">
                    <h1>Wholesale Distribution</h1>
                    <p>
                        We import high-quality auto spare parts from leading international suppliers and distribute them in bulk across our network of branches throughout the island.<br /><br />Our wholesale operations ensure a steady supply of premium parts, meeting the demands of retailers and service centers efficiently. We focus on timely deliveries, competitive pricing, and exceptional customer service to support our partners.
                    </p>
                    <Link to="/WholeSale"><button onClick={scrollToTop}>VIEW WHOLESALE</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;

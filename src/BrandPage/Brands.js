import React, { useRef } from "react";
import './Brands.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CoverImage from '../Assets/Brandscover.png';
import brand1 from '../Assets/Brand1.png';
import brand2 from '../Assets/Brand2.png';
import brand3 from '../Assets/Brand3.png';
import brand4 from '../Assets/Brand4.png';
import brand5 from '../Assets/Brand5.png';
import brand6 from '../Assets/Brand6.png';
import brand7 from '../Assets/Brand7.png';
import brand8 from '../Assets/Brand8.png';

function Brands() {
    const brandContainerRef = useRef(null);

    const scrollLeft = () => {
        if (brandContainerRef.current) {
            brandContainerRef.current.scrollBy({
                left: -400, // Adjust this value to set the scroll distance
                behavior: 'smooth',
            });
        } else {
            console.error("brandContainerRef.current is null");
        }
    };

    const scrollRight = () => {
        if (brandContainerRef.current) {
            brandContainerRef.current.scrollBy({
                left: 400, // Adjust this value to set the scroll distance
                behavior: 'smooth',
            });
        } else {
            console.error("brandContainerRef.current is null");
        }
    };

    return (
        <div>
            <Navbar />
            <div className="brands-container">
                <div className="cover-photo">
                    <img src={CoverImage} alt="Cover" className="cover-image" />
                </div>
                <div className="intro-text">
                    <h1>Our Brands</h1>
                </div>

                <div className="pharagraph">
                    <p>Our company supplies spare parts for a wide range of the most popular vehicle brands in Sri Lanka. We stock high-quality components compatible with well-known brands, ensuring that you have access to reliable and durable parts for your vehicle's needs.<br /><br />
                        From everyday cars to premium models, our inventory includes parts that meet or exceed the original equipment standards, giving you confidence in their fit and performance. Our selection spans everything from essential maintenance parts to specialized components, allowing us to cater to a diverse range of vehicle requirements. <br /><br />
                        Whether you are looking for parts to keep your vehicle running smoothly or to enhance its performance, our comprehensive range is designed to meet your demands. Trust us to provide the right parts to keep your vehicle in optimal condition.</p>
                </div>
                <div className="brands-name">
                    <ul className="brands">
                        <li>TOYOTA</li>
                        <li>NISSAN</li>
                        <li>SUZUKI</li>
                    </ul>
                    <ul className="brands">
                        <li>HONDA</li>
                        <li>MAZDA</li>
                        <li>MITSUBISHI</li>
                    </ul>
                    <ul className="brands">
                        <li>DAIHATSU</li>
                        <li>KIA</li>
                        <li>HYUNDAI</li>
                    </ul>
                    <ul className="brands">
                        <li>MARUTHI</li>
                        <li>TATA</li>
                        <li>MAHINDRA</li>
                    </ul>
                </div>
                {/* <div className="red-line-b"></div> */}
                <div className="brand-image-wrapper">
                    <div className="brand-image-container" ref={brandContainerRef}>
                        <img src={brand1} alt="Brand 1" className="brand-image" />
                        <img src={brand2} alt="Brand 2" className="brand-image" />
                        <img src={brand3} alt="Brand 3" className="brand-image" />
                        <img src={brand4} alt="Brand 4" className="brand-image" />
                        <img src={brand5} alt="Brand 5" className="brand-image" />
                        <img src={brand6} alt="Brand 6" className="brand-image" />
                        <img src={brand7} alt="Brand 7" className="brand-image" />
                        <img src={brand8} alt="Brand 8" className="brand-image" />
                    </div>
                    <button className="scroll-left" onClick={scrollLeft}>◀</button>
                    <button className="scroll-right" onClick={scrollRight}>▶</button>
                </div>


            </div>
            <Footer />
        </div>
    );
}

export default Brands;

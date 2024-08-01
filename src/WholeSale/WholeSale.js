import React from 'react'
import './WholeSale.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import CoverImage from '../Assets/Wholesalecover2.png';
import CoverImage from '../Assets/WholeSale.png';
import WholesaleImage1 from '../Assets/Wholesale1.jpg'
import WholesaleImage2 from '../Assets/Wholesale2.png'
import WholesaleImage3 from '../Assets/Wholesale3.jpg'
import WholesaleImage4 from '../Assets/Wholesale4.jpg'
import WholesaleImage5 from '../Assets/Wholesale5.jpg'
import WholesaleImage6 from '../Assets/Wholesale6.jpg'

function WholeSale() {
    return (
        <div>
            <Navbar />
            <div className="wholesale-container">
                <div className="cover-photo">
                    <img src={CoverImage} alt="Cover" className="cover-image" />
                </div>
                <div className="intro-text">
                    <h1>Wholesale</h1>
                </div>

                <div className="pharagraph">
                    <p>We import high-quality auto spare parts from leading international suppliers and distribute them in bulk across our extensive network of branches throughout the island. Our wholesale operations ensure a consistent supply of premium parts, meeting the demands of retailers and service centers efficiently.<br /><br />
                        With a focus on reliability and value, we streamline the supply chain to deliver parts quickly and cost-effectively. Our robust distribution network allows us to cater to the needs of various regions, ensuring that our partners always have access to the parts they need to serve their customers. We are dedicated to supporting our clients with competitive pricing, timely deliveries, and exceptional customer service.</p>
                </div>
                <div className="card-container-a">
                    <div className="card">
                        <img src={WholesaleImage1} alt="Card Content 1" className="card-image" />
                    </div>
                    <div className="card">
                        <img src={WholesaleImage2} alt="Card Content 2" className="card-image" />
                    </div>
                    <div className="card">
                        <img src={WholesaleImage3} alt="Card Content 3" className="card-image" />
                    </div>
                </div>

                <div className="card-container-b">
                    <div className="card">
                        <img src={WholesaleImage4} alt="Card Content 1" className="card-image" />
                    </div>
                    <div className="card">
                        <img src={WholesaleImage5} alt="Card Content 2" className="card-image" />
                    </div>
                    <div className="card">
                        <img src={WholesaleImage6} alt="Card Content 3" className="card-image" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default WholeSale

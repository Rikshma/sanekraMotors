import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ContactUs.css';
import image1 from '../Assets/SpareParts2.jpg';
import image2 from '../Assets/SpareParts1.jpg';
import image3 from '../Assets/SpareParts3.jpg';
import whatsappIcon from '../Assets/WhatsApp.png'; // Import WhatsApp icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0,
            images: [image1, image2, image3],
        };
        this.formRef = React.createRef(); // Create a reference for the form
    }

    componentDidMount() {
        this.imageInterval = setInterval(this.nextImage, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.imageInterval);
    }

    nextImage = () => {
        this.setState(prevState => ({
            currentImageIndex: (prevState.currentImageIndex + 1) % prevState.images.length,
        }));
    };

    sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_myzmuuk',
            'template_8uhymdy',
            this.formRef.current,
            'HVmjbTcJbTH0xlqlw'
        )
            .then((result) => {
                alert("Message sent successfully!");
            }, (error) => {
                alert(`Failed to send message: ${error.text}`);
            });
    };

    render() {
        const { currentImageIndex, images } = this.state;

        return (
            <div>
                <Navbar />
                <div className="image-slider">
                    <div className="image-container">
                        <img src={images[currentImageIndex]} alt="Slideshow" className="slideshow-image" />
                        <div className="overlay">
                            <h1>CONTACT US</h1>
                            <p>Tel: +94 317935951</p>
                            <p>Email: sanekramotors@gmail.com</p>
                        </div>
                    </div>
                </div>

                <h1 className='intro-head'>Contact Us</h1>
                <p className='intro-paragraph'>
                    We are here to help you with any inquiries about our products and services. Feel free to reach out to us through the contact information below or send us a message using the form. We will get back to you as soon as possible.
                </p>

                <div className="content-container">
                    <div className="left-section">
                        <h1>Contact Info</h1>
                        <div className="contact-details">
                            <h2>Main Branch</h2>
                            <p>No, 316/A 1, Chilaw Road, Waikkala, Sri Lanka.</p>
                            <p>Phone Number: +94 317935951</p>
                            <p>Email: sanekramotors@gmail.com</p><br />

                            <h2>Other Branch</h2>
                            <p>No 62, Panchikawaththa road, Colombo 10.</p>
                            <p>Email: sanekramotors@gmail.com</p><br />

                            <h2>Chat With WhatsApp</h2>
                            <a href="https://wa.me/94776561924" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                                <div className="whatsapp-button">
                                    <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
                                    <span>WhatsApp</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="right-section">
                        <h1>Get Free Inquiry Now</h1>
                        <p>We will contact you as soon as possible</p>
                        <form className="inquiry-form" ref={this.formRef} onSubmit={this.sendEmail}>
                            <input type="text" name="user_name" placeholder="Name" required />
                            <input type="email" name="user_email" placeholder="Email" required />
                            <input type="text" name="telephone_number" placeholder="Telephone Number" required />
                            <textarea name="message" placeholder="Message" required></textarea>
                            <p>If you have questions or suggestions, please leave us a <br />message, we will reply you as soon as we can!</p>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="yellow-line"></div>
                <div className="find-us">
                    <h2>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" /> Find Us
                    </h2>
                </div>
                <div className="google-map-container">
                    <h3>Main Branch</h3>
                    <iframe
                        title="Main Branch Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.014145936863!2d79.86124321477377!3d7.309285594717624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2e7a7ec8ad8e1%3A0x64b9b6b0fcb4e4e7!2s316%2C%20Chilaw%20Road%2C%20Waikkal%2061150%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1616628111339!5m2!1sen!2sus"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                    <h3>Other Branch</h3>
                    <iframe
                        title="Other Branch Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.839184167478!2d79.8607!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2591946dbf3d1%3A0x4b9b6a7efcb4e4e7!2sNo.%2062%2C%20Panchikawatta%20Road%2C%20Colombo%2010%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1616628111339!5m2!1sen!2sus"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ContactUs;

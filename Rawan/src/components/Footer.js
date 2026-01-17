import React from 'react';
import { FaArrowRight, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './css/footer.css';
const Footer = () => {

    return (
        <div className='col-lg-9 col-md-9 col-12'>
               <footer className="footer-section">
            {/* Top Tags */}
            <div className="footer-top-line">
                <span className="footer-corner-tag">. Impactful Creative</span>
                <span className="footer-corner-tag right">. Global Support</span>
            </div>

            {/* Main CTA Section */}
            <div className="footer-hero">
                <div className="footer-hero-content">
                    <div className="footer-cta-area">
                        <h2 className="footer-main-title">
                            Let's<br />
                            Start your project
                        </h2>
                        <button className="get-in-touch-btn">
                            GET IN TOUCH
                            <span className="btn-arrow-circle">
                                <FaArrowRight />
                            </span>
                        </button>
                    </div>

                    <div className="footer-social-area">
                        <h3 className="social-heading">
                            Explore the Socials<br />
                            of Mivon
                        </h3>
                        <div className="social-icons-row">
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <FaTwitter />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/rawan-abdallah96" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Animated Background Pattern */}
                <div className="footer-background-pattern"></div>
            </div>

            
        </footer>
        </div>
    );
};

export default Footer;
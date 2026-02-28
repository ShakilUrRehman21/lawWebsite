import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Column 1: About */}
                    <div className="footer-col">
                        <h3>Sarfaraz Hussain</h3>
                        <p className="footer-subtitle">Advocate, Supreme Court of India</p>
                        <p className="footer-desc">
                            Authoritative, trustworthy, and established legal representation.
                            Protecting your rights and defending your future with dedicated excellence.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Practice Areas */}
                    <div className="footer-col">
                        <h4>Practice Areas</h4>
                        <ul className="footer-links">
                            <li><Link to="/practice-areas">Criminal Litigation</Link></li>
                            <li><Link to="/practice-areas">Civil Litigation</Link></li>
                            <li><Link to="/practice-areas">Family Law</Link></li>
                            <li><Link to="/practice-areas">Supreme Court Matters</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="footer-col">
                        <h4>Contact Info</h4>
                        <ul className="footer-contact">
                            <li>
                                <MapPin size={18} className="footer-icon" />
                                <span>Delhi High Court, Lawyers Chamber Block-I, Consultation Room, New Delhi-110003.</span>
                            </li>
                            <li>
                                <Phone size={18} className="footer-icon" />
                                <span>+91 9818225972 <br />+91 9250845823</span>
                            </li>
                            <li>
                                <Mail size={18} className="footer-icon" />
                                <span>sarfarazhussain466@gmail.com <br />aa.affanhus@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Sarfaraz Hussain Advocate Law Offices. All rights reserved.</p>
                    <p className="compliance-note">
                        <strong>Bar Council Compliance:</strong> This website is for informational purposes only and does not constitute legal advice or advertisement.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

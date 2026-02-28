import React from 'react';
import { MapPin, Phone, Mail, Clock, PhoneCall } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <br /><br /><br />
            <section className="section contact-section">
                <div className="container">
                    <div className="contact-grid">

                        {/* Left: Contact Details */}
                        <div className="contact-details">
                            <h2>Get in Touch</h2>
                            <p className="contact-intro">
                                Schedule a consultation to discuss your legal matters. Our dedicated team is ready to provide the steadfast representation you deserve.
                            </p>

                            <div className="info-blocks">
                                <div className="info-block">
                                    <div className="info-icon">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="info-content">
                                        <h3>Office Address</h3>
                                        <p>Delhi High Court, Lawyers Chamber Block-I,<br />Consultation Room, New Delhi-110003</p>
                                        <p>G-74, 4th Floor, Muradi Rd,<br />Batla House, Jamia Nagar, Okhla,<br />New Delhi, Delhi 110025</p>
                                    </div>
                                </div>

                                <div className="info-block">
                                    <div className="info-icon">
                                        <Phone size={24} />
                                    </div>
                                    <div className="info-content">
                                        <h3>Phone</h3>
                                        <p>+91 9818225972</p>
                                        <p>+91 9250845823</p>
                                    </div>
                                </div>

                                <div className="info-block">
                                    <div className="info-icon">
                                        <Mail size={24} />
                                    </div>
                                    <div className="info-content">
                                        <h3>Email</h3>
                                        <p>Sarfarazhussain466@gmail.com</p>
                                        <p>aa.affanhus@gmail.com</p>
                                    </div>
                                </div>

                                <div className="info-block">
                                    <div className="info-icon">
                                        <Clock size={24} />
                                    </div>
                                    <div className="info-content">
                                        <h3>Consultation Hours</h3>
                                        <p>Monday - Friday: 4:00 PM - 8:00 PM</p>
                                        <p>Saturday: By Appointment Only</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="contact-form-wrapper">
                            <div className="contact-form-card">
                                <h3>Request a Consultation</h3>
                                <form className="contact-form" action="https://formsubmit.co/sanskariscout@gmail.com" method="POST">
                                    <input type="hidden" name="_captcha" value="false" />
                                    {/* Redirect URL - Change this string to your live deployed domain URL once it is live! e.g value="https://mysite.com/contact?success=true" */}
                                    <input type="hidden" name="_next" value="https://advocate-sarfaraz-website.vercel.app/" />

                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" name="name" placeholder="John Doe" required />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" id="email" name="email" placeholder="john@example.com" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <input type="text" id="subject" name="subject" placeholder="Nature of Legal Matter" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea id="message" name="message" rows="5" placeholder="Briefly describe your case..." required></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Embedded Map Section */}
            <section className="map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50736.76256254008!2d77.2162897582031!3d28.566107100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38a6cfefc51%3A0x52b130a99342d649!2sSarfaraz%20Hussain-Advocate!5e1!3m2!1sen!2sus!4v1772139932318!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Law Office Location"
                ></iframe>
            </section>

            {/* Floating Call Button for Mobile */}
            <a href="tel:+919250845823" className="floating-call-btn" aria-label="Call Now">
                <PhoneCall size={24} />
            </a>
        </div>
    );
};

export default Contact;

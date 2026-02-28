import React from 'react';
import { Award, Briefcase, Bookmark, CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">

            {/* Biography Section */}
            <section className="section bio-section">
                <div className="container">
                    <div className="bio-grid">
                        <div className="bio-image-col">
                            <div className="portrait-actual">
                                <img src="/sarfaraz_hussain.png" alt="Advocate Sarfaraz Hussain" />
                            </div>
                        </div>
                        <div className="bio-content-col">
                            <h2 className="bio-heading">Sarfaraz Hussain</h2>
                            <h3 className="bio-subheading">Advocate, Supreme Court of India</h3>

                            <div className="bio-text">
                                <p>
                                    With decades of unwavering commitment to justice, Sarfaraz Hussain brings unparalleled expertise and strategic insight to every legal challenge.
                                </p>
                                <p>
                                    His practice is founded on the principles of integrity, rigorous case preparation, and a deep understanding of the Indian judicial system. Representing clients across various courts and tribunals, he has established a track record of achieving favorable outcomes in complex litigations.
                                </p>
                                <p>
                                    Beyond mere legal representation, the firm acts as a steadfast guide through the intricacies of the law, ensuring that clients' rights are protected at every stage of the legal process.
                                </p>
                            </div>

                            <div className="bio-highlights">
                                <div className="highlight-item">
                                    <CheckCircle size={20} className="highlight-icon" />
                                    <span>25+ Years of Dedicated Legal Excellence</span>
                                </div>
                                <div className="highlight-item">
                                    <CheckCircle size={20} className="highlight-icon" />
                                    <span>Strategic Litigator with High Success Rate</span>
                                </div>
                                <div className="highlight-item">
                                    <CheckCircle size={20} className="highlight-icon" />
                                    <span>Comprehensive Counsel across Civil & Criminal Law</span>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Associations */}
            <section className="section associations-section bg-neutral">
                <div className="container">
                    <div className="section-header center">
                        <h2>Professional Associations</h2>
                        <p>Affiliations that reflect a commitment to the legal profession.</p>
                    </div>

                    <div className="associations-grid">
                        <div className="association-card">
                            <Award className="assoc-icon" size={32} />
                            <h4>Supreme Court Bar Association</h4>
                            <p>Member</p>
                        </div>
                        <div className="association-card">
                            <Briefcase className="assoc-icon" size={32} />
                            <h4>Delhi High Court Bar Association</h4>
                            <p>Active Member</p>
                        </div>
                        <div className="association-card">
                            <Bookmark className="assoc-icon" size={32} />
                            <h4>All India Bar Association</h4>
                            <p>Lifetime Member</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

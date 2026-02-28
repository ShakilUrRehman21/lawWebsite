import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Scale, Users, FileText, Home as HomeIcon, BookOpen, UserCheck, TrendingUp, Search, Briefcase, Award } from 'lucide-react';
import './Home.css';

const teamMembers = [
    { name: "Sarfaraz Hussain", role: "Advocate • Delhi High Court", img: "/sarfaraz_hussain.png", featured: true },
    { name: "M. F. Khan", role: "Former Public Prosecutor • Supreme Court", img: "/mf_khan.png" },
    { name: "Ali", role: "Junior Advocate", img: "/ali.png" },
    { name: "Sabahat Hussain", role: "Associate Advocate", img: "/sabahat.png" },
    { name: "Anita", role: "Junior Advocate", img: "/anita.png" },
    { name: "Affan Husain", role: "Intern", img: "/affan.png" },
    { name: "Mohd. Zaki", role: "Associate Advocate", img: "/zaki.png" }
];

const marqueeTeam = [...teamMembers, ...teamMembers];

const Home = () => {
    return (
        <div className="home-page">
            {/* 1. Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">Protecting Your Rights.<br />Defending Your Future.</h1>
                        <p className="hero-subtitle">
                            Experienced legal representation across Delhi & NCR.<br />
                            Authoritative, trustworthy, and firmly established.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/contact" className="btn btn-primary btn-glow">Schedule Consultation</Link>
                            <a href="tel:+919818225972" className="btn btn-outline hero-outline-btn">Call Now</a>
                        </div>
                    </div>
                    <div className="hero-image-wrapper">
                        <div className="hero-image-decorator"></div>
                        <img src="/sarfaraz_hussain.png" alt="Advocate Sarfaraz Hussain" className="hero-img" />
                    </div>
                </div>
            </section>

            {/* 2. Practice Highlights */}
            <section className="section practice-section">
                <div className="container">
                    <div className="section-header center">
                        <h2>Our Practice Areas</h2>
                        <p>Comprehensive legal solutions for individuals and businesses.</p>
                    </div>

                    <div className="practice-grid">
                        <div className="practice-card">
                            <Shield className="practice-icon" size={40} />
                            <h3>Criminal Litigation</h3>
                            <p>Robust defense in complex criminal trials, bail matters, and appellate proceedings.</p>
                        </div>
                        <div className="practice-card">
                            <Scale className="practice-icon" size={40} />
                            <h3>Civil Litigation</h3>
                            <p>Strategic representation in property disputes, contracts, and civil rights.</p>
                        </div>
                        <div className="practice-card">
                            <Users className="practice-icon" size={40} />
                            <h3>Family Law</h3>
                            <p>Compassionate yet firm handling of divorce, custody, and matrimonial disputes.</p>
                        </div>
                        <div className="practice-card">
                            <FileText className="practice-icon" size={40} />
                            <h3>Consumer Cases</h3>
                            <p>Protecting consumer rights against unfair trade practices and deficiencies in services.</p>
                        </div>
                        <div className="practice-card">
                            <HomeIcon className="practice-icon" size={40} />
                            <h3>MACT Cases</h3>
                            <p>Ensuring maximum claims and swift justice in motor accident tribunal cases.</p>
                        </div>
                        <div className="practice-card">
                            <BookOpen className="practice-icon" size={40} />
                            <h3>Waqf Matters</h3>
                            <p>Specialized representation before Waqf Boards and Tribunals.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section team-section">
                <div className="container">
                    <div className="section-header center team-header">
                        <h2>Meet Our Legal Team</h2>
                        <p>Dedicated professionals committed to delivering strategic legal representation.</p>
                        <div className="header-divider"></div>
                    </div>

                    <div className="team-marquee-container">
                        <div className="team-marquee">
                            {marqueeTeam.map((member, index) => (
                                <div key={index} className={`team-card ${member.featured ? 'featured-card' : ''}`}>
                                    <div className="team-img-wrapper">
                                        <img src={member.img} alt={member.name} />
                                    </div>
                                    <h3 className="team-name">{member.name}</h3>
                                    <span className="team-role">{member.role}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Achievement Stats */}
            <section className="stats-section">
                <div className="container stats-container">
                    <div className="stat-item">
                        <span className="stat-number">1000+</span>
                        <span className="stat-label">Happy Clients</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">10000+</span>
                        <span className="stat-label">Cases Success</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">2500+</span>
                        <span className="stat-label">Recovery Matters</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">800+</span>
                        <span className="stat-label">Cases Handled</span>
                    </div>
                </div>
            </section>

            {/* 4. Why Choose Us */}
            <section className="section why-choose-section">
                <div className="container">
                    <div className="section-header center">
                        <h2>Why Choose Us</h2>
                        <p>A commitment to legal excellence and strategic representation.</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <Search size={32} />
                            </div>
                            <h4>Case Investigation</h4>
                            <p>Thorough fact-finding and evidence gathering to build an unshakable foundation.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <Briefcase size={32} />
                            </div>
                            <h4>Strategic Litigation</h4>
                            <p>Tactical courtroom approach designed to achieve the most favorable outcome.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <TrendingUp size={32} />
                            </div>
                            <h4>Legal Analysis</h4>
                            <p>In-depth interpretation of precedents and statutes relevant to your case.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <UserCheck size={32} />
                            </div>
                            <h4>Dedicated Representation</h4>
                            <p>Personalized attention and unwavering support from consultation to resolution.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Call to Action Band */}
            <section className="cta-band">
                <div className="container cta-container">
                    <h2>Need Trusted Legal Assistance?</h2>
                    <Link to="/contact" className="btn btn-outline cta-btn">Consult With Us Today</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;

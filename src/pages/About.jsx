import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Briefcase, Bookmark, CheckCircle2, ArrowUpRight, ShieldCheck } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="lawcrest-about-page">
            {/* 1. About Hero Banner */}
            <section className="about-hero section-dark">
                <div className="container">
                    <div className="about-hero-content">
                        <span className="pill-badge pill-badge-dark">Decades of Legal Mastery</span>
                        <h1 className="editorial-title text-white">About Advocate Sarfaraz Hussain</h1>
                        <p className="about-hero-lead">
                            Steadfast commitment to constitutional principles, strategic courtroom advocacy, and principled legal counsel across Delhi & NCR.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Main Biography Section (Cream Background) */}
            <section className="about-bio-section section-cream">
                <div className="container">
                    <div className="bio-grid">
                        {/* Portrait Column */}
                        <div className="bio-portrait-col">
                            <div className="bio-portrait-frame">
                                <img src="/sarfaraz_hussain.png" alt="Advocate Sarfaraz Hussain" />
                                <div className="bio-frame-badge">
                                    <ShieldCheck size={20} className="badge-icon" />
                                    <span>Supreme Court of India & Delhi High Court</span>
                                </div>
                            </div>
                        </div>

                        {/* Narrative Content Column */}
                        <div className="bio-narrative-col">
                            <span className="statement-tag">Advocate Profile</span>
                            <h2 className="bio-name-title">Sarfaraz Hussain</h2>
                            <p className="bio-sub-title">Advocate, Supreme Court of India</p>

                            <div className="bio-paragraphs">
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

                            {/* Core Highlights */}
                            <div className="bio-highlights-list">
                                <div className="bio-highlight-item">
                                    <CheckCircle2 size={20} className="check-icon" />
                                    <span>25+ Years of Dedicated Legal Excellence</span>
                                </div>
                                <div className="bio-highlight-item">
                                    <CheckCircle2 size={20} className="check-icon" />
                                    <span>Strategic Litigator with High Success Rate</span>
                                </div>
                                <div className="bio-highlight-item">
                                    <CheckCircle2 size={20} className="check-icon" />
                                    <span>Comprehensive Counsel across Civil & Criminal Law</span>
                                </div>
                            </div>

                            <div className="bio-action-row">
                                <Link to="/contact" className="btn-lawcrest btn-lawcrest-solid-dark">
                                    <span>Schedule a Consultation</span>
                                    <ArrowUpRight size={16} />
                                </Link>
                                <Link to="/practice-areas" className="btn-lawcrest btn-lawcrest-outline-dark">
                                    <span>View Practice Areas</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Professional Associations (Dark Obsidian) */}
            <section className="about-associations-section section-dark">
                <div className="container">
                    <div className="section-title-wrap text-center">
                        <span className="pill-badge pill-badge-dark">Bar Memberships</span>
                        <h2 className="editorial-title text-white">Professional Associations</h2>
                        <p className="editorial-subtitle text-muted-dark">
                            Prestigious affiliations that reflect a lifelong commitment to the legal profession.
                        </p>
                    </div>

                    <div className="associations-grid">
                        <div className="association-card">
                            <div className="assoc-icon-wrap">
                                <Award className="assoc-icon" size={32} />
                            </div>
                            <h3>Supreme Court Bar Association</h3>
                            <span className="assoc-role">Member</span>
                            <p className="assoc-desc">Active standing and representation before the apex court benches of India.</p>
                        </div>

                        <div className="association-card">
                            <div className="assoc-icon-wrap">
                                <Briefcase className="assoc-icon" size={32} />
                            </div>
                            <h3>Delhi High Court Bar Association</h3>
                            <span className="assoc-role">Active Member</span>
                            <p className="assoc-desc">Continuous litigation presence and chamber practice at the Delhi High Court.</p>
                        </div>

                        <div className="association-card">
                            <div className="assoc-icon-wrap">
                                <Bookmark className="assoc-icon" size={32} />
                            </div>
                            <h3>All India Bar Association</h3>
                            <span className="assoc-role">Lifetime Member</span>
                            <p className="assoc-desc">Dedicated to national legal development, ethical jurisprudence, and bar excellence.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

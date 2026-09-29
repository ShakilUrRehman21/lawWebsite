import React from 'react';
import { Camera, Award, Shield, FileCheck, ArrowUpRight } from 'lucide-react';
import './Gallery.css';

// Using strictly the existing images from the project
const galleryItems = [
    {
        type: 'image',
        src: '/gallery-1.jpg',
        title: 'Notable Courtroom Appearance',
        category: 'Litigation & Media',
        description: 'Advocate Sarfaraz Hussain appearing in high-profile judicial proceedings before the bench.'
    },
    {
        type: 'image',
        src: '/gallery-2.jpg',
        title: 'Press Conference & Legal Briefing',
        category: 'Media Address',
        description: 'Addressing national and regional press regarding landmark constitutional and statutory verdicts.'
    }
];

const courtroomCredentials = [
    {
        icon: Shield,
        title: 'Delhi High Court Chambers',
        subtitle: 'Lawyers Chamber Block-I',
        desc: 'Consultation Room, New Delhi-110003'
    },
    {
        icon: Award,
        title: 'Supreme Court of India',
        subtitle: 'Apex Court Standing',
        desc: 'Special Leave Petitions & Appellate Arguments'
    },
    {
        icon: FileCheck,
        title: 'Bar Council of Delhi',
        subtitle: 'Certified Advocate Membership',
        desc: 'Decades of active and ethical legal standing'
    }
];

const Gallery = () => {
    return (
        <div className="lawcrest-gallery-page">
            {/* Dark Hero */}
            <section className="gallery-hero section-dark">
                <div className="container">
                    <div className="gallery-hero-content">
                        <span className="pill-badge pill-badge-dark">Visual Archive</span>
                        <h1 className="editorial-title text-white">Court Gallery & Media</h1>
                        <p className="gallery-hero-lead">
                            Significant moments, prominent media presence, and chamber archives reflecting dedicated advocacy across courts.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Media Grid (Cream Background) */}
            <section className="gallery-grid-section section-cream">
                <div className="container">
                    <div className="section-title-wrap text-center">
                        <span className="statement-tag">Documented Moments</span>
                        <h2 className="editorial-title">Advocacy in Action</h2>
                        <p className="editorial-subtitle">
                            Visual records showcasing significant legal appearances and press briefings.
                        </p>
                    </div>

                    <div className="lawcrest-gallery-cards">
                        {galleryItems.map((item, index) => (
                            <div key={index} className="gallery-feature-card">
                                <div className="gallery-photo-wrapper">
                                    <img src={item.src} alt={item.title} />
                                    <div className="gallery-tag-pill">{item.category}</div>
                                </div>
                                <div className="gallery-card-content">
                                    <h3 className="gallery-card-title">{item.title}</h3>
                                    <p className="gallery-card-desc">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Courtroom Standing & Credentials Bar */}
                    <div className="credentials-section">
                        <div className="credentials-grid">
                            {courtroomCredentials.map((cred, idx) => {
                                const IconC = cred.icon;
                                return (
                                    <div key={idx} className="credential-card">
                                        <div className="credential-icon-box">
                                            <IconC size={24} />
                                        </div>
                                        <h4 className="credential-title">{cred.title}</h4>
                                        <span className="credential-subtitle">{cred.subtitle}</span>
                                        <p className="credential-desc">{cred.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;

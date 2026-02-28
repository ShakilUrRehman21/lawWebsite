import React from 'react';
import './Gallery.css';

const galleryItems = [
    { type: 'image', src: '/gallery-1.jpg', title: 'Notable Appearance' },
    { type: 'image', src: '/gallery-2.jpg', title: 'Press Conference' },
    { type: 'image', src: 'https://placehold.co/800x500/1a1a1a/c19b67?text=Award+Ceremony', title: 'Award Ceremony' },
    { type: 'image', src: 'https://placehold.co/500x700/1a1a1a/c19b67?text=Court+Verdict', title: 'Court Verdict' },
    { type: 'image', src: 'https://placehold.co/600x400/1a1a1a/c19b67?text=Client+Meeting', title: 'Client Meeting' },
    { type: 'image', src: 'https://placehold.co/700x500/1a1a1a/c19b67?text=Legal+Seminar', title: 'Legal Seminar' },
];

const Gallery = () => {
    return (
        <div className="gallery-page">
            <br /><br /><br />

            <section className="section bg-neutral">
                <div className="container">
                    <div className="section-header center mb-5">
                        <h2>Famous Photos & Videos</h2>
                        <p>A visual collection showcasing significant moments and media presence.</p>
                    </div>

                    <div className="gallery-masonry">
                        {galleryItems.map((item, index) => (
                            <div key={index} className="gallery-item">
                                <img src={item.src} alt={item.title} />
                                <div className="gallery-overlay">
                                    <span className="gallery-title">{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './PracticeAreas.css';

const servicesData = [
    {
        id: 1,
        title: 'Criminal Litigation',
        description: 'Expertise in SLP in Supreme Court of India, Criminal Appeals, Criminal Writs (Murder, Robbery, Dacoity, Pocso, Rape Cases, etc.)'
    },
    {
        id: 2,
        title: 'Civil Litigations',
        description: 'Expertise in all types of Civil Suits, Appeals (RFA), Civil Writs, Revisions before High Court & District Courts of Delhi.'
    },
    {
        id: 3,
        title: 'Family Law',
        description: 'Comprehensive legal representation in matrimonial disputes, divorce proceedings, child custody, and family settlements.'
    },
    {
        id: 4,
        title: '138 NI ACT Cases',
        description: '(Appeal, Revision in all District Courts of Delhi)'
    },
    {
        id: 5,
        title: 'Consumer Cases',
        description: 'Pursuing claims and appeals in State, District, and National Consumer Redressal Forums.'
    },
    {
        id: 6,
        title: 'MACT Cases',
        description: 'Legal representation for victims securing rightful compensation in Motor Accident Claims Tribunals.'
    },
    {
        id: 7,
        title: 'Waqf Cases',
        description: 'Resolving disputes related to Waqf properties, management, and regulatory mandates.'
    }
];

const Services = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="services-page">
            <br /><br /><br />

            <section className="section accordion-section">
                <div className="container accordion-container">
                    <div className="section-header center mb-5">
                        <h2>Our Core Services</h2>
                        <p>Comprehensive legal strategies tailored to your unique challenges.</p>
                    </div>

                    <div className="accordion-wrapper">
                        {servicesData.map((service, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={service.id}
                                    className={`accordion-item ${isOpen ? 'active' : ''}`}
                                    onMouseEnter={() => setOpenIndex(index)}
                                    onMouseLeave={() => setOpenIndex(-1)}
                                >
                                    <button
                                        className="accordion-header"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={isOpen}
                                    >
                                        <h3>{service.title}</h3>
                                        <span className="accordion-icon">
                                            {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                        </span>
                                    </button>

                                    <div className="accordion-collapse">
                                        <div className="accordion-body">
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;

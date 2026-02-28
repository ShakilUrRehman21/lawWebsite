import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './PracticeAreas.css';

const practiceData = [
    {
        title: 'Criminal Litigation',
        content: 'We provide robust defense strategies in complex criminal trials, bail matters, appeals, and white-collar crimes. Our approach is founded on meticulous evidence analysis and rigorous cross-examination to safeguard our clients liberty and reputation.'
    },
    {
        title: 'Civil Litigation',
        content: 'Strategic representation in a wide array of civil disputes, including breach of contract, specific performance, injunctions, and tort claims. We aim to protect your commercial and personal interests through decisive legal action.'
    },
    {
        title: 'Family Law',
        content: 'Navigating sensitive family matters with compassion and legal acumen. Our services cover divorce proceedings, child custody disputes, maintenance, alimony, and domestic violence cases, striving for amicable resolutions where possible.'
    },
    {
        title: 'NI Act 138',
        content: 'Specialized handling of cheque bounce cases under Section 138 of the Negotiable Instruments Act. We assist both complainants in recovering their dues and accused individuals in presenting a strong defense.'
    },
    {
        title: 'Consumer Matters',
        content: 'Advocating for consumer rights against unfair trade practices, defective goods, and deficiency in services. We represent clients before District Forums, State Commissions, and the National Consumer Disputes Redressal Commission (NCDRC).'
    },
    {
        title: 'MACT Cases',
        content: 'Ensuring maximum compensation for victims of motor accidents. We handle claims before Motor Accident Claims Tribunals (MACT), addressing issues of negligence, injury, and fatal accidents with utmost diligence.'
    },
    {
        title: 'Welfare Act',
        content: 'Dedicated representation in matters concerning the welfare of senior citizens, marginalized communities, and employment disputes, ensuring that statutory rights are enforced and protected.'
    },
    {
        title: 'Waqf Cases',
        content: 'Expert legal counsel in disputes spanning Waqf properties, management issues, and administrative conflicts. We represent clients before Waqf Tribunals and High Courts to ensure the proper administration of Waqf estates.'
    },
    {
        title: 'Property Matters',
        content: 'Comprehensive assistance in real estate disputes, partition suits, title verification, eviction proceedings, and landlord-tenant conflicts. We secure your property rights through thorough documentation and aggressive representation.'
    }
];

const PracticeAreas = () => {
    const [openIndex, setOpenIndex] = useState(0); // First one open by default

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="practice-areas-page">
            <br /><br /><br />

            <section className="section accordion-section">
                <div className="container accordion-container">
                    <div className="section-header center mb-5">
                        <h2>Our Areas of Expertise</h2>
                        <p>Dedicated to providing specialized legal solutions across diverse domains.</p>
                    </div>

                    <div className="accordion-wrapper">
                        {practiceData.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`accordion-item ${isOpen ? 'active' : ''}`}
                                    onMouseEnter={() => setOpenIndex(index)}
                                    onMouseLeave={() => setOpenIndex(-1)}
                                >
                                    <button
                                        className="accordion-header"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={isOpen}
                                    >
                                        <h3>{item.title}</h3>
                                        <span className="accordion-icon">
                                            {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                        </span>
                                    </button>

                                    <div className="accordion-collapse">
                                        <div className="accordion-body">
                                            {item.content}
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

export default PracticeAreas;

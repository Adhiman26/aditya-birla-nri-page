import React, { useState } from 'react';
import { Plus, Minus, Stethoscope, HelpCircle } from 'lucide-react';
import styles from './FAQ.module.css';

const FAQLayout = () => {
    // Open first item (Medical Exam) by default for v2.0
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        {
            title: "Medical Examination & Documentation",
            icon: <Stethoscope size={24} />,
            content: "We offer Video Medical Examinations for eligible customers, allowing you to complete health checks from the comfort of your home. Standard documentation includes Passport, Visa copy, and Address proof."
        },
        {
            title: "Can I pay premiums in foreign currency?",
            icon: <HelpCircle size={24} />,
            content: "Yes, you can pay premiums through NRE/NRO accounts or directly via SWIFT transfer in acceptable foreign currencies."
        },
        {
            title: "Is the maturity amount tax-free?",
            icon: <HelpCircle size={24} />,
            content: "Maturity proceeds are generally tax-free in India under Section 10(10D) of the Income Tax Act, subject to specific conditions. Please consult a tax advisor for implications in your country of residence."
        },
        {
            title: "What is the claim settlement process for NRIs?",
            icon: <HelpCircle size={24} />,
            content: "The process is fully digital. Nominees can upload documents online. For death claims, the claim amount can be repatriated to the nominee's account subject to FEMA guidelines."
        }
    ];

    return (
        <section className={`section-padding ${styles.faqSection}`}>
            <div className="container">
                <h2 className={`text-center ${styles.heading}`}>Frequently Asked Questions</h2>

                <div className={styles.accordion}>
                    {items.map((item, index) => (
                        <div key={index} className={`${styles.item} ${openIndex === index ? styles.open : ''}`}>
                            <button className={styles.header} onClick={() => toggleAccordion(index)}>
                                <div className={styles.titleWrapper}>
                                    {item.icon && <span className={styles.icon}>{item.icon}</span>}
                                    <span className={styles.title}>{item.title}</span>
                                </div>
                                <span className={styles.toggleIcon}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            <div className={styles.body} style={{ maxHeight: openIndex === index ? '200px' : '0' }}>
                                <div className={styles.content}>
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQLayout;

import React from 'react';
import { Shield, Coins, TrendingUp, IndianRupee, Landmark, Percent } from 'lucide-react';
import styles from './Benefits.module.css';

const Benefits = () => {
    const benefits = [
        {
            icon: <Shield size={32} />,
            title: 'Financial Protection',
            desc: 'Secure your family with comprehensive life cover.'
        },
        {
            icon: <Coins size={32} />,
            title: 'Cost-Effective',
            desc: 'Lower premiums compared to international policies.'
        },
        {
            icon: <TrendingUp size={32} />,
            title: 'High Returns',
            desc: 'Build wealth with market-linked or guaranteed plans.'
        },
        {
            icon: <Percent size={32} />,
            title: 'Tax Benefits',
            desc: 'Enjoy tax deductions and tax-free payouts*.'
        },
        {
            icon: <IndianRupee size={32} />,
            title: 'INR Payouts',
            desc: 'Hassle-free claim settlement in Indian Rupees.'
        },
        {
            icon: <Landmark size={32} />,
            title: 'IRDAI Regulated',
            desc: 'Highest safety standards and transparency.'
        }
    ];

    return (
        <section className={`section-padding ${styles.benefitsSection}`}>
            <div className="container">
                <h2 className={`text-center ${styles.heading}`}>Why Buy from India?</h2>
                <p className={`text-center ${styles.subheading}`}>Maximize value with Indian Life Insurance plans.</p>

                <div className={styles.grid}>
                    {benefits.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconBox}>{item.icon}</div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;

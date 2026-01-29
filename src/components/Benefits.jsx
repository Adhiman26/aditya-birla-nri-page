import React from 'react';
import { Shield, Coins, TrendingUp, IndianRupee, Landmark, Percent } from 'lucide-react';
import styles from './Benefits.module.css';

const Benefits = () => {
    const benefits = [
        {
            icon: <Shield size={32} />,
            title: 'Peace of Mind',
            desc: 'Secure your family with comprehensive life cover.'
        },
        {
            icon: <Coins size={32} />,
            title: 'Save up to 50%',
            desc: 'Lower premiums vs Global Plans.'
        },
        {
            icon: <TrendingUp size={32} />,
            title: 'High Returns',
            desc: 'Build wealth with market-linked or guaranteed plans.'
        },
        {
            icon: <Percent size={32} />,
            title: '100% Tax-Free',
            desc: 'Full maturity payouts in India*.'
        },
        {
            icon: <IndianRupee size={32} />,
            title: 'Guaranteed Repatriation',
            desc: '1-Click transfer to Foreign Accounts.'
        },
        {
            icon: <Landmark size={32} />,
            title: 'Global Standard',
            desc: 'Highest safety standards and transparency.'
        }
    ];

    return (
        <section className={`section-padding ${styles.benefitsSection}`}>
            <div className="container">
                <h2 className={`text-center ${styles.heading}`}>Why Buy from <span className="text-primary">India?</span></h2>
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

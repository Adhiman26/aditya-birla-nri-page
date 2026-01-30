import React from 'react';
import { Shield, PiggyBank, TrendingUp, FileText, Globe, CheckCircle2 } from 'lucide-react';
import styles from './Benefits.module.css';

// Import Images
import imgFamily from '../assets/benefit_bento_family.png';

const Benefits = () => {
    // List Items for Left Column
    const benefitsList = [
        "Financial Protection for your family in India",
        "Cost-Effective Premiums vs. International Plans",
        "High Returns with Market-Linked Growth",
        "Tax Benefits under Indian Income Tax Laws*",
        "Seamless INR Payouts & Repatriation"
    ];

    return (
        <section className={`section-padding ${styles.benefitsSection}`}>
            <div className="container">
                <div className={styles.splitLayout}>

                    {/* Left Column: Text & List */}
                    <div className={styles.leftColumn}>
                        <h2 className={styles.heading}>Why Buy from India?</h2>
                        <p className={styles.subheading}>
                            Secure your family's future with global-standard plans designed for NRIs.
                        </p>

                        <ul className={styles.benefitsList}>
                            {benefitsList.map((item, index) => (
                                <li key={index} className={styles.listItem}>
                                    <CheckCircle2 size={24} className={styles.checkIcon} />
                                    <span className={styles.listText}>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className={styles.ctaWrapper}>
                            <button className="btn-primary btn-shimmer">Explore Plans</button>
                        </div>
                    </div>

                    {/* Right Column: Visual Bento Cluster */}
                    <div className={styles.rightColumn}>
                        <div className={styles.bentoWrapper}>
                            {/* Primary Image */}
                            <img src={imgFamily} alt="Family Protection" className={styles.primaryImage} />

                            {/* Floating Card 1: Gold - High Returns */}
                            <div className={`${styles.floatingCard} ${styles.cardGold} ${styles.pos1}`}>
                                <div className={styles.iconBox}>
                                    <TrendingUp size={20} />
                                </div>
                                <div className={styles.cardContent}>
                                    <span className={styles.cardLabel}>Returns</span>
                                    <span className={styles.cardValue}>High Growth</span>
                                </div>
                            </div>

                            {/* Floating Card 2: White - Tax */}
                            <div className={`${styles.floatingCard} ${styles.cardWhite} ${styles.pos2}`}>
                                <div className={styles.iconBox}>
                                    <FileText size={20} />
                                </div>
                                <div className={styles.cardContent}>
                                    <span className={styles.cardLabel}>Tax Saved</span>
                                    <span className={styles.cardValue}>Maximize</span>
                                </div>
                            </div>

                            {/* Floating Card 3: White - Payouts */}
                            <div className={`${styles.floatingCard} ${styles.cardWhite} ${styles.pos3}`}>
                                <div className={styles.iconBox}>
                                    <Globe size={20} />
                                </div>
                                <div className={styles.cardContent}>
                                    <span className={styles.cardLabel}>Payouts</span>
                                    <span className={styles.cardValue}>Seamless</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Benefits;

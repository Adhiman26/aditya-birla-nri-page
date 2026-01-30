import React from 'react';
import styles from './Hero.module.css';
import heroPerson from '../assets/hero_professional_person.png';
import QuickQuoteForm from './QuickQuoteForm';
import { ShieldCheck, Award } from 'lucide-react';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.layout}`}>

                {/* Left Pane (60%) */}
                <div className={styles.leftPane}>
                    <div className={styles.textContent}>
                        <h1 className={styles.headline}>
                            Protect Your Family in India With <span className={styles.highlight}>Global-Standard Plans</span>
                        </h1>
                        <p className={styles.subheadline}>
                            Secure your family’s future with 100% tax-free payouts and seamless global management.
                        </p>
                    </div>

                    <div className={styles.visualContainer}>
                        <img src={heroPerson} alt="Professional NRI" className={styles.heroImage} />

                        {/* Gold Trust Strip */}
                        <div className={styles.trustStrip}>
                            <div className={styles.trustItem}>
                                <Award size={24} className={styles.trustIcon} />
                                <div className={styles.trustText}>
                                    <span className={styles.trustValue}>99.38%</span>
                                    <span className={styles.trustLabel}>Claim Settlement Ratio</span>
                                </div>
                            </div>
                            <div className={styles.divider}></div>
                            <div className={styles.trustItem}>
                                <ShieldCheck size={24} className={styles.trustIcon} />
                                <div className={styles.trustText}>
                                    <span className={styles.trustValue}>IRDAI</span>
                                    <span className={styles.trustLabel}>Regulated</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Pane (40%) */}
                <div className={styles.rightPane}>
                    <div className={styles.formWrapper}>
                        <QuickQuoteForm />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;

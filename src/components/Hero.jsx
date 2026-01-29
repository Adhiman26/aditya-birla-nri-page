import React from 'react';
import styles from './Hero.module.css';
import heroBg from '../assets/hero-bg.png';
import QuickQuoteForm from './QuickQuoteForm';

const Hero = () => {
    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.layout}`}>
                <div className={styles.leftContent}>
                    <h1 className={styles.headline}>
                        Protect Your Family in India With <span className={styles.highlight}>Global-Standard Plans</span>
                    </h1>
                    <p className={styles.subheadline}>
                        Secure your family's future with 100% tax-free payouts and seamless global management.
                    </p>

                    {/* Trust Badges - Moved here under the pitch/CTA area */}
                    <div className={styles.trustBadgesContainer}>
                        <div className={styles.trustBadge}>
                            <span className={styles.trustValue}>99.38%</span>
                            <span className={styles.trustLabel}>Claim Settlement Ratio</span>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.trustBadge}>
                            <span className={styles.trustLabel}>IRDAI Regulated</span>
                        </div>
                    </div>
                </div>

                <div className={styles.rightContent}>
                    <QuickQuoteForm />
                </div>
            </div>
        </section>
    );
};

export default Hero;

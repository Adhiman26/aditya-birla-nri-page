import React from 'react';
import styles from './Hero.module.css';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.layout}`}>
                <div className={styles.content}>
                    <h1 className={styles.headline}>Life Insurance Solutions for NRIs</h1>
                    <p className={styles.subheadline}>Secure your family’s future in India, even while living abroad.</p>

                    <div className={styles.ctaWrapper}>
                        <button className={styles.primaryBtn}>
                            Get a Free NRI Quote
                        </button>
                    </div>

                    <div className={styles.trustBadge}>
                        <span className={styles.trustValue}>99.38%</span>
                        <span className={styles.trustLabel}>Claim Settlement Ratio (FY 23-24)</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

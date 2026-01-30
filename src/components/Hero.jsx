import React from 'react';
import styles from './Hero.module.css';
import QuickQuoteForm from './QuickQuoteForm';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>

                {/* Hero Content Overlay */}
                <div className={styles.contentWrapper}>

                    {/* Left Text */}
                    <div className={styles.textColumn}>
                        <h1 className={styles.headline}>
                            Life Insurance Solutions <span className={styles.highlight}>for NRIs</span>
                        </h1>
                        <p className={styles.subheadline}>
                            Secure your family’s future in India, even while living abroad.
                        </p>

                        <button className={styles.heroCta}>
                            GET A FREE NRI QUOTE
                        </button>

                        <div className={styles.claimBadge}>
                            <span className={styles.badgeValue}>99.38%</span>
                            <span className={styles.badgeLabel}>Claim Settlement Ratio (FY 23-24)</span>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className={styles.formColumn}>
                        <QuickQuoteForm />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;

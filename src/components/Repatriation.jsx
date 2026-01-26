import React from 'react';
import { ArrowLeftRight, Plane, Globe, Banknote, ArrowRight } from 'lucide-react';
import styles from './Repatriation.module.css';

const Repatriation = () => {
    return (
        <section className={`section-padding ${styles.repatriationSection}`}>
            <div className={`container ${styles.splitLayout}`}>
                <div className={styles.leftPanel}>
                    <h2 className={styles.heading}>Seamless Repatriation</h2>
                    <p className={styles.subText}>
                        Easily manage your funds with full repatriation benefits. Invest through multiple modes and enjoy hassle-free returns.
                    </p>

                    <div className={styles.featuresGrid}>
                        <div className={styles.featureItem}>
                            <div className={styles.iconBox}><Banknote /></div>
                            <span>NRE / NRO Accounts</span>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.iconBox}><Globe /></div>
                            <span>FCNR Accounts</span>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.iconBox}><Plane /></div>
                            <span>SWIFT Transfers</span>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.iconBox}><ArrowLeftRight /></div>
                            <span>International Cards</span>
                        </div>
                    </div>
                </div>

                <div className={styles.rightPanel}>
                    {/* Visual Flow Diagram */}
                    <div className={styles.flowCard}>
                        <div className={styles.flowHeader}>100% Repatriation Process</div>

                        <div className={styles.flowContainer}>
                            {/* Step 1 */}
                            <div className={styles.flowStep}>
                                <div className={`${styles.flowIcon} ${styles.blue}`}>
                                    <Globe size={28} />
                                </div>
                                <span className={styles.stepLabel}>Global Currency (USD/AED)</span>
                            </div>

                            {/* Arrow */}
                            <div className={styles.flowArrow}>
                                <ArrowRight size={24} />
                            </div>

                            {/* Step 2 */}
                            <div className={styles.flowStep}>
                                <div className={`${styles.flowIcon} ${styles.red}`}>
                                    <Banknote size={28} />
                                </div>
                                <span className={styles.stepLabel}>Indian Policy / NRE Account</span>
                            </div>
                        </div>

                        <div className={styles.flowNote}>
                            No hassle. Fully repatriable maturity proceeds.*
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Repatriation;

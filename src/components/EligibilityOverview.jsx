import React from 'react';
import styles from './EligibilityOverview.module.css';

// Using Human-Centric Images
import imgNRI from '../assets/eligibility_nri_human.png';
import imgPIO from '../assets/benefit_human_family.png'; // Family for PIO (Origin)
import imgOCI from '../assets/benefit_human_global.png'; // Passport for OCI

const EligibilityOverview = () => {
    return (
        <section className={styles.eligibilitySection}>
            <div className="container">
                <div className={styles.headerContainer}>
                    <h2 className={styles.heading}>Who is Eligible?</h2>
                </div>

                <div className={styles.nodesWrapper}>
                    {/* Golden Connector Line */}
                    <div className={styles.connectorLine}></div>

                    {/* NRI Node */}
                    <div className={styles.nodeItem}>
                        <div className={styles.imageWrapper}>
                            <img src={imgNRI} alt="NRI" className={styles.humanImage} />
                        </div>
                        <h3 className={styles.nodeTitle}>NRI</h3>
                        <p className={styles.nodeDesc}>Non-Resident Indian</p>
                    </div>

                    {/* PIO Node */}
                    <div className={styles.nodeItem}>
                        <div className={styles.imageWrapper}>
                            <img src={imgPIO} alt="PIO" className={styles.humanImage} />
                        </div>
                        <h3 className={styles.nodeTitle}>PIO</h3>
                        <p className={styles.nodeDesc}>Person of Indian Origin</p>
                    </div>

                    {/* OCI Node */}
                    <div className={styles.nodeItem}>
                        <div className={styles.imageWrapper}>
                            <img src={imgOCI} alt="OCI" className={styles.humanImage} />
                        </div>
                        <h3 className={styles.nodeTitle}>OCI</h3>
                        <p className={styles.nodeDesc}>Overseas Citizen of India</p>
                    </div>
                </div>

                <div className={styles.finePrint}>
                    *Eligibility is subject to country-specific underwriting norms
                </div>
            </div>
        </section>
    );
};

export default EligibilityOverview;

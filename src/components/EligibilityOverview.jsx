import React from 'react';
import { Globe, User, FileText } from 'lucide-react';
import styles from './EligibilityOverview.module.css';

const EligibilityOverview = () => {
    return (
        <section className={styles.eligibilitySection}>
            <div className={`container ${styles.layout}`}>
                {/* Column 1: Heading & Context */}
                <div className={styles.textColumn}>
                    <h2 className={styles.heading}>Who is Eligible?</h2>
                    <p className={styles.subText}>
                        Tailored solutions for global Indians to secure their family's future in India with seamless processes.
                    </p>
                </div>

                {/* Column 2: Three-Pillar Grid */}
                <div className={styles.iconsColumn}>
                    <div className={styles.iconCard}>
                        <div className={styles.iconWrapper}>
                            <Globe size={24} />
                        </div>
                        <span className={styles.iconLabel}>Non-Resident<br />Indians (NRIs)</span>
                    </div>

                    <div className={styles.iconCard}>
                        <div className={styles.iconWrapper}>
                            <User size={24} />
                        </div>
                        <span className={styles.iconLabel}>Persons of<br />Indian Origin (PIOs)</span>
                    </div>

                    <div className={styles.iconCard}>
                        <div className={styles.iconWrapper}>
                            <FileText size={24} />
                        </div>
                        <span className={styles.iconLabel}>Overseas Citizens<br />of India (OCIs)</span>
                    </div>
                </div>
            </div>

            {/* Regulatory Fine Print */}
            <div className="container">
                <div className={styles.finePrint}>
                    NRIs residing in select countries may be eligible to purchase life insurance policies in India, subject to applicable guidelines and underwriting norms.
                </div>
            </div>
        </section>
    );
};

export default EligibilityOverview;

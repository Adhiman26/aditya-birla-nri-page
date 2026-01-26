import React from 'react';
import { Globe, Users, FileText } from 'lucide-react';
import styles from './EligibilityBar.module.css';

const EligibilityBar = () => {
    return (
        <section className={styles.eligibilitySection}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.item}>
                    <div className={styles.iconWrapper}>
                        <Globe size={32} />
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>Non-Resident Indian (NRI)</h3>
                        <p className={styles.description}>Indian citizens living abroad for employment, business, or vocation.</p>
                    </div>
                </div>

                <div className={styles.separator}></div>

                <div className={styles.item}>
                    <div className={styles.iconWrapper}>
                        <Users size={32} />
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>Person of Indian Origin (PIO)</h3>
                        <p className={styles.description}>Foreign citizens of Indian origin or descent.</p>
                    </div>
                </div>

                <div className={styles.separator}></div>

                <div className={styles.item}>
                    <div className={styles.iconWrapper}>
                        <FileText size={32} />
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>Overseas Citizen of India (OCI)</h3>
                        <p className={styles.description}>Foreign nationals registered as OCI cardholders.</p>
                    </div>
                </div>
            </div>

            <div className={styles.note}>
                *Specific guidelines may apply based on the country of residence.
            </div>
        </section>
    );
};

export default EligibilityBar;

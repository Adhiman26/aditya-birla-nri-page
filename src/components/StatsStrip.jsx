import React from 'react';
import { ShieldCheck, Award, Users } from 'lucide-react';
import styles from './StatsStrip.module.css';

const StatsStrip = () => {
    return (
        <section className={styles.statsSection}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.statItem}>
                        <div className={styles.content}>
                            <Award size={24} className={styles.icon} />
                            <span className={styles.text}>ISO Certified Processes</span>
                        </div>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.statItem}>
                        <div className={styles.content}>
                            <ShieldCheck size={24} className={styles.icon} />
                            <span className={styles.text}>IRDAI Regulated</span>
                        </div>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.statItem}>
                        <div className={styles.content}>
                            <Users size={24} className={styles.icon} />
                            <span className={styles.text}>Trusted by 10 Lakh+ NRIs</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsStrip;

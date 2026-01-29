import React from 'react';
import { Percent, Globe, ShieldCheck } from 'lucide-react';
import styles from './StatsStrip.module.css';

const StatsStrip = () => {
    return (
        <section className={styles.statsSection}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.statItem}>
                        <div className={styles.iconWrapper}>
                            <Percent size={28} className={styles.icon} />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>Tax Benefits (NRI)</h3>
                            <p className={styles.desc}>100% Tax-Free Maturity*</p>
                        </div>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.statItem}>
                        <div className={styles.iconWrapper}>
                            <Globe size={28} className={styles.icon} />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>Premium in INR</h3>
                            <p className={styles.desc}>Save up to 50% vs Global Plans</p>
                        </div>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.statItem}>
                        <div className={styles.iconWrapper}>
                            <ShieldCheck size={28} className={styles.icon} />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>Claims in INR (NRE)</h3>
                            <p className={styles.desc}>Fully Repatriable Proceeds*</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsStrip;

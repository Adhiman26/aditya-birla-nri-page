import React from 'react';
import { ShieldCheck, Headphones } from 'lucide-react';
import styles from './TrustStrip.module.css';

const TrustStrip = () => {
    return (
        <section className={styles.trustStrip}>
            <div className={`container ${styles.container}`}>
                <div className={styles.item}>
                    <div className={styles.iconWrapper}>
                        <ShieldCheck size={40} />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.value}>99.38%</div>
                        <div className={styles.label}>Claim Settlement Ratio (FY 2023-24)</div>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.item}>
                    <div className={styles.iconWrapper}>
                        <Headphones size={40} />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.value}>Exclusive</div>
                        <div className={styles.label}>24/7 NRI Helpdesk Support</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustStrip;

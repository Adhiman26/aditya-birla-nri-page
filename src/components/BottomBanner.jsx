import React from 'react';
import { ShieldCheck, Headset } from 'lucide-react';
import styles from './BottomBanner.module.css';

const BottomBanner = () => {
    return (
        <section className={styles.banner}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.item}>
                        <ShieldCheck size={32} className={styles.icon} />
                        <div>
                            <span className={styles.highlight}>99.38%</span>
                            <span className={styles.label}>Claim Settlement Ratio (FY24)</span>
                        </div>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.item}>
                        <Headset size={32} className={styles.icon} />
                        <div>
                            <span className={styles.highlight}>Exclusive</span>
                            <span className={styles.label}>24/7 Support for NRIs</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BottomBanner;

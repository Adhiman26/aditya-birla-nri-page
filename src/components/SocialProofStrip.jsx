import React from 'react';
import { Award, ShieldCheck, Users } from 'lucide-react';
import styles from './SocialProofStrip.module.css';

const SocialProofStrip = () => {
    return (
        <section className={styles.proofSection}>
            <div className={`container ${styles.container}`}>
                <div className={styles.item}>
                    <Award className={styles.icon} size={24} />
                    <span>ISO Certified Processes</span>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.item}>
                    <ShieldCheck className={styles.icon} size={24} />
                    <span>IRDAI Regulated</span>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.item}>
                    <Users className={styles.icon} size={24} />
                    <span>Trusted by 10 Lakh+ NRIs</span>
                </div>
            </div>
        </section>
    );
};

export default SocialProofStrip;

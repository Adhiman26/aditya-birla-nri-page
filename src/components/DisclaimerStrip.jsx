import React from 'react';
import styles from './DisclaimerStrip.module.css';

const DisclaimerStrip = () => {
    return (
        <section className={styles.disclaimerSection}>
            <div className="container">
                <p className={styles.disclaimerText}>
                    Life insurance plans are available for NRIs residing in select countries, subject to applicable guidelines and underwriting norms. Tax benefits are subject to change from time to time. Repatriation of proceeds, if applicable, is subject to RBI, FEMA, and other regulatory guidelines.
                </p>
            </div>
        </section>
    );
};

export default DisclaimerStrip;

import React from 'react';
import { Info } from 'lucide-react';
import styles from './TaxationHighlight.module.css';

const TaxationHighlight = () => {
    return (
        <section className={styles.taxSection}>
            <div className="container">
                <div className={styles.highlightBox}>
                    <div className={styles.iconWrapper}>
                        <Info size={24} />
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.headline}>Indicative Tax Guidance for NRIs</h3>
                        <p className={styles.bodyText}>
                            Premiums paid may qualify for tax benefits under applicable sections of the Income Tax Act. Policy proceeds and maturity amounts may also be eligible for tax exemptions, subject to prevailing conditions.
                        </p>
                        <p className={styles.disclaimer}>
                            *NRIs are advised to consult a tax advisor for detailed guidance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TaxationHighlight;

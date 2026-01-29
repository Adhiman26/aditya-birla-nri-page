import React from 'react';
import { ArrowLeftRight, Plane, Globe, Banknote, ArrowRight, Shield, Undo2, CreditCard, ShieldCheck } from 'lucide-react';
import styles from './Repatriation.module.css';

const Repatriation = () => {
    return (
        <section className={`section-padding ${styles.repatriationSection}`}>
            <div className={`container ${styles.splitLayout}`}>
                <div className={styles.leftPanel}>
                    <h2 className={styles.heading}>Seamless Repatriation</h2>
                    <p className={styles.subText}>
                        Easily manage your funds with full repatriation benefits. Invest through multiple modes and enjoy hassle-free returns.
                    </p>

                    <div className={styles.featuresGrid}>
                        <div className={styles.featureItem}>
                            <div className={styles.iconBox}><Banknote /></div>
                            <span>NRE / NRO Accounts</span>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.iconBox}><Globe /></div>
                            <span>FCNR Accounts</span>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.iconBox}><Plane /></div>
                            <span>SWIFT <br />Transfers</span>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.iconBox}><CreditCard /></div>
                            <span>International Cards</span>
                        </div>
                    </div>

                    <p className={styles.paymentNote}>
                        Seamlessly pay premiums using SWIFT transfers from your foreign bank account or use international cards for immediate policy issuance.
                    </p>
                </div>

                <div className={styles.rightPanel}>
                    {/* Visual Flow Diagram */}
                    <div className={styles.flowCard}>
                        <div className={styles.flowHeader}>100% Repatriation Process</div>

                        <div className={styles.flowContainer}>
                            {/* Step 1 */}
                            <div className={styles.flowStep}>
                                <div className={`${styles.flowIcon} ${styles.blue}`}>
                                    <Globe size={28} />
                                </div>
                                <span className={styles.stepLabel}>Overseas Account<br />(USD/AED)</span>
                            </div>

                            {/* Arrow */}
                            <div className={styles.flowArrow}>
                                <ArrowRight size={24} />
                            </div>

                            {/* Step 2 */}
                            <div className={styles.flowStep}>
                                <div className={`${styles.flowIcon} ${styles.red}`}>
                                    <Shield size={28} />
                                </div>
                                <span className={styles.stepLabel}>ABSLI Policy<br />(Investment)</span>
                            </div>

                            {/* Arrow */}
                            <div className={styles.flowArrow}>
                                <ArrowRight size={24} />
                            </div>

                            {/* Step 3 */}
                            <div className={styles.flowStep}>
                                <div className={`${styles.flowIcon} ${styles.green}`}>
                                    <Undo2 size={28} />
                                </div>
                                <span className={styles.stepLabel}>Seamless Return<br />Payout</span>
                            </div>
                        </div>

                        <div className={styles.trustSeal}>
                            <ShieldCheck size={16} />
                            <span>RBI & FEMA Compliant</span>
                        </div>

                        <div className={styles.flowNote}>
                            Repatriation of proceeds, if applicable, is subject to RBI, FEMA, and other regulatory guidelines.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Repatriation;

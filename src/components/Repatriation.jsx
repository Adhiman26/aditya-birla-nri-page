import React from 'react';
import { Landmark, Shield, Repeat, CheckCircle2 } from 'lucide-react';
import styles from './Repatriation.module.css';

const Repatriation = () => {
    return (
        <section className={`section-padding ${styles.repatriationSection}`}>
            <div className={`container ${styles.splitLayout}`}>

                {/* Left Panel: Text & Pills */}
                <div className={styles.leftPanel}>
                    <h2 className={styles.heading}>Seamless Repatriation</h2>
                    <p className={styles.subText}>
                        Easily manage your funds with full repatriation benefits. Invest through multiple modes and enjoy hassle-free returns.
                    </p>

                    <div className={styles.pillsContainer}>
                        <div className={styles.pill}>NRE / NRO Accounts</div>
                        <div className={styles.pill}>FCNR Accounts</div>
                        <div className={styles.pill}>SWIFT Transfers</div>
                        <div className={styles.pill}>International Cards</div>
                    </div>
                </div>

                {/* Right Panel: Fintech Flow Card */}
                <div className={styles.rightPanel}>
                    <div className={styles.flowCard}>
                        <div className={styles.journeyMap}>

                            {/* Node 1: Overseas Funds (Blue) */}
                            <div className={`${styles.nodeWrapper} ${styles.blueNode}`}>
                                <div className={styles.nodeCircle}>
                                    <Landmark size={24} />
                                </div>
                                <span className={styles.nodeLabel}>Overseas Funds</span>
                            </div>

                            {/* Connector */}
                            <div className={styles.connector}></div>

                            {/* Node 2: ABSLI Policy (Red) */}
                            <div className={`${styles.nodeWrapper} ${styles.redNode}`}>
                                <div className={styles.nodeCircle}>
                                    <Shield size={24} />
                                </div>
                                <span className={styles.nodeLabel}>ABSLI Policy</span>
                            </div>

                            {/* Connector */}
                            <div className={styles.connector}></div>

                            {/* Node 3: Repatriation (Green) */}
                            <div className={`${styles.nodeWrapper} ${styles.greenNode}`}>
                                <div className={styles.nodeCircle}>
                                    <Repeat size={24} />
                                </div>
                                <span className={styles.nodeLabel}>Full Repatriation</span>
                            </div>

                        </div>

                        {/* Floating Compliance Badge */}
                        <div className={styles.complianceBadge}>
                            <CheckCircle2 size={14} />
                            <span>RBI & FEMA Compliant</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Repatriation;

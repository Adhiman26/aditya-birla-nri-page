import React, { useState } from 'react';
import { ShieldCheck, PiggyBank, Umbrella } from 'lucide-react';
import styles from './ProductCards.module.css';

const ProductCards = () => {
    const [isNRE, setIsNRE] = useState(false);

    const products = [
        {
            icon: <ShieldCheck size={40} />,
            title: 'Term Insurance',
            desc: 'High life cover at affordable premiums to secure your family\'s future.',
            action: 'View Plans',
            popular: true
        },
        {
            icon: <PiggyBank size={40} />,
            title: 'Savings Plans',
            desc: 'Guaranteed returns/bonuses to help you achieve your financial goals.',
            action: 'View Plans'
        },
        {
            icon: <Umbrella size={40} />,
            title: 'Retirement Plans',
            desc: 'Build a retirement corpus for a worry-free second innings.',
            action: 'View Plans'
        }
    ];

    return (
        <section className={`section-padding ${styles.productSection}`}>
            <div className="container">
                <h2 className="text-center" style={{ marginBottom: '0.5rem' }}>Choose Your <span className="text-primary">Protection</span></h2>
                <p className="text-center" style={{ marginBottom: '32px', color: 'var(--color-text-light)' }}>
                    Simple yet powerful insurance products for NRIs.
                </p>

                {/* NRE Toggle */}
                <div className={styles.toggleContainer}>
                    <span className={`${styles.toggleLabel} ${!isNRE ? styles.activeLabel : ''}`}>Paying via Indian Account</span>
                    <div
                        className={`${styles.toggleTrack} ${isNRE ? styles.activeTrack : ''}`}
                        onClick={() => setIsNRE(!isNRE)}
                    >
                        <div className={styles.toggleThumb}></div>
                    </div>
                    <span className={`${styles.toggleLabel} ${isNRE ? styles.activeLabel : ''}`}>Paying via NRE Account</span>

                    {isNRE && (
                        <div className={styles.gstBadge}>
                            18% GST Waiver Applied
                        </div>
                    )}
                </div>

                <div className={styles.cardsWrapper}>
                    {products.map((product, index) => (
                        <div key={index} className={styles.productCard}>
                            <div className={styles.iconWrapper}>
                                {product.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{product.title}</h3>
                            <p className={styles.cardDesc}>{product.desc}</p>

                            {isNRE && (
                                <div className={styles.gstTag}>
                                    <span style={{ color: '#10B981', fontWeight: 'bold' }}>✓ GST Waived</span>
                                </div>
                            )}

                            <button className={styles.exploreBtn}>{product.action}</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCards;

import React, { useState } from 'react';
import { Shield, Wallet, Umbrella, Check } from 'lucide-react';
import styles from './ProductCards.module.css';

const ProductCards = () => {
    const [accountType, setAccountType] = useState('nre'); // Default to NRE for "Premium" intent

    const products = [
        {
            icon: <Shield size={32} />,
            title: 'Term Insurance',
            benefits: [
                'Life cover up to ₹10 Crores',
                'Critical illness riders',
                'Whole life cover options'
            ]
        },
        {
            icon: <Wallet size={32} />,
            title: 'Savings Plans',
            benefits: [
                'Guaranteed returns',
                'Wealth creation focus',
                'Flexible payout terms'
            ]
        },
        {
            icon: <Umbrella size={32} />,
            title: 'Retirement Plans',
            benefits: [
                'Secure pension for life',
                'Annuity options',
                'Legacy planning'
            ]
        }
    ];

    return (
        <section className={`section-padding ${styles.productSection}`}>
            <div className="container">
                <div className={styles.headerContainer}>
                    <h2 className={styles.heading}>Choose Your Protection</h2>
                    <p className={styles.subheading}>
                        Tailored financial solutions for your family’s security in India.
                    </p>
                </div>

                {/* Account Selection Toggle */}
                <div className={styles.toggleWrapper}>
                    <button
                        className={`${styles.toggleBtn} ${accountType === 'nre' ? styles.active : ''}`}
                        onClick={() => setAccountType('nre')}
                    >
                        NRE Account
                    </button>
                    <button
                        className={`${styles.toggleBtn} ${accountType === 'indian' ? styles.active : ''}`}
                        onClick={() => setAccountType('indian')}
                    >
                        Indian Account
                    </button>
                </div>

                <div className={styles.cardsGrid}>
                    {products.map((product, index) => (
                        <div key={index} className={`${styles.card} ${accountType === 'nre' ? styles.nreActive : ''}`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    {product.icon}
                                </div>
                                {accountType === 'nre' && (
                                    <span className={styles.gstTag}>GST Exempt</span>
                                )}
                            </div>

                            <h3 className={styles.cardTitle}>{product.title}</h3>

                            <ul className={styles.benefitList}>
                                {product.benefits.map((benefit, i) => (
                                    <li key={i} className={styles.benefitItem}>
                                        <Check size={16} className={styles.checkIcon} />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`btn-primary btn-shimmer ${styles.cardBtn}`}>
                                View Plans
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCards;

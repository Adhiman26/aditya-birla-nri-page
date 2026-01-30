import React, { useState } from 'react';
import { Shield, Wallet, Umbrella, Check, Info } from 'lucide-react';
import styles from './ProductCards.module.css';

const ProductCards = () => {
    const [accountType, setAccountType] = useState('nre');

    const products = [
        {
            icon: <Shield size={28} />,
            title: 'Term Insurance',
            benefits: [
                'Life cover up to ₹10 Crores',
                'Critical illness riders',
                'Whole life cover options'
            ]
        },
        {
            icon: <Wallet size={28} />,
            title: 'Savings Plans',
            benefits: [
                'Guaranteed returns',
                'Wealth creation focus',
                'Flexible payout terms'
            ]
        },
        {
            icon: <Umbrella size={28} />,
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

                {/* Exclusive Tax Guidance Banner - Inserted here to match flow */}
                {accountType === 'nre' && (
                    <div className={styles.taxBanner}>
                        <div className={styles.bannerContent}>
                            <div className={styles.bannerIcon}>
                                <Info size={20} />
                            </div>
                            <div className={styles.bannerText}>
                                <strong>Exclusive Tax Guidance for NRIs</strong>
                                <span>Get expert advice on GST exemptions and tax-free repatriation.</span>
                            </div>
                        </div>
                        <button className={styles.bannerBtn}>Get Connected</button>
                    </div>
                )}

                <div className={styles.cardsGrid}>
                    {products.map((product, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    {product.icon}
                                </div>
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

                            <button className={styles.cardBtn}>
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

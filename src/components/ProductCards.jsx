import React from 'react';
import { ShieldCheck, PiggyBank, Umbrella } from 'lucide-react';
import styles from './ProductCards.module.css';

const ProductCards = () => {
    const products = [
        {
            icon: <ShieldCheck size={48} />,
            title: 'Term Insurance',
            desc: 'High life cover at affordable premiums to secure your family\'s future.',
            action: 'Explore Term Plans'
        },
        {
            icon: <PiggyBank size={48} />,
            title: 'Savings Plans',
            desc: 'Guaranteed returns/bonuses to help you achieve your financial goals.',
            action: 'Explore Savings Plans'
        },
        {
            icon: <Umbrella size={48} />,
            title: 'Retirement Plans',
            desc: 'Build a retirement corpus for a worry-free second innings.',
            action: 'Explore Retirement Plans'
        }
    ];

    return (
        <section className={`section-padding ${styles.productSection}`}>
            <div className="container">
                <h2 className="text-center">Choose Your Protection</h2>
                <p className="text-center" style={{ marginBottom: '48px', color: 'var(--color-text-light)' }}>
                    Comprehensive life insurance solutions tailored for your needs.
                </p>

                <div className={styles.cardsWrapper}>
                    {products.map((product, index) => (
                        <div key={index} className={styles.productCard}>
                            <div className={styles.iconWrapper}>
                                {product.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{product.title}</h3>
                            <p className={styles.cardDesc}>{product.desc}</p>
                            <div className={styles.cardFooter}>
                                <button className={styles.exploreBtn}>{product.action} &rarr;</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCards;

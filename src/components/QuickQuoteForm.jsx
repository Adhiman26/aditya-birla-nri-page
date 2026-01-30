import React, { useState } from 'react';
import styles from './QuickQuoteForm.module.css';

const QuickQuoteForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className={styles.formContainer}>
                <div className={styles.success}>
                    <h3 className={styles.heading}>Thank you!</h3>
                    <p>Our expert will contact you shortly to discuss your custom NRI plan.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.formContainer}>
            <h3 className={styles.heading}>Quick NRI Quote</h3>

            <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <input type="text" className={styles.input} placeholder="Name" required />
                </div>

                <div className={styles.inputGroup}>
                    <input type="email" className={styles.input} placeholder="Email Address" required />
                </div>

                <div className={styles.inputGroup}>
                    <input type="tel" className={styles.input} placeholder="Mobile Number (+91...)" required />
                </div>

                <button type="submit" className={styles.submitButton}>
                    Get Quote
                </button>

                <div className={styles.trustBadgeInternal}>
                    <span className={styles.trustValue}>99.38%</span>
                    <span className={styles.trustLabel}>Claim Settlement Ratio (Verified)</span>
                </div>
            </form>
        </div>
    );
};

export default QuickQuoteForm;

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import styles from './QuickQuoteForm.module.css';

const QuickQuoteForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className={styles.card}>
                <div className={styles.success}>
                    <h3>Thank you!</h3>
                    <p>Our expert will contact you shortly to discuss your custom NRI plan.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.title}>Get a Call Back</h3>
                <p className={styles.subtitle}>Get a customized plan today.</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <input type="text" className={styles.input} placeholder="Name" required />
                </div>

                <div className={styles.phoneGroup}>
                    <select className={styles.countryCode} defaultValue="+971">
                         <option value="+91">+91 (IND)</option>
                        <option value="+1">+1 (USA)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+971">+971 (UAE)</option>
                        <option value="+65">+65 (SG)</option>
                    </select>
                    <input type="tel" className={styles.input} placeholder="Mobile Number" required />
                </div>

                <div className={styles.field}>
                    <input type="email" className={styles.input} placeholder="Email ID" required />
                </div>

                <div className={styles.submitWrapper}>
                    <button type="submit" className={styles.submitBtn}>
                        Get a Call Back
                    </button>
                    <p className={styles.disclaimer}>
                        By clicking, you agree to our <a href="#">Privacy Policy</a>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default QuickQuoteForm;

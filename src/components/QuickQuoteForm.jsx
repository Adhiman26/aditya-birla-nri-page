import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';
import styles from './QuickQuoteForm.module.css';

const QuickQuoteForm = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // In a real app, form state handling would be here

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (!isOpen) {
        return (
            <button className={styles.minimizedBtn} onClick={() => setIsOpen(true)}>
                Get a Quote
            </button>
        )
    }

    return (
        <div className={styles.container}>
            {/* Mobile Toggle or Close Button could go here based on design, 
          keeping it simple for sticky sidebar */}
            <div className={styles.header}>
                <h3 className={styles.title}>Quick NRI Quote</h3>
                <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                    <X size={16} />
                </button>
            </div>

            {!isSubmitted ? (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.field}>
                        <label className={styles.label}>Residence Country</label>
                        <select className={styles.input} required>
                            <option value="">Select Country</option>
                            <option value="UAE">UAE</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Life Cover Needed</label>
                        <select className={styles.input} required>
                            <option value="">Select Amount</option>
                            <option value="50L">₹ 50 Lakhs</option>
                            <option value="1Cr">₹ 1 Crore</option>
                            <option value="2Cr">₹ 2 Crores</option>
                            <option value="5Cr+">₹ 5 Crores+</option>
                        </select>
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Contact (Email/Phone)</label>
                        <input type="text" className={styles.input} placeholder="Email or Phone" required />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        Get Quote <ChevronRight size={16} />
                    </button>
                </form>
            ) : (
                <div className={styles.success}>
                    <p>Thank you! Our expert will contact you shortly.</p>
                </div>
            )}
        </div>
    );
};

export default QuickQuoteForm;

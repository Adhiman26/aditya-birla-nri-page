import React, { useState } from 'react';
import { ChevronRight, X } from 'lucide-react'; // X for close if needed, Chevron for button
import styles from './QuickQuoteForm.module.css';

const QuickQuoteForm = () => {
    return (
        <div className={styles.formCard}>
            <div className={styles.header}>
                <h3 className={styles.formTitle}>Quick NRI Quote</h3>
                {/* Close icon X usually implies modal, but reference shows it in a card. We can add it visually. */}
                <button className={styles.closeBtn}><X size={20} /></button>
            </div>

            <form className={styles.formBody}>

                {/* Residence Country */}
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Residence Country</label>
                    <div className={styles.selectWrapper}>
                        <select className={styles.select}>
                            <option>Select Country</option>
                            <option>USA</option>
                            <option>UAE</option>
                            <option>UK</option>
                            <option>Singapore</option>
                            <option>Canada</option>
                        </select>
                    </div>
                </div>

                {/* Life Cover */}
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Life Cover Needed</label>
                    <div className={styles.selectWrapper}>
                        <select className={styles.select}>
                            <option>Select Amount</option>
                            <option>₹ 1 Crore</option>
                            <option>₹ 2 Crores</option>
                            <option>₹ 5 Crores</option>
                            <option>₹ 10 Crores</option>
                        </select>
                    </div>
                </div>

                {/* Contact */}
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Contact (Email/Phone)</label>
                    <input type="text" className={styles.input} placeholder="Email or Phone" />
                </div>

                {/* Button */}
                <button type="submit" className={styles.submitBtn}>
                    GET QUOTE <ChevronRight size={18} />
                </button>

            </form>
        </div>
    );
};

export default QuickQuoteForm;

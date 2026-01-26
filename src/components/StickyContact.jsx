import React from 'react';
import { MessageSquareText } from 'lucide-react';
import styles from './StickyContact.module.css';

const StickyContact = () => {
    return (
        <div className={styles.stickyWrapper}>
            <button className={styles.stickyBtn}>
                <MessageSquareText size={24} />
                <span className={styles.text}>Get in Touch</span>
            </button>
        </div>
    );
};

export default StickyContact;

import React from 'react';
import styles from './Footer.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContent}`}>
                <div className={styles.contactSection}>
                    <h2 className={styles.heading}>Need more information?</h2>

                    <a href="mailto:ABSLI.Nrisales@adityabirlacapital.com" className={styles.emailBtn}>
                        <Mail size={20} />
                        ABSLI.Nrisales@adityabirlacapital.com
                    </a>

                    <p className={styles.disclaimer}>
                        Aditya Birla Sun Life Insurance Company Limited. All Rights Reserved.
                    </p>
                </div>

                <div className={styles.links}>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Sitemap</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

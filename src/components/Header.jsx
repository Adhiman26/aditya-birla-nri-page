import React, { useState } from 'react';
import { Menu, X, Phone, User } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <div className={styles.logo}>
                    {/* Text Logo for now, would replace with SVG */}
                    <span className={styles.logoText}>ABSLI</span>
                    <span className={styles.logoSub}>Digilog</span>
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <a href="#" className={styles.navLink}>Protection</a>
                    <a href="#" className={styles.navLink}>Savings</a>
                    <a href="#" className={styles.navLink}>Investment</a>
                    <a href="#" className={styles.navLink}>Health</a>
                    <a href="#" className={styles.navLink}>Retirement</a>
                </nav>

                <div className={styles.actions}>
                    <button className={styles.primaryActionBtn}>
                        <Phone size={18} />
                        <span>Get in Touch</span>
                    </button>
                    <button className={styles.loginBtn}>
                        <User size={18} />
                        <span>Login</span>
                    </button>
                    <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

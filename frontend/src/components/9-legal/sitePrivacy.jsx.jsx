import React from 'react';
import styles from './legalStyle.module.css';

const SitePrivacy = () => {
    return (
        <div className={styles.legalContainer}>
            <h2 className={styles.legalTitle}>Privacy Policy</h2>
            <p className={styles.legalText}>This Privacy Policy explains how we collect, use, and protect your personal data.</p>

            <h3 className={styles.legalHeading}>1. Data Collection</h3>
            <p className={styles.legalText}>We collect personal information when you book services, contact us, or interact with our website.</p>

            <h3 className={styles.legalHeading}>2. Security</h3>
            <p className={styles.legalText}>We implement security measures to protect your personal information.</p>

            <h3 className={styles.legalHeading}>3. Contact Us</h3>
            <p className={styles.legalText}>If you have any questions about this policy, contact us at <a href="mailto:info@example.com" className={styles.legalEmail}>info@example.com</a>.</p>
        </div>
    );
};

export default SitePrivacy;

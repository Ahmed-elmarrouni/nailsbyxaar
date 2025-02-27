import React from 'react';
import styles from './legalStyle.module.css';

const TermsOfService = () => {
    return (
        <div className={styles.legalContainer}>
            <h2 className={styles.legalTitle}>Terms of Service</h2>
            <p className={styles.legalText}>By using our website, you agree to the following terms.</p>

            <h3 className={styles.legalHeading}>1. Service Availability</h3>
            <p className={styles.legalText}>We do our best to ensure continuous availability, but we may modify or discontinue services at any time.</p>

            <h3 className={styles.legalHeading}>2. User Conduct</h3>
            <p className={styles.legalText}>You agree not to misuse our services or violate any laws while using them.</p>

            <h3 className={styles.legalHeading}>3. Contact</h3>
            <p className={styles.legalText}>For any concerns, contact us at <a href="mailto:info@example.com" className={styles.legalEmail}>info@example.com</a>.</p>
        </div>
    );
};

export default TermsOfService;

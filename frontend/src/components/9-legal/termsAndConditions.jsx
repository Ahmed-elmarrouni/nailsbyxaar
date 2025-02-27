import React from 'react';
import styles from './legalStyle.module.css';

const TermsAndConditions = () => {
    return (
        <div className={styles.legalContainer}>
            <h2 className={styles.legalTitle}>Terms and Conditions</h2>
            <p className={styles.legalText}><strong>Last Updated:</strong> February 2025</p>

            <h3 className={styles.legalHeading}>1. Introduction</h3>
            <p className={styles.legalText}>Welcome to Nails By Xaartjee. These Terms and Conditions govern your use of our website and services.</p>

            <h3 className={styles.legalHeading}>2. Services Offered</h3>
            <p className={styles.legalText}>Nails By Xaartjee offers nail care and beauty services. All bookings and purchases are subject to availability.</p>

            <h3 className={styles.legalHeading}>3. User Responsibilities</h3>
            <ul className={styles.legalList}>
                <li>Provide accurate and truthful information when booking services.</li>
                <li>Respect appointment schedules and cancellation policies.</li>
                <li>Refrain from using our website for fraudulent or unlawful purposes.</li>
            </ul>
        </div>
    );
};

export default TermsAndConditions;

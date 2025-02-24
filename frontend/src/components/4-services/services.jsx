import React from "react";
import styles from "./services.module.css";

const Services = () => {
    return (
        <div className={styles.pricingContainer}>
            <h2 className={styles.title}>Our Pricing Plan</h2>
            <p className={styles.subtitle}>
                Choose the perfect nail design for you. Simple pricing, no hidden fees.
            </p>
            <div className={styles.pricingCards}>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Gel with Color</h3>
                    <p className={styles.price}>€25</p>
                    <p className={styles.desc}>A smooth and long-lasting gel polish with your favorite color.</p>
                    <ul className={styles.features}>
                        <li>High-quality gel polish</li>
                        <li>Long-lasting & glossy finish</li>
                        <li>Fast drying under UV lamp</li>
                        <li>Suitable for natural and acrylic nails</li>
                    </ul>
                    <button className={styles.button}>Book Now</button>
                </div>

                <div className={`${styles.card} ${styles.businessCard}`}>
                    <h3 className={styles.cardTitle}>French Tips</h3>
                    <p className={styles.price}>€25</p>
                    <p className={styles.desc}>Classic and elegant French tip nails for a sophisticated look.</p>
                    <ul className={styles.features}>
                        <li>Timeless French manicure</li>
                        <li>Perfect for any occasion</li>
                        <li>Clean & professional finish</li>
                        <li>Available in different lengths and shapes</li>
                    </ul>
                    <button className={styles.button}>Book Now</button>
                </div>

                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Designs & Extras</h3>
                    <p className={styles.price}>€30</p>
                    <p className={styles.desc}>Creative nail art with 3D gel, gems, chrome, and more.</p>
                    <ul className={styles.features}>
                        <li>Unique hand-painted designs</li>
                        <li>Glitter, marble, ombré effects</li>
                        <li>3D gel, gems, chrome (extra: +€2)</li>
                        <li>Custom nail art for special events</li>
                    </ul>
                    <button className={styles.button}>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Services;

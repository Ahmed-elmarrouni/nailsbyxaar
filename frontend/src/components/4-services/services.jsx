

import React from "react";
import styles from "./services.module.css";
import { useLanguage } from "../../contexts/LanguageContext";

const Services = () => {
    const { translations } = useLanguage();

    return (
        <div className={styles.pricingContainer} id="services">
            <h2 className={styles.title}>{translations.services.title}</h2>
            <p className={styles.subtitle}>{translations.services.subtitle}</p>
            <div className={styles.pricingCards}>

                {/* First Card */}
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>{translations.services.title_a}</h3>
                    <p className={styles.price}>{translations.services.price_a}</p>
                    <p className={styles.desc}>{translations.services.description_a}</p>
                    <ul className={styles.features}>
                        {translations.services.features_a.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                    <button className={styles.button}>{translations.services.bookNow}</button>
                </div>

                {/* Second Card */}
                <div className={`${styles.card} ${styles.businessCard}`}>
                    <h3 className={styles.cardTitle}>{translations.services.title_b}</h3>
                    <p className={styles.price}>{translations.services.price_b}</p>
                    <p className={styles.desc}>{translations.services.description_b}</p>
                    <ul className={styles.features}>
                        {translations.services.features_b.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                    <button className={styles.button}>{translations.services.bookNow}</button>
                </div>

                {/* Third Card */}
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>{translations.services.title_c}</h3>
                    <p className={styles.price}>{translations.services.price_c}</p>
                    <p className={styles.desc}>{translations.services.description_c}</p>
                    <ul className={styles.features}>
                        {translations.services.features_c.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                    <button className={styles.button}>{translations.services.bookNow}</button>
                </div>
            </div>
        </div>
    );
};

export default Services;

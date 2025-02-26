import React from "react";
import styles from "./reviews.module.css";
import { useLanguage } from "../../contexts/LanguageContext";

const starIcon = "/imgs/star.png";
const coltonImage = "/logo/logo.png";
const ireneImage = "/logo/logo.png";
const anneImage = "/logo/logo.png";

const Reviews = () => {
    const { translations } = useLanguage();

    return (
        <div className={styles.wrapper}>
            {/* Upper Section */}
            <div className={styles.upper}>
                <div className={styles.left}>
                    <div className={styles.heading}>
                        {translations.reviews.heading}
                    </div>
                    <div className={styles.subheading}>
                        {translations.reviews.subheading}
                    </div>
                </div>

                <div className={styles.right}>
                    {translations.reviews.highlights.map((text, index) => (
                        <div key={index} className={`${styles.rating} ${index === 1 ? styles.rating2 : index === 2 ? styles.rating3 : ""}`}>
                            <span className={styles.stars}>
                                {[...Array(5)].map((_, i) => (
                                    <img key={i} src={starIcon} alt="star" />
                                ))}
                            </span>
                            <span className={styles.ratingText}>{text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lower Section (Reviews) */}
            <div className={styles.lower}>
                {translations.reviews.clients.map((person, index) => (
                    <div key={index} className={`${styles.item} ${index === 1 ? styles.item2 : index === 2 ? styles.item3 : ""}`}>
                        <div className={styles.image}>
                            <img src={index === 0 ? coltonImage : index === 1 ? ireneImage : anneImage} alt={person.name} />
                        </div>
                        <div className={styles.itemHeader}>
                            {person.name}
                        </div>
                        <div className={styles.itemBody}>
                            {`"${person.review}"`}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;

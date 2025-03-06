"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "./about.module.css";
import { useLanguage } from "../../contexts/LanguageContext";

const profilePic = "/model/img_3.jpeg";

const About = () => {
    const { translations } = useLanguage();

    return (
        <div className={styles.aboutContainer} id="about">
            {/* Abstract Background Shapes */}
            <motion.div
                className={`${styles.shape} ${styles.shape1}`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <motion.div
                className={`${styles.shape} ${styles.shape2}`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            />
            <motion.div
                className={`${styles.shape} ${styles.shape3}`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
            />

            {/* Content Section */}
            <motion.div
                className={styles.aboutContent}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                {/* Profile Image */}
                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className={styles.imageFrame}>
                        <img src={profilePic} alt={translations.about.profileAlt} className={styles.profileImage} />
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    className={styles.paragraph}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h1 className={styles.title}>{translations.about.title}</h1>
                    <p className={styles.description}>{translations.about.description}</p>
                </motion.div>

                {/* Feature Cards with Motion */}
                <motion.div
                    className={styles.infoCards}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
                    }}
                >
                    {translations.about.cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <div className={styles.cardIcon}>{card.icon}</div>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default About;


"use client";
import { motion } from "framer-motion";
import profilePic from "../../../public/nails/3.jpeg";
import React from "react";
import styles from "./about.module.css";

function About() {
    return (
        <div className={styles.aboutContainer}>
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
                        <img src={profilePic} alt="Nails by Xaar" className={styles.profileImage} />
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    className={styles.paragraph}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h1 className={styles.title}>Meet Nails by Xaar 🎨</h1>
                    <p className={styles.description}>
                        Hey! Ik ben <strong>Xaartje</strong>, 19 jaar oud en werkzaam als nagelstyliste in Blankenberge (8370). Ik werk zowel vanuit huis als bij klanten thuis en studeer momenteel voor mijn nageldiploma. Ik experimenteer graag met creatieve nail art en breid voortdurend mijn collectie kleuren uit, waarbij ik uitsluitend kwaliteitsproducten gebruik.
                    </p>
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
                    {[
                        { icon: "✨", title: "Art & Creativity", text: "Each design is a custom, hand-crafted work of art." },
                        { icon: "🌟", title: "Luxury & Style", text: "Premium nail services that keep you ahead of trends." },
                        { icon: "💅", title: "Signature Touch", text: "Aesthetic and bold designs made just for you." }
                    ].map((card, index) => (
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

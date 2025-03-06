import React from "react";
import styles from "./main.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { Link } from 'react-scroll';


const productImage = "/nails/3.jpeg";
const modelImage = "/model/img_2.jpeg";
const img1 = "/logo/logo.png";

const Main = () => {
    const { translations } = useLanguage();

    return (
        <section className={styles.container} id="home">
            {/* Product Image placed first */}
            <img src={productImage} alt={translations.main.productAlt} className={styles.productImage} />

            <div className={styles.content}>
                <h1 className={styles.heading}>{translations.main.heading}</h1>
                <p className={styles.subText}>{translations.main.subText}</p>
                {/* <button className={styles.browseButton}>{translations.main.browseButton}</button> */}
                <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    className={styles.browseButton}
                >
                    {translations.main.browseButton}
                </Link>

            </div>

            {/* Right container */}
            <div className={styles.imageWrapper}>
                <img src={modelImage} alt="Model" className={styles.modelImage} />
                <div className={styles.badge}>
                    <img src={img1} alt="Logo" className={styles.img1} />
                </div>
            </div>
        </section>
    );
};

export default Main;

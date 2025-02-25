import React from "react";
import styles from "./main.module.css";
import productImage from "../../../public/nails/1.jpeg";
import modelImage from "../../../public/nails/3.jpeg";
import img1 from "../../../public/logo/logo.png";

const Main = () => {
    return (
        <section className={styles.container} id="home">
            {/* Product Image placed first */}
            <img src={productImage} alt="Natural Product" className={styles.productImage} />

            {/* Text content positioned on top (for web) */}
            <div className={styles.content}>
                <h1 className={styles.heading}>
                    Elevate your nails with the art of beauty & creativity.
                </h1>
                <p className={styles.subText}>
                    Premium designs crafted with passion and care.
                </p>
                <button className={styles.browseButton}>Browse our craft</button>
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

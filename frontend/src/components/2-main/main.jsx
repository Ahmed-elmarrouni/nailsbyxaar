import React from "react";
import styles from "./main.module.css";
import productImage from "../../../public/nails/1.jpeg";
import modelImage from "../../../public/nails/3.jpeg";
import img1 from "../../../public/logo/logo.png"

const Main = () => {
    return (
        <section className={styles.container}>
            {/* Left container */}
            <div className={styles.content}>
                <img src={productImage} alt="Natural Product" className={styles.productImage} />
            </div>
            {/* Right container */}
            <div className={styles.imageWrapper}>
                <img src={modelImage} alt="Model" className={styles.modelImage} />
                <div className={styles.badge}><img src={img1} alt={img1} className={styles.img1} /></div>
            </div>


            {/* text  */}
            {/* <div className="description">

                <h1 className={styles.heading}>
                    Elevate your nails with the art of beauty & creativity.
                </h1>
                <p className={styles.subText}>Premium designs crafted with passion and care.</p>


                <button className={styles.browseButton}>Browse our craft</button>
            </div> */}

        </section>
    );
};

export default Main;

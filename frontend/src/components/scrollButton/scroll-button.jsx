import React, { useState, useEffect } from "react";
import styles from "./scroll-button.module.css"; 

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button className={styles.scrollButton} onClick={scrollToTop}>
                    <span className="material-icons">arrow_upward</span>
                </button>
            )}
        </>
    );
};

export default ScrollButton;

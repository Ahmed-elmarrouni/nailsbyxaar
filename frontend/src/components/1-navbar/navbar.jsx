import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { useLanguage } from "../../contexts/LanguageContext";

import enFlag from "../../../public/flags/en.png";
import nlFlag from "../../../public/flags/nl.png";
import frFlag from "../../../public/flags/fr.png";
import logo from "../../../public/logo/logo.png";

const languageFlags = {
    EN: enFlag,
    NL: nlFlag,
    FR: frFlag,
};

const Navbar = () => {
    const { translations, setLanguageHandler } = useLanguage();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [selectedFlag, setSelectedFlag] = useState(languageFlags.NL);

    // Handle screen resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Function to change language and update the flag
    const handleLanguageChange = (lang) => {
        setLanguageHandler(lang);
        setSelectedFlag(languageFlags[lang]); // Update the flag
        setIsLanguageMenuOpen(false); // Close dropdown after selection
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                {/* Left Section: Brand */}
                <div className={styles.brandSection}>
                    <img src={logo} alt="NailsbyXaar" className={styles.logo} />
                    <span className={styles.brandName}>NailsbyXaar</span>
                </div>

                {/* Center Section: Menu */}
                {!isMobile && (
                    <div className={styles.menu}>
                        <a href="#home">{translations.navbar.home}</a>
                        <a href="#about">{translations.navbar.about}</a>
                        <a href="#services">{translations.navbar.services}</a>
                        <a href="#work">{translations.navbar.work}</a>
                        <a href="#reviews">{translations.navbar.reviews}</a>
                        <a href="#contact">{translations.navbar.contact}</a>
                    </div>
                )}

                {/* Right Section: Language Selector */}
                {!isMobile && (
                    <div
                        className={styles.languageSelector}
                        onMouseLeave={() => setIsLanguageMenuOpen(false)}
                    >
                        <button
                            className={styles.languageButton}
                            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                        >
                            <img src={selectedFlag} alt="Language" className={styles.languageIcon} />
                            Language
                        </button>
                        {isLanguageMenuOpen && (
                            <div className={styles.languageMenu}>
                                <button onClick={() => handleLanguageChange("NL")}>
                                    <img src={nlFlag} alt="Dutch" className={styles.languageIcon} /> NL
                                </button>
                                <button onClick={() => handleLanguageChange("EN")}>
                                    <img src={enFlag} alt="English" className={styles.languageIcon} /> EN
                                </button>
                                <button onClick={() => handleLanguageChange("FR")}>
                                    <img src={frFlag} alt="French" className={styles.languageIcon} /> FR
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Mobile Burger Menu */}
                {isMobile && (
                    <button className={styles.burgerMenu} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className="material-icons">
                            {isMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                )}
            </div>

            {/* Mobile Menu */}
            {isMobile && isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <a href="#home" onClick={() => setIsMenuOpen(false)}>
                        {translations.navbar.home}
                    </a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>
                        {translations.navbar.about}
                    </a>
                    <a href="#services" onClick={() => setIsMenuOpen(false)}>
                        {translations.navbar.services}
                    </a>
                    <a href="#work" onClick={() => setIsMenuOpen(false)}>
                        {translations.navbar.work}
                    </a>
                    <a href="#reviews" onClick={() => setIsMenuOpen(false)}>
                        {translations.navbar.reviews}
                    </a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                        {translations.navbar.contact}
                    </a>
                    <div
                        className={styles.languageSelector}
                        onMouseLeave={() => setIsLanguageMenuOpen(false)} // Close when cursor leaves
                    >
                        <button
                            className={styles.languageButton}
                            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                        >
                            <img src={selectedFlag} alt="Language" className={styles.languageIcon} />
                            Language
                        </button>
                        {isLanguageMenuOpen && (
                            <div className={styles.languageMenu}>
                                <button onClick={() => handleLanguageChange("NL")}>
                                    <img src={nlFlag} alt="Dutch" className={styles.languageIcon} /> NL
                                </button>
                                <button onClick={() => handleLanguageChange("EN")}>
                                    <img src={enFlag} alt="English" className={styles.languageIcon} /> EN
                                </button>
                                <button onClick={() => handleLanguageChange("FR")}>
                                    <img src={frFlag} alt="French" className={styles.languageIcon} /> FR
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

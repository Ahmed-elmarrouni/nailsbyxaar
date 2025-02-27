import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { useLanguage } from "../../contexts/LanguageContext";


import Cookies from "js-cookie";


const enFlag = "/flags/en.png";
const nlFlag = "/flags/nl.png";
const frFlag = "/flags/fr.png";
const logo = "/logo/logo.png";

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
    // const [selectedFlag, setSelectedFlag] = useState(languageFlags.NL);
    const [selectedFlag, setSelectedFlag] = useState(nlFlag); 


    const location = useLocation();

    const navigate = useNavigate();

    // Navigate to home and scroll smoothly after page loads
    const handleNavClick = (sectionId) => {
        if (location.pathname !== "/") {
            navigate(`/?scroll=${sectionId}`);
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }
    };


    // Handle screen resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    useEffect(() => {
        const savedLanguage = Cookies.get("language") || "NL"; // Default to NL if no cookie
        setSelectedFlag(languageFlags[savedLanguage]);
    }, []);

    const handleLanguageChange = (lang) => {
        setLanguageHandler(lang);
        setSelectedFlag(languageFlags[lang]); // Update flag based on selected language
        setIsLanguageMenuOpen(false);
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
                        <div className={styles.menu}>
                            <Link to="/" onClick={() => handleNavClick("home")}>{translations.navbar.home}</Link>
                            <Link to="/" onClick={() => handleNavClick("about")}>{translations.navbar.about}</Link>
                            <Link to="/" onClick={() => handleNavClick("services")}>{translations.navbar.services}</Link>
                            <Link to="/" onClick={() => handleNavClick("work")}>{translations.navbar.work}</Link>
                            <Link to="/" onClick={() => handleNavClick("reviews")}>{translations.navbar.reviews}</Link>
                            <Link to="/" onClick={() => handleNavClick("contact")}>{translations.navbar.contact}</Link>
                        </div>
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
                            {translations.navbar.languageBtn}
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
                    <Link to="/" onClick={() => { setIsMenuOpen(false); handleNavClick("home"); }}>
                        {translations.navbar.home}
                    </Link>
                    <Link to="/" onClick={() => { setIsMenuOpen(false); handleNavClick("about"); }}>
                        {translations.navbar.about}
                    </Link>
                    <Link to="/" onClick={() => { setIsMenuOpen(false); handleNavClick("services"); }}>
                        {translations.navbar.services}
                    </Link>
                    <Link to="/" onClick={() => { setIsMenuOpen(false); handleNavClick("work"); }}>
                        {translations.navbar.work}
                    </Link>
                    <Link to="/" onClick={() => { setIsMenuOpen(false); handleNavClick("reviews"); }}>
                        {translations.navbar.reviews}
                    </Link>
                    <Link to="/" onClick={() => { setIsMenuOpen(false); handleNavClick("contact"); }}>
                        {translations.navbar.contact}
                    </Link>
                    <div
                        className={styles.languageSelector}
                        onMouseLeave={() => setIsLanguageMenuOpen(false)} // Close when cursor leaves
                    >
                        <button
                            className={styles.languageButton}
                            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                        >
                            <img src={selectedFlag} alt="Language" className={styles.languageIcon} />
                            {translations.navbar.languageBtn}
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

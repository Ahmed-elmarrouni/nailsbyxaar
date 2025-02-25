import React, { Component, createRef } from "react";
import styles from "./navbar.module.css";
import enFlag from "../../../public/flags/en.png";
import nlFlag from "../../../public/flags/nl.png";
import frFlag from "../../../public/flags/fr.png";
import logo from "../../../public/logo/logo.png";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: "NL",
            isLanguageMenuOpen: false,
            isMenuOpen: false,
            isMobile: window.innerWidth <= 1024,
        };
        this.languageMenuRef = createRef();
    }

    componentDidMount() {
        document.addEventListener("mousemove", this.handleMouseMove);
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        document.removeEventListener("mousemove", this.handleMouseMove);
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () => {
        this.setState({ isMobile: window.innerWidth <= 1024 });
    };

    handleMouseMove = (event) => {
        if (
            this.languageMenuRef.current &&
            !this.languageMenuRef.current.contains(event.target)
        ) {
            this.setState({ isLanguageMenuOpen: false });
        }
    };

    toggleLanguageMenu = () => {
        this.setState((prevState) => ({
            isLanguageMenuOpen: !prevState.isLanguageMenuOpen,
        }));
    };

    setLanguage = (lang) => {
        this.setState({ language: lang });
    };

    toggleMenu = () => {
        this.setState((prevState) => ({
            isMenuOpen: !prevState.isMenuOpen,
        }));
    };

    render() {
        return (
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    {/* Left Section: Brand */}
                    <div className={styles.brandSection}>
                        <img src={logo} alt="NailsbyXaar" className={styles.logo} />
                        <span className={styles.brandName}>NailsbyXaar</span>
                    </div>

                    {/* Center Section: Menu */}
                    {!this.state.isMobile && (
                        <div className={styles.menu}>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#services">Services</a>
                            <a href="#contact">Contact</a>
                        </div>
                    )}

                    {/* Right Section: Language Selector */}
                    {!this.state.isMobile && (
                        <div
                            className={styles.languageSelector}
                            ref={this.languageMenuRef}
                        >
                            <button
                                className={styles.languageButton}
                                onClick={this.toggleLanguageMenu}
                            >Lang
                                <img
                                    src={
                                        this.state.language === "EN"
                                            ? enFlag
                                            : this.state.language === "NL"
                                                ? nlFlag
                                                : frFlag
                                    }
                                    alt={this.state.language}
                                    className={styles.languageIcon}
                                />
                            </button>
                            {this.state.isLanguageMenuOpen && (
                                <div className={styles.languageMenu}>
                                    <button onClick={() => this.setLanguage("NL")}>
                                        <img
                                            src={nlFlag}
                                            alt="Dutch"
                                            className={styles.languageIcon}
                                        />{" "}
                                        NL
                                    </button>
                                    <button onClick={() => this.setLanguage("EN")}>
                                        <img
                                            src={enFlag}
                                            alt="English"
                                            className={styles.languageIcon}
                                        />{" "}
                                        EN
                                    </button>
                                    <button onClick={() => this.setLanguage("FR")}>
                                        <img
                                            src={frFlag}
                                            alt="French"
                                            className={styles.languageIcon}
                                        />{" "}
                                        FR
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {this.state.isMobile && (
                        <button className={styles.burgerMenu} onClick={this.toggleMenu}>
                            <span className="material-icons">
                                {this.state.isMenuOpen ? "close" : "menu"}
                            </span>
                        </button>
                    )}
                </div>

                {/* Mobile Menu */}
                {this.state.isMobile && this.state.isMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <a href="#home" onClick={this.toggleMenu}>Home</a>
                        <a href="#about" onClick={this.toggleMenu}>About</a>
                        <a href="#services" onClick={this.toggleMenu}>Services</a>
                        <a href="#contact" onClick={this.toggleMenu}>Contact</a>
                        <div
                            className={styles.languageSelector}
                            ref={this.languageMenuRef}
                        >
                            <button
                                className={styles.languageButton}
                                onClick={this.toggleLanguageMenu}
                            >
                                language{" "}
                                <img
                                    src={
                                        this.state.language === "EN"
                                            ? enFlag
                                            : this.state.language === "NL"
                                                ? nlFlag
                                                : frFlag
                                    }
                                    alt={this.state.language}
                                    className={styles.languageIcon}
                                />
                            </button>
                            {this.state.isLanguageMenuOpen && (
                                <div className={styles.languageMenu}>

                                    <button onClick={() => { this.setLanguage("NL"); this.toggleMenu(); }}>
                                        <img
                                            src={nlFlag}
                                            alt="Dutch"
                                            className={styles.languageIcon}
                                        />{" "}
                                        NL
                                    </button>

                                    <button onClick={() => { this.setLanguage("EN"); this.toggleMenu(); }}>
                                        <img
                                            src={enFlag}
                                            alt="English"
                                            className={styles.languageIcon}
                                        />{" "}
                                        EN
                                    </button>

                                    <button onClick={() => { this.setLanguage("FR"); this.toggleMenu(); }}>
                                        <img
                                            src={frFlag}
                                            alt="French"
                                            className={styles.languageIcon}
                                        />{" "}
                                        FR
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}

            </nav>
        );
    }
}

export default Navbar;

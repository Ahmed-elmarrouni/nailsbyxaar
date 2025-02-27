// import React, { createContext, useState, useContext } from "react";
// import en from "../locales/en.json";
// import fr from "../locales/fr.json";
// import nl from "../locales/nl.json";

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//     const [language, setLanguage] = useState("NL");
//     const [translations, setTranslations] = useState(nl);

//     const setLanguageHandler = (lang) => {
//         if (lang === "EN") {
//             setTranslations(en);
//         } else if (lang === "FR") {
//             setTranslations(fr);
//         } else {
//             setTranslations(nl);
//         }
//         setLanguage(lang);
//     };

//     return (
//         <LanguageContext.Provider value={{ translations, setLanguageHandler }}>
//             {children}
//         </LanguageContext.Provider>
//     );
// };

// export const useLanguage = () => useContext(LanguageContext);


import React, { createContext, useState, useContext, useEffect } from "react";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import nl from "../locales/nl.json";
import Cookies from "js-cookie";  

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("NL");
    const [translations, setTranslations] = useState(nl);

    useEffect(() => {
        const savedLanguage = Cookies.get("language");
        if (savedLanguage) {
            setLanguage(savedLanguage);
            setTranslations(getTranslations(savedLanguage));
        }
    }, []);

    const getTranslations = (lang) => {
        if (lang === "EN") return en;
        if (lang === "FR") return fr;
        return nl; 
    };

    const setLanguageHandler = (lang) => {
        setLanguage(lang);
        setTranslations(getTranslations(lang));
        Cookies.set("language", lang, { expires: 365 });
    };

    return (
        <LanguageContext.Provider value={{ translations, setLanguageHandler }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);

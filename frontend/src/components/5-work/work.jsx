import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import style from "./work.module.css";
import { useLanguage } from "../../contexts/LanguageContext";

const Work = () => {
    const { translations } = useLanguage();

    const images = [
        "/nails/1.jpeg",
        "/nails/2.jpeg",
        "/nails/3.jpeg",
        "/nails/5.jpeg",
    ];

    const [slidesToShow, setSlidesToShow] = useState(4);

    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth <= 480) {
                setSlidesToShow(1); // Mobile
            } else if (window.innerWidth <= 768) {
                setSlidesToShow(3); // Tablet
            } else {
                setSlidesToShow(4); // Desktop
            }
        };

        updateSlidesToShow();
        window.addEventListener("resize", updateSlidesToShow);
        return () => window.removeEventListener("resize", updateSlidesToShow);
    }, []);

    return (
        <div className={style.workContainer} id="work">
            <h4 className={style.aboutUs}>{translations.work.subTitle}</h4>
            <h2 className={style.title}>{translations.work.title}</h2>

            <Slide
                className={style.slider}
                duration={2500}
                autoplay={true}
                infinite={true}
                arrows={false}
                slidesToShow={slidesToShow}
                slidesToScroll={1}
            >
                {images.map((img, index) => (
                    <div key={index} className={style.eachSlideEffect}>
                        <div className={style.imageContainer} style={{ backgroundImage: `url(${img})` }} />
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Work;

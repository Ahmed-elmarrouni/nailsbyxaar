import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import style from "./work.module.css";

const Work = () => {
    const images = [
        "/nails/1.jpeg",
        "/nails/2.jpeg",
        "/nails/3.jpeg",
        "/nails/5.jpeg",
    ];

    const getSlidesToShow = () => {
        if (window.innerWidth <= 480) return 1; // Mobile
        if (window.innerWidth <= 768) return 3; // Tablet
        return 4; // Desktop
    };

    return (
        <div className={style.workContainer}>
            <h4 className={style.aboutUs}>MY WORK</h4>
            <h2 className={style.title}>
                Stunning nail designs crafted with precision and creativity
            </h2>

            <Slide
                className={style.slider}
                duration={2500}
                autoplay={true}
                infinite={true}
                arrows={false}
                slidesToShow={getSlidesToShow()}
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

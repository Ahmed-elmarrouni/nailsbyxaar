import React from 'react';
import styles from "./reviews.module.css";

import starIcon from "../../../public/imgs/star.png";
import coltonImage from "../../../public/logo/logo.png";
import ireneImage from "../../../public/logo/logo.png";
import anneImage from "../../../public/logo/logo.png";

const Reviews = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.upper}>
                <div className={styles.left}>
                    <div className={styles.heading}>
                        Building my passion for nail art, one set at a time!
                    </div>
                    <div className={styles.subheading}>
                        As a beginner nail stylist, I'm dedicated to improving my skills and creating beautiful designs. Check out what my early clients have to say about their experience!
                    </div>

                </div>

                <div className={styles.right}>
                    {[
                        "Highly Appreciated by Our Customers",
                        "Trusted by Many for Quality & Creativity",
                        "Consistently Positive Feedback from Clients"


                    ].map((text, index) => (
                        <div key={index} className={`${styles.rating} ${index === 1 ? styles.rating2 : index === 2 ? styles.rating3 : ""}`}>
                            <span className={styles.stars}>
                                {[...Array(5)].map((_, i) => (
                                    <img key={i} src={starIcon} alt="star" />
                                ))}
                            </span>
                            <span className={styles.ratingText}>{text}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.lower}>
                {[
                    { name: "Lars De Smet", img: coltonImage, review: "I had a lovely experience! She took her time with my nails and made sure I was happy with the result. Definitely coming back!" },
                    { name: "Sophie Van den Broeck", img: ireneImage, review: "Super friendly and patient! My nails look amazing, and I love the design. Can’t wait for my next appointment!" },
                    { name: "Emma Claes", img: anneImage, review: "Tried her nail service for the first time, and I was really impressed. She’s still learning, but the effort and care she puts in is great!" }

                ].map((person, index) => (
                    <div key={index} className={`${styles.item} ${index === 1 ? styles.item2 : index === 2 ? styles.item3 : ""}`}>
                        <div className={styles.image}>
                            <img src={person.img} alt={person.name} />
                        </div>
                        <div className={styles.itemHeader}>
                            {person.name}
                        </div>
                        <div className={styles.itemBody}>
                            {`"${person.review}"`}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;

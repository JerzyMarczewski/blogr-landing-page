import React from "react";
import styles from "./Intro.module.css";

import bgPatternIntro from "../../images/bg-pattern-intro.svg";
import bgPatterncircles from "../../images/bg-pattern-circles.svg";
import Navbar from "../Navbar/Navbar";

const Intro = () => {
    return (
        <div className={styles.container}
            style={{ backgroundImage: `url(${bgPatternIntro}), var(--bg-gradient-intro)` }}
        >
            <Navbar />
            <div className={styles.textContainer}>
                <h1>A modern publishing platform</h1>
                <p>Grow your audience and build your online brand</p>

                <div className={styles.buttonsContainer}>
                    <div className={styles.button1}>Start for Free</div>
                    <div className={styles.button2}>Learn More</div>
                </div>
            </div>
        </div>
    )
}

export default Intro;

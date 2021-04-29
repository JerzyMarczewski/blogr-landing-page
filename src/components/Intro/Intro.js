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
            {/* <img src={bgPatternIntro} alt="" width="1000"/> */}
            <Navbar />
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
            <p><h1>Hello</h1></p>
        </div>
    )
}

export default Intro;

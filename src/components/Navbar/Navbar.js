import React, {useState, useEffect} from "react";
import styles from "./Navbar.module.css";

import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";
import arrowDark from "../../images/icon-arrow-dark.svg";
import arrowLight from "../../images/icon-arrow-light.svg";


const Navbar = () => {
    
    const [hamburgerClicked, setHamburgerClicked] = useState(false);
    const [productTabClicked, setProductTabClicked] = useState(false);
    const [companyTabClicked, setCompanyTabClicked] = useState(false);
    const [connectTabClicked, setConnectTabClicked] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const decideWidth = () => {
        window.innerWidth < 1440 ? setIsDesktop(false) : setIsDesktop(true);
    };

    window.addEventListener('resize', () => {
        decideWidth();
        setCompanyTabClicked(false);
        setConnectTabClicked(false);
        setProductTabClicked(false);
    });

    useEffect(decideWidth,[]);



    return (
        <div className={styles.container}>
            <img src={logo} alt="logo" />
            <img src={hamburgerClicked ? close : hamburger}
                className={styles.hamburger}
                alt="hamburger icon"
                onClick={() => {
                    setProductTabClicked(false);
                    setCompanyTabClicked(false);
                    setConnectTabClicked(false);
                    hamburgerClicked && connectTabClicked
                        ? setTimeout(() => {setHamburgerClicked(!hamburgerClicked)}, 310)
                        : setHamburgerClicked(!hamburgerClicked);
                   
                }}
            />
            <div className={hamburgerClicked ? styles.options : `${styles.options} ${styles.hidden}`}>
                <ul className={styles.mainOptions}>

                    <li onClick={() => {
                        setCompanyTabClicked(false);
                        setConnectTabClicked(false);
                        setProductTabClicked(!productTabClicked)
                    }}><div className={ productTabClicked ? `${styles.stringAndArrow} ${styles.active}` : styles.stringAndArrow}>Product
                        <img 
                            src={ isDesktop ? arrowLight : arrowDark} 
                            style={productTabClicked ? {transform: "rotateZ(-180deg)"} : {}} 
                            alt="dark arrow icon"
                        />
                        </div>
                        <div className={productTabClicked ? styles.tabOptions : `${styles.tabOptions} ${styles.hidden}`}>
                            <p>Overview</p>
                            <p>Design</p>
                        <p>Soon to come</p>
                    </div>
                    </li>
                   

                    <li onClick={() => {
                        setProductTabClicked(false);
                        setConnectTabClicked(false);
                        setCompanyTabClicked(!companyTabClicked)
                    }}><div className={ companyTabClicked ? `${styles.stringAndArrow} ${styles.active}` : styles.stringAndArrow}>Company 
                            <img 
                                src={ isDesktop ? arrowLight : arrowDark} 
                                style={companyTabClicked ? {transform: "rotateZ(-180deg)"} : {}} 
                                alt="dark arrow icon"
                            />
                        </div>
                        <div className={companyTabClicked ? styles.tabOptions : `${styles.tabOptions} ${styles.hidden}`}>
                            <p>About</p>
                            <p>Community</p>
                        </div>
                    </li>
                   

                    <li onClick={() => {
                        setProductTabClicked(false);
                        setCompanyTabClicked(false);
                        setConnectTabClicked(!connectTabClicked)
                    }}><div className={ connectTabClicked ? `${styles.stringAndArrow} ${styles.active}` : styles.stringAndArrow}>Connect 
                            <img 
                            src={ isDesktop ? arrowLight : arrowDark} 
                            style={connectTabClicked ? {transform: "rotateZ(-180deg)"} : {}} 
                            alt="dark arrow icon"
                            />
                        </div>
                        
                        <div className={connectTabClicked ? styles.tabOptions : `${styles.tabOptions} ${styles.hidden}`}>
                            <p>Contact</p>
                            <p>Newsletter</p>
                            <p>Linked in</p>
                        </div>
                    </li>
                </ul>

                <hr style={{width: "85%", height: "2px", margin: "2rem 0"}} />

                <ul className={styles.optionsButtons}>
                    <li>Login</li>
                    <li className={styles.signUpButton}>Sign Up</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;

import React from "react";
import styles from "./EditorBlock.module.css";
import editorIllustrationDesktop from "../../images/illustration-editor-desktop.svg";
import editorIllustrationMobile from "../../images/illustration-editor-mobile.svg";



const EditorBlock = () => {
    return (
        <div className={styles.container}>
            <h1>Design for the future</h1>
            <div className={styles.textContainer}>
                <h3>Introducing and extensible editor</h3>
                <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                    dchange the looks of a blog.
                </p>
                <h3>Robust content management</h3>
                <p>Flexible content management enables users to easily move through post. Increase the usability of your 
                    blog by adding customized categories, sections, format, or flow. With this functionality, you're in 
                    full control.
                </p>
            </div>
            <img src={editorIllustrationMobile} alt=""/>
        </div>
    )
}

export default EditorBlock;

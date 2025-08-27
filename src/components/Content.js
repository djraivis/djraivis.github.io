import React from "react";
import styles from "./Content.module.css";

function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <p className={styles.header}>About</p>
        <p className={styles.text}>
        Contributing to web apps with React & JavaScript | Ensuring quality with Playwright
        </p>
        <p className={styles.header}>Interests</p>
        <p className={styles.text}>
          Music, coffee, and adventure.
        </p>
      </div>
    </div>
  );
}

export default Content;

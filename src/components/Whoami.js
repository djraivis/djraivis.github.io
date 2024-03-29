import React from "react";
import styles from "./Whoami.module.css";

function Whoami() {
  return (
    <div className={styles.whoami}>
      <div className={styles.container}>
        <p className={styles.name}>Raivis</p>
        <p className={styles.occupation}>QA, Web Developer</p>
        <a
          className={styles.link}
          href="https://community.inkdrop.app/note/6554c0e8425877ffa35ab037b8dd8014/note:wyq8eiMug"
          target="_blank"
          rel="noopener noreferrer"
        >
          Curriculum Vitae
        </a>
      </div>
    </div>
  );
}

export default Whoami;

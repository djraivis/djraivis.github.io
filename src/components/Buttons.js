import React from "react";
// Icons
import mail from "../images/mail.svg";
import linkedin from "../images/linkedin.svg";
// Styles
import styles from "./Buttons.module.css";

function Buttons () {
  return (
    <div className={styles.buttons}>
      <div className={styles.container}>
        <a
          href="mailto:highdoven@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.btn}>
            <img src={mail} className="btn-icon" alt="Mail" />
            <p className="btn_text">Email</p>
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/raivis-gereiss/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={`${styles.btn} ${styles.linkedin}`}>
            <img src={linkedin} className="btn_icon" alt="Linkedin" />
            <p className="btn_text">Linkedin</p>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Buttons;

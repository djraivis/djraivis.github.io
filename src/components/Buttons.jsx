import React from "react"
// Icons
import mail from "../images/mail.svg"
import linkedin from "../images/linkedin.svg"
// Styles
import styles from "./Buttons.module.css"

function Buttons() {
  return (
    <div className={styles.buttons}>
      <div className={styles.container}>
        <a className={styles.btn} href="mailto:raivis.gereiss@uktv.co.uk">
          <img src={mail} className={styles.icon} alt="Mail" />
          <span>Email</span>
        </a>

        <a
          className={`${styles.btn} ${styles.linkedin}`}
          href="https://www.linkedin.com/in/raivisg/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={linkedin} className={styles.icon} alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  )
}

export default Buttons

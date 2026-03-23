import React from "react"
import facebook from "../images/facebook-icon.svg"
import instagram from "../images/instagram-icon.svg"
import github from "../images/github-icon.svg"
import styles from "./Card.module.css"

function Card() {
  return (
    <div className={`${styles.mainframe} ${styles.card0}`}>
      <div className={styles.container}>
        <div className={styles.border}>
          <div className={styles.profileTag}>
            <p>Web Developer</p>
          </div>
          <div className={styles.iconswrapper}>
            <div className={styles.icons}>
              <a href="https://www.facebook.com/djraivis" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/GoRaivis/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://github.com/djraivis" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

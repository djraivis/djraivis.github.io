import React from "react";
import twitter from "../images/twitter-icon.svg";
import facebook from "../images/facebook-icon.svg";
import instagram from "../images/instagram-icon.svg";
import github from "../images/github-icon.svg";
import styles from "./Card.module.css";

// ! abckjbcjh
// * kjabckjbcjk
// ? I like the colourfull comments this is cool actually
// * Nice, I love green comments

function Card () {
  return (
    <div className={`${styles.mainframe} ${styles.card0}`}>
      <div className={styles.container}>
        <div className={styles.border}>
          <a
            className={styles.reactdev}
            href="https://create-react-app.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>React Dev</h2>
          </a>
          <div className={styles.iconswrapper}>
            <div className={styles.icons}>
              <a
                href="https://twitter.com/timelesscoding"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="Twitter" />
              </a>
              <a
                href="https://www.facebook.com/djraivis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/codingwithraivis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" />
              </a>
              <a
                href="https://djraivis.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="Github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

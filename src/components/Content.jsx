import React from "react"
import styles from "./Content.module.css"

function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <p className={styles.header}>About</p>
        <p className={styles.text}>
          Interested in understanding how applications work behind the scenes and in solving problems.
        </p>
        <p className={styles.header}>Interests</p>
        <p className={styles.text}>Personal projects, Japanese learning, terminal workflows (Neovim)</p>
      </div>
    </div>
  )
}

export default Content

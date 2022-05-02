import React from 'react'
import styles from './Content.module.css'

function Content () {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <p className={styles.header}>About</p>
        <p className={styles.text}>I am a front-end developer with a particular interest in programming. I am continuously learning JavaScript and building projects in React. I try to keep up with best practices and always look for new things to know.
        </p>
        <p className={styles.header}>Interests</p>
        <p className={styles.text}>Food expert. DJ. Internet fanatic. Bacon buff. Travel geek. Dance music ninja. Coffee snob.</p>
      </div>
    </div>
  )
}

export default Content
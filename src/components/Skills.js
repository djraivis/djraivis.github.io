import React from 'react'
import html from '../images/html-icon.svg'
import css from '../images/css-icon.svg'
import javascript from '../images/javascript-icon.svg'
import logo from '../images/logo.svg'

import styles from './Skills.module.css'

function Skills() {
  return (
    <div className={styles.developer}>
      <div className={`${styles.container} ${styles.icons}`}>
        <i><img className={styles.size} src={html} alt="Html" /></i>
        <i><img className={styles.size} src={css} alt="CSS" /></i>
        <i><img className={styles.size} src={javascript} alt="JavaScript" /></i>
        <i><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img className={styles.reactlogo} src={logo} alt="React" /></a></i>
      </div>
    </div>
  )
}

export default Skills
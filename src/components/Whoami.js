import React from 'react'
import styles from './Whoami.module.css'

function Whoami () {
  return (
    <div className={styles.whoami}>
      <div className={styles.container}>
        <p className={styles.name}>Raivis G</p>
        <p className={styles.occupation}>Frontend Developer</p>
        <a className={styles.link} href="http://raivis.work" target="_blank" rel="noopener noreferrer" >raivis.website</a>
      </div>

    </div>
  )
}

export default Whoami
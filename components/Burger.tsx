// Burger.js
import React from 'react'
import styles from './styles/Burger.module.css'

const Burger = () => {
  return (
    <nav className={styles.button}>
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
    </nav>
  )
}

export default Burger

import React from 'react'
import styles from './styles/attribution.module.css'

const attribution = () => {
  return (
    <section className={styles.attribution}>
      <img className={styles.bookImage} src='/images/books/enemies.jpg' alt='Podcast Art for Enemies: from War to Wisdom' style={{ width: '200px' }} />
      <div className={styles.inner}>
        <h3>Attribution</h3>
        <p><em>Enemies: from War to Wisdom</em> is from Polly Young-Eisendrath, Ph.D., and Eleanor Johnson. You can <a href='https://young-eisendrath.com/podcast-enemies-all-episodes'>listen to the podcast here</a>. </p>
        <p>This website only provide notes on the podcast.</p>
      </div>
    </section>
  )
}

export default attribution

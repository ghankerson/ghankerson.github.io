import React from 'react'
import Link from 'next/link'
import styles from './styles/PrevNext.module.css'

interface PrevNextProps {
  parent: string,
  prev: object,
  current: string,
  next: object
}

const PrevNext = ( { parent, prev, current, next } ) => {
  return (
    <nav className={styles.prev_next}>
      <h2 className={styles.hdg2}>{parent}</h2>
      <ul className={styles.list}>
        {prev && (
          <li>
            <h3 className={styles.hdg3}>Previous</h3>
            <Link href={prev.href}><a className={styles.alink}>{prev.name}</a></Link>
          </li>
         )}
        <li>
          <h3 className={styles.hdg3}>Currently Reading</h3>
          {current}
         </li>
        {next && (
          <li>
            <h3 className={styles.hdg3}>Next</h3>
            <Link href={next.href}><a className={styles.alink}>{next.name}</a></Link>
          </li>
        )}
      </ul>
    </nav>
  ) 
}

export default PrevNext

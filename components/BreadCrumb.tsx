import React from 'react'
import Link from 'next/link'
import styles from './styles/Breadcrumb.module.css'

interface BreadcrumbProps {
  parent: object,
}

const Breadcrumb = ( { parent } ) => {
  return (
    <ul className={styles.breadcrumb}>
      <li className={styles.list_item}>
        <Link href={parent.href}><a>{parent.name}</a></Link>
      </li>
    </ul>
  ) 
}

export default Breadcrumb

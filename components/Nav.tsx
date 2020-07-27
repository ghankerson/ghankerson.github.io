import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <ul className='navigation'>
      <li>
        <Link href='/books'>
          <a>Book Notes</a>
        </Link>
      </li>
      <li>
        <Link href='/podcasts'>
          <a>Podcast Notes</a>
        </Link>
      </li>
    </ul>
  )
}

export default Nav

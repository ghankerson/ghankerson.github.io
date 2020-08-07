import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav role='navigation' className='navigation'>
      <div id='menuToggle'>
        <input type='checkbox' />
        <span />
        <span />
        <span />
        <ul id='menu' className='navigation'>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/books'>
              <a>Book Notes</a>
            </Link>
            <ul>
              <li>
                <Link href='/sapiens'>
                  <a>Sapiens <em>by Yuval Noah Harari</em></a>
                </Link>
              </li>
              <li>
                <Link href='/racial-complex'>
                  <a>The Racial Complex: A Jungian Perspective on Culture and Race <em>by Fanny Brewster</em></a>
                </Link>
              </li>
              <li>
                <Link href='/origins'>
                  <a>The Origins and History of Consciousness <em>by Erich Neumann</em></a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href='/podcasts'>
              <a>Podcast Notes</a>
            </Link>
            <ul>
              <li>
                <Link href='/enemies'>
                  <a>Enemies: From War to Wisdom podcast <em>from Polly Young-Eisendrath</em></a>
                </Link>
              </li>
              <li>
                <Link href='/johnbetts'>
                  <a>Jung&rsquo;s Model of the Psyche <em>from Jungian Analyst John Betts</em></a>
                </Link>

              </li>
            </ul>
          </li>
          <li />
          <li>
            <Link href='/cleverelse'>
              <a>An interpretation of the fairy take Clever Else</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav

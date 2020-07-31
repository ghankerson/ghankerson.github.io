import React from 'react'
import Link from 'next/link'

interface PrevNextProps {
  parent: string,
  prev: object,
  current: string,
  next: object
}

const PrevNext = ( { parent, prev, current, next } ) => {
  return (
    <nav className="prev_next">
      <h2 className="parent">{parent}</h2>
      <ul className="prev_next">
        {prev && (
          <li>
            <h3>Previous</h3>
            <Link href={prev.href}><a>{prev.name}</a></Link>
          </li>
         )}
        <li>
          <h3>Currently Reading</h3>
          {current}
         </li>
        {next && (
          <li>
            <h3>Next</h3>
            <Link href={next.href}><a>{next.name}</a></Link>
          </li>
        )}
      </ul>
    </nav>
  ) 
}

export default PrevNext

import React from 'react'
import Link from 'next/link'

const HeadingLink = ({ level, classnames, text }) => {
  const Tag = level
  return (
    <header className={classnames}>
      <Tag>
        <Link href="/">
          <a>
            {text}
          </a>
        </Link>
      </Tag>
    </header>
  )
}

export default HeadingLink;

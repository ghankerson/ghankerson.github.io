import React from 'react'
import Link from 'next/link'

interface BreadcrumbProps {
  parent: object,
}

const Breadcrumb = ( { parent } ) => {
  return (
    <ul className="breadcrumb">
      <li className="breadcrumb">
        <Link href={parent.href}><a>{parent.name}</a></Link>
      </li>
    </ul>
  ) 
}

export default Breadcrumb

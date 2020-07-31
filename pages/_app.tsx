import React from 'react'
import '../styles/fonts.css'
import '../styles/layout.css'
import '../styles/elements.css'
import '../styles/navbar.css'
import '../styles/components/attribution.css'
import '../styles/components/Breadcrumb.css'
import '../styles/components/PrevNext.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

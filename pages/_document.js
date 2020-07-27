import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import HeadingLink from '../components/HeadingLink'
import Nav from '../components/Nav'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Taviraj:ital,wght@0,300;0,500;0,700;1,200&display=swap" rel="stylesheet" /> 
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
        <section className="flex-container">
          <nav className="sidebar"> 
            <HeadingLink level="h2" text="Booknotes Blog" classnames="flex-item" />
            <Nav />
          </nav>
          <div className="flex-item main-column">
            <div className="inner">
              <Main />
            </div>
          </div>
        </section>
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument


import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Taviraj:wght@200;500&display=swap" rel="stylesheet" /> 
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
        <section className="flex-container">
          <header className="flex-item sidebar">
            <h2>Booknotes Blog</h2>
          </header>
          <div className="flex-item main-column">
            <Main />
          </div>
        </section>
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument


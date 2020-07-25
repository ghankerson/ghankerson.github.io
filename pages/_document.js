import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="#da532c" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;700;900&family=Open+Sans&display=swap" rel="stylesheet" /> 
        </Head>
        <body>
          <section className='kintainer'>
            <Main />
            <NextScript />
          </section>
        </body>
      </html>
    );
  }
}

export default MyDocument;

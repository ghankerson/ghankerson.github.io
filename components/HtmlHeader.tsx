import React from 'react'
import Head from 'next/head'

interface Props {
  title: string,
}

const HtmlHeader = ( { title } ) => {
  const titleText = `The Booknotes Blog | ${title}`
  return (
    <Head>
      <title>The Booknotes Blog | {title}</title>
      <meta property='og:title' content={titleText} />
      <meta property='og:image' content='https://ghankerson.github.io/images/booknotes.jpg' />
      <meta property='twitter:title' content={titleText} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name="twitter:creator" content="@ghankstef" />
      <meta property='twitter:image' content='https://ghankerson.github.io/images/booknotes.jpg' />
    </Head>
  )
}

export default HtmlHeader

import React, { useEffect } from 'react';
import { Global, css } from '@emotion/core';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import theme from '../styles/theme';
import MDXComponents from '../components/MDXComponents';

const GlobalStyle = ({ children }) => (
  <>
    <CSSReset />
    <Global
      styles={css`
        ::selection {
          background-color: #ff9cf9;
          color: #fefefe;
        }

        html {
          min-width: 360px;
          scroll-behavior: smooth;
        }

        body {
          background: #EEE;
          color: #000; 
          line-height: 2em;
         }
        


         a.css-cw6lli{
           color: #F28705;
           font-weight: bold;
         }

         a.css-cw6lli:hover {
           color: #B56576;
         }


        .kintainer {
          display:flex;
          flex-wrap:wrap;
          margin:auto;
          justify-content: center;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          max-width: 45vw;
          justify-content: center;
        }
      `}
    />
    {children}
  </>
);

const App = ({ Component, pageProps }) => {

  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;

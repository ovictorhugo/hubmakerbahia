import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';
import Head from 'next/head';
import { UserAuthContextProvider } from '../src/context/UserAuthContext';


const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
    font-family: 'Gilroy', sans-serif;

  }

  ::selection {
    background-color: #b3d4fc;
    color: #000;
    text-shadow: none;
  }

  body {
    height: 100%;
  }

  h1 {
    color: #000;
    font-size: 52px;
    font-weight: 700;
    line-height: 1.3;
    text-align: center;
  }

  h2 {
    color: #323232;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
  }

  @media screen and (max-width: 768px) {
    h1 {
    font-size: 32px;
    
  }
    }

  ::-webkit-scrollbar {
      background-color: transparent;
      height: 10px;
      transition: background-color .2s linear;
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
    background: #aaa;
    background-clip: padding-box;
    border: 2px solid transparent;
    border-radius: 10px;
    transition: background-color .2s linear;
    }

    body.active-modal {
    overflow-y: hidden;
  }
`

const theme = db.theme;

function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"/>
      <link rel='stylesheet' href='nprogress.css'/>
    </Head>

    <GlobalStyle/>
    <ThemeProvider theme={theme}><UserAuthContextProvider>
      <Component {...pageProps} />
      
      </UserAuthContextProvider></ThemeProvider>
    </>
  );
}

export default App;

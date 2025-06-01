"use client"

import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-weight: 500;
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    letter-spacing: -0.01em;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${(props) => props.theme.fontWeights.semibold};
    line-height: 1.2;
  }

  strong, b {
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

export default GlobalStyles

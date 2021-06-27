import { createGlobalStyle } from 'styled-components'
import PoppinsRegular from 'assets/fonts/PoppinsRegular.ttf'
import PoppinsBold from 'assets/fonts/PoppinsBold.ttf'

export default createGlobalStyle`

  @font-face {
    font-family: 'Poppins Regular';
    src: local('Poppins Regular'),
    url(${PoppinsRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins Bold';
    src: local('Poppins Bold'),
    url(${PoppinsBold}) format('truetype');
  }


  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: Poppins Regular, sans-serif;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    overflow-x: hidden;
  }
  body {
    scroll-behavior: smooth;

  }
  html, body {
    box-sizing: border-box;
    background-color: transparent;
    color: #000
  }

  html.noOverflow {
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ::selection {
    background: #fff;
    color: #fff;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
    background-color: transparent;
  }
`

import { createGlobalStyle } from 'styled-components'
// @ts-ignore
export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
  }
  body {
    background-image: url(https://images.pexels.com/photos/2043569/pexels-photo-2043569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`

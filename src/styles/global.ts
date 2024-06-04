import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['yellow-dark']};
  }
  
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme['base-text']};
  }
  
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  .container {
    width: 100%;
    max-width: 74rem;
    margin: 0 auto;
  }

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 2rem;
    color: ${({ theme }) => theme['base-title']};
  }
`

import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  red: '#E66767',
  darkBrown: '#FFEBD9',
  lightBrown: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body{
    background-color: ${colors.lightBrown}
  }
`

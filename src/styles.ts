import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  vermelho: '#E66767',
  begeEscuro: '#FFEBD9',
  begeClaro: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body{
    background-color: ${cores.begeClaro}
  }
`

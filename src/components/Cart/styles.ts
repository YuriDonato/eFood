import styled from 'styled-components'
import { cores } from '../../styles'

import { Button } from '../CardMenu/style'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  overflow-y: scroll;

  ${Button} {
    max-width: 100%;
    width: 100%;
    font-size: 14px;
    margin-top: 16px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
`

export const Prices = styled.p`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};
  margin-top: 40px;

  span {
    font-size: 12px;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.begeEscuro};
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 8px 8px 12px 8px;
  }
  h3 {
    color: ${cores.vermelho};
    font-weight: bold;
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 16px;
  }
  span {
    display: block;
    color: ${cores.vermelho};
    font-weight: 400;
    font-size: 14px;
  }
  button {
  }
`

export const ButtonLixeira = styled.img`
  max-width: 16px;
  max-height: 16px;
  border: none;
  background-color: transparent;
  position: absolute;
  bottom: 0px;
  right: 0px;
  cursor: pointer;
`

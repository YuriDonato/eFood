import styled from 'styled-components'
import InputMask from 'react-input-mask'

import { colors } from '../../styles'
import { Button } from '../CardMenu/style'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

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
export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }
  input,
  select {
    background-color: ${colors.darkBrown};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.white};
    width: 100%;
  }

  .error {
    border: 4px solid red;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.red};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  overflow-y: scroll;
  color: ${colors.lightBrown};
  font-size: 14px;

  ${Button} {
    max-width: 100%;
    width: 100%;
    font-size: 14px;
    margin-top: 16px;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  ${Row} {
    margin: 8px 0;
  }

  h2 {
    font-size: 16px;
    font-weight: bold;
    line-height: normal;
    padding-bottom: 8px;
  }
`

export const Prices = styled.p`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-top: 40px;

  span {
    font-size: 12px;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.darkBrown};
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 8px 8px 12px 8px;
  }
  h3 {
    color: ${colors.red};
    font-weight: bold;
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 16px;
  }
  span {
    display: block;
    color: ${colors.red};
    font-weight: 400;
    font-size: 14px;
  }
  button {
  }
`

export const ButtonTrashcan = styled.img`
  max-width: 16px;
  max-height: 16px;
  border: none;
  background-color: transparent;
  position: absolute;
  bottom: 0px;
  right: 0px;
  cursor: pointer;
`

export const Label = styled.label`
  color: ${colors.lightBrown};
`

export const Input = styled.input`
  background-color: ${colors.lightBrown};
`

export const InputMasks = styled(InputMask)`
  background-color: ${colors.lightBrown};
`

export const P = styled.p`
  padding-bottom: 24px;
  font-size: 14px;
  line-height: 22px;
`

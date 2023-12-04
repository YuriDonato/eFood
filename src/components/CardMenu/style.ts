import styled from 'styled-components'
import { colors } from '../../styles'

type ButtonProps = {
  topPadding?: string
  bottomPadding?: string
}

export const Container = styled.div`
  width: 100%;
  height: 346px;
  display: block;
  color: ${colors.darkBrown};
  padding: 8px 8px 50px 8px;
  background-color: ${colors.red};

  &:nth-child(2) {
    justify-self: center;
  }
  &:nth-child(3) {
    justify-self: end;
  }
  &:nth-child(4) {
    justify-self: start;
  }
  &:nth-child(5) {
    justify-self: center;
  }
  &:nth-child(6) {
    justify-self: end;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 167px;
  flex-shrink: 0;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 0px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
`

const checkPadding = (top: string | undefined, bottom: string | undefined) => {
  if (!top && !bottom) {
    return 'padding: 4px 0px'
  } else if (top && !bottom) {
    return `padding-top: ${top}`
  } else if (!top && bottom) {
    return `padding-bottom: ${bottom}`
  }
}

export const Button = styled.button<ButtonProps>`
  text-decoration: none;
  background-color: ${colors.darkBrown};
  width: 100%;
  margin-top: 8px;
  ${(p) => checkPadding(p.topPadding, p.bottomPadding)};

  color: ${colors.red};
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  display: flex;
  z-index: 1;
  background-color: ${colors.red};
  color: ${colors.darkBrown};
  padding: 0 0px 32px 32px;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  .modalContainer {
    display: flex;

    > img {
      padding: 32px 0 0 0;
      width: 280px;
      height: 280px;
      object-fit: cover;
      object-position: center;
    }
    .infoContainer {
      margin-left: 24px;
      .modalInfo {
        margin: 0 32px 0 0;
      }
      .exitButton {
        display: flex;
        flex-direction: row-reverse;
        margin: 8px 8px 0 0;

        > img {
          cursor: pointer;
          width: 16px;
          height: 16px;
        }
      }
    }
  }
`

export const ModalCardTitle = styled(Title)`
  font-size: 16px;
`

export const ModalCardText = styled(Description)`
  margin-bottom: 16px;
  line-height: 22px;
  font-size: 14px;
`

export const ModalCardButton = styled(Button)`
  width: fit-content;
  padding: 4px 7px;
`

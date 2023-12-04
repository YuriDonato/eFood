import styled from 'styled-components'
import { colors } from '../../styles'
import pattern from '../../assets/images/pattern.svg'
import { Props } from '.'
import { Link } from 'react-router-dom'

type PropLink = {
  align?: string
}

export const HeaderBar = styled.div<Props>`
  width: 100%;
  height: ${(props) => (props.page === 'home' ? '384px' : '186px;')};
  background-color: ${colors.darkBrown};
  background-image: url(${pattern});
  background-repeat: repeat-y;
  display: flex;
  align-items: center;
  flex-direction: ${(p) => (p.page === 'home' ? 'column' : 'row')};
  justify-content: 'center';

  div {
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 171px;
    margin-right: 171px;
    justify-items: ${(p) => (p.page === 'home' ? 'center' : 'stretch')};
    max-width: 1024px;
    margin: 0 auto;
  }
`

export const HeaderLogo = styled.img<Props>`
  max-width: 125px;
  max-height: 57.5px;
  margin-top: ${(p) => (p.page === 'home' ? '64px' : '0px')};
  margin-bottom: ${(p) => (p.page === 'home' ? '138px' : '0px')};
  margin-right: ${(p) => (p.page === 'home' ? '0px' : '25%')};
  margin-left: ${(p) => (p.page === 'home' ? '0px' : '25%')};

  &:nth-child(2) {
    justify-self: center;
  }
`

export const HeaderText = styled.h1<Props>`
  color: ${colors.red};
  text-align: center;
  font-size: 36px;
  line-height: normal;
  font-weight: bold;
  max-width: 539px;
  margin-bottom: 40px;
`

export const HeaderLink = styled(Link)<PropLink>`
  color: ${colors.red};
  font-size: 18px;
  font-weight: bold;
  text-align: ${(p) => p.align};
  text-decoration: none;
`

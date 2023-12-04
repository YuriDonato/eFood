import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.div`
  width: 100%;
  height: 320px;
  background-color: ${colors.darkBrown};
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const FooterLogo = styled.img`
  padding-top: 40px;
  padding-bottom: 32.5px;
  width: 125px;
`

export const FooterText = styled.p`
  padding-top: 80px;
  margin-bottom: 40px;
  color: ${colors.red};
  text-align: center;
  font-size: 10px;
  width: 50%;
`

export const SocialContainer = styled.div`
  img {
    width: 32px;
    height: 24px;
    flex-shrink: 0;
    padding-left: 8px;
  }
`

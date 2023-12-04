import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

type Props = {
  imgurl: string
}

export const Card = styled.div`
  width: 472px;
  flex-shrink: 0;
  background-color: ${colors.white};
`
export const CardImg = styled.div<Props>`
  background-image: url(${(props) => props.imgurl});
  width: 100%;
  height: 217px;
  background-size: cover;
  display: flex;
  flex-direction: row-reverse;
`

export const CardTag = styled.span`
  width: max-content;
  height: max-content;
  background-color: ${colors.red};
  color: ${colors.white};
  font-size: 12px;
  font-weight: bold;
  line-height: normal;
  text-align: center;
  padding: 6px 4px;
  margin-right: 8px;
  margin-top: 16px;
`

export const CardContainer = styled.div`
  padding: 8px;
  color: ${colors.red};
  border-right: 1px solid ${colors.red};
  border-bottom: 1px solid ${colors.red};
  border-left: 1px solid ${colors.red};

  .containerHeader {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;

      img {
        margin-bottom: 16px;
        margin-left: 8px;
      }
    }
  }
`

export const CardTitle = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
`

export const CardRate = styled(CardTitle)``

export const CardDescription = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const CardButton = styled(Link)`
  padding: 4px 6px;
  font-size: 14px;
  cursor: pointer;

  border: none;
  text-decoration: none;

  width: max-content;
  height: max-content;
  background-color: ${colors.red};
  color: ${colors.white};
  font-weight: bold;
  line-height: normal;
  text-align: center;
  margin-right: 8px;
  margin-top: 16px;
`

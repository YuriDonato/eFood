import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

type Props = {
  imgurl: string
}

export const Card = styled.div`
  width: 472px;
  height: 398px;
  flex-shrink: 0;
  background-color: ${cores.branca};
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
  background-color: ${cores.vermelho};
  color: ${cores.branca};
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
  color: ${cores.vermelho};
  border-right: 1px solid ${cores.vermelho};
  border-bottom: 1px solid ${cores.vermelho};
  border-left: 1px solid ${cores.vermelho};

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
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  font-weight: bold;
  line-height: normal;
  text-align: center;
  margin-right: 8px;
  margin-top: 16px;
`

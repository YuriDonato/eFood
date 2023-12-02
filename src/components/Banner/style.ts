import styled from 'styled-components'

import italianBanner from '../../assets/images/italianbanner.png'
import sushiBanner from '../../assets/images/sushibanner.jpg'

type Props = {
  genre: string
}

export const Black = styled.div`
  width: 100%;
  height: 312px;
  background-color: black;
`

export const Container = styled.div<Props>`
  width: 100%;
  height: 312px;
  background-image: ${(p) =>
    p.genre === 'Italiana' ? `url(${italianBanner})` : `url(${sushiBanner})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: rgba(30, 30, 30, 0.5);
  background-blend-mode: darken;

  div {
    padding: 25px 0px 32px;
    margin-left: 171px;
    margin-right: 171px;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    }
  }
`

export const Genre = styled.h2`
  color: white;
  font-size: 32px;
  font-weight: 100;
  margin-bottom: 156.5px;
  opacity: 1;
`

export const Name = styled(Genre)`
  font-weight: 900;
  margin-bottom: 32px;
  opacity: 1;
`

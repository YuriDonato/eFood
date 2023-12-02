import * as S from './style'

type Props = {
  name: string
  genre: string
}

const Banner = ({ name, genre }: Props) => (
  <S.Black>
    <S.Container genre={genre}>
      <div>
        <S.Genre>{genre}</S.Genre>
        <S.Name>{name}</S.Name>
      </div>
    </S.Container>
  </S.Black>
)

export default Banner

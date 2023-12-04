import * as S from './style'

import rateIcon from '../../assets/images/estrela.svg'

import { getDescription } from '../../utils'

type Props = {
  restaurant: Restaurant
}

const ListagemCard = ({ restaurant }: Props) => {
  function UpperCase(text: string) {
    const newText = text.charAt(0).toUpperCase() + text.slice(1)
    return newText
  }

  return (
    <S.Card>
      <S.CardImg imgurl={restaurant.capa}>
        {restaurant.destacado && <S.CardTag>Destaque da semana</S.CardTag>}
        {restaurant.tipo && <S.CardTag>{UpperCase(restaurant.tipo)}</S.CardTag>}
      </S.CardImg>
      <S.CardContainer>
        <div className="containerHeader">
          <S.CardTitle>{restaurant.titulo}</S.CardTitle>
          <div>
            <S.CardRate>{restaurant.avaliacao}</S.CardRate>
            <img src={rateIcon} alt="estrela" />
          </div>
        </div>
        <S.CardDescription>
          {getDescription(restaurant.descricao)}
        </S.CardDescription>
        <S.CardButton to={`/restaurant/${restaurant.id}`}>
          Saiba mais
        </S.CardButton>
      </S.CardContainer>
    </S.Card>
  )
}

export default ListagemCard

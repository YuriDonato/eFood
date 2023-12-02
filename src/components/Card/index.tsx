import * as S from './style'

import estrela from '../../assets/images/estrela.svg'
import { Restaurant } from '../../models/Restaurant'

import { getDescricao } from '../CardMenu'

type Props = {
  restaurant: Restaurant
}

const ListagemCard = ({ restaurant }: Props) => {
  function UpperCase(texto: string) {
    const newText = texto.charAt(0).toUpperCase() + texto.slice(1)
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
            <img src={estrela} alt="estrela" />
          </div>
        </div>
        <S.CardDescription>
          {getDescricao(restaurant.descricao)}
        </S.CardDescription>
        <S.CardButton to={`/restaurant/${restaurant.id}`}>
          Saiba mais
        </S.CardButton>
      </S.CardContainer>
    </S.Card>
  )
}

export default ListagemCard

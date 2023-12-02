import { Restaurant } from '../../models/Restaurant'
import CardMenu from '../CardMenu'
import { ListagemContainer } from './style'

type Props = {
  restaurant: Restaurant
}

const ListagemPerfil = ({ restaurant }: Props) => {
  return (
    <ListagemContainer>
      {restaurant.cardapio.map((item, index) => (
        <CardMenu key={index + 1} prato={item} />
      ))}
    </ListagemContainer>
  )
}

export default ListagemPerfil

import CardMenu from '../CardMenu'
import Cart from '../Cart'
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
      <Cart />
    </ListagemContainer>
  )
}

export default ListagemPerfil

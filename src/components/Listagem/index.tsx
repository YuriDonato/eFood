import ListagemCard from '../Card'
import { ListagemContainer } from './style'

export type Props = {
  restaurants: Restaurant[]
}

const Listagem = ({ restaurants }: Props) => {
  return (
    <ListagemContainer>
      {restaurants.map((restaurant) => (
        <ListagemCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </ListagemContainer>
  )
}

export default Listagem

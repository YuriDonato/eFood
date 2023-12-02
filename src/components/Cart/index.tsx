import { RootReducer } from '../../store'
import {
  ButtonLixeira,
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Sidebar
} from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../CardMenu'
import { Button } from '../CardMenu/style'
import lixeira from '../../assets/images/lixeira.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <ButtonLixeira
                src={lixeira}
                onClick={() => removeItem(item.id)}
              />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <span>Valor total</span>
          <span>{formataPreco(getTotalPrice())}</span>
        </Prices>
        <Button>Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart

import * as S from './style'
import logo from '../../assets/images/logo.svg'

import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

export type Props = {
  page: 'home' | 'perfil'
}

const Header = ({ page }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar page={page}>
      {page === 'home' ? (
        <>
          <S.HeaderLogo page={page} src={logo} alt="Logo" />
          <S.HeaderText page={page}>
            Viva experiências gastronômicas no conforto da sua casa
          </S.HeaderText>
        </>
      ) : (
        <div>
          <S.HeaderLink to={'/'}>Restaurantes</S.HeaderLink>
          <S.HeaderLogo page={page} src={logo} alt="Logo" />
          <S.HeaderLink onClick={openCart} to={''} align="right">
            {items.length} produto(s) no carrinho
          </S.HeaderLink>
        </div>
      )}
    </S.HeaderBar>
  )
}

export default Header

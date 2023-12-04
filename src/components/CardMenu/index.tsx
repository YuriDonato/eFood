import { useState } from 'react'
import closeIcon from '../../assets/images/close.png'
import * as S from './style'
import { useDispatch, useSelector } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { parsePrice, getDescription } from '../../utils'
import { RootReducer } from '../../store'

type Props = {
  prato: Prato
}

type ModalState = {
  isVisible: boolean
  item: Prato
}

const CardMenu = ({ prato }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    item: {
      descricao: '',
      foto: '',
      id: 0,
      nome: '',
      porcao: '',
      preco: 0,
      orderID: 0
    }
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      item: {
        descricao: '',
        foto: '',
        id: 0,
        nome: '',
        porcao: '',
        preco: 0,
        orderID: 0
      }
    })
  }

  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const addToCart = () => {
    const pratoWithOrderID = { ...prato }
    pratoWithOrderID.orderID = items.length
    dispatch(add(pratoWithOrderID))
    dispatch(open('checkout'))
    closeModal()
  }

  return (
    <>
      <S.Container className="item">
        <S.Image src={prato.foto} alt="" />
        <S.Title>{prato.nome}</S.Title>
        <S.Description>{getDescription(prato.descricao)}</S.Description>
        <S.Button
          onClick={() => {
            setModal({ isVisible: true, item: prato })
          }}
        >
          Saiba mais
        </S.Button>
      </S.Container>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent>
          <div className="modalContainer">
            <img src={modal.item.foto} alt="" />
            <div className="infoContainer">
              <div className="exitButton">
                <img
                  onClick={closeModal}
                  src={closeIcon}
                  alt="icone de fechar"
                />
              </div>
              <div className="modalInfo">
                <S.ModalCardTitle>{modal.item.nome}</S.ModalCardTitle>
                <S.ModalCardText>{modal.item.descricao}</S.ModalCardText>
                <S.ModalCardText>{`Serve ${modal.item.porcao}`}</S.ModalCardText>
                <S.ModalCardButton
                  onClick={addToCart}
                >{`Adicione ao carrinho - ${parsePrice(
                  modal.item.preco
                )}`}</S.ModalCardButton>
              </div>
            </div>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default CardMenu

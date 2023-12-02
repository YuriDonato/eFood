import { useState } from 'react'
import { Prato } from '../../models/Restaurant'
import close from '../../assets/images/close.png'
import * as S from './style'
import Cart from '../Cart'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

type Props = {
  prato: Prato
}

type ModalState = {
  isVisible: boolean
  item: Prato
}

export const getDescricao = (descricao: string) => {
  if (descricao.length > 168) {
    return descricao.slice(0, 165) + '...'
  }
  return descricao
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
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
      preco: 0
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
        preco: 0
      }
    })
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(prato))
    dispatch(open())
    closeModal()
  }

  return (
    <>
      <S.Container className="item">
        <S.Image src={prato.foto} alt="" />
        <S.Title>{prato.nome}</S.Title>
        <S.Description>{getDescricao(prato.descricao)}</S.Description>
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
                <img onClick={closeModal} src={close} alt="icone de fechar" />
              </div>
              <div className="modalInfo">
                <S.ModalCardTitle>{modal.item.nome}</S.ModalCardTitle>
                <S.ModalCardText>{modal.item.descricao}</S.ModalCardText>
                <S.ModalCardText>{`Serve ${modal.item.porcao}`}</S.ModalCardText>
                <S.ModalCardButton
                  onClick={addToCart}
                >{`Adicione ao carrinho - ${formataPreco(
                  modal.item.preco
                )}`}</S.ModalCardButton>
              </div>
            </div>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
      <Cart />
    </>
  )
}

export default CardMenu

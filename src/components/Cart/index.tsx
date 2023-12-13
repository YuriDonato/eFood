import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'

import { parsePrice } from '../../utils'
import { usePurchaseMutation } from '../../services/api'
import { clear, close, open, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'
import { Button } from '../CardMenu/style'
import trashcanIcon from '../../assets/images/lixeira.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const dispatch = useDispatch()

  const [deliveryAble, setDeliveryAble] = useState(true)
  const [paymentAble, setPaymentAble] = useState(true)

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentPrice) => {
      return (accumulator += currentPrice.preco!)
    }, 0)
  }
  const closeCart = (tab: string) => {
    dispatch(close(tab))
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      addressNumber: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatorio'),
      address: Yup.string().required('O campo é obrigatorio'),
      city: Yup.string().required('O campo é obrigatorio'),
      zipCode: Yup.string()
        .min(8, 'O campo precisa 7 caracteres')
        .required('O campo é obrigatorio'),
      addressNumber: Yup.string().required('O campo é obrigatorio'),
      complement: Yup.string(),

      cardDisplayName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatorio'),
      cardNumber: Yup.string().required('O campo é obrigatorio'),
      expiresMonth: Yup.string().required('O campo é obrigatorio'),
      expiresYear: Yup.string().required('O campo é obrigatorio'),
      cardCode: Yup.string().required('O campo é obrigatorio')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.addressNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      changeTab('payment', 'confirmation')
      dispatch(clear())
    }
  }, [isSuccess])

  const changeTab = (currentTab: string, nextTab: string) => {
    dispatch(open(nextTab))
    dispatch(close(currentTab))
  }

  interface FormValues {
    fullName: string
    address: string
    city: string
    zipCode: string
    addressNumber: string
    complement: string
    cardDisplayName: string
    cardNumber: string
    expiresMonth: string
    expiresYear: string
    cardCode: string
  }

  const deliveryButton = (values: FormValues | undefined) => {
    if (values) {
      const fullName = values.fullName
      const address = values.address
      const city = values.city
      const zipCode = values.zipCode
      const addressNumber = values.addressNumber
      if (
        fullName.length > 0 &&
        address.length > 0 &&
        city.length > 0 &&
        zipCode.length >= 8 &&
        addressNumber.length > 0
      ) {
        setDeliveryAble(false)
      } else {
        setDeliveryAble(true)
      }
    }
  }

  const paymentButton = (values: FormValues | undefined) => {
    if (values) {
      const cardDisplayName = values.cardDisplayName
      const cardNumber = values.cardNumber
      const expiresMonth = values.expiresMonth
      const expiresYear = values.expiresYear
      const cardCode = values.cardCode
      if (
        cardDisplayName.length > 0 &&
        cardNumber.length > 0 &&
        expiresMonth.length > 0 &&
        expiresYear.length > 0 &&
        cardCode.length > 0
      ) {
        setPaymentAble(false)
      } else {
        setPaymentAble(true)
      }
    }
  }

  useEffect(() => {
    deliveryButton(form.values)
    paymentButton(form.values)
  }, [form])

  return (
    <form onSubmit={form.handleSubmit}>
      <S.CartContainer className={isOpen.checkout ? 'is-open' : ''}>
        <S.Overlay onClick={() => closeCart('checkout')} />
        {items.length > 0 ? (
          <S.Sidebar>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{parsePrice(item.preco)}</span>
                  </div>
                  <S.ButtonTrashcan
                    src={trashcanIcon}
                    onClick={() => removeItem(item.orderID)}
                  />
                </S.CartItem>
              ))}
            </ul>
            <S.Prices>
              <span>Valor total</span>
              <span>{parsePrice(getTotalPrice())}</span>
            </S.Prices>
            <Button
              type="button"
              onClick={() => changeTab('checkout', 'delivery')}
            >
              Continuar com a entrega
            </Button>
          </S.Sidebar>
        ) : (
          <S.Sidebar>
            <p>
              Nenhum prato selecionado, por favor seleione 1 antes de continuar.{' '}
            </p>
          </S.Sidebar>
        )}
      </S.CartContainer>
      <S.CartContainer className={isOpen.delivery ? 'is-open' : ''}>
        <S.Overlay onClick={() => closeCart('delivery')} />
        <S.Sidebar>
          <h2>Entrega</h2>
          <S.Row>
            <S.InputGroup>
              <S.Label htmlFor="fullName">Nome Completo</S.Label>
              <S.Input
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="fullName"
                className={checkInputHasError('fullName') ? 'error' : ''}
              />
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <S.Label htmlFor="address">Endereço</S.Label>
              <S.Input
                type="text"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="address"
                className={checkInputHasError('address') ? 'error' : ''}
              />
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <S.Label htmlFor="city">Cidade</S.Label>
              <S.Input
                type="text"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="city"
                className={checkInputHasError('city') ? 'error' : ''}
              />
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <S.Label htmlFor="zipCode">CEP</S.Label>
              <S.InputMasks
                type="text"
                name="zipCode"
                value={form.values.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="zipCode"
                className={checkInputHasError('zipCode') ? 'error' : ''}
                mask="99999-99"
              />
            </S.InputGroup>
            <S.InputGroup>
              <S.Label htmlFor="addressNumber">Número</S.Label>
              <S.Input
                type="text"
                name="addressNumber"
                value={form.values.addressNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="addressNumber"
                className={checkInputHasError('addressNumber') ? 'error' : ''}
              />
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
              <S.Input
                type="text"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="complement"
                className={checkInputHasError('complement') ? 'error' : ''}
              />
            </S.InputGroup>
          </S.Row>
          <Button
            disabled={deliveryAble}
            type="button"
            onClick={() => changeTab('delivery', 'payment')}
          >
            Continuar com o pagamento
          </Button>
          <Button
            type="button"
            onClick={() => changeTab('delivery', 'checkout')}
          >
            Voltar para o carrinho
          </Button>
        </S.Sidebar>
      </S.CartContainer>
      <S.CartContainer className={isOpen.payment ? 'is-open' : ''}>
        <S.Overlay onClick={() => closeCart('payment')} />
        <S.Sidebar>
          <S.Row>
            <S.InputGroup>
              <S.Label htmlFor="cardDisplayName">Nome no cartão</S.Label>
              <S.Input
                type="text"
                name="cardDisplayName"
                value={form.values.cardDisplayName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="cardDisplayName"
                className={checkInputHasError('cardDisplayName') ? 'error' : ''}
              />
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
              <S.InputMasks
                type="text"
                name="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="cardNumber"
                className={checkInputHasError('cardNumber') ? 'error' : ''}
                mask="9999 9999 9999 9999"
              />
            </S.InputGroup>
            <S.InputGroup>
              <S.Label htmlFor="cardCode">CVV</S.Label>
              <S.InputMasks
                type="text"
                name="cardCode"
                value={form.values.cardCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="cardCode"
                className={checkInputHasError('cardCode') ? 'error' : ''}
                mask="999"
              />
            </S.InputGroup>
          </S.Row>
          <S.Row>
            <S.InputGroup>
              <S.Label htmlFor="expiresMonth">Mês de vencimento</S.Label>
              <S.InputMasks
                type="text"
                name="expiresMonth"
                value={form.values.expiresMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="expiresMonth"
                className={checkInputHasError('expiresMonth') ? 'error' : ''}
                mask="99"
              />
            </S.InputGroup>
            <S.InputGroup>
              <S.Label htmlFor="expiresYear">Ano de vencimento</S.Label>
              <S.InputMasks
                type="text"
                name="expiresYear"
                value={form.values.expiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="expiresYear"
                className={checkInputHasError('expiresYear') ? 'error' : ''}
                mask="99"
              />
            </S.InputGroup>
          </S.Row>
          <Button
            disabled={paymentAble}
            type="submit"
            title="Clique aqui para finalizar a compra"
          >
            Finalizar a compra
          </Button>
          <Button
            type="button"
            onClick={() => changeTab('payment', 'delivery')}
          >
            Voltar para a edição de endereço
          </Button>
        </S.Sidebar>
      </S.CartContainer>
      <S.CartContainer className={isOpen.confirmation ? 'is-open' : ''}>
        <S.Overlay onClick={() => closeCart('confirmation')} />
        <S.Sidebar>
          <h2>Pedido realizado - {data?.orderId}</h2>
          <S.P>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido. <br />{' '}
            <br />
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras. <br /> <br />
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição. <br /> <br />
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </S.P>
          <Button type="button" onClick={() => dispatch(close('confirmation'))}>
            Concluir
          </Button>
        </S.Sidebar>
      </S.CartContainer>
    </form>
  )
}

export default Cart

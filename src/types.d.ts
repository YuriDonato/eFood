declare interface Prato {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  orderID: number
}

declare interface Restaurant {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

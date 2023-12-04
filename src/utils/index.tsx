export const getDescription = (description: string) => {
  if (description.length > 168) {
    return description.slice(0, 165) + '...'
  }
  return description
}

export const parsePrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Prato[]
  isOpen: {
    checkout: boolean
    delivery: boolean
    payment: boolean
    confirmation: boolean
  }
}

const initialState: CartState = {
  items: [],
  isOpen: {
    checkout: false,
    delivery: false,
    payment: false,
    confirmation: false
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.orderID !== action.payload
      )
    },
    open: (state, menu: PayloadAction<string>) => {
      if (menu.payload == 'checkout') {
        state.isOpen.checkout = true
      } else if (menu.payload == 'delivery') {
        state.isOpen.delivery = true
      } else if (menu.payload == 'payment') {
        state.isOpen.payment = true
      } else if (menu.payload == 'confirmation') {
        state.isOpen.confirmation = true
      }
    },
    close: (state, menu: PayloadAction<string>) => {
      if (menu.payload == 'checkout') {
        state.isOpen.checkout = false
      } else if (menu.payload == 'delivery') {
        state.isOpen.delivery = false
      } else if (menu.payload == 'payment') {
        state.isOpen.payment = false
      } else if (menu.payload == 'confirmation') {
        state.isOpen.confirmation = false
      }
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionarNosFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((fav) => fav.id === produto.id)) {
        state.itens = state.itens.filter((fav) => fav.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarNosFavoritos } = favoritoSlice.actions
export default favoritoSlice.reducer

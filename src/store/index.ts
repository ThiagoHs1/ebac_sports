import { configureStore } from '@reduxjs/toolkit'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import favoritoReducer from './reducers/fav'
import carrinhoReducer from './reducers/car'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

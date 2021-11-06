import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import user from './reducers/user.reducer'

export const store = configureStore({ reducer: { user }, devTools: true })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { useDispatch, useSelector } from 'react-redux'
import { baseApi } from '../base/baseApi.ts'
import { filterReducer, filterSlice } from '@/features/filterQuestion/model/filterSlice.ts'
import { limitReducer } from '@/entities/limits'
import { limitSlice } from '@/entities/limits/model/slice/limitSlice.ts'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [filterSlice.name]: filterReducer,
    [limitSlice.name]: limitReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

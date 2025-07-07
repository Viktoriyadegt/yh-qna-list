import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Limit = {
  specialTotal: number
}

const initialState: Limit = {
  specialTotal: 5,
}

export const specialSlice = createSlice({
  name: 'specialReducer',
  initialState,
  reducers: {
    setSpecialTotal: (state, action: PayloadAction<number>) => {
      state.specialTotal = action.payload
    },
  },
  selectors: {
    selectSpecialTotal: (state) => state.specialTotal,
  },
})

export const { setSpecialTotal } = specialSlice.actions
export const { selectSpecialTotal } = specialSlice.selectors
export const specialReducer = specialSlice.reducer

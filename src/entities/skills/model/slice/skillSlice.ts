import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Limit = {
  skillTotal: number
}

const initialState: Limit = {
  skillTotal: 8,
}

export const skillSlice = createSlice({
  name: 'skillReducer',
  initialState,
  reducers: {
    setSkillTotal: (state, action: PayloadAction<number>) => {
      state.skillTotal = action.payload
    },
  },
  selectors: {
    selectSkillTotal: (state) => state.skillTotal,
  },
})

export const { setSkillTotal } = skillSlice.actions
export const { selectSkillTotal } = skillSlice.selectors
export const skillReducer = skillSlice.reducer

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type QuestionsState = {
  specialTotal: number
  skillTotal: number
}

const initialState: QuestionsState = {
  specialTotal: 5,
  skillTotal: 8,
}

export const limitSlice = createSlice({
  name: 'limitReducer',
  initialState,
  reducers: {
    setSpecialTotal: (state, action: PayloadAction<number>) => {
      state.specialTotal = action.payload
    },
    setSkillTotal: (state, action: PayloadAction<number>) => {
      state.skillTotal = action.payload
    },
  },
  selectors: {
    selectLimits: (state) => state,
    selectSkillTotal: (state) => state.skillTotal,
    selectSpecialTotal: (state) => state.specialTotal,
  },
})

export const { setSpecialTotal, setSkillTotal } = limitSlice.actions
export const { selectSpecialTotal, selectSkillTotal, selectLimits } = limitSlice.selectors
export const limitReducer = limitSlice.reducer

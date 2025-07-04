import type { FiltersQuery } from '@/entities/questions'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export const initialState: FiltersQuery = {
  page: 1,
  limit: 10,
  title: '',
  skillFilterMode: 'ANY',
  skills: [],
  specialization: '39',
  complexity: [],
  rate: [],
}

export const filterSlice = createSlice({
  name: 'filterReducer',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
      state.page = 1
    },
    setSpecialization: (state, action: PayloadAction<string>) => {
      state.specialization = action.payload
      state.page = 1
    },
    setSkills: (state, action: PayloadAction<number>) => {
      const index = state.skills.indexOf(action.payload)
      if (index !== -1) {
        state.skills.splice(index, 1)
      } else {
        state.skills.push(action.payload)
      }
    },
    setComplexity: (state, action: PayloadAction<number[]>) => {
      const index = state.complexity.indexOf(action.payload[0])
      if (index !== -1) {
        state.complexity.splice(index, action.payload.length)
      } else {
        state.complexity.push(...action.payload)
      }
      state.page = 1
    },
    setRate: (state, action: PayloadAction<number>) => {
      const index = state.rate.indexOf(action.payload)
      if (index !== -1) {
        state.rate.splice(index, 1)
      } else {
        state.rate.push(action.payload)
      }
    },
    setFilters: (state, action: PayloadAction<Partial<FiltersQuery>>) => {
      return { ...state, ...action.payload }
    },
    resetFilters: () => initialState,
  },
  selectors: {
    selectFilters: (state) => state,
    selectRate: (state) => state.rate,
    selectTitle: (state) => state.title,
    selectSkills: (state) => state.skills,
    selectComplexity: (state) => state.complexity,
    selectSpecializations: (state) => state.specialization,
  },
})

export const filterReducer = filterSlice.reducer
export const { setPage, setFilters, setRate, setComplexity, setSpecialization, setTitle, setSkills, resetFilters } =
  filterSlice.actions

export const { selectSpecializations, selectComplexity, selectRate, selectSkills, selectTitle, selectFilters } =
  filterSlice.selectors

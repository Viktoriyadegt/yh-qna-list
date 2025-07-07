export type { FiltersQuery, SpecializationsResponse, Specialization } from './model/types/types.ts'
export { useGetSpecializationQuery, useGetSpecializationsQuery } from './api/specializationsApi.ts'
export { specialReducer, specialSlice, setSpecialTotal, selectSpecialTotal } from './model/slice/specialSlice.ts'

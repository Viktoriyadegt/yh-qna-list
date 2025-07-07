export type { FiltersQuery, Skill, SkillsResponse } from './model/types/types.ts'
export { useGetSkillsQuery, useGetSkillQuery } from './api/skillsApi.ts'
export { skillReducer, skillSlice, setSkillTotal, selectSkillTotal } from './model/slice/skillSlice.ts'

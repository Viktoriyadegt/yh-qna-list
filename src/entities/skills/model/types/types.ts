type Specialization = {
  id: number
  title: string
  description: string
  imageSrc: string
  createdAt: string
  updatedAt: string
}

export type Skill = {
  id: number
  title: string
  description: string
  imageSrc: string
  createdAt: string
  updatedAt: string
  specializations: Specialization[]
}

export type SkillsResponse = {
  page: number
  limit: number
  data: Skill[]
  total: number
}

export type FiltersQuery = {
  page?: number
  limit: number
  specializations: string
}

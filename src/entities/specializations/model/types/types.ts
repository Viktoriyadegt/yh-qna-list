export type Specialization = {
  id: number
  title: string
  description: string
  imageSrc: string
  createdAt: string
  updatedAt: string
}

export type SpecializationsResponse = {
  total: number
  page: number
  limit: number
  data: Specialization[]
}

export type FiltersQuery = {
  page?: number
  limit: number
  authorId?: string
}

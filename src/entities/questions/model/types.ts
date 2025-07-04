// response
export type QuestionsResponse = {
  page: number
  limit: number
  data: Question[]
  total: number
}

export type QuestionSkill = {
  id: number
  title: string
  description: string
  imageSrc: string
  createdAt: string
  updatedAt: string
}

export type QuestionSpecialization = {
  id: number
  title: string
  description: string
  imageSrc: string
  createdAt: string
  updatedAt: string
}

type ChangeBy = {
  id: string
  userName: string
}

export type Question = {
  id: string
  title: string
  description: string
  code: string
  imageSrc: string
  keywords: string[]
  longAnswer: string
  shortAnswer: string
  status: string
  rate: number
  complexity: number
  createdById: string
  updatedById: string
  questionSpecializations: QuestionSpecialization[]
  questionSkills: QuestionSkill[]
  createdAt: string
  updatedAt: string
  createdBy: ChangeBy
  updatedBy: ChangeBy
}

// filters
export type FiltersQuery = {
  page: number
  limit: number
  title: string
  skillFilterMode: string
  specialization: string
  skills: number[]
  complexity: number[]
  rate: number[]
}

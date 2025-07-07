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

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'body-14'
  | 'body-14-med'
  | 'body-14-sb'
  | 'body-16'
  | 'body-16-sb'
  | 'body-18-sb'
  | 'body-16-med'
  | 'body-20'
  | 'body-20-med'
  | 'bt1'
  | 'body-24-med'

export type TextColor = 'black' | 'white' | 'purple' | 'black8' | 'black7'

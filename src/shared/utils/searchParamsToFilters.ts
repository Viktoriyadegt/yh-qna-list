import type { FiltersQuery } from '@/shared/types/types.ts'

export const searchParamsToFilters = (searchParams: URLSearchParams): FiltersQuery => {
  const filters: FiltersQuery = {
    page: 1,
    limit: 10,
    title: '',
    skillFilterMode: 'ANY',
    skills: [],
    specialization: '39',
    complexity: [],
    rate: [],
  }

  searchParams.forEach((value, key) => {
    if (!value) return

    if (key === 'skills' || key === 'rate' || key === 'complexity') {
      filters[key] = value.split(',').map(Number)
    } else if (key === 'page' || key === 'limit') {
      filters[key] = Number(value)
    } else if (key === 'title' || key === 'skillFilterMode' || key === 'specialization') {
      filters[key] = value
    }
  })

  return filters
}

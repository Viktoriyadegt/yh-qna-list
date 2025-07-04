import type { FiltersQuery } from '../types/types'

export const filtersToSearchParams = (filters: FiltersQuery): URLSearchParams => {
  return Object.entries(filters).reduce((acc, [key, value]) => {
    if (value && key !== 'limit' && typeof value === 'number' && value !== 0) {
      acc.set(key, String(value))
    }
    if (value && typeof value === 'string' && value.length !== 0 && key !== 'skillFilterMode') {
      acc.set(key, String(value))
    }
    if (key === 'title' && typeof value === 'string' && value.trim() !== '') acc.set(key, String(value))

    if (Array.isArray(value) && value.length !== 0) {
      acc.set(key, value.join(','))
    }
    return acc
  }, new URLSearchParams())
}

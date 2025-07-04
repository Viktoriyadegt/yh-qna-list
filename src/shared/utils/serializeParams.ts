export function serializeParams(params: Record<string, string | number | number[]>): Record<string, string> {
  return Object.entries(params).reduce(
    (acc, [key, value]) => {
      if (
        (Array.isArray(value) && value.length !== 0) ||
        (typeof value === 'string' && value.trim() !== '') ||
        (typeof value === 'number' && !isNaN(value))
      ) {
        acc[key] = Array.isArray(value) ? value.join(',') : value.toString()
      }
      return acc
    },
    {} as Record<string, string>,
  )
}

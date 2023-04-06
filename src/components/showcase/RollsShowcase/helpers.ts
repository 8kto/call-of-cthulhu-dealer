export const getValueWithinRange = (min: number, max: number, value: number) => {
  const tuple = [min, value, max]

  tuple.forEach(val => {
    if (isNaN(val) || !Number.isInteger(val)) {
      throw new Error('Invalid input')
    }
  })
  const sorted = tuple.sort((a, b) => a - b)

  return sorted.length === 2 ? sorted[0] : sorted[1]
}

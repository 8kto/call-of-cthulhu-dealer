import { getValueWithinRange } from 'components/showcase/RollsShowcase/helpers'

describe('getValueWithinRange', () => {
  it('returns the value if it is within the range', () => {
    expect(getValueWithinRange(0, 10, 5)).toBe(5)
  })

  it('returns the minimum value if the input value is less than the minimum', () => {
    expect(getValueWithinRange(0, 10, -5)).toBe(0)
  })

  it('returns the maximum value if the input value is greater than the maximum', () => {
    expect(getValueWithinRange(0, 10, 15)).toBe(10)
  })

  it('returns the minimum value if the input value is equal to the minimum', () => {
    expect(getValueWithinRange(0, 10, 0)).toBe(0)
  })

  it('returns the maximum value if the input value is equal to the maximum', () => {
    expect(getValueWithinRange(0, 10, 10)).toBe(10)
  })

  it('handles negative numbers', () => {
    expect(getValueWithinRange(-10, -1, -5)).toBe(-5)
    expect(getValueWithinRange(-10, 10, 0)).toBe(0)
  })

  it.each([null, undefined, '', false, NaN])(
    'throws when the input value if is not a safe integer [%j]',
    input => {
      // @ts-ignore
      expect(() => getValueWithinRange(0, 10, input)).toThrow()
    }
  )
})

import { getThrowResult, isSuccess } from 'shared/diceHelpers'
import { Result } from 'types'

describe('dice helpers', () => {
  describe('getThrowResult', () => {
    // 1-49
    const bottomFifty = Array.from({ length: 49 }, (_, i) => i + 1)
    // 50-100
    const upperFifty = Array.from({ length: 51 }, (_, i) => i + 50)
    // 1-100
    const hundred = bottomFifty.concat(upperFifty)

    describe('extreme success', () => {
      it.each(hundred.filter(i => i > 4))('should return extreme success [%d]', input => {
        expect(getThrowResult(Math.floor(input / 5), input)).toEqual(Result.EXTREME_SUCCESS)
      })
    })

    describe('fumble', () => {
      const results = [96, 97, 98, 99, 100]

      it.each(bottomFifty)('should return fumble [%d] when val < 50', input => {
        results.forEach(result => {
          expect(getThrowResult(result, input)).toEqual(Result.FUMBLE)
        })
      })

      it.each(upperFifty)('should return fumble [%d] when val >= 50', input => {
        expect(getThrowResult(100, input)).toEqual(Result.FUMBLE)
      })
    })
  })

  describe('isSuccess', () => {
    it.each([Result.SUCCESS, Result.HARD_SUCCESS, Result.EXTREME_SUCCESS])('should return true [%d]', input => {
      expect(isSuccess(input)).toEqual(true)
    })

    it.each([Result.FAIL, Result.FUMBLE])('should return false [%d]', input => {
      expect(isSuccess(input)).toEqual(false)
    })
  })
})

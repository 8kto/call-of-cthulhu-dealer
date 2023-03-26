import { getThrowResult, isSuccess } from 'shared/utils/dice'
import { Result } from 'types'

describe('dice helpers', () => {
  describe('getThrowResult', () => {
    // 1-100
    const hundred = Array.from({ length: 100 }, (_, i) => i + 1)
    // 1-49
    const bottomFifty = hundred.slice(0, 49)
    // 50-100
    const upperFifty = hundred.slice(50)

    describe('success', () => {
      it.each(hundred.filter(i => i > 2 && i < 100))('should return success [%d]', input => {
        expect(getThrowResult(input, input)).toEqual(Result.SUCCESS)
        expect(getThrowResult(input - 1, input)).toEqual(Result.SUCCESS)
      })
    })

    describe('hard success', () => {
      it.each(hundred.filter(i => i > 1))('should return hard success [%d]', input => {
        expect(getThrowResult(Math.floor(input / 2), input)).toEqual(Result.HARD_SUCCESS)
      })
    })

    describe('extreme success', () => {
      it.each(hundred.filter(i => i > 4))('should return extreme success [%d]', input => {
        expect(getThrowResult(Math.floor(input / 5), input)).toEqual(Result.EXTREME_SUCCESS)
      })
    })

    describe('fail', () => {
      it.each(hundred.filter(i => i < 99))('should return fail [%d]', input => {
        expect(getThrowResult(input + 1, input)).toEqual(Result.FAIL)
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

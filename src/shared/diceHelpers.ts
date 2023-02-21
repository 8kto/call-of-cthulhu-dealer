import { Result } from 'types'

const getLevels = (base: number) => {
  return {
    fifth: Math.floor(base / 5),
    half: Math.floor(base / 2),
    base,
  }
}

/**
 * Note: KG, p.90: hard success required (fumble broadens)
 * @param result A d100 throw result
 * @param value  The number a throw is against
 */
export const getThrowResult = (result: number, value: number): Result => {
  const isFail = result > value || result === 100
  const { half, fifth } = getLevels(value)

  if (isFail) {
    if ((value >= 50 && result === 100) || (value < 50 && result >= 96)) {
      return Result.FUMBLE
    }

    return Result.FAIL
  }

  if (result <= fifth) {
    return Result.EXTREME_SUCCESS
  }
  if (result <= half) {
    return Result.HARD_SUCCESS
  }

  return Result.SUCCESS
}

export const isSuccess = (value: Result) => {
  return value >= Result.SUCCESS
}

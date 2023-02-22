import { Result } from 'types'

import { getThrowResult } from './dice'

export const translateResult = (result: Result): string => {
  switch (result) {
    case Result.FUMBLE:
      return 'Fumble'
    case Result.FAIL:
      return 'Fail'
    case Result.SUCCESS:
      return 'Success'
    case Result.HARD_SUCCESS:
      return 'Hard Success'
    case Result.EXTREME_SUCCESS:
      return 'Extreme Success'
  }

  return 'Error: Unknown result'
}

export const getThrowResultAsString = (result: number, difficulty: number): string => {
  const res = getThrowResult(result, difficulty)

  return translateResult(res)
}

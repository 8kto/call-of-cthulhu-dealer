import type { Throw } from 'types'

import { Dice } from 'types'
import { getThrowResultAsString } from 'shared/utils/translation'

export const getLogRecord = (value: Throw, difficulty: number): string => {
  let formatted = `Throw ${value.result} (d${value.dice})`

  if (difficulty && value.dice === Dice.d100) {
    formatted += ` vs DC (${difficulty}), ${getThrowResultAsString(value.result, difficulty)}`
  }

  return formatted
}

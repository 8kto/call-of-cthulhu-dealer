import { browserCrypto, Random } from 'random-js'
import { Dice } from 'types'

const random = typeof window === 'undefined' ? new Random() : new Random(browserCrypto)

export const roll = (dice: Dice = Dice.d100): number => {
  return random.integer(1, dice)
}

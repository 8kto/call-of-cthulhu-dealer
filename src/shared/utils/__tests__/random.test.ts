import { Random } from 'random-js'
import { roll } from 'shared/utils/random'
import { Dice } from 'types'

jest.mock('random-js', () => ({
  Random: class {
    integer() {
      return 1
    }
  },
}))

describe('random helpers', () => {
  describe('roll', () => {
    it('should call library', () => {
      const integerSpy = jest.spyOn(Random.prototype, 'integer')
      roll()

      expect(integerSpy).toHaveBeenCalledWith(1, 100)
    })

    it('should call library for the passed diapason', () => {
      const integerSpy = jest.spyOn(Random.prototype, 'integer')
      roll(Dice.d6)

      expect(integerSpy).toHaveBeenCalledWith(1, Dice.d6)
    })
  })
})

import { roll } from 'shared/utils/random'

describe('random helpers', () => {
  describe('roll', () => {
    it('should return number', () => {
      expect(typeof roll()).toEqual('number')
    })
  })
})

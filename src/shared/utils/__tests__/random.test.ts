import { roll } from 'shared/random'

describe('random helpers', () => {
  describe('roll', () => {
    it('should return number', () => {
      expect(typeof roll()).toEqual('number')
    })
  })
})

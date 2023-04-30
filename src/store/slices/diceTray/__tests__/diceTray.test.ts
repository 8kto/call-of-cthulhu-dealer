import reducer, { DiceTrayState, resetDifficulty, setDifficulty, setTrayValue } from '../'
import { Dice, Throw } from '../../../../types'

describe('counterSlice reducer', () => {
  const initialState: DiceTrayState = {
    value: null,
    difficulty: null,
  }

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('should handle setTrayValue', () => {
    const throwValue: Throw = { dice: Dice.d100, result: 50 }
    const nextState = reducer(initialState, setTrayValue(throwValue))
    expect(nextState.value).toEqual(throwValue)
  })

  it('should handle setDifficulty', () => {
    const difficulty = 5
    const nextState = reducer(initialState, setDifficulty(difficulty))
    expect(nextState.difficulty).toEqual(difficulty)
  })

  it('should handle resetDifficulty', () => {
    const previousState: DiceTrayState = {
      value: { dice: Dice.d100, result: 4 },
      difficulty: 5,
    }
    const nextState = reducer(previousState, resetDifficulty())
    expect(nextState.difficulty).toEqual(null)
  })
})

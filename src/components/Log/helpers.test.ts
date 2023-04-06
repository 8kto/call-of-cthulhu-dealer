import { Dice } from 'types'

import { getLogRecord } from 'components/Log/helpers'

describe('getLogRecord', () => {
  it('returns the log record string for a basic throw', () => {
    const value = { result: 15, dice: Dice.d20 }
    const difficulty = null
    // @ts-ignore
    expect(getLogRecord(value, difficulty)).toBe('Throw 15 (d20)')
  })

  it('returns the log record string for a throw with a difficulty check', () => {
    const value = { result: 55, dice: Dice.d100 }
    const difficulty = 40
    expect(getLogRecord(value, difficulty)).toBe('Throw 55 (d100) vs DC (40), Fail')
  })

  it('returns the log record string for a success difficulty check', () => {
    const value = { result: 25, dice: Dice.d100 }
    const difficulty = 60
    const expected = 'Throw 25 (d100) vs DC (60), Hard Success'

    expect(getLogRecord(value, difficulty)).toBe(expected)
  })
})

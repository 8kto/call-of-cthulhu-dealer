import React, { useState } from 'react'
import { getThrowResult } from 'shared/utils/dice'
import { roll } from 'shared/utils/random'
import { getThrowResultAsString } from 'shared/utils/translation'
import { Dice } from 'types'

import './styles.scss'

const RollsShowcase = () => {
  const [resultD100, setResultD100] = useState<number>()
  const [result, setResult] = useState<number>()
  const [difficulty, setDifficulty] = useState<number>(50)
  const [log, setLog] = useState<Array<string>>([])

  const addLog = (msg: string) => {
    setLog(prevState => [...prevState, msg])
  }

  return (
    <div style={{ border: '1px solid' }}>
      <section>
        <h2>Roll d100</h2>
        <input
          type="text"
          value={difficulty}
          onChange={e => {
            const difficulty = +e.target.value
            setDifficulty(difficulty)
            addLog(`Set diffuculty to ` + difficulty)
          }}
        />
        <strong>Result: {resultD100 || ''}</strong>{' '}
        {resultD100 && <>({getThrowResultAsString(resultD100, difficulty)})</>}
        <br />
        <button
          type="button"
          onClick={() => {
            const res = roll()
            setResultD100(res)
            addLog(`Roll ${res} against DC ${difficulty}; result is ${getThrowResultAsString(res, difficulty)}`)
          }}
        >
          Roll d100
        </button>
      </section>
      <section>
        <h2>Roll other dices</h2>
        <strong>Result: {result || ''}</strong>
        <br />
        <button type="button" onClick={() => setResult(roll(Dice.d20))}>
          Roll d20
        </button>
        <button type="button" onClick={() => setResult(roll(Dice.d10))}>
          Roll d10
        </button>
        <button type="button" onClick={() => setResult(roll(Dice.d6))}>
          Roll d6
        </button>
        <button type="button" onClick={() => setResult(roll(Dice.d4))}>
          Roll d4
        </button>
        <button type="button" onClick={() => setResult(roll(Dice.d2))}>
          Roll d2
        </button>
      </section>
      <section>
        <h2>Log</h2>
        {log.map(line => (
          <p>{line}</p>
        ))}
      </section>
    </div>
  )
}

export default RollsShowcase

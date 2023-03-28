import React, { useState } from 'react'
import { roll } from 'shared/utils/random'
import { getThrowResultAsString } from 'shared/utils/translation'
import { Dice } from 'types'

// todo merge styles
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
    <div className="column">
      <section className="box mb-4">
        <h2>Roll d100</h2>
        <div className="field">
          <label className="label">Enter the difficulty</label>
          <div className="control">
            <input
              type="number"
              className="input"
              placeholder="Enter the difficulty"
              value={difficulty}
              onChange={e => {
                const difficulty = +e.target.value
                setDifficulty(difficulty)
                addLog(`Set difficulty to ` + difficulty)
              }}
            />
          </div>
        </div>
        <button
          type="button"
          className="button is-primary"
          onClick={() => {
            const res = roll()
            setResultD100(res)
            addLog(
              `Roll ${res} against DC ${difficulty}; result is ${getThrowResultAsString(
                res,
                difficulty
              )}`
            )
          }}
        >
          Roll d100
        </button>
        <p className="mt-2">
          Result: <strong>{resultD100 || ''}</strong>(
          {resultD100 && getThrowResultAsString(resultD100, difficulty)})
        </p>
      </section>

      <section className="box mb-4">
        <h2 className="title">Roll other dices</h2>
        <h3 className="subtitle">Result: {result || ''}</h3>

        <div className="buttons">
          <button type="button" className="button" onClick={() => setResult(roll(Dice.d20))}>
            Roll d20
          </button>
          <button type="button" className="button" onClick={() => setResult(roll(Dice.d10))}>
            Roll d10
          </button>
          <button type="button" className="button" onClick={() => setResult(roll(Dice.d6))}>
            Roll d6
          </button>
          <button type="button" className="button" onClick={() => setResult(roll(Dice.d4))}>
            Roll d4
          </button>
          <button type="button" className="button" onClick={() => setResult(roll(Dice.d2))}>
            Roll d2
          </button>
        </div>
      </section>

      <section className="box mb-4">
        <h2 className="title">Log</h2>
        <div className="logging-content">
          {log.map((line, id) => (
            // @ts-ignore
            <p id={id}>{line}</p>
          ))}
        </div>
      </section>
    </div>
  )
}

export default RollsShowcase

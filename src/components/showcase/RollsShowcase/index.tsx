import React, { useState } from 'react'

import { roll } from 'shared/utils/random'
import { getThrowResultAsString } from 'shared/utils/translation'
import { Dice } from 'types'
import { selectDiceTrayValue, setTrayValue } from 'store/slices/diceTray'
import { useAppDispatch, useAppSelector } from 'shared/hooks'

// todo merge styles
import './styles.scss'

const RollsShowcase = () => {
  const [difficulty, setDifficulty] = useState<number>(50)
  const [log, setLog] = useState<Array<string>>([])

  const result = useAppSelector(selectDiceTrayValue)
  const dispatch = useAppDispatch()

  const addLog = (msg: string) => {
    setLog(prevState => [...prevState, msg])
  }

  const dispatchResult = (dice: Dice) => {
    dispatch(setTrayValue(roll(dice)))
  }

  return (
    <div className="column">
      <section className="box mb-4">
        <h2>Result: {result || ''}</h2>
        <h3 className="subtitle">{result && getThrowResultAsString(result, difficulty)}</h3>
      </section>
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
            dispatchResult(Dice.d100)
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
      </section>
      <section className="box mb-4">
        <h2 className="title">Roll other dices</h2>
        <div className="buttons">
          <button type="button" className="button" onClick={() => dispatchResult(Dice.d20)}>
            Roll d20
          </button>
          <button type="button" className="button" onClick={() => dispatchResult(Dice.d10)}>
            Roll d10
          </button>
          <button type="button" className="button" onClick={() => dispatchResult(Dice.d6)}>
            Roll d6
          </button>
          <button type="button" className="button" onClick={() => dispatchResult(Dice.d4)}>
            Roll d4
          </button>
          <button type="button" className="button" onClick={() => dispatchResult(Dice.d2)}>
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

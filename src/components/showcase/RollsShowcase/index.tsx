import React, { ChangeEventHandler, useEffect, useState } from 'react'
import debounce from 'debounce'

import { Dice, Nullable } from 'types'
import { roll } from 'shared/utils/random'
import { setDifficulty, setTrayValue } from 'store/slices/diceTray'
import { useAppDispatch } from 'shared/hooks'
import Log from 'components/Log'
import Result from 'components/Result'
import DiceWidget from 'components/DiceWidget'

import { getValueWithinRange } from './helpers'

const DEFAULT_DIFFICULTY = 50
const DICES = Object.values(Dice).filter(Number)

const RollsShowcase = () => {
  const dispatch = useAppDispatch()
  const [localDiff, setLocalDiff] = useState<Nullable<number>>(DEFAULT_DIFFICULTY)

  const dispatchThrowResult = (dice: Dice) => {
    dispatch(setTrayValue({ result: roll(dice), dice }))
  }

  const handleDiffChange: ChangeEventHandler<HTMLInputElement> = event => {
    const element = event.target as HTMLInputElement
    const { min, max, value } = element

    setLocalDiff(getValueWithinRange(+min, +max, +value))
  }

  useEffect(() => {
    if (localDiff) {
      const fire = debounce(() => dispatch(setDifficulty(localDiff)), 200)

      fire()
    }
  }, [localDiff])

  return (
    <div className="column">
      <section className="box mb-4">
        <h2>Last throw</h2>
        <Result />
      </section>
      <section className="box mb-4">
        <h2>Roll d100</h2>
        <form action="">
          <div className="field has-addons">
            <div className="control">
              <input
                type="number"
                className="input"
                placeholder="DC"
                value={`${localDiff}`}
                max={99}
                min={0}
                maxLength={2}
                onChange={handleDiffChange}
              />
            </div>
            <div className="control">
              <button
                type="button"
                className="button is-primary"
                onClick={() => {
                  dispatchThrowResult(Dice.d100)
                }}
              >
                Roll d100
              </button>
            </div>
          </div>
        </form>
      </section>
      <section className="box mb-4">
        <h2 className="title">Roll other dices</h2>
        <div className="buttons">
          {DICES.map(d => (
            <DiceWidget key={d} dice={d as unknown as Dice} />
          ))}
        </div>
      </section>

      <section className="box mb-4">
        <h2 className="title">Throws log</h2>
        <Log />
      </section>
    </div>
  )
}

export default RollsShowcase

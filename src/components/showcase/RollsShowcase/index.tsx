import React, { ChangeEventHandler, useEffect, useState } from 'react'
import debounce from 'debounce'

import { Dice, Nullable } from 'types'
import { roll } from 'shared/utils/random'
import { selectDiceTray, setDifficulty, setTrayValue } from 'store/slices/diceTray'
import { useAppDispatch, useAppSelector } from 'shared/hooks'
import Log from 'components/Log'
import Result from 'components/Result'

import { getValueWithinRange } from './helpers'

const DEFAULT_DIFFICULTY = 50

const RollsShowcase = () => {
  const dispatch = useAppDispatch()
  const { difficulty } = useAppSelector(selectDiceTray) || {}
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
          <button type="button" className="button" onClick={() => dispatchThrowResult(Dice.d20)}>
            Roll d20
          </button>
          <button type="button" className="button" onClick={() => dispatchThrowResult(Dice.d10)}>
            Roll d10
          </button>
          <button type="button" className="button" onClick={() => dispatchThrowResult(Dice.d6)}>
            Roll d6
          </button>
          <button type="button" className="button" onClick={() => dispatchThrowResult(Dice.d4)}>
            Roll d4
          </button>
          <button type="button" className="button" onClick={() => dispatchThrowResult(Dice.d2)}>
            Roll d2
          </button>
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

import React, { useState } from 'react'
import { roll } from 'shared/random'
import { Dice } from 'types'

const DiceWidget = () => {
  const [result, setResult] = useState<number>()

  return (
    <div>
      {result && <strong>{result}</strong>}
      <br />
      <button type="button" onClick={() => setResult(roll())}>
        Roll d100
      </button>
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
    </div>
  )
}

export default DiceWidget

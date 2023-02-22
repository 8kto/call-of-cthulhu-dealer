import React, { useState } from 'react'
import { roll } from 'shared/utils/random'

const DiceWidget = () => {
  const [result, setResult] = useState<number>()

  return (
    <div>
      {result && <strong>{result}</strong>}
      <br />
      <button type="button" onClick={() => setResult(roll())}>
        Roll d100
      </button>
    </div>
  )
}

export default DiceWidget

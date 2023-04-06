import React from 'react'

import { Dice } from 'types'
import { roll } from 'shared/utils/random'
import { setTrayValue } from 'store/slices/diceTray'
import { useAppDispatch } from 'shared/hooks'

const DiceWidget = ({ dice }: { dice: Dice }) => {
  const dispatch = useAppDispatch()

  const dispatchThrowResult = () => {
    dispatch(setTrayValue({ result: roll(dice), dice }))
  }

  return (
    <button type="button" className="button" onClick={dispatchThrowResult}>
      Roll {dice}
    </button>
  )
}

export default DiceWidget

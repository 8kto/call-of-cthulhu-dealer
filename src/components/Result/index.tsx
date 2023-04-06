import React from 'react'

import { useAppSelector } from 'shared/hooks'
import { getThrowResultAsString } from 'shared/utils/translation'
import { selectDiceTray } from 'store/slices/diceTray'

import { Dice, Result as Results } from 'types'
import { getThrowResult } from 'shared/utils/dice'

type ResultOpts = {
  slotContainer?: typeof React.Component | string
  slotDice?: typeof React.Component | string
  slotResult?: typeof React.Component | string
  className?: string
}

const classMap = {
  [Results.FUMBLE]: 'is-danger',
  [Results.FAIL]: 'is-black',
  [Results.SUCCESS]: 'is-success',
  [Results.HARD_SUCCESS]: 'is-hard',
  [Results.EXTREME_SUCCESS]: 'is-extreme',
}

const Result = ({
  slotContainer: SlotContainer = 'div',
  slotDice: SlotDice = 'span',
  slotResult: SlotResult = 'span',
  className = '',
}: ResultOpts) => {
  const tray = useAppSelector(selectDiceTray) || {}
  const { value, difficulty } = tray
  const shouldShowDifficultyResult = value?.dice === Dice.d100 && difficulty

  const diceResult = (
    <SlotDice className="tag mr-1">
      {value?.result} (d{value?.dice})
    </SlotDice>
  )

  if (shouldShowDifficultyResult) {
    const classNameTag = `tag ${classMap[getThrowResult(value?.result, difficulty)]}`

    return (
      <SlotContainer className={className}>
        {diceResult}
        <SlotResult className={classNameTag}>
          {getThrowResultAsString(value.result, difficulty)} (DC {difficulty})
        </SlotResult>
      </SlotContainer>
    )
  }

  return value?.result ? <SlotContainer className={className}>{diceResult}</SlotContainer> : null
}

export default Result

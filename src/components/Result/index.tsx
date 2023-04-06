import React from 'react'

import { useAppSelector } from 'shared/hooks'
import { RootState } from 'store'
import { getThrowResultAsString } from 'shared/utils/translation'

type ResultOpts = {
  slotContainer?: typeof React.Component | string
  slotDice?: typeof React.Component | string
  slotResult?: typeof React.Component | string
  className?: string
}

const Result = ({
  slotContainer: SlotContainer = 'div',
  slotDice: SlotDice = 'span',
  slotResult: SlotResult = 'span',
  className = '',
}: ResultOpts) => {
  const tray = useAppSelector((state: RootState) => state.tray) || {}
  const { value, difficulty } = tray

  if (value?.result && difficulty) {
    return (
      <SlotContainer className={className}>
        <SlotDice>
          {value.result} (d{value.dice})
        </SlotDice>
        <SlotResult>{getThrowResultAsString(value.result, difficulty)}</SlotResult>
      </SlotContainer>
    )
  }

  return value?.result ? (
    <SlotContainer className={className}>
      <SlotDice>
        {value.result} (d{value.dice})
      </SlotDice>
    </SlotContainer>
  ) : null
}

export default Result

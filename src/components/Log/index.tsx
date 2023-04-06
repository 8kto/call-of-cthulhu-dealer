import type { Throw } from 'types'

import { Dice } from 'types'

import React, { useEffect, useRef, useState } from 'react'

import { selectDiceTray } from 'store/slices/diceTray'
import { useAppSelector } from 'shared/hooks'
import { getThrowResultAsString } from 'shared/utils/translation'

import './styles.scss'

const getLogRecord = (value: Throw, difficulty: number): string => {
  let base = `Throw ${value.result} (d${value.dice})`

  if (difficulty && value.dice === Dice.d100) {
    base += ` vs DC (${difficulty}), ${getThrowResultAsString(value.result, difficulty)}`
  }

  return base
}

const Log = () => {
  const bottomRef = useRef<HTMLDivElement>(null)
  const { value: trayValue, difficulty } = useAppSelector(selectDiceTray)
  const [log, setLog] = useState<string[]>([])

  useEffect(() => {
    setLog(log => log.concat(getLogRecord(trayValue as Throw, difficulty as number)))
  }, [trayValue])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [log])

  return (
    <div className="logging-content">
      {log.map(
        (record, idx) =>
          record && (
            <p key={idx} className="mb-1">
              {' '}
              {record}{' '}
            </p>
          )
      )}
      <div ref={bottomRef} />
    </div>
  )
}

export default Log

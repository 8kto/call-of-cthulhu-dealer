import type { Throw } from 'types'

import React, { useEffect, useRef, useState } from 'react'

import { selectDiceTray } from 'store/slices/diceTray'
import { useAppSelector } from 'shared/hooks'

import { getLogRecord } from './helpers'

import './styles.scss'

const Log = () => {
  const bottomRef = useRef<HTMLDivElement>(null)
  const { value: trayValue, difficulty } = useAppSelector(selectDiceTray)
  const [log, setLog] = useState<string[]>([])

  useEffect(() => {
    setLog(log => {
      if (trayValue) {
        return log.concat(getLogRecord(trayValue as Throw, difficulty as number))
      }

      return log
    })
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
              {record}
            </p>
          )
      )}
      <div ref={bottomRef} />
    </div>
  )
}

export default Log

import type { Throw } from 'types'

import React, { useEffect, useRef, useState } from 'react'

import { selectDiceTrayValue } from 'store/slices/diceTray'
import { useAppSelector } from 'shared/hooks'

import './styles.scss'

const Log = () => {
  const bottomRef = useRef<HTMLDivElement>(null)
  const traySlice = useAppSelector(selectDiceTrayValue)
  const [log, setLog] = useState<Throw[]>([])

  useEffect(() => {
    setLog(log => log.concat(traySlice as Throw))
  }, [traySlice])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [log])

  return (
    <div className="logging-content">
      {log.map(
        (record, idx) =>
          record && (
            <p key={idx} className="mb-1">
              Throw {record.result} (d{record.dice})
            </p>
          )
      )}
      <div ref={bottomRef} />
    </div>
  )
}

export default Log

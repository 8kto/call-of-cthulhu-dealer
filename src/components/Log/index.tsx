import type { Throw } from 'types'

import React, { useEffect, useRef, useState } from 'react'

import { selectDiceTrayValue } from 'store/slices/diceTray'
import { useAppSelector } from 'shared/hooks'

import './styles.scss'

const Log = () => {
  const bottomRef = useRef<HTMLDivElement>(null)
  const trayValue = useAppSelector(selectDiceTrayValue)
  const [log, setLog] = useState<Throw[]>([])

  useEffect(() => {
    setLog(log => log.concat(trayValue as Throw))
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
              Throw {record.result} (d{record.dice})
            </p>
          )
      )}
      <div ref={bottomRef} />
    </div>
  )
}

export default Log

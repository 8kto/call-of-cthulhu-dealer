import type { Character } from 'components/InitiativeTracker/types'

import React from 'react'

import InitiativeTracker from 'components/InitiativeTracker'

const TrackerShowcase = ({ combatants }: { combatants: Character[] }) => {
  return (
    <div className="column">
      <section className="box">
        <h2 className="title">Initiative tracker</h2>

        <div className="table-container">
          <InitiativeTracker combatants={combatants} />
        </div>
      </section>
    </div>
  )
}

export default TrackerShowcase

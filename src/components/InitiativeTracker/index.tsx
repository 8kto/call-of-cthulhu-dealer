import type { Character } from 'components/InitiativeTracker/types'

import React, { useMemo, useState } from 'react'

import FirearmsIcon from 'images/icons/firearms.png'

// According the CoC 7e rules
const I_BONUS = 50

const TableRow = ({ character }: { character: Character }) => {
  const { name, hasFirearms, hasFirearmsPrepared } = character
  const [initiative, setInitiative] = useState<number>(character.initiative)
  const [isPromoted, setPromoted] = useState<boolean>(!!hasFirearmsPrepared)

  const handleFirearmsClick = () => {
    if (!isPromoted) {
      setInitiative(i => i + I_BONUS)
      setPromoted(true)
    }
  }

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="tag is-light mr-1">{initiative}</span>
        {isPromoted ? <span className="tag is-danger is-light">(+50)</span> : null}
      </td>
      <td>
        {hasFirearms ? (
          <button
            className="button is-transparent is-inverted"
            onClick={handleFirearmsClick}
            disabled={isPromoted}
          >
            <span className="icon">
              <img src={FirearmsIcon} alt="Firearms" />
            </span>
          </button>
        ) : null}
      </td>
    </tr>
  )
}

const TrackerShowcase = ({ combatants }: { combatants: Character[] }) => {
  const sortedCombatants = useMemo(
    () =>
      combatants.sort(
        (
          { initiative: i1, hasFirearmsPrepared: f1 },
          { initiative: i2, hasFirearmsPrepared: f2 }
        ) => i2 + (f2 ? I_BONUS : 0) - (i1 + (f1 ? I_BONUS : 0))
      ),
    [combatants]
  )

  return (
    <table className="table is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Initiative</th>
          <th>Firearms</th>
        </tr>
      </thead>
      <tbody>
        {sortedCombatants.map(c => (
          <TableRow key={c.name} character={c} />
        ))}
      </tbody>
    </table>
  )
}

export default TrackerShowcase

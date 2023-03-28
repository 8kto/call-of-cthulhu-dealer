import React, { useMemo } from 'react'

type Character = {
  name: string
  initiative: number
  hasFirearms?: boolean
  // fixme get name from book
  hasFirearmsPrepared?: boolean
}

const combatans: Character[] = [
  { name: 'J.P. Wiley', initiative: 10 },
  { name: 'McGregor', initiative: 33, hasFirearms: true, hasFirearmsPrepared: true },
  { name: 'Shoggoth', initiative: 45 },
  { name: 'Cultist 1', initiative: 77 },
  { name: 'Cultist 2', initiative: 77 },
  { name: 'Lama del Xray', initiative: 1, hasFirearms: true, hasFirearmsPrepared: true },
]

const TrackerShowcase = () => {
  const sortedCombatants = useMemo(
    () =>
      combatans.sort(
        (
          { initiative: i1, hasFirearmsPrepared: f1 },
          { initiative: i2, hasFirearmsPrepared: f2 }
        ) => i2 + (f2 ? 50 : 0) - (i1 + (f1 ? 50 : 0))
      ),
    combatans
  )

  return (
    <div className="column">
      <section className="box">
        <h2 className="title">Initiative tracker</h2>

        <div className="table-container">
          <table className="table is-striped is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Name</th>
                <th>Initiative</th>
                <th>Firearms</th>
              </tr>
            </thead>
            <tbody>
              {sortedCombatants.map(({ name, initiative, hasFirearms, hasFirearmsPrepared }) => {
                return (
                  <tr>
                    <td>{name}</td>
                    <td>{initiative + (hasFirearmsPrepared ? 50 : 0)}</td>
                    <td style={{ background: hasFirearmsPrepared ? '#ffdada' : '' }}>
                      {hasFirearms ? 'F' : ''}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default TrackerShowcase

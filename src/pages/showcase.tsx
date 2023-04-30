import type { HeadFC, PageProps } from 'gatsby'

import * as React from 'react'
import { useEffect } from 'react'

import RollsShowcase from 'components/showcase/RollsShowcase'
import TrackerShowcase from 'components/showcase/TrackerShowcase'
import { setCombatants } from 'store/slices/combat'
import { useAppDispatch } from 'shared/hooks'
import { combatantsMock } from 'shared/mocks/InitiativeTracker'

import 'styles/styles.scss'

const ShowcasePage: React.FC<PageProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setCombatants(combatantsMock))
  }, [])

  return (
    <main className="container content p-5">
      <h1 className="title is-2">Showcase</h1>
      <div className="columns">
        <RollsShowcase />
        <TrackerShowcase />
      </div>
    </main>
  )
}

export default ShowcasePage

export const Head: HeadFC = () => <title>Showcase</title>

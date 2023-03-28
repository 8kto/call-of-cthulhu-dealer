import RollsShowcase from 'components/showcase/RollsShowcase'
import TrackerShowcase from 'components/showcase/TrackerShowcase'
import type { HeadFC, PageProps } from 'gatsby'
import * as React from 'react'
import 'styles/styles.scss'

const ShowcasePage: React.FC<PageProps> = () => {
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

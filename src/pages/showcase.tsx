import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import RollsShowcase from 'components/showcase/RollsShowcase'
import TrackerShowcase from 'components/showcase/TrackerShowcase'

// todo extract styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: 'monospace',
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const ShowcasePage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Showcase</h1>
      <div style={{ display: 'flex' }}>
        <RollsShowcase />
        <TrackerShowcase />
      </div>
    </main>
  )
}

export default ShowcasePage

export const Head: HeadFC = () => <title>Showcase</title>

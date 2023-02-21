import DiceWidget from 'components/DiceWidget'
import type { HeadFC, PageProps } from 'gatsby'
import * as React from 'react'


const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
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
      <p>
        <DiceWidget />
      </p>
    </main>
  )
}

export default ShowcasePage

export const Head: HeadFC = () => <title>Showcase</title>

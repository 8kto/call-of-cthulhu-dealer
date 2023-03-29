import type { Character } from 'components/InitiativeTracker/types'

export const combatantsMock: Character[] = [
  { name: 'J.P. Wiley', initiative: 10 },
  { name: 'McGregor', initiative: 33, hasFirearms: true, hasFirearmsPrepared: false },
  { name: 'Shoggoth', initiative: 45 },
  { name: 'Cultist 1', initiative: 77 },
  { name: 'Cultist 2', initiative: 77 },
  { name: 'Lama del Xray', initiative: 1, hasFirearms: true, hasFirearmsPrepared: true },
]
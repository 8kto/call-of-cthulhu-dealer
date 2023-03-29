export type Character = {
  name: string
  initiative: number
  hasFirearms?: boolean
  // fixme get name from book
  hasFirearmsPrepared?: boolean
}
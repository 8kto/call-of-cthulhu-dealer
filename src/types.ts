export enum Result {
  FUMBLE,
  FAIL,
  SUCCESS,
  HARD_SUCCESS,
  EXTREME_SUCCESS,
}

export enum Dice {
  d2 = 2,
  d3 = 3,
  d4 = 4,
  d6 = 6,
  d10 = 10,
  d12 = 12,
  d20 = 20,
  d100 = 100,
}

export type Nullable<T> = T | null

export interface Throw {
  dice: Dice
  result: number
}

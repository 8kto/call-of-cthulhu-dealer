import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'

import type { Nullable, Throw } from 'types'

import { createSlice } from '@reduxjs/toolkit'

export interface DiceTrayState {
  value: Nullable<Throw>
  difficulty: Nullable<number>
}

const initialState: DiceTrayState = {
  value: null,
  difficulty: null,
}

export const counterSlice = createSlice({
  name: 'tray',
  initialState,
  reducers: {
    setTrayValue: (state, action: PayloadAction<Throw>) => {
      state.value = action.payload
    },
    setDifficulty: (state, action: PayloadAction<number>) => {
      state.difficulty = action.payload
    },
    resetDifficulty: state => {
      state.difficulty = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTrayValue, setDifficulty, resetDifficulty } = counterSlice.actions

export const selectDiceTrayValue = (state: RootState) => state.tray.value

export default counterSlice.reducer

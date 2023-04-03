import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'

import { createSlice } from '@reduxjs/toolkit'

export interface DiceTrayState {
  value: number | null
}

const initialState: DiceTrayState = {
  value: null,
}

export const counterSlice = createSlice({
  name: 'tray',
  initialState,
  reducers: {
    setTrayValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTrayValue } = counterSlice.actions

export const selectDiceTrayValue = (state: RootState) => state.tray.value

export default counterSlice.reducer

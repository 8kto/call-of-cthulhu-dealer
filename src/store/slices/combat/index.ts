import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'

import type { Nullable } from 'types'
import type { Character } from 'components/InitiativeTracker/types'

import { createSlice } from '@reduxjs/toolkit'

export interface DiceTrayState {
  combatants: Nullable<Array<Character>>
}

const initialState: DiceTrayState = {
  combatants: null,
}

export const combatSlice = createSlice({
  name: 'combat',
  initialState,
  reducers: {
    setCombatants: (state, action: PayloadAction<Array<Character>>) => {
      state.combatants = action.payload
    },
    updateCombatant: (state, action) => {
      const cbtnt = action.payload
      const index = state?.combatants?.findIndex(c => c.id === cbtnt.id)

      if (index !== -1 && Number.isInteger(index) && state?.combatants?.[index!]) {
        state.combatants[index!] = { ...state.combatants[index!], ...cbtnt }
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCombatants, updateCombatant } = combatSlice.actions

export const selectCombat = (state: RootState) => state.combat
export default combatSlice.reducer

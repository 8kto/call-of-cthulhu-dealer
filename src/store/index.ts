import { configureStore } from '@reduxjs/toolkit'

import diceTrayReducer from './slices/diceTray'
import combatReducer from './slices/combat'

export const store = configureStore({
  reducer: {
    tray: diceTrayReducer,
    combat: combatReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the index itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

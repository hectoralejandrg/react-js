import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  token: boolean
}

const initialState: AuthState = {
  token: true,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<boolean>) => {
        state.token = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToken } = authSlice.actions

export default authSlice.reducer
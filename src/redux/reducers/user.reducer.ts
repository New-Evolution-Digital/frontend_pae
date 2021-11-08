import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DealershipAuth } from '../../generated/types'

const initialState: UserState = { user: undefined }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<DealershipAuth>) => {
      return { user: action.payload }
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer

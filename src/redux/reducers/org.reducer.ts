import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DealershipOrg } from '../../generated/types'

const initialState: OrgState = { org: undefined }

export const orgSlice = createSlice({
  name: 'organization',
  initialState,
  reducers: {
    setOrgState: (_, action: PayloadAction<DealershipOrg>) => {
      return { org: action.payload }
    }
  }
})

export const { setOrgState } = orgSlice.actions

export default orgSlice.reducer

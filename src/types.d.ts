import { DealershipAuth, DealershipOrg } from './generated/types'

declare global {
  interface UserState {
    user?: DealershipAuth
  }

  interface OrgState {
    org?: DealershipOrg
  }
}
export {}

import { DealershipAuth } from './generated/types'

declare global {
  interface UserState {
    user: null | DealershipAuth
  }
}
export {}

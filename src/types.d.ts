import { DealershipAuth, DealershipOrg } from './generated/types'

declare global {
  interface UserState {
    user?: DealershipAuth
  }

  interface OrgState {
    org?: DealershipOrg & {
      [key: string]:
        | 'DealershipOrg'
        | Maybe<string>
        | Maybe<number>
        | Scalars['String']
        | Scalars['Float']
        | undefined
    }
  }
}
export {}

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type DealershipAuth = {
  __typename?: 'DealershipAuth'
  createdAt: Scalars['String']
  email: Scalars['String']
  first_name?: Maybe<Scalars['String']>
  id: Scalars['ID']
  last_name?: Maybe<Scalars['String']>
  middle_name?: Maybe<Scalars['String']>
  updatedAt: Scalars['String']
  username: Scalars['String']
}

export type FieldError = {
  __typename?: 'FieldError'
  field: Scalars['String']
  message: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  login: UserResponse
  registerDealerAdmin: UserResponse
}

export type MutationLoginArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationRegisterDealerAdminArgs = {
  email: Scalars['String']
  password: Scalars['String']
  username: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  getAllUsers?: Maybe<Array<DealershipAuth>>
  me?: Maybe<DealershipAuth>
}

export type UserResponse = {
  __typename?: 'UserResponse'
  errors?: Maybe<Array<FieldError>>
  user?: Maybe<DealershipAuth>
}

export type LoginMutationVariables = Exact<{
  email: Scalars['String']
  password: Scalars['String']
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'UserResponse'
    errors?:
      | Array<{ __typename?: 'FieldError'; field: string; message: string }>
      | null
      | undefined
    user?:
      | {
          __typename?: 'DealershipAuth'
          id: string
          first_name?: string | null | undefined
          middle_name?: string | null | undefined
          last_name?: string | null | undefined
          email: string
          username: string
          createdAt: string
          updatedAt: string
        }
      | null
      | undefined
  }
}

export type RegisterDealerAdminMutationVariables = Exact<{
  email: Scalars['String']
  password: Scalars['String']
  username: Scalars['String']
}>

export type RegisterDealerAdminMutation = {
  __typename?: 'Mutation'
  registerDealerAdmin: {
    __typename?: 'UserResponse'
    errors?:
      | Array<{ __typename?: 'FieldError'; field: string; message: string }>
      | null
      | undefined
    user?:
      | {
          __typename?: 'DealershipAuth'
          id: string
          email: string
          username: string
          first_name?: string | null | undefined
          last_name?: string | null | undefined
          createdAt: string
          updatedAt: string
        }
      | null
      | undefined
  }
}

export type GetMeQueryVariables = Exact<{ [key: string]: never }>

export type GetMeQuery = {
  __typename?: 'Query'
  me?:
    | {
        __typename?: 'DealershipAuth'
        id: string
        last_name?: string | null | undefined
        first_name?: string | null | undefined
      }
    | null
    | undefined
}

export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      errors {
        field
        message
      }
      user {
        id
        first_name
        middle_name
        last_name
        email
        username
        createdAt
        updatedAt
      }
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  )
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>
export const RegisterDealerAdminDocument = gql`
  mutation registerDealerAdmin(
    $email: String!
    $password: String!
    $username: String!
  ) {
    registerDealerAdmin(
      email: $email
      password: $password
      username: $username
    ) {
      errors {
        field
        message
      }
      user {
        id
        email
        username
        first_name
        last_name
        createdAt
        updatedAt
      }
    }
  }
`
export type RegisterDealerAdminMutationFn = Apollo.MutationFunction<
  RegisterDealerAdminMutation,
  RegisterDealerAdminMutationVariables
>

/**
 * __useRegisterDealerAdminMutation__
 *
 * To run a mutation, you first call `useRegisterDealerAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterDealerAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerDealerAdminMutation, { data, loading, error }] = useRegisterDealerAdminMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useRegisterDealerAdminMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterDealerAdminMutation,
    RegisterDealerAdminMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RegisterDealerAdminMutation,
    RegisterDealerAdminMutationVariables
  >(RegisterDealerAdminDocument, options)
}
export type RegisterDealerAdminMutationHookResult = ReturnType<
  typeof useRegisterDealerAdminMutation
>
export type RegisterDealerAdminMutationResult =
  Apollo.MutationResult<RegisterDealerAdminMutation>
export type RegisterDealerAdminMutationOptions = Apollo.BaseMutationOptions<
  RegisterDealerAdminMutation,
  RegisterDealerAdminMutationVariables
>
export const GetMeDocument = gql`
  query GetMe {
    me {
      id
      last_name
      first_name
    }
  }
`

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    options
  )
}
export function useGetMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    options
  )
}
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>
export type GetMeQueryResult = Apollo.QueryResult<
  GetMeQuery,
  GetMeQueryVariables
>

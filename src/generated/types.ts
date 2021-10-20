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

export type Dealer = {
    __typename?: 'Dealer'
    dealerName: Scalars['String']
    id: Scalars['ID']
}

export type DealerInput = {
    dealerName: Scalars['String']
}

export type Mutation = {
    __typename?: 'Mutation'
    registerNewDealer: Dealer
}

export type MutationRegisterNewDealerArgs = {
    info: DealerInput
}

export type Query = {
    __typename?: 'Query'
    getDealers: Array<Dealer>
}

export type GetDealersQueryVariables = Exact<{ [key: string]: never }>

export type GetDealersQuery = {
    __typename?: 'Query'
    getDealers: Array<{ __typename?: 'Dealer'; dealerName: string; id: string }>
}

export type RegisterNewDealerMutationVariables = Exact<{
    info: DealerInput
}>

export type RegisterNewDealerMutation = {
    __typename?: 'Mutation'
    registerNewDealer: { __typename?: 'Dealer'; dealerName: string; id: string }
}

export const GetDealersDocument = gql`
    query GetDealers {
        getDealers {
            dealerName
            id
        }
    }
`

/**
 * __useGetDealersQuery__
 *
 * To run a query within a React component, call `useGetDealersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDealersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDealersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDealersQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetDealersQuery,
        GetDealersQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<GetDealersQuery, GetDealersQueryVariables>(
        GetDealersDocument,
        options
    )
}
export function useGetDealersLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetDealersQuery,
        GetDealersQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<GetDealersQuery, GetDealersQueryVariables>(
        GetDealersDocument,
        options
    )
}
export type GetDealersQueryHookResult = ReturnType<typeof useGetDealersQuery>
export type GetDealersLazyQueryHookResult = ReturnType<
    typeof useGetDealersLazyQuery
>
export type GetDealersQueryResult = Apollo.QueryResult<
    GetDealersQuery,
    GetDealersQueryVariables
>
export const RegisterNewDealerDocument = gql`
    mutation RegisterNewDealer($info: DealerInput!) {
        registerNewDealer(info: $info) {
            dealerName
            id
        }
    }
`
export type RegisterNewDealerMutationFn = Apollo.MutationFunction<
    RegisterNewDealerMutation,
    RegisterNewDealerMutationVariables
>

/**
 * __useRegisterNewDealerMutation__
 *
 * To run a mutation, you first call `useRegisterNewDealerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterNewDealerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerNewDealerMutation, { data, loading, error }] = useRegisterNewDealerMutation({
 *   variables: {
 *      info: // value for 'info'
 *   },
 * });
 */
export function useRegisterNewDealerMutation(
    baseOptions?: Apollo.MutationHookOptions<
        RegisterNewDealerMutation,
        RegisterNewDealerMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<
        RegisterNewDealerMutation,
        RegisterNewDealerMutationVariables
    >(RegisterNewDealerDocument, options)
}
export type RegisterNewDealerMutationHookResult = ReturnType<
    typeof useRegisterNewDealerMutation
>
export type RegisterNewDealerMutationResult =
    Apollo.MutationResult<RegisterNewDealerMutation>
export type RegisterNewDealerMutationOptions = Apollo.BaseMutationOptions<
    RegisterNewDealerMutation,
    RegisterNewDealerMutationVariables
>

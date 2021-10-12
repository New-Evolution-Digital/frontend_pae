import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0'
import { AppProps } from 'next/app'

import { useApollo } from '../apollo-client'

import '../styles/main.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    const client = useApollo(pageProps)

    return (
        <UserProvider>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </UserProvider>
    )
}

export default MyApp

import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'

import { useApollo } from '../apollo-client'

import '../styles/main.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    const client = useApollo(pageProps)

    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default MyApp

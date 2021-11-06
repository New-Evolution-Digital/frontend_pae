import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { useApollo } from '../apollo-client'
import { store } from '../redux'

import '../styles/main.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps)

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  )
}

export default MyApp

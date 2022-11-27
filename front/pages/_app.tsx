import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DarkProvider } from '@/context/dark-context';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <DarkProvider>
          <Component {...pageProps} />
        </DarkProvider>
      </ApolloProvider>
    </>
  );
}

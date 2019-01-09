import ApolloClient from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import { Stunts } from './pages/main';
import { StuntsProvider } from './providers';

const GRAPHQL_API_URL = 'http://localhost:8080/graphql';

const client = new ApolloClient({
  clientState: {
    resolvers: {
      Query: {}
    }
  },
  uri: GRAPHQL_API_URL
});

render(
  <ApolloProvider client={client}>
    <StuntsProvider>
      <Stunts />
    </StuntsProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

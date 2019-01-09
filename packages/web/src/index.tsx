import ApolloClient from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import { StuntsContext } from './contexts';
import { Stunts } from './pages/main';

import stunts from './data/stunts';

const GRAPHQL_API_URL = 'http://localhost:8080/graphql';

const client = new ApolloClient({
  clientState: {
    resolvers: {
      Query: {},
      Mutation: {}
    }
  },
  uri: GRAPHQL_API_URL
});

render(
  <ApolloProvider client={client}>
    <StuntsContext.Provider value={{ stunts }}>
      <Stunts />
    </StuntsContext.Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

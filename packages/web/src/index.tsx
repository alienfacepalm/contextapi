import ApolloClient from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import { Hi } from './Hi';

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
    <Hi />
  </ApolloProvider>,
  document.getElementById('root')
);

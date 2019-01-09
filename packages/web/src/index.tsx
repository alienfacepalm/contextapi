import ApolloClient from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import { Hi } from './Hi';
import { PeopleProvider } from './peopleProvider';

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
    <PeopleProvider>
      <Hi />
    </PeopleProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

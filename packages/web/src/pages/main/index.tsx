import * as React from 'react';

import { Consumer as StuntsConsumer } from '../../contexts';

export const Stunts = (props: any) => {
  return (
    <StuntsConsumer>
      {(context: any) => (
        <ol>{context.stunts.length && context.stunts.map((stunt: any, i: number) => <li key={i}>{stunt}</li>)}</ol>
      )}
    </StuntsConsumer>
  );
};

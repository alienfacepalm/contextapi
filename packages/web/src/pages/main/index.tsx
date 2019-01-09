import * as React from 'react';

import { StuntsContext } from '../../contexts';

export const Stunts = (props: any) => {
  return (
    <StuntsContext.Consumer>
      {(context: any) => (
        <ol>{context.stunts.length && context.stunts.map((stunt: any, i: number) => <li key={i}>{stunt}</li>)}</ol>
      )}
    </StuntsContext.Consumer>
  );
};

import * as React from 'react';

import { StuntsContext } from '../../contexts';

/**
 * Hi
 * Output component
 * @param props
 */

export const Stunts = (props: any) => {
  return (
    <StuntsContext.Consumer>
      {(context: any) => <ol>{context.stunts.length && context.stunts.map((stunt: any) => <li>{stunt}</li>)}</ol>}
    </StuntsContext.Consumer>
  );
};

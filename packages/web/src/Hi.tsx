import * as React from 'react';

import { MessageContext } from './context';

/**
 * Hi
 * Output component
 * @param props
 */

export const Hi = (props: any) => {
  return (
    <MessageContext.Consumer>
      {(context: any) => {
        return (
          <ol>
            {context.names.map((name: any) => (
              <li>{name}</li>
            ))}
          </ol>
        );
      }}
    </MessageContext.Consumer>
  );
};

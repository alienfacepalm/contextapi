import * as React from 'react';

import { MessageContext } from './context';

/**
 * Hi
 * Output component
 * @param props
 */
export const Hi = (props: any) => {
  return (
    <MessageContext.Provider value={{ name: 'Yosh' }}>
      <MessageContext.Consumer>
        {(context: any) => {
          return <p>{context.name}</p>;
        }}
      </MessageContext.Consumer>
    </MessageContext.Provider>
  );
};

import * as React from 'react';

import { MessageContext } from './context';

// Supply mock data
const names = ['Carver', 'Daddy', 'Mommy'];

export const PeopleProvider = (props: any) => {
  return <MessageContext.Provider value={{ names }}>{props.children}</MessageContext.Provider>;
};

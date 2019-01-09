import * as React from 'react';

import { StuntsContext } from '../contexts';

// Get mock data
import data from './data';

export const StuntsProvider = (props: any) => {
  return <StuntsContext.Provider value={{ stunts: data }}>{props.children}</StuntsContext.Provider>;
};

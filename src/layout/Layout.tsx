import React, { PropsWithChildren } from 'react';

export const P = (props: PropsWithChildren): JSX.Element => {
  const { children } = props;

  return <main>{children}</main>;
};

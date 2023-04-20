import React, { HTMLAttributes } from 'react';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header = (props: HeaderProps): JSX.Element => {
  return <header {...props}></header>;
};

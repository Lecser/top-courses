import React, { HTMLAttributes } from 'react';

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}

export const Sidebar = (props: SidebarProps): JSX.Element => {
  return <aside {...props}>Sidebar</aside>;
};

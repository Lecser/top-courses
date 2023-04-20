import React, { PropsWithChildren } from 'react';

export const Layout = (props: PropsWithChildren): JSX.Element => {
  const { children } = props;

  return (
    <>
      <header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <footer></footer>
    </>
  );
};

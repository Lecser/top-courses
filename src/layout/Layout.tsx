import React, { PropsWithChildren, ReactElement } from 'react';
import { Sidebar } from '@/layout/Sidebar/Sidebar.tsx';
import { Header } from '@/layout/Header/Header.tsx';
import { Footer } from '@/layout/Footer/Footer.tsx';
import { NextPage } from 'next';
import { notoSans } from '@/pages/_app.tsx';
import cls from './Layout.module.css';

export const Layout: NextPage<PropsWithChildren> = (props): JSX.Element => {
  const { children } = props;

  return (
    <div className={cls.wrapper}>
      <Header className={cls.header} />
      <Sidebar className={cls.sidebar} />
      <div className={cls.body}>{children}</div>
      <Footer className={cls.footer} />
    </div>
  );
};
export const getLayout = (page: ReactElement): JSX.Element => {
  return (
    <main className={notoSans.className}>
      <Layout>{page}</Layout>
    </main>
  );
};

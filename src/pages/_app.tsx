import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Noto_Sans } from 'next/font/google';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

export const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin', 'cyrillic']
});

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout): ReactNode {
  const getLayout =
    Component.getLayout ?? ((page) => <main className={notoSans.className}>{page}</main>);

  return getLayout(<Component {...pageProps} />);
}

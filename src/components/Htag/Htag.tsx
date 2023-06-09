import { PropsWithChildren } from 'react';
import cls from './Htag.module.css';

interface HtagProps {
  tag: 'h1' | 'h2' | 'h3';
}

export const Htag = (props: PropsWithChildren<HtagProps>): JSX.Element => {
  const { tag, children } = props;
  switch (tag) {
    case 'h1':
      return <h1 className={cls.h1}>{children}</h1>;
    case 'h2':
      return <h2 className={cls.h2}>{children}</h2>;
    case 'h3':
      return <h3 className={cls.h3}>{children}</h3>;
    default:
      return <></>;
  }
};

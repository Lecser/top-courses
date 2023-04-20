import React, { HTMLAttributes, PropsWithChildren } from 'react';
import cls from './P.module.css';
import clsx from 'clsx';

interface PProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: PSize;
}

export const enum PSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l'
}

export const P = (props: PropsWithChildren<PProps>): JSX.Element => {
  const { children, size = PSize.M, ...restProps } = props;

  return (
    <p className={clsx(cls.p, cls[size])} {...restProps}>
      {children}
    </p>
  );
};

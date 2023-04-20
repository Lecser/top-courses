import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';
import cls from './Button.module.css';
import ArrowIcon from '../../../public/images/arrowIcon.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  arrow?: 'down' | 'none' | 'right';
}

export const enum ButtonTheme {
  PRIMARY = 'primary',
  GHOST = 'ghost'
}

export const Button = (props: PropsWithChildren<ButtonProps>): JSX.Element => {
  const { children, arrow = 'none', theme = ButtonTheme.PRIMARY, ...restProps } = props;
  return (
    <button className={clsx(cls.button, [cls[theme]])} {...restProps}>
      {children}
      {arrow !== 'none' && <ArrowIcon className={clsx(cls.arrowIcon, cls[arrow])} />}
    </button>
  );
};

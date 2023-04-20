import React, { HTMLAttributes } from 'react';
import cls from './Footer.module.css';
import clsx from 'clsx';
import dayjs from 'dayjs';
import Link from 'next/link';

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export const Footer = (props: FooterProps): JSX.Element => {
  const { className, ...restProps } = props;
  return (
    <footer className={clsx(className, cls.footer)} {...restProps}>
      <span>OwlTop © 2020 - {dayjs().year()} Все права защищены</span>
      <Link href={'#'}>Пользовательское соглашение</Link>
      <Link href={'#'}>Политика конфиденциальности</Link>
    </footer>
  );
};

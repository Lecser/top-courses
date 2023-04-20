import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';
import cls from './Tag.module.css';

interface TagProps extends HTMLAttributes<HTMLDivElement> {
  size?: TagSize;
  color?: TagColor;
  href?: string;
}

export const enum TagSize {
  S = 'size_s',
  M = 'size_m'
}

export const enum TagColor {
  GHOST = 'ghost',
  RED = 'red',
  GRAY = 'gray',
  GREEN = 'green',
  PRIMARY = 'primary'
}

export const Tag = (props: PropsWithChildren<TagProps>): JSX.Element => {
  const { children, href, color = TagColor.PRIMARY, size = TagSize.M, ...restProps } = props;

  return (
    <div className={clsx(cls.tag, cls[size], cls[color])} {...restProps}>
      {href !== undefined ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

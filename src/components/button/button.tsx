import { ComponentProps } from 'react';
import styles from './button.module.css';
import cslx from 'clsx';

export type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'extra-small' | 'small' | 'medium' | 'large';
};

export const Button = ({
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}: ButtonProps) => {
  const classes = cslx(styles.button, styles[variant], styles[size], className);

  return <button {...props} className={classes} />;
};

import { ComponentProps } from 'react';

export type ButtonProps = ComponentProps<'button'> & {
  variant: 'primary' | 'secondary' | 'destructive';
  className: string;
};

export const Button = (props: ButtonProps) => {
  return <button {...props} />;
};

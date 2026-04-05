import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'Component/Button',
  component: Button,
  args: {
    children: 'Button',
    disabled: false,
    size: 'medium',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      control: 'select',
    },
    size: {
      control: 'radio',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

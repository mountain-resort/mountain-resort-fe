import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import assets from '@/variables/images';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'outlinedBlack',
        'outlinedWhite',
        'gray',
        'cyan',
        'red',
      ],
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
    },
    height: { control: 'text' },
    fontSize: { control: 'text' },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    iconSize: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'ROOM DEATAILS',
  },
};

export const OutlinedWhite: Story = {
  args: {
    children: 'EXPLORE MORE',
    variant: 'outlinedWhite',
  },
};

export const WithIconPhone: Story = {
  args: {
    children: 'Book Now',
    variant: 'outlinedBlack',
    iconSrc: assets.icons.phone,
    iconSize: 14,
  },
};

export const WithIconPlus: Story = {
  args: {
    children: 'Search Stays',
    iconSrc: assets.icons.search,
    iconSize: 21,
  },
};

export const WithIconRightPosition: Story = {
  args: {
    children: 'Book Now',
    iconSrc: assets.icons.rightArrow,
    iconPosition: 'right',
    iconSize: 9,
  },
};

export const Rounded: Story = {
  args: {
    children: 'Rounded Button',
    rounded: 'md',
  },
};

export const AdminAction: Story = {
  args: {
    children: 'edit',
    variant: 'cyan',
    rounded: 'md',
  },
};

export const Gray: Story = {
  args: {
    children: 'Log in',
    variant: 'gray',
    rounded: 'md',
    height: 'h-[35px]',
  },
};

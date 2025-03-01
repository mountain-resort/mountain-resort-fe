import BookingCard from './BookingCard';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import assets from '@/variables/images';

export default {
  title: 'Components/BookingCard',
  component: BookingCard,
  argTypes: {
    name: { control: 'text' },
    images: { control: 'object' },
    occupancy: { control: 'object' },
    size: { control: 'object' },
    bedding: {
      control: 'object',
      table: { type: { summary: '[string, number][]' } },
    },
    price: { control: 'number' },
  },
  tags: ['autodocs'],
} as Meta<typeof BookingCard>;

const Template: StoryFn<typeof BookingCard> = (args) => (
  <BookingCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Family-Friendly Cabins',
  images: [assets.images.accommodation01FamilyFriendlyCabin],
  occupancy: ['Sleeps 7'],
  size: ['450 sqm'],
  bedding: [
    ['King Bed(s)', 2],
    ['King Singles', 2],
  ],
  price: 380,
};


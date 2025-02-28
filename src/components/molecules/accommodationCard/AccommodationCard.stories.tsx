import AccommodationCard from './AccommodationCard';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import assets from '@/variables/images';

export default {
  title: 'Components/AccommodationCard',
  component: AccommodationCard,
  argTypes: {
    name: { control: 'text' },
    description: { control: 'text' },
    images: { control: 'object' },
  },
  tags: ['autodocs'],
} as Meta<typeof AccommodationCard>;

const Template: StoryFn<typeof AccommodationCard> = (args) => <AccommodationCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Family-Friendly Cabins',
  description:
    'Nestled within the embrace of nature, our family-friendly cabins provide a perfect blend of comfort and space for you and your loved ones.',
  images: [
    assets.images.accommodation01FamilyFriendlyCabin,
  ],
};


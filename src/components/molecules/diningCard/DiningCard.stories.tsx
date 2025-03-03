import DiningCard from './DiningCard';
import assets from '@/variables/images';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/DiningCard',
  component: DiningCard,
  argTypes: {
    type: { control: 'text' },
    title: { control: 'text' },
    subTitle: { control: 'text' },
    content: { control: 'text' },
    contact: { control: 'text' },
  },
  tags: ['autodocs'],
} as Meta<typeof DiningCard>;

const Template: StoryFn<typeof DiningCard> = (args) => <DiningCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'on-site',
  img: assets.images['dining01Al-fresco'],
  title: 'Al Fresco Terrace',
  subTitle: 'Australian Fusion',
  content:
    'Dine under the open sky on our al fresco terrace, surrounded by the sights and sounds of nature. This is the perfect setting for a leisurely breakfast, a romantic dinner, or a casual lunch with friends and family.',
  contact: '+ 61 (2) 1234-5678',
};

export const OffSite = Template.bind({});
OffSite.args = {
  img: assets.images.dining04SliderMountainDelightsCafe,
  type: 'off-site',
  title: 'Mountain Delights Café',
  content:
    'Mountain Delights Café is a cozy establishment nestled in the heart of the Blue Mountains. Our menu is a delightful fusion of Australian flavors, where traditional ingredients meet contemporary culinary techniques. ',
  contact: '+ 61 (2) 1234-5678',
};

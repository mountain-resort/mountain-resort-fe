import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import ReviewCard, { PageType } from './ReviewCard';

export default {
  title: 'Components/ReviewCard',
  component: ReviewCard,
  argTypes: {
    pageType: {
      options: Object.values(PageType),
      control: { type: 'radio' },
    },
    title: { control: 'text' },
    star: { control: 'number' },
    content: { control: 'text' },
    writer: { control: 'text' },
  },
  tags: ['autodocs'],
} as Meta<typeof ReviewCard>;

const Template: StoryFn<typeof ReviewCard> = (args) => <ReviewCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'This is a Title',
  star: 5,
  content: 'This is a content',
  writer: 'This is writer',
};

export const compo = Template.bind({});
compo.args = {
  title: 'Heavenly Culinary Delights',
  star: 5,
  content:
    'As a self-proclaimed food enthusiast, I was blown away by the culinary offerings at Mountains Resort. Every meal was a celebration of flavors, showcasing the best of Australian ingredients. The chef-hatted restaurant lived up to its reputation, offering a dining experience that was a true highlight of our stay. This resort is a haven for food lovers!',
  writer: 'by Mark & Emily',
};

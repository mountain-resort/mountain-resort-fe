import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import PageDescription from './PageDescription';

export default {
  title: 'Components/PageDescription',
  component: PageDescription,
  argTypes: {
    title: { control: 'text' },
    subTitle: { control: 'text' },
    content: { control: 'text' },
  },
  tags: ['autodocs'],
} as Meta<typeof PageDescription>;

const Template: StoryFn<typeof PageDescription> = (args) => (
  <PageDescription {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'This is a Title',
  subTitle: 'This is a SubTitle',
  content: 'This is some content describing the page.',
};

export const OnlyContent = Template.bind({});
OnlyContent.args = {
  content: 'This is some content describing the page.',
};

export const NoSubTitle = Template.bind({});
NoSubTitle.args = {
  title: 'Welcome to Our Platform',
  content: 'Explore a variety of features that enhance your experience.',
};

export const NoTitle = Template.bind({});
NoTitle.args = {
  subTitle: 'Welcome to Our Platform',
  content: 'Explore a variety of features that enhance your experience.',
};

export const compo = Template.bind({});
compo.args = {
  compo: (
    <div>
      <strong className='font-bold'>Luxury Redefined:</strong> Our commitment to
      luxury goes beyond opulent accommodations. It extends to every touch point
      of your experience, from our personalized service to our exquisite
      culinary offerings. culinary offerings.
    </div>
  ),
};

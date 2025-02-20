import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import PageDescription from "./PageDescription"; 

export default {
  title: "Components/PageDescription",
  component: PageDescription,
  argTypes: {
    title: { control: "text" },
    subTitle: { control: "text" },
    content: { control: "text" },
  },
} as Meta<typeof PageDescription>;

const Template: StoryFn<typeof PageDescription> = (args) => <PageDescription {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "This is a Title",
  subTitle: "This is a SubTitle",
  content: "This is some content describing the page.",
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "This is a Title",
};

export const OnlySubTitle = Template.bind({});
OnlySubTitle.args = {
  subTitle: "This is a SubTitle",
};

export const OnlyContent = Template.bind({});
OnlyContent.args = {
  content: "This is some content describing the page.",
};

export const NoSubTitle = Template.bind({});
NoSubTitle.args = {
  title: "Welcome to Our Platform",
  content: "Explore a variety of features that enhance your experience.",
};

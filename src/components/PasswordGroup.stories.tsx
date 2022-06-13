import React from "react";
import { Story, Meta } from "@storybook/react";
import PasswordGroup, { PasswordGroupProps } from "./PasswordGroup";

export default {
  title: "Library/PasswordGroup",
  component: PasswordGroup,
  argTypes: {},
} as Meta<typeof PasswordGroup>;

const Template: Story<PasswordGroupProps> = (args) => <PasswordGroup {...args} />;

export const Default = Template.bind({});
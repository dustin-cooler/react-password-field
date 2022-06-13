import React from "react";
import { Story, Meta } from "@storybook/react";
import PasswordField, {PasswordFieldProps} from "./PasswordField";

export default {
  title: "Library/PasswordField",
  component: PasswordField,
  argTypes: {},
} as Meta<typeof PasswordField>;

const Template: Story<PasswordFieldProps> = (args) => <PasswordField {...args} />;

export const HiddenText = Template.bind({});
HiddenText.args = {
  label: "Hidden Text",
  hidden: true,
};

export const PlainText = Template.bind({});
PlainText.args = {
  label: "Plain Text",
  hidden: false,
};

export const WithError = Template.bind({});
WithError.args = {
  label: "With Error",
  hidden: false,
  message: "An error message",
  error: true
};
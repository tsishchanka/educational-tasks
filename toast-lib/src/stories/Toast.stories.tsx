import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toast from '../components/Toast/index';

export default {
  title: 'UI/Toast-library',
  component: Toast,
  argTypes: {
    type: {control: 'select'},
    backgroundColor: {control: 'color'}
  }
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = args => <Toast {...args}/>;

export const Warning = Template.bind({});

Warning.args = {
  message: 'Warning toast example',
  type: 'Warning'
};

export const Success = Template.bind({});
Success.args = {
  message: 'Success toast example',
  type: 'Success'
};

export const Info = Template.bind({});
Info.args = {
  message: 'Info toast example',
  type: 'Info'
};

export const Error = Template.bind({});
Error.args = {
  message: 'Error toast example',
  type: 'Error'
};
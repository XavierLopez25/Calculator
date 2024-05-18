import { fn } from '@storybook/test';
import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    buttonText: { control: 'text' },
    className: { control: 'text' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/react/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    buttonText: 'Primary Button',
    className: 'button button--primary',
  },
};

export const Secondary = {
  args: {
    buttonText: 'Secondary Button',
    className: 'button button--secondary',
  },
};

export const Large = {
  args: {
    buttonText: 'Large Button',
    className: 'button button--primary button--large',
  },
};

export const Small = {
  args: {
    buttonText: 'Small Button',
    className: 'button button--primary button--small',
  },
};

export const Disabled = {
  args: {
    buttonText: 'Disabled Button',
    className: 'button button--primary button--disabled',
    disabled: true,
  },
};

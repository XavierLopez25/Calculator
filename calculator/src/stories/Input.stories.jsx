import React, { useState } from 'react';
import { fn } from '@storybook/test';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    className: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
  args: { onChange: fn() },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (e) => {
    setValue(e.target.value);
    args.onChange(e);
  };

  return <Input {...args} value={value} onChange={handleChange} />;
};

export const Primary = Template.bind({});
Primary.args = {
  value: 'Primary Input',
  className: 'input input--primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  value: 'Secondary Input',
  className: 'input input--secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 'Disabled Input',
  className: 'input input--primary input--disabled',
  disabled: true,
};

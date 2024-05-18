import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './index';

describe('Input component', () => {
  test('renders input with correct initial value', () => {
    const value = 'Initial value';
    const { getByDisplayValue } = render(<Input value={value} onChange={() => {}} />);
    const inputElement = getByDisplayValue(value);
    expect(inputElement).toBeInTheDocument();
  });

  test('calls onChange handler when input value changes', () => {
    const onChangeMock = vi.fn();
    const Component = () => {
      const [value, setValue] = useState('');
      return (
        <Input
          value={value}
          onChange={(e) => {
            onChangeMock(e);
            setValue(e.target.value);
          }}
        />
      );
    };
    const { getByDisplayValue } = render(<Component />);
    const inputElement = getByDisplayValue('');
    fireEvent.change(inputElement, { target: { value: 'New value' } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock.mock.calls[0][0].target.value).toBe('New value');
  });

  test('applies the correct className to the container', () => {
    const className = 'input-container';
    const { container } = render(<Input value="" onChange={() => {}} className={className} />);
    expect(container.firstChild).toHaveClass(className);
  });

  test('disables the input when the disabled prop is true', () => {
    const { getByDisplayValue } = render(
      <Input value="Disabled" onChange={() => {}} disabled={true} />,
    );
    const inputElement = getByDisplayValue('Disabled');
    expect(inputElement).toBeDisabled();
  });

  test('input is not disabled when the disabled prop is false', () => {
    const { getByDisplayValue } = render(
      <Input value="Enabled" onChange={() => {}} disabled={false} />,
    );
    const inputElement = getByDisplayValue('Enabled');
    expect(inputElement).not.toBeDisabled();
  });

  test('handles multiple changes correctly', () => {
    const onChangeMock = vi.fn();
    const Component = () => {
      const [value, setValue] = useState('');
      return (
        <Input
          value={value}
          onChange={(e) => {
            onChangeMock(e);
            setValue(e.target.value);
          }}
        />
      );
    };
    const { getByDisplayValue } = render(<Component />);
    const inputElement = getByDisplayValue('');
    fireEvent.change(inputElement, { target: { value: 'First change' } });
    expect(onChangeMock.mock.calls[0][0].target.value).toBe('First change');
    fireEvent.change(inputElement, { target: { value: 'Second change' } });
    expect(onChangeMock.mock.calls[1][0].target.value).toBe('Second change');
  });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './index';

describe('Input component', () => {
  test('interactive input renders correctly and handles changes', () => {
    const label = 'Enter Value';
    const onChange = vi.fn();
    const { getByLabelText } = render(
      <Input label={label} labelId="calcInput" onChange={onChange} />,
    );
    const inputElement = getByLabelText(label);
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: '23' } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target.value).toBe('23');
  });

  test('static display renders correctly', () => {
    const value = '123';
    const { getByDisplayValue } = render(
      <Input labelId="calcDisplay" value={value} disabled={true} />,
    );
    const displayElement = getByDisplayValue(value);
    expect(displayElement).toBeInTheDocument();
    expect(displayElement).toHaveAttribute('disabled');
  });
});

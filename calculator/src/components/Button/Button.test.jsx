import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';

describe('Button', () => {
  test('renders button with correct text', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<Button buttonText={buttonText} onClick={() => {}} />);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick handler when button is clicked', () => {
    const onClickMock = vi.fn();
    const { getByText } = render(<Button buttonText="Click me" onClick={onClickMock} />);
    const buttonElement = getByText('Click me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});

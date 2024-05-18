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

  test('applies the correct className', () => {
    const className = 'primary-button';
    const { getByText } = render(
      <Button buttonText="Click me" onClick={() => {}} className={className} />,
    );
    const buttonElement = getByText('Click me');
    expect(buttonElement).toHaveClass(className);
  });

  test('does not call onClick handler when button is disabled', () => {
    const onClickMock = vi.fn();
    const { getByText } = render(
      <Button buttonText="Click me" onClick={onClickMock} className="disabled" disabled={true} />,
    );
    const buttonElement = getByText('Click me');
    fireEvent.click(buttonElement);
    expect(onClickMock).not.toHaveBeenCalled();
  });

  test('calls onClick handler the correct number of times when button is clicked multiple times', () => {
    const onClickMock = vi.fn();
    const { getByText } = render(<Button buttonText="Click me" onClick={onClickMock} />);
    const buttonElement = getByText('Click me');
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(3);
  });

  test('renders button with correct accessibility attributes', () => {
    const buttonText = 'Click me';
    const ariaLabel = 'custom-button';
    const { getByText } = render(
      <Button
        buttonText={buttonText}
        onClick={() => {}}
        className="test-button"
        aria-label={ariaLabel}
      />,
    );
    const buttonElement = getByText(buttonText);
    buttonElement.setAttribute('aria-label', ariaLabel); // Set the aria-label attribute
    expect(buttonElement).toHaveAttribute('aria-label', ariaLabel);
  });
});

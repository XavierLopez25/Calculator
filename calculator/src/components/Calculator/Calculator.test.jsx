import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from './index';

describe('Calculator', () => {
  test('renders calculator with all buttons and display', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    const buttons = [
      'これは計算機だ。',
      'C',
      '÷',
      '7',
      '8',
      '9',
      '×',
      '4',
      '5',
      '6',
      '-',
      '1',
      '2',
      '3',
      '+',
      '+/-',
      '0',
      '.',
      '=',
    ];

    buttons.forEach((buttonText) => {
      expect(getByText(buttonText)).toBeInTheDocument();
    });

    expect(getByDisplayValue('')).toBeInTheDocument();
  });

  test('handles number input correctly', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    const button7 = getByText('7');
    fireEvent.click(button7);
    expect(getByDisplayValue('7')).toBeInTheDocument();
  });

  test('handles decimal input correctly', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    const button1 = getByText('1');
    const buttonDecimal = getByText('.');
    fireEvent.click(button1);
    fireEvent.click(buttonDecimal);
    fireEvent.click(button1);
    expect(getByDisplayValue('1.1')).toBeInTheDocument();
  });

  test('performs addition correctly', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    const button1 = getByText('1');
    const buttonPlus = getByText('+');
    const button2 = getByText('2');
    const buttonEquals = getByText('=');
    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(button2);
    fireEvent.click(buttonEquals);
    expect(getByDisplayValue('3')).toBeInTheDocument();
  });

  test('performs subtraction correctly', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    const button5 = getByText('5');
    const buttonMinus = getByText('-');
    const button3 = getByText('3');
    const buttonEquals = getByText('=');
    fireEvent.click(button5);
    fireEvent.click(buttonMinus);
    fireEvent.click(button3);
    fireEvent.click(buttonEquals);
    expect(getByDisplayValue('2')).toBeInTheDocument();
  });

  test('performs multiplication correctly', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    const button3 = getByText('3');
    const buttonMultiply = getByText('×');
    const button2 = getByText('2');
    const buttonEquals = getByText('=');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button2);
    fireEvent.click(buttonEquals);
    expect(getByDisplayValue('6')).toBeInTheDocument();
  });

  test('performs division correctly', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    const button6 = getByText('6');
    const buttonDivide = getByText('÷');
    const button2 = getByText('2');
    const buttonEquals = getByText('=');
    fireEvent.click(button6);
    fireEvent.click(buttonDivide);
    fireEvent.click(button2);
    fireEvent.click(buttonEquals);
    expect(getByDisplayValue('3')).toBeInTheDocument();
  });

  test('handles clear operation correctly', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    const button1 = getByText('1');
    const buttonClear = getByText('C');
    fireEvent.click(button1);
    fireEvent.click(buttonClear);
    expect(getByDisplayValue('')).toBeInTheDocument();
  });

  test('handles sign toggle correctly', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    const button5 = getByText('5');
    const buttonPlusMinus = getByText('+/-');
    fireEvent.click(button5);
    fireEvent.click(buttonPlusMinus);
    expect(getByDisplayValue('-5')).toBeInTheDocument();
    fireEvent.click(buttonPlusMinus);
    expect(getByDisplayValue('5')).toBeInTheDocument();
  });

  test('handles edge case for division by zero', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    const button1 = getByText('1');
    const buttonDivide = getByText('÷');
    const button0 = getByText('0');
    const buttonEquals = getByText('=');
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button0);
    fireEvent.click(buttonEquals);
    expect(getByDisplayValue('ERROR')).toBeInTheDocument();
  });

  test('handles edge case for large results', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    const button1 = getByText('1');
    const button0 = getByText('0');
    const buttonMultiply = getByText('×');
    const buttonEquals = getByText('=');
    fireEvent.click(button1);
    for (let i = 0; i < 8; i++) {
      fireEvent.click(button0);
    }
    fireEvent.click(buttonMultiply);
    fireEvent.click(button1);
    for (let i = 0; i < 8; i++) {
      fireEvent.click(button0);
    }
    fireEvent.click(buttonEquals);
    expect(getByDisplayValue('ERROR')).toBeInTheDocument();
  });
});

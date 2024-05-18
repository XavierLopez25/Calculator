import React, { useState } from 'react';
import './Calculator.css';
import Input from 'src/components/Input/index';
import Button from 'src/components/Button/index';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [operator, setOperator] = useState(null);
  const [operand, setOperand] = useState(null);
  const [clearDisplay, setClearDisplay] = useState(false);

  const handleNumberClick = (value) => {
    if (display.length >= 9) return;
    if (clearDisplay) {
      setDisplay(value === '.' ? '0.' : value);
      setClearDisplay(false);
    } else {
      if (value === '.' && display.includes('.')) return;
      setDisplay((prev) => (prev === '0' && value !== '.' ? value : prev + value).slice(0, 9));
    }
  };

  const handleOperatorClick = (op) => {
    if (display === 'ERROR') return;

    if (operator && operand !== null) {
      handleEvaluate();
    }

    setOperator(op);
    setOperand(display);
    setClearDisplay(true);
  };

  const handleClear = () => {
    setDisplay('');
    setOperator(null);
    setOperand(null);
    setClearDisplay(false);
  };

  const handleEvaluate = () => {
    if (!operator || operand === null) return;

    const a = parseFloat(operand);
    const b = parseFloat(display);
    let result;

    switch (operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = a / b;
        break;
      default:
        return;
    }

    if (result < 0 || result > 999999999 || isNaN(result) || !isFinite(result)) {
      setDisplay('ERROR');
    } else {
      setDisplay(result.toString().slice(0, 9));
    }

    setOperator(null);
    setOperand(null);
    setClearDisplay(false);
  };

  const handlePlusMinus = () => {
    if (display === 'ERROR') return;

    if (display.startsWith('-')) {
      setDisplay(display.substring(1).slice(0, 9));
    } else {
      setDisplay(('-' + display).slice(0, 9));
    }
  };

  return (
    <div className="calculator">
      <Input value={display} onChange={() => {}} disabled={true} className="display" />
      <div className="buttons-container">
        <Button
          buttonText="これは計算機だ。"
          onClick={() => openInNewTab('https://plainenglish.io')}
          className="span-two"
        />
        <Button buttonText="C" onClick={handleClear} />
        <Button buttonText="÷" onClick={() => handleOperatorClick('/')} />
        <Button buttonText="7" onClick={() => handleNumberClick('7')} />
        <Button buttonText="8" onClick={() => handleNumberClick('8')} />
        <Button buttonText="9" onClick={() => handleNumberClick('9')} />
        <Button buttonText="×" onClick={() => handleOperatorClick('*')} />
        <Button buttonText="4" onClick={() => handleNumberClick('4')} />
        <Button buttonText="5" onClick={() => handleNumberClick('5')} />
        <Button buttonText="6" onClick={() => handleNumberClick('6')} />
        <Button buttonText="-" onClick={() => handleOperatorClick('-')} />
        <Button buttonText="1" onClick={() => handleNumberClick('1')} />
        <Button buttonText="2" onClick={() => handleNumberClick('2')} />
        <Button buttonText="3" onClick={() => handleNumberClick('3')} />
        <Button buttonText="+" onClick={() => handleOperatorClick('+')} />
        <Button buttonText="+/-" onClick={handlePlusMinus} />
        <Button buttonText="0" onClick={() => handleNumberClick('0')} />
        <Button buttonText="." onClick={() => handleNumberClick('.')} />
        <Button buttonText="=" onClick={handleEvaluate} />
      </div>
    </div>
  );
};

export default Calculator;

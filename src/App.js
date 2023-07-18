import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [displayValue, setDisplayValue] = useState('');
  const [operation, setOperation] = useState('');

  const handleNumberClick = (num) => {
    setDisplayValue((prevValue) => prevValue + num);
  };

  const handleOperatorClick = (op) => {
    setOperation((prevOperation) => prevOperation + displayValue + op);
    setDisplayValue('');
  };

  const handleClearClick = () => {
    setDisplayValue('');
    setOperation('');
  };

  const handleEqualsClick = () => {
    try {
      const result = eval(operation + displayValue);
      setDisplayValue(result);
      setOperation('');
    } catch (error) {
      setDisplayValue('Error');
      setOperation('');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="operation">{operation}</div>
        <div className="result">{displayValue}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleEqualsClick()}>=</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleClearClick()}>C</button>
      </div>
    </div>
  );
}

export default App;

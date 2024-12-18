import React, { useState, useEffect } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === 'CE') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === '√') {
      try {
        setInput(Math.sqrt(parseFloat(input)).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === 'x²') {
      try {
        setInput(Math.pow(parseFloat(input), 2).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const handleKeyDown = (e) => {
    const validKeys = '0123456789+-*/.=CBackspaceEnter';
    if (validKeys.includes(e.key)) {
      if (e.key === 'Enter') handleClick('=');
      else if (e.key === 'Backspace') handleClick('CE');
      else handleClick(e.key);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input]);

  const buttons = [
    'C', 'CE', '√', 'x²',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
  ];

  return (
    <div className="flex flex-col items-center justify-center
     h-screen bg-gradient-to-b from-orange-500 via-white
      to-green-500">
      <div className="w-96 bg-white rounded-lg shadow-xl p-6">
        <div className="text-right text-3xl font-bold p-4
         bg-gray-100 rounded mb-5">
          {input || '0'}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              className={`p-4 text-lg font-semibold rounded transition-all 
                ${btn === '=' ? 'bg-green-600 hover:bg-green-700 text-white' : ''}
                ${btn === 'C' || btn === 'CE' ? 'bg-red-500 hover:bg-red-600 text-white' : ''}
                ${btn === '√' || btn === 'x²' ? 'bg-purple-500 hover:bg-purple-600 text-white' : ''}
                ${btn !== '=' && btn !== 'C' && btn !== 'CE' && btn !== '√' && btn !== 'x²' ? 
                  'bg-blue-500 hover:bg-blue-600 text-white' : ''}`}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

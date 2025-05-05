
import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);

  const ButtonClick = (value: string) => {
    if (value === '=') {
      try {
        const evalResult = eval(input);
        if (evalResult === Infinity || isNaN(evalResult)) {
          throw new Error("Ошибка");
        }
        setResult(evalResult.toString());
        setHistory([...history, input + ' = ' + evalResult]);
      } catch {
        setResult('Ошибка');
      }
      setInput('');
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '⌫') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '.', '⌫', '=', '*',
    '1', '2', '3', '+',
    '4', '5', '6', '/',
    '7', '8', '9', '-',
    '0', 'C'
  ];

  return (
    <div className="flex flex-col items-center py-[50px] px-[20px] bg-[#2D384B] text-[#E6E6E6] max-w-[500px] rounded-lg shadow-md ml-[50px]">
      <Display value={input || result} />
      <div className=" grid grid-cols-4  gap-2 mt-4 max-w-[500px]">
        {buttons.map((btn) => (
          <Button
            key={btn}
            title={btn}
            onClick={() => ButtonClick(btn)}
          />
        ))}
      </div>
      <div className="mt-4">
        <h2>История:</h2>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
import { Parser } from 'expr-eval';
import React, { useState } from 'react';

import Display from './components/Display';
import Numbers from './components/Numbers';
import Operators from './components/Operators';
import SpecialFunc from './components/SpecialFunc';
import './calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNumClick = (number) => {
    setNewNumber(`${newNumber}${number}`);
    setDisplay(`${display}${number}`);
  };
  const handleOperatorClick = (operator) => {
    setDisplay(`${display}${operator}`);
    setNewNumber('');
  };

  const calculate = () => {
    const parser = new Parser();
    setDisplay(parser.evaluate(display));
    // setDisplay(parser.evaluate(`${firstNum}${operator}${secondNum}`));
    // console.log(parser.evaluate(`${firstNum}${operator}${secondNum}`))
  };

  const clear = () => {
    setDisplay('');
    setNewNumber('');
  };

  const posneg = (value) => {
    if (value === '-') {
      setDisplay(`${value}${display}`);
    } else {
      setDisplay(`${display.slice(1, display.length)}`);
    }
  };

  const modulo = () => {
    setDisplay(`${display / 100}`);
  };

  return (
    <div class="container">
      <div class="calculator">
        <Display className="display" display={display} />
        <SpecialFunc
          className="specialfunc"
          clear={clear}
          display={display}
          posneg={posneg}
          modulo={modulo}
        />
        <Numbers className="num" handleClick={handleNumClick} />
        <Operators
          className="operators"
          handleClick={handleOperatorClick}
          calculate={calculate}
        />
      </div>

      {/* // <div>
    //   <Display display={display || `${firstNum}${operator}${secondNum}`} />
    //   <Numbers handleClick={handleNumClick}/>
    //   <Operators handleClick={handleOperatorClick} />
    //   <button onClick={calculate}>=</button>
    // </div> */}
    </div>
  );
}

export default Calculator;

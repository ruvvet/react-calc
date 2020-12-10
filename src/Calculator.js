import logo from './logo.svg';
import './calculator.css';
import { Parser } from 'expr-eval';
import Display from './components/Display';
import Numbers from './components/Numbers';
import Opeartors from './components/Operators';
import React, { useState } from 'react';
import Operators from './components/Operators';

function Calculator() {



const [display, setDisplay] = useState('')
const [newNumber, setNewNumber] = useState('')

const handleNumClick = (number)=>{
setNewNumber(`${newNumber}${number}`)
setDisplay(`${display}${number}`)
}
const handleOperatorClick = (operator)=>{
  setDisplay (`${display}${operator}`)
  setNewNumber ('')
}



  // const [firstNum, setFirstNum] = useState('');
  // const [secondNum, setSecondNum] = useState('');
  // const [operator, setOperator] = useState('');
  // const [display, setDisplay] = useState('')

  // const handleNumClick = (number) => {
  //   if (display){
  //     setDisplay('')
  //     setFirstNum(number);
  //     setOperator('')
  //     setSecondNum('')
  //   } else if (!operator) {
  //     setFirstNum(`${firstNum}${number}`);
  //   } else {
  //     setSecondNum(`${secondNum}${number}`);
  //   }
  // };

  // const handleOperatorClick = (operator) => {
  //   setOperator(operator);
  // };

  const calculate = () => {
    const parser = new Parser();


    setDisplay(parser.evaluate(display))
    // setDisplay(parser.evaluate(`${firstNum}${operator}${secondNum}`));
    // console.log(parser.evaluate(`${firstNum}${operator}${secondNum}`))

  };

  const clear =() =>{
    setDisplay('')
    setNewNumber('')
  }

  return (
<div class="container">
    <div class="calculator">
      <Display display={display} />
      <Numbers handleClick={handleNumClick}/>
      <Operators handleClick={handleOperatorClick} />
      <div class="final">
      <button onClick={calculate}>=</button>
      <button onClick={clear}>clear</button>
      </div>
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

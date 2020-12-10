import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {



  const [firstNum, setFirstNum] = useState();
  const [secondNum, setSecondNum] = useState();
  const [add, setAdd] = useState(0);

 const addNumbers = () => {
    setAdd(parseInt(firstNum) + parseInt(secondNum));
  };

  return (
    <div>




      <h1>{add}</h1>
      <input
        name="firstNum"
        type="number"
        value={firstNum}
        onChange={(evt) => setFirstNum(evt.target.value)}
        placeholder="#"
      ></input>
      <input
        name="secondNum"
        type="number"
        value={secondNum}
        onChange={(evt) => setSecondNum(evt.target.value)}
        placeholder="#"
      ></input>
      <button onClick={addNumbers}>ADD</button>
    </div>
  );
}

export default App;

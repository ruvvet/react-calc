import './operators.css';

export default function Operators({handleClick, calculate}) {
  const operators = ['+', '-', '*', '/'];

  return (
    <div class="operators">
      {operators.map((operator) => (
        <button onClick={() => handleClick(operator)}>{operator}</button>
      ))}
      <button onClick={calculate}>=</button>
    </div>
  );
}

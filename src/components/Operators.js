import './operators.css';

export default function Operators({handleClick}) {
  const operators = ['+', '-', '*', '/'];

  return (
    <div class="operator-wrapper">
      {operators.map((operator) => (
        <button onClick={() => handleClick(operator)}>{operator}</button>
      ))}

    </div>
  );
}

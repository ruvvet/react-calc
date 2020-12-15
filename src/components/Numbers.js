import './numbers.css';

export default function Numbers({ handleClick }) {
  const numbers = [];

  for (let i = 1; i < 10; i++) {
    numbers.push(
      <button
        onClick={() => {
          handleClick(i);
        }}
      >
        {i}
      </button>
    );
  }

  return (
    <div class="num">
      {numbers}
      <button
        className="zero"
        onClick={() => {
          handleClick(0);
        }}
      >
        0
      </button>

      <button
        className="dot"
        onClick={() => {
          handleClick('.');
        }}
      >
        .
      </button>
    </div>
  );
}

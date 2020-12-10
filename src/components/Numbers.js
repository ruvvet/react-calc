import './numbers.css';

export default function Numbers({handleClick}) {
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

  return <div class="number-wrapper">{numbers}</div>;
}

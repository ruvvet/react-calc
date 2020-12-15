import './specialfunc.css';

export default function SpecialFunc({ display, clear, posneg, modulo }) {
  return (
    <div class="specialfunc">
      <button onClick={clear}>A/C</button>
      <button
        onClick={() => {
          if (display[0] !== '-') {
            posneg('-');
          } else {
            posneg('');
          }
        }}
      >
        +/-
      </button>
      <button onClick={modulo}>%</button>
    </div>
  );
}

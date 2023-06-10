import useCount from "../hooks/useCount";

export default function CountButtons() {
  const { incrementCount, decrementCount } = useCount();

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}

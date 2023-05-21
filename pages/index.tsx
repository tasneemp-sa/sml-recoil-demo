import { atom, useRecoilState, useRecoilValue } from "recoil";

const countAtom = atom({
  key: "countAtom",
  default: 0,
});

export default function Index() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <CountValue />
        <CountButtons />
    </div>
  );
}

function CountValue () {
    const count = useRecoilValue(countAtom);
    return <h1>{count}</h1>
}

function CountButtons() {
    const [count, setCount] = useRecoilState(countAtom);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <div style={{display: 'flex', gap: '8px'}}>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}
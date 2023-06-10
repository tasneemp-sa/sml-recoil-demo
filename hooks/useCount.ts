import { atom, useRecoilState } from "recoil";

const countAtom = atom({
  key: "lessonTwo-countAtom",
  default: 0,
});

export default function useCount() {
  const [count, setCount] = useRecoilState(countAtom);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return { count, incrementCount, decrementCount };
}

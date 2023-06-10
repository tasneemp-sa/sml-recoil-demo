import useCount from "@/hooks/useCount";

export default function CountValue() {
  const { count } = useCount();

  return <h1>{count}</h1>;
}

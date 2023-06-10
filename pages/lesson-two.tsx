import CountButtons from "@/components/CountButtons";
import CountValue from "@/components/CountValue";

export default function Page() {
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

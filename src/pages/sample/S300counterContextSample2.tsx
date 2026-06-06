import { CounterProvider } from "../../context/CounterContext";
import CompCounterDisplay from "../../components/sample/contextApi/CompCounterDisplay";
import CompCounterButton from "../../components/sample/contextApi/CompCounterButton";

const S300counterContextSample = () => {
  return (
    <CounterProvider>
      <h1>カウンターサンプル2（Context API）</h1>
      {/* 現在のカウントを表示 */}
      <CompCounterDisplay />
      {/* カウントを増減するボタン */}
      <CompCounterButton />
    </CounterProvider>
  );
};

export default S300counterContextSample;

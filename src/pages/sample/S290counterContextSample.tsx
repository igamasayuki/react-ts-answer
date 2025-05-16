import React from "react";
import { CounterProvider } from "../../context/CounterContext";
import CompCounterDisplay from "../../components/sample/contextApi/CompCounterDisplay";
import CompCounterButton from "../../components/sample/contextApi/CompCounterButton";

const S290counterContextSample: React.FC = () => {
  return (
    <CounterProvider>
      <h1>カウンターサンプル（Context API）</h1>
      {/* 現在のカウントを表示 */}
      <CompCounterDisplay />
      {/* カウントを増減するボタン */}
      <CompCounterButton />
    </CounterProvider>
  );
};

export default S290counterContextSample;

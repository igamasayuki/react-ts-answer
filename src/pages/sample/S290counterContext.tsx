import React from "react";
import CompCounterProvider from "../../context/CompCounterProvider";
import CompCounterDisplay from "../../components/sample/contextApi/CompCounterDisplay";
import CompCounterButton from "../../components/sample/contextApi/CompCounterButton";

const S290counterContext: React.FC = () => {
  return (
    <CompCounterProvider>
      <h1>カウンターサンプル（Context API）</h1>
      {/* 現在のカウントを表示 */}
      <CompCounterDisplay />
      {/* カウントを増減するボタン */}
      <CompCounterButton />
    </CompCounterProvider>
  );
};

export default S290counterContext;

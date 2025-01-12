import React from "react";
import { useCounter } from "../../../context/CompCounterContext";

const CompCounterButton: React.FC = () => {
  // カスタムフックを使用してContext内の関数を取得
  const { increment, decrement } = useCounter();
  return (
    <div>
      <button onClick={decrement}>減らす (-)</button>
      <button onClick={increment}>増やす (+)</button>
    </div>
  );
};

export default CompCounterButton;

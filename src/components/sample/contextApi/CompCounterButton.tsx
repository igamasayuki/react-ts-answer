import React, { useContext } from "react";
import { CounterContext } from "../../../context/CounterProvider";

const CompCounterButton: React.FC = () => {
  // useContextを使用してContext内の関数を取得
  const { increment, decrement } = useContext(CounterContext);
  return (
    <div>
      <button onClick={decrement}>減らす (-)</button>
      <button onClick={increment}>増やす (+)</button>
    </div>
  );
};

export default CompCounterButton;

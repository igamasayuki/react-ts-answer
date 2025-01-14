import React, { useContext } from "react";
import { CounterContext } from "../../../context/CounterProvider";

const CompCounterDisplay: React.FC = () => {
  // useContextを使用してContext内の値(現在のカウント値)を取得
  const { count } = useContext(CounterContext);
  return <div>現在のカウント: {count}</div>;
};

export default CompCounterDisplay;

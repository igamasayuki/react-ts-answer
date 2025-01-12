import React from "react";
import { useCounter } from "../../../context/CompCounterContext";

const CompCounterDisplay: React.FC = () => {
  // カスタムフックを使用してContext内の値(現在のカウント値)を取得
  const { count } = useCounter();
  return <div>現在のカウント: {count}</div>;
};

export default CompCounterDisplay;

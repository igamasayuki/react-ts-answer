import React, { useState } from "react";
import CompCounterContext from "../context/CompCounterContext";

// Providerコンポーネント
export const CompCounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState(0);

  // カウントを増減する関数
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // Contextで状態と操作関数を提供
  // このProviderで囲まれたコンポーネントは、
  // このProviderで提供された値を参照できます
  // .Providerがないと、useCounter()で値を取得できません
  return (
    <CompCounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CompCounterContext.Provider>
  );
};

export default CompCounterProvider;

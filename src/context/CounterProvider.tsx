import React, { createContext, useState } from "react";

// Contextとデフォルト値の定義
const CounterContext = createContext({
  count: 0,
  increment: () => {
    console.warn("increment関数が未定義です");
  },
  decrement: () => {
    console.warn("decrement関数が未定義です");
  },
});

// Providerコンポーネントの定義
const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

// ContextとProviderの名前付きエクスポート
export { CounterContext, CounterProvider };

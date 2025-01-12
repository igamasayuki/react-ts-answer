import { createContext, useContext } from "react";

// Context作成
// デフォルト値は実際のプロバイダーで上書きされる
const CompCounterContext = createContext({
  count: 0,
  increment: () => {
    console.warn("increment関数が未定義です");
  },
  decrement: () => {
    console.warn("decrement関数が未定義です");
  },
});

// カスタムフックの定義
export const useCounter = () => useContext(CompCounterContext);

export default CompCounterContext;

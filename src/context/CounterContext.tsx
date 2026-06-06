import { createContext, useContext, useState, type ReactNode } from "react";

// 1.Contextの型定義
// (Contextの中に入る「状態」と「操作関数」の形を定義します)
interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// 2.Contextの作成（初期値は undefined）
// (createContext で空っぽの箱を用意します
// (Provider で包まれたらCouterContextTypeの値が入ります)
const CounterContext = createContext<CounterContextType | undefined>(undefined);

// 3.Providerコンポーネントの定義
// (状態と操作をContextに詰めて、子コンポーネントに配る役割です)
interface Props {
  // <CounterProvider>〜</CounterProvider> の間に書いた要素が children に入る
  // 例：
  // <CounterProvider>
  //   <h1>カウンターサンプル（Context API）</h1>
  //   <CompCounterDisplay />   ← これらが全部 children
  //   <CompCounterButton />
  // </CounterProvider>
  children: ReactNode;
}
export const CounterProvider = ({ children }: Props) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {/* Providerタグに包まれたコンポーネントでcount,increment,decrementを使えるようにする */}
      {children}{" "}
    </CounterContext.Provider>
  );
};

// 4.カスタムフックの作成
// (Contextを取り出すための便利な関数 useCounterContext() を作成します)
export const useCounterContext = () => {
  const context = useContext(CounterContext);
  // Provider に包まれていないときにエラーを投げる
  if (!context)
    throw new Error("useCounterContext must be used within a CounterProvider");
  return context;
};

import React, { useState } from "react";
import CompCountUpButton2 from "../../components/answer/CompCountUpButton2";

const S280countUpParent: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // 子コンポーネントから渡された値を使ってカウントを増加させる
  const handleCountUp = (value: number) => {
    setCount((prevCount) => prevCount + value);
  };

  return (
    <div>
      <p>現在値：{count}</p>
      {/* 複数のボタンから同じカウントを更新 */}
      <CompCountUpButton2 onCountUp={handleCountUp} />
      <CompCountUpButton2 onCountUp={handleCountUp} />
      <CompCountUpButton2 onCountUp={handleCountUp} />
    </div>
  );
};

export default S280countUpParent;

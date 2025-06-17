import { useState, useEffect } from "react";

interface Props {
  initialCount?: number;
}

const CompCounterProp = ({ initialCount = 0 }: Props) => {
  // 親から受け取った値をstateにコピー
  const [nowCount, setNowCount] = useState(initialCount);

  useEffect(() => {
    // 初期値設定の確認 (デバッグ用)
    console.log(`現在のカウントは: ${nowCount}`);
  }, [nowCount]);

  const countUp = () => {
    setNowCount((nowCount) => nowCount + 1); // stateを更新
  };

  return (
    <div className="ex">
      <p>現在値: {nowCount}</p>
      <button onClick={countUp}>カウントを1増やす</button>
    </div>
  );
};

export default CompCounterProp;

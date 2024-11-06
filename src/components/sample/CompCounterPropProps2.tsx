import React, { useState, useEffect } from "react";

interface CompCounterPropProps2 {
  initialCount: number;
}

const CompCounterProp2: React.FC<CompCounterPropProps2> = ({
  initialCount = 10, // defaultの設定
}) => {
  // バリデーション
  if (initialCount < 0) {
    console.error("initialCountは0以上である必要があります");
  }

  const [nowCount, setNowCount] = useState(initialCount);

  useEffect(() => {
    setNowCount(initialCount);
  }, [initialCount]);

  const handleChange = () => {
    setNowCount(nowCount + 1);
  };

  return (
    <div className="ex">
      現在値：{nowCount}
      <br />
      <button type="button" onClick={handleChange}>
        カウントを1増やす
      </button>
    </div>
  );
};

export default CompCounterProp2;

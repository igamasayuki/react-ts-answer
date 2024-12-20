import React, { useState } from "react";

interface CompButtonCounterProps {
  firstCount?: number;
}

const CompButtonCounter: React.FC<CompButtonCounterProps> = ({
  firstCount = 0,
}) => {
  const [currentCount, setCurrentCount] = useState(firstCount);

  const handleCountUp = () => {
    setCurrentCount(currentCount + 1);
  };

  return (
    <div>
      <p>ボタンを押した回数: {currentCount}</p>
      <button onClick={handleCountUp}>カウントアップ</button>
    </div>
  );
};

export default CompButtonCounter;

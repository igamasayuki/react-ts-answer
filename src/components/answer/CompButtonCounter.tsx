import { useState } from "react";

interface Props {
  firstCount?: number;
}

const CompButtonCounter = ({ firstCount = 0 }: Props) => {
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

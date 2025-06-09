import { useState } from "react";
import CompYesOrNo from "../../components/answer/CompYesOrNo";

const Ex180 = () => {
  const [currentYesOrNo, setCurrentYesOrNo] =
    useState<string>("ボタンを押してください");

  const handlePushYesOrNo = (value: string) => {
    setCurrentYesOrNo(value); // 子から渡された文字列を更新
  };

  return (
    <div>
      <p>押したボタン: {currentYesOrNo}</p>
      <CompYesOrNo onYesOrNo={handlePushYesOrNo} />
    </div>
  );
};

export default Ex180;

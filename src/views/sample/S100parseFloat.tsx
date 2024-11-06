import React, { useState } from "react";

const S100parseFloat: React.FC = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [answer, setAnswer] = useState<number>(0);

  const handleChangeNum1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 入力値を数値に変換します。数値に変換できない場合は0が使用されます。
    setNum1(parseFloat(event.target.value) || 0);
  };

  const handleChangeNum2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum2(parseFloat(event.target.value) || 0);
  };

  const handleClick = () => {
    setAnswer(num1 + num2);
  };

  return (
    <div className="sample">
      <div>.number修飾子</div>
      <input type="text" value={num1} onChange={handleChangeNum1} /> +
      <input type="text" value={num2} onChange={handleChangeNum2} /> = {answer}
      <br />
      <button type="button" onClick={handleClick}>
        計算する
      </button>
    </div>
  );
};

export default S100parseFloat;

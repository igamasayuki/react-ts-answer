import React, { useState } from "react";

const S100stringAddition: React.FC = () => {
  // 文字列の数値を保持する state
  const [strNum1, setStrNum1] = useState<string>("");
  const [strNum2, setStrNum2] = useState<string>("");
  const [strAnswer, setStrAnswer] = useState<string>("");

  const handleChangeStrNum1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStrNum1(event.target.value);
  };

  const handleChangeStrNum2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStrNum2(event.target.value);
  };

  const handleStrClick = () => {
    // 文字列として連結
    setStrAnswer(strNum1 + strNum2);
  };

  return (
    <div className="sample">
      <div>文字列として連結する例(今まで通りの作り方)</div>
      <input
        type="text"
        value={strNum1}
        onChange={handleChangeStrNum1}
        placeholder="数値を入力"
      />
      +
      <input
        type="text"
        value={strNum2}
        onChange={handleChangeStrNum2}
        placeholder="数値を入力"
      />
      = {strAnswer}
      <br />
      <button type="button" onClick={handleStrClick}>
        計算する
      </button>
    </div>
  );
};

export default S100stringAddition;

import React, { useState } from "react";

const S100numberAddition: React.FC = () => {
  // 入力値を保持する文字列型の state
  const [strNum1, setStrNum1] = useState<string>("");
  const [strNum2, setStrNum2] = useState<string>("");
  // 数値計算結果を保持する数値型の state
  const [numberAnswer, setNumberAnswer] = useState<number>(0);

  const handleChangeStrNum1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 入力値を文字列としてセット
    setStrNum1(event.target.value);
  };

  const handleChangeStrNum2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 入力値を文字列としてセット
    setStrNum2(event.target.value);
  };

  const handleNumberClick = () => {
    // 数値に変換して計算。変換できない場合は 0 を使用
    const parsedNum1 = parseFloat(strNum1) || 0;
    const parsedNum2 = parseFloat(strNum2) || 0;
    setNumberAnswer(parsedNum1 + parsedNum2);
  };

  return (
    <div className="sample">
      <div>数値として計算する例</div>
      <input
        type="text"
        value={strNum1}
        onChange={handleChangeStrNum1}
        placeholder="数値を入力"
      />{" "}
      +
      <input
        type="text"
        value={strNum2}
        onChange={handleChangeStrNum2}
        placeholder="数値を入力"
      />{" "}
      = {numberAnswer}
      <br />
      <button type="button" onClick={handleNumberClick}>
        計算する
      </button>
    </div>
  );
};

export default S100numberAddition;

import { useState } from "react";

const S110trim = () => {
  const [str1, setStr1] = useState<string>("");
  const [str2, setStr2] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleChangeStr1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    // trim()関数 で両端の空白を削除
    setStr1(event.target.value.trim());
  };

  const handleChangeStr2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    // trim()関数 で両端の空白を削除
    setStr2(event.target.value.trim());
  };

  const handleClick = () => {
    setResult(str1 + str2);
  };

  return (
    <div className="sample">
      <div>入力値の両端の空白を削除して文字列を連結する方法</div>
      <input type="text" value={str1} onChange={handleChangeStr1} />と
      <input type="text" value={str2} onChange={handleChangeStr2} />を<br />
      連結した結果は「{result}」です。
      <br />
      <button type="button" onClick={handleClick}>
        連結する
      </button>
    </div>
  );
};

export default S110trim;

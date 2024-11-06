import React, { useState } from "react";

const S80singleSelectBox: React.FC = () => {
  const [hobby, setHobby] = useState<string>("自転車");

  const selectBoxChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setHobby(event.target.value);
  };

  return (
    <div className="sample">
      <div>セレクトボックス(単一)</div>
      <label htmlFor="hobby">趣味は何ですか？</label>
      <br />
      <select id="hobby" value={hobby} onChange={selectBoxChange}>
        <option value="">趣味を選択してください</option>
        <option value="水泳">水泳</option>
        <option value="自転車">自転車</option>
        <option value="ランニング">ランニング</option>
      </select>
      <br />
      <p>選択した値：{hobby}</p>
    </div>
  );
};

export default S80singleSelectBox;

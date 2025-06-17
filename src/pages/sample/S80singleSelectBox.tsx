import { useState } from "react";
import { hobbyOptions } from "../../constants/hobby-options";

const S80singleSelectBox = () => {
  const [hobby, setHobby] = useState<string>(hobbyOptions.bike);

  const handleSelectBoxChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setHobby(event.target.value);
  };

  return (
    <div className="sample">
      <div>セレクトボックス(単一)</div>
      <label htmlFor="hobby">趣味は何ですか？</label>
      <br />
      <select id="hobby" value={hobby} onChange={handleSelectBoxChange}>
        <option value="">趣味を選択してください</option>
        <option value={hobbyOptions.swim}>{hobbyOptions.swim}</option>
        <option value={hobbyOptions.bike}>{hobbyOptions.bike}</option>
        <option value={hobbyOptions.run}>{hobbyOptions.run}</option>
      </select>
      <br />
      <p>選択した値：{hobby}</p>
    </div>
  );
};

export default S80singleSelectBox;

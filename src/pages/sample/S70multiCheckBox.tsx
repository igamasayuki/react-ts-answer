import React, { useState } from "react";
import { hobbyOptions } from "../../constants/data";

const S70multiCheckBox: React.FC = () => {
  const [hobbies, setHobbies] = useState<string[]>([
    hobbyOptions.swim,
    hobbyOptions.run,
  ]);

  const handleMultiCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    if (hobbies.includes(value)) {
      // チェックされたvalueが既に(配列に)含まれていたら、削除する
      // value以外(hobby !=== value)のものをセットし直している
      // value(hobby === value)はセットしない
      setHobbies(hobbies.filter((hobby) => hobby !== value));
    } else {
      // 配列にチェックされたvalueを追加(スプレッド構文使用)
      setHobbies([...hobbies, value]);
    }
  };

  return (
    <div className="sample">
      <div>チェックボックス(複数)</div>
      <div>趣味は何ですか？</div>
      <label htmlFor="swim">{hobbyOptions.swim}</label>
      <input
        type="checkbox"
        id="swim"
        value={hobbyOptions.swim}
        checked={hobbies.includes(hobbyOptions.swim)}
        onChange={handleMultiCheckBoxChange}
      />
      <label htmlFor="bike">{hobbyOptions.bike}</label>
      <input
        type="checkbox"
        id="bike"
        value={hobbyOptions.bike}
        checked={hobbies.includes(hobbyOptions.bike)}
        onChange={handleMultiCheckBoxChange}
      />
      <label htmlFor="run">{hobbyOptions.run}</label>
      <input
        type="checkbox"
        id="run"
        value={hobbyOptions.run}
        checked={hobbies.includes(hobbyOptions.run)}
        onChange={handleMultiCheckBoxChange}
      />
      <br />
      回答：{hobbies.join(",")}
    </div>
  );
};

export default S70multiCheckBox;

import React, { useState } from "react";

const S70multiCheckBox: React.FC = () => {
  const [hobbies, setHobbies] = useState(["水泳", "ランニング"]);

  const multiCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (hobbies.includes(value)) {
      // チェックされたvalueが既に(配列に)含まれていたら、削除する
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
      <label htmlFor="swim">水泳</label>
      <input
        type="checkbox"
        id="swim"
        value="水泳"
        checked={hobbies.includes("水泳")}
        onChange={multiCheckBoxChange}
      />
      <label htmlFor="bike">自転車</label>
      <input
        type="checkbox"
        id="bike"
        value="自転車"
        checked={hobbies.includes("自転車")}
        onChange={multiCheckBoxChange}
      />
      <label htmlFor="run">ランニング</label>
      <input
        type="checkbox"
        id="run"
        value="ランニング"
        checked={hobbies.includes("ランニング")}
        onChange={multiCheckBoxChange}
      />
      <br />
      回答：{hobbies.join(",")}
    </div>
  );
};

export default S70multiCheckBox;

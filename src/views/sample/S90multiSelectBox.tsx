import React, { useState } from "react";

const S90multiSelectBox: React.FC = () => {
  const [hobbies, setHobbies] = useState<string[]>(["水泳", "ランニング"]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // event.target.selectedOptionsの一つ一つの要素から、
    // option => option.valueを１つずつ取得して、配列に変換している
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setHobbies(selectedOptions);
  };

  return (
    <div className="sample">
      <div>セレクトボックス(複数)</div>
      <label htmlFor="hobbies">趣味は何ですか？</label>
      <br />
      <select id="hobbies" value={hobbies} onChange={handleChange} multiple>
        <option value="水泳">水泳</option>
        <option value="自転車">自転車</option>
        <option value="ランニング">ランニング</option>
      </select>
      <br />
      <p>選択した値: {hobbies.join(", ")}</p>
    </div>
  );
};

export default S90multiSelectBox;

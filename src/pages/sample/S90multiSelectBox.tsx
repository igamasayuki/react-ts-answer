import { useState } from "react";
import { hobbyOptions } from "../../constants/data";

const S90multiSelectBox = () => {
  const [hobbies, setHobbies] = useState<string[]>([
    hobbyOptions.swim,
    hobbyOptions.run,
  ]);

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
        <option value={hobbyOptions.swim}>{hobbyOptions.swim}</option>
        <option value={hobbyOptions.bike}>{hobbyOptions.bike}</option>
        <option value={hobbyOptions.run}>{hobbyOptions.run}</option>
      </select>
      <br />
      <p>選択した値: {hobbies.join(", ")}</p>
    </div>
  );
};

export default S90multiSelectBox;

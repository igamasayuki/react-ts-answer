import React, { useState } from "react";

const Ex100: React.FC = () => {
  const [hobby, setHobby] = useState<string>("");
  const [triathlonType, setTriathlonType] = useState<string>("bike");
  const [otherHobby, setOtherHobby] = useState<string>("");

  const handleHobbyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setHobby(event.target.value);
  };

  const handleTriathlonTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTriathlonType(event.target.value);
  };

  const handleOtherHobbyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOtherHobby(event.target.value);
  };

  return (
    <div>
      <h1>趣味を選択するセレクトボックス</h1>
      <label htmlFor="hobby">趣味はなんですか？:</label>
      <select id="hobby" value={hobby} onChange={handleHobbyChange}>
        <option value="">未選択</option>
        <option value="triathlon">トライアスロン</option>
        <option value="other">その他</option>
      </select>
      <hr />
      {hobby === "" && <p>趣味がありません</p>}
      {hobby === "triathlon" && (
        <div>
          <p>好きな種目は？</p>
          <label>
            <input
              type="radio"
              name="triathlonType"
              value="swim"
              checked={triathlonType === "swim"}
              onChange={handleTriathlonTypeChange}
            />
            スイム
          </label>
          <label>
            <input
              type="radio"
              name="triathlonType"
              value="bike"
              checked={triathlonType === "bike"}
              onChange={handleTriathlonTypeChange}
            />
            バイク
          </label>
          <label>
            <input
              type="radio"
              name="triathlonType"
              value="run"
              checked={triathlonType === "run"}
              onChange={handleTriathlonTypeChange}
            />
            ラン
          </label>
          <p>選択した種目: {triathlonType}</p>
        </div>
      )}
      {hobby === "other" && (
        <div>
          <p>それでは何が好きですか？</p>
          <input
            type="text"
            value={otherHobby}
            onChange={handleOtherHobbyChange}
          />
          <p>記述した趣味: {otherHobby}</p>
        </div>
      )}
    </div>
  );
};

export default Ex100;

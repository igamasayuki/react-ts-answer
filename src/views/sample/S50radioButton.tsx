import React, { useState } from "react";

const S50radioButton: React.FC = () => {
  const [hobby, setHobby] = useState("自転車");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHobby(event.target.value);
  };

  return (
    <div className="sample">
      <div>ラジオボタン</div>
      <div>
        <input
          type="radio"
          id="swim"
          value="水泳"
          checked={hobby === "水泳"}
          onChange={handleChange}
        />
        <label htmlFor="swim">水泳</label>
      </div>
      <div>
        <input
          type="radio"
          id="bike"
          value="自転車"
          checked={hobby === "自転車"}
          onChange={handleChange}
        />
        <label htmlFor="bike">自転車</label>
      </div>
      <div>
        <input
          type="radio"
          id="run"
          value="ランニング"
          checked={hobby === "ランニング"}
          onChange={handleChange}
        />
        <label htmlFor="run">ランニング</label>
      </div>
      <p>趣味: {hobby}</p>
    </div>
  );
};

export default S50radioButton;

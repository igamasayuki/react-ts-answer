import React, { useState } from "react";

const S50radioButton: React.FC = () => {
  const hobbyOptions = {
    swim: "水泳",
    bike: "自転車",
    run: "ランニング",
  };
  const [hobby, setHobby] = useState<string>(hobbyOptions.bike);

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
          value={hobbyOptions.swim}
          checked={hobby === hobbyOptions.swim}
          onChange={handleChange}
        />
        <label htmlFor="swim">{hobbyOptions.swim}</label>
      </div>
      <div>
        <input
          type="radio"
          id="bike"
          value={hobbyOptions.bike}
          checked={hobby === hobbyOptions.bike}
          onChange={handleChange}
        />
        <label htmlFor="bike">{hobbyOptions.bike}</label>
      </div>
      <div>
        <input
          type="radio"
          id="run"
          value={hobbyOptions.run}
          checked={hobby === hobbyOptions.run}
          onChange={handleChange}
        />
        <label htmlFor="run">{hobbyOptions.run}</label>
      </div>
      <p>趣味: {hobby}</p>
    </div>
  );
};

export default S50radioButton;

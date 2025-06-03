import React, { useState } from "react";

const S40onChangeEvent: React.FC = () => {
  const [myName, setMyName] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setMyName(event.target.value);
  };

  return (
    <div className="sample">
      <div>テキストボックス</div>
      <label htmlFor="name">名前：</label>
      <input type="text" id="name" value={myName} onChange={handleChange} />
      <p>{myName}</p>
    </div>
  );
};

export default S40onChangeEvent;

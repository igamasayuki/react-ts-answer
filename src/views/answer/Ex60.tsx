import React, { useState } from "react";

const Ex60: React.FC = () => {
  const [name, setName] = useState("");
  const handleClick = () => {
    setName("山田太郎");
  };
  const handleClick2 = (name: string) => () => {
    setName(name);
  };

  return (
    <div>
      <button onClick={handleClick}>名前を表示</button>
      <button onClick={handleClick2("山田花子")}>名前を変更2</button>
      <p>{name}</p>
    </div>
  );
};

export default Ex60;

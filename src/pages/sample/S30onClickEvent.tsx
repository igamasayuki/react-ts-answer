import { useState } from "react";

const S30onClickEvent = () => {
  const [myName, setMyName] = useState<string>("");

  const handleClick = () => {
    setMyName("山田太郎");
  };

  return (
    <div className="sample">
      <button type="button" onClick={handleClick}>
        名前を表示する
      </button>
      <p>{myName}</p>
    </div>
  );
};

export default S30onClickEvent;

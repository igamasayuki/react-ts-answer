import { useState } from "react";

const CompMyName = () => {
  const [myName, setMyName] = useState<string>("山田太郎");

  const handleChangeName = () => {
    setMyName("鈴木一郎");
  };

  return (
    <div className="sample">
      <div>
        私の名前は{myName}です。
        <button type="button" onClick={handleChangeName}>
          名前変更
        </button>
      </div>
    </div>
  );
};

export default CompMyName;

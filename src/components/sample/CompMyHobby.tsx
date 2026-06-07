import { useState } from "react";

const CompMyHobby = () => {
  const [myHobby, setMyHobby] = useState<string>("トライアスロン");

  const handleClickHobby = () => {
    setMyHobby("マラソン");
  };

  return (
    <div className="sample">
      <div>
        私の趣味は{myHobby}です。
        <button type="button" onClick={handleClickHobby}>
          趣味変更
        </button>
      </div>
    </div>
  );
};

export default CompMyHobby;

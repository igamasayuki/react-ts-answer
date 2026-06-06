import { useState } from "react";

const CompMyHobby = () => {
  const [myHobby, setMyHobby] = useState<string>("トライアスロン");

  const handleChangeHobby = () => {
    setMyHobby("マラソン");
  };

  return (
    <div className="sample">
      <div>
        私の趣味は{myHobby}です。
        <button type="button" onClick={handleChangeHobby}>
          趣味変更
        </button>
      </div>
    </div>
  );
};

export default CompMyHobby;

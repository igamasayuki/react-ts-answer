import React, { useState } from "react";

const S130if: React.FC = () => {
  const [canShow, setCanShow] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCanShow(event.target.checked);
  };

  return (
    <div className="sample">
      <label htmlFor="canShow">表示/非表示</label>
      <br />
      <input
        type="checkbox"
        id="canShow"
        checked={canShow}
        onChange={handleChange}
      />
      {/* 短絡評価を使用してcanShowがtrueの時だけ右辺が実行される */}
      {canShow && <div>チェックされた</div>}
    </div>
  );
};

export default S130if;

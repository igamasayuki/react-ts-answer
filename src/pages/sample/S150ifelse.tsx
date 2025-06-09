import { useState } from "react";

const S150ifelse = () => {
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
      {/* 三項演算子を使用する */}
      {canShow ? <div>チェックされた</div> : <div>チェックがはずれた</div>}
    </div>
  );
};

export default S150ifelse;

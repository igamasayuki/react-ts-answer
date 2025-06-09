import { useState } from "react";

const S140if2 = () => {
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
      {/* 複数のタグを表示させたい場合 */}
      {canShow && (
        <div>
          <h2>チェックされた時の表示</h2>
          <p>ここに複数のタグやコンテンツを含めます。</p>
        </div>
      )}
    </div>
  );
};

export default S140if2;

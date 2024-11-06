import React, { useState } from "react";

const S160ifelse2: React.FC = () => {
  const [canShow, setCanShow] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCanShow(event.target.checked);
  };

  const renderContent = () => {
    if (canShow) {
      return (
        <div>
          <h2>チェックされた時の内容</h2>
          <p>ここに複数のタグや複雑なコンテンツを表示できます。</p>
        </div>
      );
    } else {
      return (
        <div>
          <h2>チェックがはずれた時の内容</h2>
          <p>こちらも複数のタグやコンテンツが含まれます。</p>
        </div>
      );
    }
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
      {renderContent()}
    </div>
  );
};

export default S160ifelse2;

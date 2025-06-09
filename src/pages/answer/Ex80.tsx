import { useState } from "react";

const Ex80 = () => {
  const [isRobot, setIsRobot] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsRobot(event.target.checked);
  };

  return (
    <div>
      私はロボットではありません。
      <input type="checkbox" onChange={handleChange} /> / {isRobot.toString()}
      {isRobot && (
        <div>
          <h2>ロボットではありません</h2>
          <p>人間です。</p>
        </div>
      )}
    </div>
  );
};

export default Ex80;

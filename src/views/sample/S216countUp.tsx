import React, { useState, useEffect } from "react";

const S216countUp: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`カウントが更新されました: ${count}`);
  }, [count]); // countが変わるたびに実行

  return (
    <div>
      <p>現在のカウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>カウントを増やす</button>
    </div>
  );
};

export default S216countUp;

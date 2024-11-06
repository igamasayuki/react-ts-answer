import React, { useState } from "react";
import CompCounterEmit2 from "../../components/sample/CompCounterEmit2";

const S290emitParent2: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleCountUp = (increment: number) => {
    setCount((prevCount) => prevCount + increment);
  };

  return (
    <div className="compSample">
      <p>現在値：{count}</p>
      <CompCounterEmit2 onCountUp={handleCountUp} />
      <CompCounterEmit2 onCountUp={handleCountUp} />
      <CompCounterEmit2 onCountUp={handleCountUp} />
    </div>
  );
};

export default S290emitParent2;

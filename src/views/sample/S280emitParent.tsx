import React, { useState } from "react";
import CompCounterEmit from "../../components/sample/CompCounterEmit";

const S280emitParent: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleCountUp = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="compSample">
      <p>現在値：{count}</p>
      <CompCounterEmit onCountUp={handleCountUp} />
      <CompCounterEmit onCountUp={handleCountUp} />
      <CompCounterEmit onCountUp={handleCountUp} />
    </div>
  );
};

export default S280emitParent;

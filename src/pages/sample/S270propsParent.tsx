import { useState } from "react";
import CompCountUpButton from "../../components/sample/CompCountUpButton";
const S270propsParent = () => {
  const [count, setCount] = useState<number>(0);

  const handleCountUp = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="compSample">
      <p>現在値：{count}</p>
      <CompCountUpButton onCountUp={handleCountUp} />
      <CompCountUpButton onCountUp={handleCountUp} />
    </div>
  );
};

export default S270propsParent;

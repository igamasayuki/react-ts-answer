import { useState } from "react";
import CompCountUpButton2 from "../../components/answer/CompCountUpButton2";

const Ex170 = () => {
  const [currentCount, setCurrentCount] = useState<number>(0);

  const handleCountUp = () => {
    setCurrentCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Current Count: {currentCount}</p>
      <CompCountUpButton2 onCountUp={handleCountUp} />
      <CompCountUpButton2 onCountUp={handleCountUp} />
      <CompCountUpButton2 onCountUp={handleCountUp} />
    </div>
  );
};

export default Ex170;

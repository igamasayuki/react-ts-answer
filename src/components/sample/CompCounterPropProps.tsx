import React, { useState, useEffect } from "react";

interface CompCounterPropProps {
  initialCount?: number;
}

const CompCounterProp: React.FC<CompCounterPropProps> = ({
  initialCount = 0,
}) => {
  const [nowCount, setNowCount] = useState(initialCount);

  useEffect(() => {
    setNowCount(initialCount);
  }, [initialCount]);

  const handleChange = () => {
    setNowCount(nowCount + 1);
  };

  return (
    <div className="ex">
      現在値：{nowCount}
      <br />
      <button type="button" onClick={handleChange}>
        カウントを1増やす
      </button>
    </div>
  );
};

export default CompCounterProp;

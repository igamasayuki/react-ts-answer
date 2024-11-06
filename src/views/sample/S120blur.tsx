import React, { useState } from "react";

const S120blur: React.FC = () => {
  const [myName, setMyName] = useState<string>("名無し");

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMyName(event.target.value);
  };

  return (
    <div className="sample">
      <input type="text" onBlur={handleBlur} />
      <p>{myName}</p>
    </div>
  );
};

export default S120blur;

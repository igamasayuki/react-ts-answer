import React from "react";

const S180forLoop: React.FC = () => {
  const names = ["武田", "織田", "豊臣", "上杉", "徳川"];

  return (
    <div className="sample">
      {names.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </div>
  );
};

export default S180forLoop;

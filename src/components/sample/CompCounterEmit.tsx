import React from "react";

interface CompCounterEmitProps {
  onCountUp: () => void;
}

const CompCounterEmit: React.FC<CompCounterEmitProps> = ({ onCountUp }) => {
  const handleClick = () => {
    console.log("count-upイベント発生");
    onCountUp();
  };

  return (
    <div className="ex">
      <button type="button" onClick={handleClick}>
        カウントを増やす
      </button>
    </div>
  );
};

export default CompCounterEmit;

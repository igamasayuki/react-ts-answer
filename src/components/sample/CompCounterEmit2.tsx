import React from "react";

interface CompCounterEmit2Props {
  onCountUp: (count: number) => void;
}

const CompCounterEmit2: React.FC<CompCounterEmit2Props> = ({ onCountUp }) => {
  const handleCountUpClick = () => {
    const count = 1;
    console.log("count-upイベント発生! " + count + " を親に渡します");
    onCountUp(count); // 親にcountの値を渡す
  };

  return (
    <div className="ex">
      <button type="button" onClick={handleCountUpClick}>
        カウントを増やす
      </button>
    </div>
  );
};

export default CompCounterEmit2;

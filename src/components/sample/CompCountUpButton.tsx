import React from "react";

interface CompCountUpButtonProps {
  onCountUp: () => void; // 親から渡されるコールバック関数
}

const CompCountUpButton: React.FC<CompCountUpButtonProps> = ({ onCountUp }) => {
  return (
    <div className="ex">
      <button type="button" onClick={onCountUp}>
        カウントを増やす
      </button>
    </div>
  );
};

export default CompCountUpButton;

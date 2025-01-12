import React from "react";
import CompCounterProp from "../../components/sample/CompCounterPropProps";

const S260countUpParent: React.FC = () => {
  return (
    <div className="compSample">
      <CompCounterProp /> {/* デフォルト値0を使用 */}
      <hr />
      <CompCounterProp initialCount={10} /> {/* 初期値10を渡す */}
    </div>
  );
};

export default S260countUpParent;

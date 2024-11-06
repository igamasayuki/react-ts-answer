import React from "react";
import CompCounterProp from "../../components/sample/CompCounterPropProps";

const S260countUpParent: React.FC = () => {
  return (
    <div className="compSample">
      <CompCounterProp />
      <hr />
      <CompCounterProp initialCount={10} />
    </div>
  );
};

export default S260countUpParent;

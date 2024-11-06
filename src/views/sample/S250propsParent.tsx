import React from "react";
import CompPropsYourName from "../../components/sample/CompPropsYourName";

const S250propsParent: React.FC = () => {
  return (
    <div className="compSample">
      <CompPropsYourName yourName="鈴木" />
      <hr />
      <CompPropsYourName yourName="山田" />
      <hr />
      <CompPropsYourName />
    </div>
  );
};

export default S250propsParent;

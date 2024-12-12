import React from "react";
import CompPropsYourInfo from "../../components/sample/CompPropsYourInfo";
const S250propsParent: React.FC = () => {
  return (
    <div className="compSample">
      <CompPropsYourInfo yourName="鈴木" yourAge={30} />
      <hr />
      <CompPropsYourInfo yourName="山田" />
      <hr />
      <CompPropsYourInfo />
    </div>
  );
};

export default S250propsParent;

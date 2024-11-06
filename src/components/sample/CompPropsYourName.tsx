import React from "react";

interface CompPropsYourNameProps {
  yourName?: string;
}

const CompPropsYourName: React.FC<CompPropsYourNameProps> = ({
  yourName = "名無し",
}) => {
  return (
    <div className="ex">
      <div>こんにちは、{yourName}さん！</div>
    </div>
  );
};

export default CompPropsYourName;

import React from "react";

interface CompYourInfoProps {
  yourName?: string;
  yourAge?: number;
}

const CompPropsYourInfo: React.FC<CompYourInfoProps> = ({
  yourName = "名無し",
  yourAge = 0,
}) => {
  return (
    <div className="ex">
      <div>こんにちは、{yourName}さん！</div>
      <div>年齢：{yourAge}歳</div>
    </div>
  );
};

export default CompPropsYourInfo;

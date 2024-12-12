import React from "react";

interface CompYourInfoProps {
  myName?: string;
  myAge?: number;
  myHobby?: string;
}

const CompPropsYourInfo: React.FC<CompYourInfoProps> = ({
  myName = "名無し",
  myAge = 0,
  myHobby = "趣味なし",
}) => {
  return (
    <div className="ex">
      <div>私の名前は{myName}です。</div>
      <div>私の年齢は{myAge}歳です。</div>
      <div>私の趣味は{myHobby}です。</div>
    </div>
  );
};

export default CompPropsYourInfo;

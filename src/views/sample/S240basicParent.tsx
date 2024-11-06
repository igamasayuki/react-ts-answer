import React from "react";
import CompMyName from "../../components/sample/CompMyName";
import CompMyHobby from "../../components/sample/CompMyHobby";

const S240basicParent: React.FC = () => {
  return (
    <div className="sample">
      名前：
      <CompMyName />
      <br />
      趣味：
      <CompMyHobby />
      <br />
      名前：
      <CompMyName />
      <br />
      <hr />
      <CompMyHobby />
    </div>
  );
};

export default S240basicParent;

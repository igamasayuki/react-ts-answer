import React, { useState } from "react";

const S220dynamicAttributes: React.FC = () => {
  const [textSize, setTextSize] = useState<number>(10);

  const [attributes, setAttributes] = useState({
    type: "text",
    size: 20,
    maxLength: 3,
    required: false,
  });

  const handleAttribute = () => {
    setTextSize(50);
    setAttributes({
      type: "password",
      size: 50,
      maxLength: 10,
      required: true,
    });
  };

  return (
    <div className="sample">
      テキストフィールド1 (size属性を個別に設定):
      <br />
      <input type="text" size={textSize} />
      <br />
      テキストフィールド2
      (type属性、size属性、maxLength属性、required属性をまとめて設定):
      <br />
      <input {...attributes} />
      <br />
      <button type="button" onClick={handleAttribute}>
        input要素の属性値を変える
      </button>
    </div>
  );
};

export default S220dynamicAttributes;

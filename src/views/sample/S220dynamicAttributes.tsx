import React, { useState } from "react";

const S220dynamicAttributes: React.FC = () => {
  // 個別の属性を管理
  const [textSize, setTextSize] = useState<number>(10);

  // 複数の属性をまとめて管理
  const [attributes, setAttributes] = useState({
    type: "text",
    size: 20,
    maxLength: 3,
    required: false,
  });

  // ボタンクリックで属性を変更
  const handleAttribute = () => {
    setTextSize(50); // size属性を個別に変更
    setAttributes({
      type: "password", // type属性を変更
      size: 50, // size属性を変更
      maxLength: 10, // maxLength属性を変更
      required: true, // required属性を変更
    });
  };

  return (
    <div className="sample">
      <p>テキストフィールド1 (size属性を個別に設定):</p>
      <input type="text" size={textSize} />
      <br />
      <p>テキストフィールド2 (複数の属性をまとめて設定):</p>
      <input {...attributes} />
      <br />
      <button type="button" onClick={handleAttribute}>
        input要素の属性値を変える
      </button>
    </div>
  );
};

export default S220dynamicAttributes;

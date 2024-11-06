import React, { useState, useEffect } from "react";

const S270lifeCycleDemo: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  // コンポーネントが初めてレンダリングされる前に実行される
  useEffect(() => {
    console.log(
      "コンポーネントがマウントされる前 (beforeCreate, created に相当)"
    );

    // データの初期化 (created に相当)
    setData("初期データ");

    return () => {
      console.log(
        "コンポーネントがアンマウントされる前 (beforeDestroy に相当)"
      );
    };
  }, []);

  // コンポーネントが更新されるたびに実行される
  useEffect(() => {
    if (data !== null) {
      console.log("データが更新された後 (beforeUpdate, updated に相当)");
    }
  }, [data]);

  return <div className="sample">ライフサイクルフック</div>;
};

export default S270lifeCycleDemo;

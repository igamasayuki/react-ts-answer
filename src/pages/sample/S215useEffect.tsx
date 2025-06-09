import { useEffect } from "react";

const S215useEffect = () => {
  useEffect(() => {
    // ここに実行したい処理を記述
    console.log("コンポーネントが表示されました");

    // クリーンアップ処理 (必要に応じて)
    return () => {
      console.log("コンポーネントが非表示になりました");
    };
  }, []); // 第2引数に依存配列を指定

  return <div>こんにちは！</div>;
};

export default S215useEffect;

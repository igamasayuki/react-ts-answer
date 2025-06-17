import { useState } from "react";

interface Props {
  fight?: string;
}

const CompCheer = ({ fight = "" }: Props) => {
  const [cheer, setCheer] = useState(fight);

  const handleCheer = () => {
    // 状態更新が非同期で行われるため、直接 "cheer" を使って更新すると
    // 古い状態が参照されてしまう可能性があります。
    //
    // 以下のように書くと問題が発生します:
    // setCheer(cheer + " ファイト！");
    //
    // 例: 素早く連続でボタンをダブルクリックした場合
    // - 1回目: cheer が "ファイト" の状態で更新される → "ファイト ファイト"
    // - 2回目: まだ状態が更新される前の古い "ファイト" が参照される → "ファイト ファイト"
    // 期待通りの結果になりません。

    // 解決方法: 関数を引数に渡して前回の状態 (prevCheer) を安全に取得します。
    // React は常に最新の状態を prevCheer に渡してくれるため、
    // 連続クリックでも正しい結果が得られます。

    setCheer((prevCheer) => prevCheer + " ファイト！");
  };

  return (
    <div>
      <p>応援メッセージ: {cheer}</p>
      <button onClick={handleCheer}>応援する</button>
    </div>
  );
};

export default CompCheer;

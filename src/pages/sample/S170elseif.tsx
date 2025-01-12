import React, { useState } from "react";

const S170elseif: React.FC = () => {
  const [likeCar, setLikeCar] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLikeCar(event.target.value);
  };

  return (
    <div className="sample">
      <div>
        好きな車はなんですか？:
        <select value={likeCar} onChange={handleChange}>
          <option value="">選択してください</option>
          <option value="estima">エスティマ</option>
          <option value="prius">プリウス</option>
          <option value="tesla">テスラ</option>
        </select>
        <div>
          {likeCar === "estima" && <span>ガソリン車</span>}
          {likeCar === "prius" && <span>ハイブリット車</span>}
          {likeCar === "tesla" && <span>電気自動車</span>}
          {!likeCar && <span>選択してください</span>}
        </div>
      </div>
    </div>
  );
};

export default S170elseif;

import React from "react";

interface Item {
  id: number;
  name: string;
  price: number;
}

const S200firstItem: React.FC = () => {
  const items: Item[] = [
    { id: 10, name: "Javaの書籍", price: 3000 },
    { id: 20, name: "Pythonの書籍", price: 2000 },
    { id: 30, name: "TypeScriptの書籍", price: 4500 },
  ];

  // 最初の商品を取得
  const firstItem = items[0];

  return (
    <div className="sample">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>商品名</th>
            <th>価格</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{firstItem.id}</td>
            <td>{firstItem.name}</td>
            <td>{firstItem.price}円</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default S200firstItem;

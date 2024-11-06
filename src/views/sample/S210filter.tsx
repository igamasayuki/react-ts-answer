import React from "react";

interface Item {
  id: number;
  name: string;
  price: number;
}

const S210filter: React.FC = () => {
  const items: Item[] = [
    { id: 10, name: "Javaの書籍", price: 3000 },
    { id: 20, name: "Pythonの書籍", price: 2000 },
    { id: 30, name: "TypeScriptの書籍", price: 4500 },
  ];

  // 価格が3,000円以下の商品を抽出
  const expensiveItems = items.filter((item) => item.price <= 3000);

  return (
    <div className="sample">
      <div>3,000円以下の商品一覧</div>
      <table className="table">
        <thead>
          <tr>
            <th>繰返し回数</th>
            <th>ID</th>
            <th>商品名</th>
            <th>価格</th>
          </tr>
        </thead>
        <tbody>
          {expensiveItems.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}円</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default S210filter;

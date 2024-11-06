import React from "react";

interface Item {
  id: number;
  name: string;
  price: number;
}

const items: Item[] = [
  { id: 10, name: "Javaの書籍", price: 3000 },
  { id: 20, name: "Pythonの書籍", price: 2000 },
  { id: 30, name: "TypeScriptの書籍", price: 4500 },
];

const S190forLoop2: React.FC = () => {
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
          {items.map((item) => (
            <tr key={item.id}>
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

export default S190forLoop2;

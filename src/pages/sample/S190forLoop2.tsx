import React from "react";

import { items } from "../../constants/items"; // 定数データをインポート

const S190forLoop2: React.FC = () => {
  return (
    <div className="sample">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>商品名</th>
            <th>価格</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
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

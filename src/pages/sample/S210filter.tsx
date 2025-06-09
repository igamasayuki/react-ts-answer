import { items } from "../../constants/items"; // 定数データをインポート
import { Item } from "../../types/item"; // 型定義をインポート

const S210filter = () => {
  // 価格が3,000円以下（手頃な価格）の商品を抽出
  const cheapItems: Item[] = items.filter((item) => item.price <= 3000);

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
          {cheapItems.map((item, i) => (
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

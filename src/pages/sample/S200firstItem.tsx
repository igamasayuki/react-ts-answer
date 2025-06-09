import { items } from "../../constants/items"; // 定数データをインポート
import { Item } from "../../types/item";

const S200firstItem = () => {
  const firstItem: Item | null = items[0] || null;

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
          {firstItem ? (
            <tr>
              <td>{firstItem.id}</td>
              <td>{firstItem.name}</td>
              <td>{firstItem.price}円</td>
            </tr>
          ) : (
            <tr>
              <td colSpan={3}>データがありません</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default S200firstItem;

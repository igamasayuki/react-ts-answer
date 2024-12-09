// Itemの型定義を別ファイルに切り出して、それをimportすることで、コードの重複を防ぐことができます。
export interface Item {
  id: number;
  name: string;
  price: number;
}

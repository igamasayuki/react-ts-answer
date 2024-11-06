import React from "react";
const Ex20: React.FC = () => {
  const name = "山田太郎";
  const age = 21;
  const birthDay = new Date(2000, 1 - 1, 1);
  const stringDate = birthDay.toDateString();
  const hobbies = ["スイム", "バイク", "ラン"];

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月は0から始まるため +1 する
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
  };

  return (
    <div className="border">
      <p>名前：{name}</p>
      <p>年齢：{age}</p>
      <p>誕生日：{stringDate}</p>
      <p>誕生日(余裕がある人)：{formatDate(birthDay)}</p>
      <p>趣味：{hobbies}</p>
      <p>10年後の年齢：{age + 10}</p>
    </div>
  );
};

export default Ex20;

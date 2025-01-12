import React, { useState } from "react";

const Ex70: React.FC = () => {
  const genderOptions = {
    man: "男性",
    woman: "女性",
  };
  const hobbyOptions = {
    swim: "水泳",
    bike: "自転車",
    run: "ランニング",
  };
  const favoriteWordOptions = {
    javascript: "JavaScript",
    typescript: "TypeScript",
    java: "Java",
  };

  const [lastName, setLastName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<string>("");
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [favoriteWord, setFavoriteWord] = useState<string>("");
  const [others, setOthers] = useState<string>("");
  const [isAgree, setIsAgree] = useState<boolean>(false);

  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value.trim());
  };

  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value.trim());
  };

  const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(parseInt(event.target.value));
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleHobbyCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (hobbies.includes(value)) {
      // チェックされたvalueが既に(配列に)含まれていたら、削除する
      // value以外(hobby !=== value)のものをセットし直している
      // value(hobby === value)はセットしない
      setHobbies(hobbies.filter((hobby) => hobby !== value));
    } else {
      // 配列にチェックされたvalueを追加(スプレッド構文使用)
      setHobbies([...hobbies, value]);
    }
  };

  const handleFavoriteWordSelectBoxChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFavoriteWord(event.target.value);
  };

  const handleOthers = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOthers(event.target.value);
  };

  const handleIsAgreeSingleCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsAgree(event.target.checked);
  };

  return (
    <div>
      <h1>アンケートフォーム</h1>
      姓：
      <input type="text" onChange={handleLastName} /> / 入力した姓： {lastName}
      <hr />
      名：
      <input type="text" onChange={handleFirstName} /> / 入力した名：{firstName}
      <hr />
      入力したフルネーム：{lastName}
      {firstName}
      <hr />
      年齢：
      <input type="text" onChange={handleAge} /> / 入力した年齢：{age}
      <hr />
      10年後の年齢：{age + 10}
      <hr />
      <p>
        性別：
        <input
          type="radio"
          value={genderOptions.man}
          onChange={handleGenderChange}
        />
        {genderOptions.man}{" "}
        <input
          type="radio"
          value={genderOptions.woman}
          onChange={handleGenderChange}
        />
        {genderOptions.woman} / チェックした性別：{gender}
      </p>
      <hr />
      趣味：
      <input
        type="checkbox"
        value={hobbyOptions.swim}
        checked={hobbies.includes(hobbyOptions.swim)}
        onChange={handleHobbyCheckBoxChange}
      />
      {hobbyOptions.swim}
      <input
        type="checkbox"
        value={hobbyOptions.bike}
        checked={hobbies.includes(hobbyOptions.bike)}
        onChange={handleHobbyCheckBoxChange}
      />
      {hobbyOptions.bike}
      <input
        type="checkbox"
        value={hobbyOptions.run}
        checked={hobbies.includes(hobbyOptions.run)}
        onChange={handleHobbyCheckBoxChange}
      />
      {hobbyOptions.run} / チェックした趣味：{hobbies.join(", ")}
      <hr />
      好きな言葉：
      <select
        id="hobby"
        value={favoriteWord}
        onChange={handleFavoriteWordSelectBoxChange}
      >
        <option value="">選択してください</option>
        <option value={favoriteWordOptions.javascript}>
          {favoriteWordOptions.javascript}
        </option>
        <option value={favoriteWordOptions.typescript}>
          {favoriteWordOptions.typescript}
        </option>
        <option value={favoriteWordOptions.java}>
          {favoriteWordOptions.java}
        </option>
      </select>
      / 選択した値：{favoriteWord}
      <hr />
      その他：
      {/* JSXではrows="5"は使えない */}
      <textarea rows={5} onBlur={handleOthers} />
      <br />
      入力したその他：
      <br />
      <pre>{others}</pre>
      <hr />
      <label htmlFor="agree">私はロボットではありません。</label>
      <input
        type="checkbox"
        id="agree"
        checked={isAgree}
        onChange={handleIsAgreeSingleCheckBoxChange}
      />
      / {isAgree.toString()}
      <hr />
      <button disabled={!isAgree}>送信</button>
      ←ロボットでなければ押せないようにする
    </div>
  );
};

export default Ex70;

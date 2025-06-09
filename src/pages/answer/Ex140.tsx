import CompSelfIntroduction from "../../components/answer/CompSelfIntroduction";

const Ex140 = () => {
  return (
    <div>
      <CompSelfIntroduction myName="山田太郎" myAge={18} myHobby="ゲーム" />
      <hr />
      <CompSelfIntroduction
        myName="山田花子"
        myAge={23}
        myHobby="ウォーキング"
      />
    </div>
  );
};

export default Ex140;

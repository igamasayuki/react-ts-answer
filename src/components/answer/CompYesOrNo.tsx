interface Props {
  onYesOrNo: (yesOrNo: string) => void;
}

const CompYesOrNo = ({ onYesOrNo }: Props) => {
  const handleClick = (value: string) => {
    onYesOrNo(value); // 親に "Yes" または "No" を渡す
  };

  return (
    <div>
      {/* 引数なしの関数を渡す場合：onClick={handleCountUp} */}
      {/*   または             ：onClick={() => handleCountUp} */}
      {/* 引数ありの関数を渡す場合：onClick={() => handleCountUp(引数)} */}
      {/* onClick={handleCountUp(引数)}だとエラーになる */}
      <button onClick={() => handleClick("Yes")}>Yes</button>
      <button onClick={() => handleClick("No")}>No</button>
    </div>
  );
};

export default CompYesOrNo;

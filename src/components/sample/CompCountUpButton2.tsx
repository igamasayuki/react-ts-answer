interface Props {
  onCountUp: (count: number) => void;
}

const CompCountUpButton2 = ({ onCountUp }: Props) => {
  const handleClick = () => {
    const incrementValue = 1; // 親に渡す値
    console.log(`${incrementValue} を親に渡します`);
    onCountUp(incrementValue); // 親にincrementValueの値を渡す
  };

  return (
    <div className="ex">
      <button type="button" onClick={handleClick}>
        カウントを増やす
      </button>
    </div>
  );
};

export default CompCountUpButton2;

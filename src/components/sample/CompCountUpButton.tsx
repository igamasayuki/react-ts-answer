interface Props {
  onCountUp: () => void; // 親から渡されるコールバック関数
}

const CompCountUpButton = ({ onCountUp }: Props) => {
  return (
    <div className="ex">
      <button type="button" onClick={onCountUp}>
        カウントを増やす
      </button>
    </div>
  );
};

export default CompCountUpButton;

import { useCounterContext } from "../../../context/CounterContext";

const CompCounterButton = () => {
  // useContextを使用してContext内の関数を取得
  const { increment, decrement } = useCounterContext();
  return (
    <div>
      <button onClick={decrement}>減らす (-)</button>
      <button onClick={increment}>増やす (+)</button>
    </div>
  );
};

export default CompCounterButton;

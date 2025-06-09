const Ex40 = () => {
  const isEnabled = true;
  const isDisabled = false;

  return (
    <div>
      <span>
        <button type="button" disabled={isDisabled}>
          押せるボタン
        </button>
      </span>
      <span>
        <button type="button" disabled={isEnabled}>
          押せないボタン
        </button>
      </span>
      <hr />
      <label>
        チェックされているラジオボタン：
        <input type="radio" checked={isEnabled} />
      </label>
      /
      <label>
        チェックされていないラジオボタン：
        <input type="radio" checked={isDisabled} />
      </label>
      <hr />
      <label>
        チェックされているチェックボックス：
        <input type="checkbox" checked={isEnabled} />
      </label>
      /
      <label>
        チェックされていないチェックボックス：
        <input type="checkbox" checked={isDisabled} />
      </label>
    </div>
  );
};

export default Ex40;

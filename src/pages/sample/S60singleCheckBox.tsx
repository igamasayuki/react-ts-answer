import { useState } from "react";

const S60singleCheckBox = () => {
  const [isAgree, setIsAgree] = useState<boolean>(false);

  const handleSingleCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsAgree(event.target.checked);
  };

  return (
    <div className="sample">
      <div>チェックボックス(単一)</div>
      <label htmlFor="agree">同意する：</label>
      <input
        type="checkbox"
        id="agree"
        checked={isAgree}
        onChange={handleSingleCheckBoxChange}
      />
      <p>回答:{isAgree.toString()}</p>
      <hr />
    </div>
  );
};

export default S60singleCheckBox;

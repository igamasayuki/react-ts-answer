import React, { useState } from "react";

const S60singleCheckBox: React.FC = () => {
  const [isAgree, setIsAgree] = useState(false);

  const singleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        onChange={singleCheckBoxChange}
      />
      <p>回答:{isAgree.toString()}</p>
      <hr />
    </div>
  );
};

export default S60singleCheckBox;

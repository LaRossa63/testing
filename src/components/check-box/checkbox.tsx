import { ChangeEvent, useState } from "react";
import "./check-box.css";

export const Checkbox = () => {
  const [checkBox, setCheckBox] = useState(false);

  const handleChangeCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckBox(e.target.checked);
  };

  return (
    <div className="container">
      <label className="label">
        Тумблер:
        <input
          data-testid="input-checkbox"
          type="checkbox"
          checked={checkBox}
          onChange={handleChangeCheckBox}
        />
      </label>

      <span
        className={checkBox ? "green" : "red"}
        data-testid="output-checkbox"
      >
        {checkBox ? "Включен" : "Выключен"}
      </span>
    </div>
  );
};

import { ChangeEvent, useState } from "react";
import "./user-name.css";

export const UserName = () => {
  const [name, setName] = useState("");

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="container">
      <label className="label" data-testid="label-name">
        Имя:
        <input
          value={name}
          onChange={handleChangeName}
          data-testid="input-name"
        />
      </label>

      <span className="name" data-testid="output-name">
        Name: {name || "Wait..."}
      </span>
    </div>
  );
};

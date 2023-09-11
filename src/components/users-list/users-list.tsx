import { useState } from "react";
import axios from "axios";

interface IList {
  id: number;
  email: string;
}

export const UsersList = () => {
  const [list, setList] = useState<IList[]>();
  const [error, setError] = useState(false);

  const getListUser = () => {
    setError(false);

    axios
      .get<IList[]>("https://jsonplaceholder.typicode.com/users")
      .then((result) => setList(result.data))
      .catch(() => setError(true));
  };

  return (
    <div>
      <h3>Список пользователей:</h3>

      <button data-testid="user-list-btn-get" onClick={getListUser}>
        Получить
      </button>

      {list?.length ? (
        <ul data-testid="user-list">
          {list.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      ) : (
        <span>Список пустой</span>
      )}

      {error && (
        <span style={{ color: "red" }} data-testid="user-error">
          При запросе произошла ошибка
        </span>
      )}
    </div>
  );
};

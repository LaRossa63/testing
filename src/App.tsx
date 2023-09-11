import { UserName, Checkbox, UsersList } from "./components";

export const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <UserName />

      <Checkbox />

      <UsersList />
    </div>
  );
};

import axios from "axios";
import { render, waitFor, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UsersList } from "./users-list";

const mockResult = [
  {
    id: 0,
    email: "test0",
  },
  {
    id: 1,
    email: "test1",
  },
];
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("testing component UsersList", () => {
  it("should render list users", async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockResult })
    );

    const { getByTestId } = render(<UsersList />);

    await waitFor(() => userEvent.click(getByTestId("user-list-btn-get")));
    const items = await waitFor(() => getByTestId("user-list"));
    expect(items).toMatchSnapshot();
  });
});

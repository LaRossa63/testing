import { act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserName } from "./user-name";

describe("testing component UserName", () => {
  it("should output text", () => {
    const { getByTestId } = render(<UserName />);

    expect(getByTestId("output-name")).toHaveTextContent(/Wait.../i);

    act(() => {
      userEvent.type(getByTestId("input-name"), "Maxim S.");
    });

    expect(getByTestId("output-name")).toHaveTextContent(/Maxim S./i);
  });

  it("should focus for click label", () => {
    const { getByTestId } = render(<UserName />);

    expect(getByTestId("input-name")).not.toHaveFocus();

    act(() => {
      userEvent.type(getByTestId("input-name"), "Maxim S.");
    });

    expect(getByTestId("input-name")).toHaveFocus();
  });
});

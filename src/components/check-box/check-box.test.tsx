import { act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./checkbox";

describe("testing component Checkbox", () => {
  it("should output text", () => {
    const { getByTestId } = render(<Checkbox />);

    getByTestId("output-checkbox");

    act(() => {
      userEvent.click(getByTestId("input-checkbox"));
    });

    expect(getByTestId("output-checkbox")).toHaveTextContent("Включен");
  });

  it("should change state", () => {
    const { getByTestId } = render(<Checkbox />);

    expect(getByTestId("input-checkbox")).not.toBeChecked();

    act(() => {
      userEvent.click(getByTestId("input-checkbox"));
    });

    expect(getByTestId("input-checkbox")).toBeChecked();
  });

  it("should styles", () => {
    const { getByTestId } = render(<Checkbox />);

    expect(getByTestId("output-checkbox")).toHaveClass("red");

    act(() => {
      userEvent.click(getByTestId("input-checkbox"));
    });

    expect(getByTestId("output-checkbox")).toHaveClass("green");
  });
});

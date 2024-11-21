import { fireEvent } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("App 컴퍼넌트 렌더링되는지 TEST하기", () => {
    render(<App />);
    const countValue = screen.getByText("0");
    expect(countValue).toBeInTheDocument();
  });

  test("증가버튼을 클릭하면은 value가 증가하는지 TEST하기", () => {
    render(<App />);

    const increaseButton = screen.getByRole("button", { name: "증가버튼" });
    expect(increaseButton).toBeInTheDocument();

    fireEvent.click(increaseButton);
    const countValue = screen.getByText("1");
    expect(countValue).toBeInTheDocument();

    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    const countValue2 = screen.getByText("3");
    expect(countValue2).toBeInTheDocument();
  });

  test("감소버튼을 클릭하면은 value가 감소하는지 TEST하기", () => {
    render(<App />);

    const decreaseButton = screen.getByRole("button", { name: "감소버튼" });
    expect(decreaseButton).toBeInTheDocument();
    fireEvent.click(decreaseButton);
    const countValue = screen.getByText("-1");
    expect(countValue).toBeInTheDocument();

    fireEvent.click(decreaseButton);
    fireEvent.click(decreaseButton);
    const countValue2 = screen.getByText("-3");
    expect(countValue2).toBeInTheDocument();
  });
});

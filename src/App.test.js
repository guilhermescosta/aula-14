import { render, screen, fireEvent } from "@testing-library/react";
import Calculadora from "./components/Calculadora";

test("soma dois números corretamente", () => {
  render(<Calculadora />);
  const inputs = screen.getAllByRole("spinbutton");
  fireEvent.change(inputs[0], { target: { value: "5" } });
  fireEvent.change(inputs[1], { target: { value: "3" } });
  fireEvent.click(screen.getByText("+"));
  expect(screen.getByText(/Resultado:/i)).toHaveTextContent("8");
});

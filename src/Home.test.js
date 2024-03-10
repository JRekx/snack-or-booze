import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  test("renders welcome message", () => {
    render(<Home />);
    expect(screen.getByText(/welcome to the dog house/i)).toBeInTheDocument();
  });

  test("renders Card component", () => {
    render(<Home />);
    expect(screen.getByRole("article")).toBeInTheDocument();
  });

  test("renders correct Card title", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /welcome to the dog house/i })
    ).toBeInTheDocument();
  });
});

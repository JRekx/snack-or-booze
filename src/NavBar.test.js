import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("NavBar", () => {
  test("renders navbar brand link", () => {
    render(<NavBar />, { wrapper: MemoryRouter });
    expect(screen.getByText(/Snack or Booze/i)).toBeInTheDocument();
  });

  test("renders snacks nav link", () => {
    render(<NavBar />, { wrapper: MemoryRouter });
    expect(screen.getByText(/Snacks/i)).toBeInTheDocument();
  });

  test("renders drinks nav link", () => {
    render(<NavBar />, { wrapper: MemoryRouter });
    expect(screen.getByText(/Drinks/i)).toBeInTheDocument();
  });

  test("renders correct links for nav items", () => {
    render(<NavBar />, { wrapper: MemoryRouter });

    expect(screen.getByText(/Snacks/i).closest("a")).toHaveAttribute(
      "href",
      "/snacks"
    );
    expect(screen.getByText(/Drinks/i).closest("a")).toHaveAttribute(
      "href",
      "/drinks"
    );
  });
});

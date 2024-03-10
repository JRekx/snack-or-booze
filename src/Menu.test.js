import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Menu from "./Menu";

describe("Menu", () => {
  const menuItems = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ];

  test("renders menu title", () => {
    render(<Menu title="Test Menu" items={menuItems} />, {
      wrapper: MemoryRouter,
    });
    expect(screen.getByText(/Test Menu/i)).toBeInTheDocument();
  });

  test("renders menu items", () => {
    render(<Menu title="Test Menu" items={menuItems} />, {
      wrapper: MemoryRouter,
    });
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });

  test("renders correct menu item text", () => {
    render(<Menu title="Test Menu" items={menuItems} />, {
      wrapper: MemoryRouter,
    });
    expect(screen.getByText(/Item 1/i)).toBeInTheDocument();
  });
});

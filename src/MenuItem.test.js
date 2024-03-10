import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MenuItem from "./MenuItem";

const testItems = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

describe("MenuItem", () => {
  test("renders menu item details", () => {
    render(
      <MenuItem items={testItems} itemType="food" cantFind="/not-found" />,
      {
        wrapper: MemoryRouter,
      }
    );

    expect(screen.getByText(/Item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Item 1 description/i)).toBeInTheDocument();
    expect(screen.getByText(/Item 1 recipe/i)).toBeInTheDocument();
    expect(screen.getByText(/Item 1 serve/i)).toBeInTheDocument();
  });

  test("redirects to cantFind url if item not found", () => {
    const cantFind = "/not-found";

    render(<MenuItem items={testItems} itemType="food" cantFind={cantFind} />, {
      wrapper: MemoryRouter,
      route: "/3",
    });

    expect(screen.queryByText(/Item 1/i)).not.toBeInTheDocument();
    expect(window.location.pathname).toBe(cantFind);
  });
});

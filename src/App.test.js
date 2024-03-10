import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders loading state initially", () => {
    render(<App />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("renders navbar", async () => {
    render(<App />);
    expect(await screen.findByRole("navigation")).toBeInTheDocument();
  });

  test("renders home page after data fetch", async () => {
    render(<App />);
    expect(
      await screen.findByText(/welcome to snack or booze/i)
    ).toBeInTheDocument();
  });

  test("renders 404 page for invalid route", async () => {
    render(<App />);
    expect(await screen.findByText(/can't seem to find/i)).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import "../FilmCard/node_modules/@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
  it("render component", () => {
    render(<Button />);
    const element = screen.getByTestId("button");
    expect(element).toBeInTheDocument();
  });
  it("take a props", () => {
    render(<Button text="Go!" />);
    const element = screen.getByTestId("button");
    expect(element.innerHTML).toBe("Go!");
  });
});

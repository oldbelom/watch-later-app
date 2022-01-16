import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";

describe("About", () => {
  it("render component", () => {
    render(<About />);
    const element = screen.getByTestId("about");
    expect(element).toBeInTheDocument();
  });
});

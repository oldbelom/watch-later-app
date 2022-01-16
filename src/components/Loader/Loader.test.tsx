import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "./Loader";

describe("Loader", () => {
  it("render component", () => {
    render(<Loader />);
    const element = screen.getByTestId("loader");
    expect(element).toBeInTheDocument();
  });
});

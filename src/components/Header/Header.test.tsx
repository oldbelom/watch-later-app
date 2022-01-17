import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import Header from "./Header";

describe("Header", () => {
  it("render component", async () => {
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    const element = screen.getByTestId("header");
    await waitFor(() => expect(element).toBeInTheDocument());
  });
});

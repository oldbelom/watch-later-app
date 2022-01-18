import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import * as auth from "react-firebase-hooks/auth";
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
  it("render sign out btn if user is logged in", async () => {
    jest.spyOn(auth, "useAuthState");
    auth.useAuthState.mockReturnValue([{ uid: "test" }]);
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    const btn = screen.getByText("Выйти");
    await waitFor(() => expect(btn).toBeInTheDocument());
  });
});

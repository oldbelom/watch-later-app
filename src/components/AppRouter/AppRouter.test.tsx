import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import * as auth from "react-firebase-hooks/auth";
import AppRouter from "./AppRouter";

describe("AppRouter", () => {
  it("render login page if no user", async () => {
    const useAuthSpy = jest.spyOn(auth, "useAuthState");
    useAuthSpy.mockReturnValue([null, true, true]);

    render(
      <HashRouter>
        <AppRouter />
      </HashRouter>
    );
    const loginInput = screen.getByTestId("login-email");
    await waitFor(() => expect(loginInput).toBeInTheDocument());
  });
  it("render main page if the user is registered", async () => {
    const useAuthSpy = jest.spyOn(auth, "useAuthState");
    useAuthSpy.mockReturnValue([{ uid: "test" }, true, true]);

    render(
      <HashRouter>
        <AppRouter />
      </HashRouter>
    );
    const searchPage = screen.getByTestId("search-page");
    await waitFor(() => expect(searchPage).toBeInTheDocument());
  });
});

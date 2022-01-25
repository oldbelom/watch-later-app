import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HashRouter } from "react-router-dom";
import * as auth from "react-firebase-hooks/auth";
import Header from "./Header";

describe("Header", () => {
  beforeEach(() => {
    const useAuthSpy = jest.spyOn(auth, "useAuthState");
    useAuthSpy.mockReturnValue([{ uid: "test" }, true, true]);
  });

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
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    const btn = screen.getByText("Выйти");
    await waitFor(() => expect(btn).toBeInTheDocument());
  });
  it("add active class to burger button", async () => {
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    const btn = screen.getByTestId("header-burger");
    userEvent.click(btn);
    await waitFor(() => expect(btn.classList.contains("active")).toBe(true));
  });
  it("remove active class by click", async () => {
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    const burgerBtn = screen.getByTestId("header-burger");
    const signOutBtn = screen.getByTestId("button");
    userEvent.click(burgerBtn);
    userEvent.click(signOutBtn);
    await waitFor(() =>
      expect(burgerBtn.classList.contains("active")).toBe(false)
    );
  });
});

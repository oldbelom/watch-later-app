import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import firebase from "firebase";
import Signin from "./Signin";

firebase.initializeApp({
  apiKey: "AIzaSyBwEj-Ns-TK_UyaZgxJJGx1ZdcEHchyG5s",
  authDomain: "watch-later-app-bc3fa.firebaseapp.com",
  projectId: "watch-later-app-bc3fa",
  storageBucket: "watch-later-app-bc3fa.appspot.com",
  messagingSenderId: "368375111064",
  appId: "1:368375111064:web:e4d22f8394e472f67e9fed",
});

describe("Signin", () => {
  it("render component", () => {
    render(<Signin />);
    const element = screen.getByTestId("signin");
    expect(element).toBeInTheDocument();
  });
  it("email input is controlled component", () => {
    render(<Signin />);
    userEvent.type(screen.getByTestId("signin-email"), "test");
    expect(screen.getByTestId("signin-email")).toHaveValue("test");
  });
  it("password input is controlled component", () => {
    render(<Signin />);
    userEvent.type(screen.getByTestId("signin-password"), "12345");
    expect(screen.getByTestId("signin-password")).toHaveValue("12345");
  });
  it("show error text input value invalid", async () => {
    render(<Signin />);
    userEvent.type(screen.getByTestId("signin-email"), "test");
    const form = screen.getByTestId("signin");
    await waitFor(() => fireEvent.submit(form));
    expect(screen.getByTestId("signin-error")).toBeInTheDocument();
  });
  it("show invalid-email error", async () => {
    render(<Signin />);
    userEvent.type(screen.getByTestId("signin-email"), "test");
    userEvent.type(screen.getByTestId("signin-password"), "1234");
    const form = screen.getByTestId("signin");
    await waitFor(() => fireEvent.submit(form));
    expect(screen.getByText(/Неверный фомат/)).toBeInTheDocument();
  });
  it("show weak-password error", async () => {
    render(<Signin />);
    userEvent.type(screen.getByTestId("signin-email"), "test@mail.ru");
    const form = screen.getByTestId("signin");
    await waitFor(() => fireEvent.submit(form));
    expect(screen.getByText(/Пароль/i)).toBeInTheDocument();
  });
});

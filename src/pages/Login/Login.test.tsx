import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import firebase from "firebase";
import Login from "./Login";

firebase.initializeApp({
  apiKey: "AIzaSyBwEj-Ns-TK_UyaZgxJJGx1ZdcEHchyG5s",
  authDomain: "watch-later-app-bc3fa.firebaseapp.com",
  projectId: "watch-later-app-bc3fa",
  storageBucket: "watch-later-app-bc3fa.appspot.com",
  messagingSenderId: "368375111064",
  appId: "1:368375111064:web:e4d22f8394e472f67e9fed",
});

describe("Login", () => {
  it("render component", () => {
    render(<Login />);
    const element = screen.getByTestId("login");
    expect(element).toBeInTheDocument();
  });
  it("email input is controlled component", () => {
    render(<Login />);
    userEvent.type(screen.getByTestId("login-email"), "test");
    expect(screen.getByTestId("login-email")).toHaveValue("test");
  });
  it("password input is controlled component", () => {
    render(<Login />);
    userEvent.type(screen.getByTestId("login-password"), "12345");
    expect(screen.getByTestId("login-password")).toHaveValue("12345");
  });
  it("show error text input value invalid", async () => {
    render(<Login />);
    userEvent.type(screen.getByTestId("login-email"), "test");
    const form = screen.getByTestId("login");
    await waitFor(() => fireEvent.submit(form));
    expect(screen.getByTestId("login-error")).toBeInTheDocument();
  });
  it("show invalid-email error", async () => {
    render(<Login />);
    userEvent.type(screen.getByTestId("login-email"), "test");
    userEvent.type(screen.getByTestId("login-password"), "1234");
    const form = screen.getByTestId("login");
    await waitFor(() => fireEvent.submit(form));
    expect(screen.getByText(/Неверный фомат/)).toBeInTheDocument();
  });
  it("show weak-password error", async () => {
    render(<Login />);
    userEvent.type(screen.getByTestId("login-email"), "test@mail.ru");
    const form = screen.getByTestId("login");
    await waitFor(() => fireEvent.submit(form));
    expect(screen.getByText(/Пароль/i)).toBeInTheDocument();
  });
});

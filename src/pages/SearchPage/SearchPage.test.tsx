import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "../FilmCard/node_modules/@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import SearchPage from "./SearchPage";

describe("SearchPage", () => {
  it("render component", () => {
    render(<SearchPage />);
    const element = screen.getByTestId("search-page");
    expect(element).toBeInTheDocument();
  });
  it("call handleChange function when user type smth in input", () => {
    render(<SearchPage />);
    const input = screen.getByTestId("input") as HTMLInputElement;
    userEvent.type(input, "Joker");
    expect(input.value).toBe("Joker");
  });
  it("make a fetch request when form submit", () => {
    // @ts-ignore:next-line
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            films: [{ nameRu: "Шырли-мырли", genres: [{ genre: "комедия" }] }],
          }),
      })
    );

    render(<SearchPage />);
    const form = screen.getByTestId("form") as HTMLInputElement;
    fireEvent.submit(form);

    expect(fetch).toBeCalled();
  });
});

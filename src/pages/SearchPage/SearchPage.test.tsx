import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import SearchPage from "./SearchPage";

describe("SearchPage", () => {
  it("render component", async () => {
    render(<SearchPage match={{ params: "test" }} />);
    const element = screen.getByTestId("search-page");
    await waitFor(() => expect(element).toBeInTheDocument());
  });
  it("call handleChange function when user type smth in input", async () => {
    render(<SearchPage match={{ params: "test" }} />);
    const input = screen.getByTestId("input") as HTMLInputElement;
    userEvent.type(input, "Joker");
    await waitFor(() => expect(input.value).toBe("Joker"));
  });
  it("make a fetch request when form submit", async () => {
    // @ts-ignore:next-line
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            films: [{ nameRu: "Шырли-мырли", genres: [{ genre: "комедия" }] }],
          }),
      })
    );

    render(<SearchPage match={{ params: "test" }} />);
    const form = screen.getByTestId("form") as HTMLInputElement;
    fireEvent.submit(form);

    await waitFor(() => expect(fetch).toBeCalled());
  });
  it("take props from router parameter", async () => {
    render(<SearchPage match={{ params: { filmname: "Брат" } }} />);
    const input = screen.getByTestId("input") as HTMLInputElement;
    await waitFor(() => expect(input.value).toBe("Брат"));
  });
});

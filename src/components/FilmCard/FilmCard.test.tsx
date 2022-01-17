import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import FilmCard from "./FilmCard";

describe("Button", () => {
  it("render component", async () => {
    const film = {
      nameRu: "The Lost",
      year: "2007",
      posterUrlPreview: "",
      filmId: 123,
      genres: [{ genre: "приключения" }],
    };

    render(<FilmCard film={film} />);
    const element = screen.getByTestId("film-card");
    await waitFor(() => expect(element).toBeInTheDocument());
  });
  it("render stub film name if no data", async () => {
    const film = {
      nameRu: "",
      year: "2007",
      posterUrlPreview: "",
      filmId: 123,
      genres: [{ genre: "приключения" }],
    };

    render(<FilmCard film={film} />);
    const element = screen.getByTestId("film-name");
    await waitFor(() => expect(element.innerHTML).toBe("Название отсутствует"));
  });
  it('render delete button if there is a property "deleteButton"', async () => {
    const film = {
      nameRu: "Брат",
      year: "2007",
      posterUrlPreview: "",
      filmId: 123,
      genres: [{ genre: "приключения" }],
    };

    render(<FilmCard film={film} deleteButton />);
    const deleteButton = screen.getByText(/удалить/);
    await waitFor(() => expect(deleteButton).toBeInTheDocument());
  });
});

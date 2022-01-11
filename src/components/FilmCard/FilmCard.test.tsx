import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilmCard from "./FilmCard";

describe("Button", () => {
  it("render component", () => {
    render(
      <FilmCard
        nameRu="The Lost"
        year="2007"
        posterUrlPreview=""
        genres={[{ genre: "приключения" }]}
      />
    );
    const element = screen.getByTestId("film-card");
    expect(element).toBeInTheDocument();
  });
  it("render stub film name if no data", () => {
    render(
      <FilmCard
        nameRu=""
        year="2007"
        posterUrlPreview=""
        genres={[{ genre: "приключения" }]}
      />
    );
    const element = screen.getByTestId("film-name");
    expect(element.innerHTML).toBe("Название отсутствует");
  });
});

import React, { ChangeEvent, FormEvent } from "react";
import Button from "../Button/Button";
import FilmCard from "../FilmsList/FilmCard";
import Loader from "../Loader/Loader";

import "./SearchBlock.scss";

const API_KEY = "ede3ffdb-566b-4049-895b-0d1c2bfd60fb";
const API_SEARCH_URL =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

interface ISearchResult {
  nameRu: string;
  posterUrlPreview: string;
  year: string;
  genres: [];
}

interface State {
  value: string;
  searchResult: ISearchResult[];
  isLoading: boolean;
}

export default class SearchBlock extends React.Component<
  Record<string, unknown>,
  State
> {
  state = {
    value: "",
    searchResult: [],
    isLoading: false,
  };

  handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    this.setState((state) => ({ isLoading: !state.isLoading, value: "" }));

    const fetchUrl = API_SEARCH_URL + this.state.value;
    const response = await fetch(fetchUrl, {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    this.setState((state) => ({
      isLoading: !state.isLoading,
      searchResult: data.films,
    }));
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="search-block" data-testid="search-block">
        <form onSubmit={this.handleSubmit} data-testid="form">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            data-testid="input"
          />
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <Button type="submit" text="Найти фильм" />
          )}
        </form>
        {!this.state.isLoading && (
          <div className="search-block__result">
            {this.state.searchResult &&
              this.state.searchResult.map(
                (film: ISearchResult, index: number) => (
                  <FilmCard
                    key={`${index}_${film.year}`}
                    nameRu={film.nameRu}
                    year={film.year}
                    posterUrlPreview={film.posterUrlPreview}
                    genres={film.genres}
                  />
                )
              )}
          </div>
        )}
      </div>
    );
  }
}

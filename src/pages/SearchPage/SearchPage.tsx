import React, { ChangeEvent, FormEvent } from "react";
import Button from "../../components/Button/Button";
import FilmCard from "../../components/FilmCard/FilmCard";
import Loader from "../../components/Loader/Loader";

import "./SearchPage.scss";

const API_KEY = "ede3ffdb-566b-4049-895b-0d1c2bfd60fb";
const API_SEARCH_URL =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

export default class SearchPage extends React.Component<
  SearchPageProps,
  SearchPageState
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

  componentDidMount() {
    const { filmname } = this.props.match.params;
    if (filmname) {
      this.setState({ value: filmname });
    }
  }

  render() {
    return (
      <div className="search-page page-indent" data-testid="search-page">
        <form
          className="search-page__form"
          onSubmit={this.handleSubmit}
          data-testid="form"
        >
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            data-testid="input"
            placeholder="Введите название фильма"
          />
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <Button type="submit" text="Найти фильм" />
          )}
        </form>
        {!this.state.isLoading && (
          <div className="search-page__result">
            {this.state.searchResult.map((film: Film) => (
              <FilmCard key={film.filmId} film={film} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

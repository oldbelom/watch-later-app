import React from "react";
import Button from "../Button/Button";
import "./FilmCard.scss";

interface Genre {
  genre: string;
}

interface Props {
  nameRu: string;
  posterUrlPreview: string;
  year: string;
  genres: Genre[];
}

const FilmCard: React.FC<Props> = (props) => (
  <div className="film-card" data-testid="film-card">
    <div className="film-card__img">
      <img src={props.posterUrlPreview} alt={props.nameRu} />
    </div>
    <p data-testid="film-name">
      {props.nameRu ? props.nameRu : "Название отсутствует"}
    </p>
    <p>{props.year}</p>
    <p>{props.genres.map((genre: Genre) => genre.genre).join(" ")}</p>
    <Button text="добавить" />
  </div>
);

export default FilmCard;

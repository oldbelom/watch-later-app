import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "../Button/Button";
import { Context } from "../../index";
import "./FilmCard.scss";

interface Genre {
  genre: string;
}

interface ISearchResult {
  nameRu: string;
  posterUrlPreview: string;
  year: string;
  genres: [];
  filmId: number;
}

interface Props {
  nameRu: string;
  posterUrlPreview: string;
  year: string;
  genres: Genre[];
  film: ISearchResult;
}

const FilmCard: React.FC<Props> = (props) => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);

  const addFilmToBase = async () => {
    await firestore
      .collection(user.uid)
      .doc(String(props.film.filmId))
      .set(props.film);
  };

  return (
    <div className="film-card" data-testid="film-card">
      <div className="film-card__img">
        <img src={props.posterUrlPreview} alt={props.nameRu} />
      </div>
      <p data-testid="film-name">
        {props.nameRu ? props.nameRu : "Название отсутствует"}
      </p>
      <p>{props.year}</p>
      <p>{props.genres.map((genre: Genre) => genre.genre).join(" ")}</p>
      <Button onClick={addFilmToBase} text="добавить" />
    </div>
  );
};

export default FilmCard;
